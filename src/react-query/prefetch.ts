import { getAllAutomations, getAutomationInfo } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
};

export const prefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, onUserInfo, "user-profile");
};

export const prefetchUserAutomations = async (client: QueryClient) => {
  return await prefetch(client, getAllAutomations, "user-automations");
};

export const prefetchUserAutomation = async (
  client: QueryClient,
  automationId: string
) => {
  return await prefetch(
    client,
    () => getAutomationInfo(automationId),
    "automation-info"
  );
};
