"use server";

import { client } from "@/lib/prisma";

// Update existing integration
export const updateIntegration = async (
  token: string,
  expire: Date,
  id: string
) => {
  return await client.integration.update({
    where: { id },
    data: {
      token,
      expireAt: expire,
    },
  });
};

// Get a user's Instagram integration
export const getIntegration = async (clerkId: string) => {
  return await client.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      integrations: {
        where: {
          name: "INSTAGRAM",
        },
      },
    },
  });
};

// Create a new integration
export const createIntegration = async (
  clerkId: string,
  token: string,
  expire: Date,
  igId?: string
) => {
  return await client.user.update({
    where: {
      clerkId,
    },
    data: {
      integrations: {
        create: {
          token,
          expireAt: expire,
          instagramId: igId,
        },
      },
    },
    select: {
      firstname: true,
      lastname: true,
    },
  });
};
