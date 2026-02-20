import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

/* =========================================
   FETCH USER SHORT URLS
========================================= */

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls", token],
    queryFn: async () => {
      const { data } = await api.get("/api/urls/myurls", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return data;
    },
    select: (data) =>
      data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      ),
    staleTime: 0,
    refetchOnWindowFocus: true,
    enabled: !!token,
    onError,
  });
};

/* =========================================
   FETCH TOTAL CLICKS (DASHBOARD)
========================================= */

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", token],
    queryFn: async () => {
      const now = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 30);

      const startDate = start.toISOString().split("T")[0];
      const endDate = now.toISOString().split("T")[0];

      const { data } = await api.get(
        `/api/urls/totalClicks?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return data;
    },
    select: (data) =>
      Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      })),
    staleTime: 0,
    refetchOnWindowFocus: true,
    enabled: !!token,
    onError,
  });
};

/* =========================================
   FETCH INDIVIDUAL URL ANALYTICS
========================================= */

export const useFetchUrlAnalytics = (
  token,
  shortUrl,
  enabled,
  onError
) => {
  return useQuery({
    queryKey: ["url-analytics", shortUrl, token],
    queryFn: async () => {
      const now = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 30);

      const startDate = start.toISOString();
      const endDate = now.toISOString();

      const { data } = await api.get(
        `/api/urls/analytics/${shortUrl}?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return data;
    },
    staleTime: 0,
    refetchOnWindowFocus: true,
    enabled: !!token && enabled,
    onError,
  });
};