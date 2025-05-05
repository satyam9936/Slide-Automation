import { client } from "@/lib/prisma";

//Finds a keyword in the DB
export const matchKeyword = async (keyword: string) => {
  return await client.keyword.findFirst({
    where: {
      word: {
        equals: keyword,
        mode: "insensitive",
      },
    },
  });
};

//For a specific automation, get all the details, triggers and listeners
export const getKeywordAutomation = async (
  automationId: string,
  dm: boolean
) => {
  return await client.automation.findUnique({
    where: {
      id: automationId,
    },
    include: {
      dms: dm,
      trigger: {
        where: {
          type: dm ? "DM" : "COMMENT",
        },
      },
      listener: true,
      User: {
        select: {
          subscription: {
            select: {
              plan: true,
            },
          },
          integrations: {
            select: {
              token: true,
            },
          },
        },
      },
    },
  });
};

//Finds a post associated with an automation
export const getKeywordPost = async (postId: string, automationId: string) => {
  return await client.post.findFirst({
    where: {
      AND: [{ postid: postId }, { automationId }],
    },
    select: {
      automationId: true,
    },
  });
};

//Keeps count of the number of comments and DMs sent by automations
export const trackResponses = async (
  automationId: string,
  type: "COMMENT" | "DM"
) => {
  if (type === "COMMENT") {
    return await client.listener.update({
      where: {
        automationId,
      },
      data: {
        commentCount: {
          increment: 1,
        },
      },
    });
  }
  if (type === "DM") {
    return await client.listener.update({
      where: {
        automationId,
      },
      data: {
        dmCount: {
          increment: 1,
        },
      },
    });
  }
};

//Saves a message to the chat history
export const createChatHistory = (
  automationId: string,
  sender: string,
  reciever: string,
  message: string
) => {
  return client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      dms: {
        create: {
          reciever,
          senderId: sender,
          message,
        },
      },
    },
  });
};

//Retrieves the chat history between 2 users.
export const getChatHistory = async (sender: string, reciever: string) => {
  const history = await client.dms.findMany({
    where: {
      AND: [{ senderId: sender }, { reciever }],
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const chatSession: {
    role: "assistant" | "user";
    content: string;
  }[] = history.map((chat) => {
    return {
      role: chat.reciever ? "assistant" : "user",
      content: chat.message!,
    };
  });

  return {
    history: chatSession,
    automationId: history[history.length - 1].automationId,
  };
};
