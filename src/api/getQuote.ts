import axios from "axios";

// Define the quote request parameters type
export interface QuoteParams {
  area: string;
  numFurnace: string;
  location: string;
  furnaceArrangement?: string;
  dryerVentCleaning: string;
  dryerVentExitPoint?: string;
}

// Define the quote response type
export interface QuoteResponse {
  status: number;
  data: number;
}

// API endpoint - replace with your actual endpoint
const API_BASE_URL =
  import.meta.env.VITE_BASE_API_URL || "http://localhost:8000/api";

/**
 * Fetches a quote from the API
 * @param params - Quote parameters
 * @returns Promise with quote data
 */
export const fetchQuote = async (
  params: QuoteParams
): Promise<QuoteResponse> => {
  console.log(37, "fetchQuote");
  const { data } = await axios.post<QuoteResponse>(
    `${API_BASE_URL}/get-quote`,
    params
  );
  return data;
};

/**
 * React Query hook to fetch quote data
 * @param params - Quote parameters
 * @param enabled - Whether the query should run automatically (default: false)
 */
// export const useGetQuote = (params: QuoteParams, enabled = false) => {
//   console.log(JSON.stringify(params, null, 1));
//   return useQuery({
//     queryKey: ["quote", params],
//     queryFn: () => fetchQuote(params),
//     enabled, // Only fetch when explicitly enabled
//     retry: 1,
//     //staleTime: 5 * 60 * 1000, // 5 minutes
//   });
// };
