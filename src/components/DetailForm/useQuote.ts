import { useState } from "react";
import axios from "axios";
import { filterEmptyParams } from "@/utils/filterEmptyParams";
import { useAuth } from "@/contexts/AuthContext";

export type FurnaceLocation = "side_by_side" | "different" | "";
export type DryerVentExitPoint =
  | "ROOFTOP"
  | "TENPLUSFEET"
  | "ZEROTOTENFEET"
  | "";

export interface QuoteParams {
  square_footage?: number;
  num_furnace?: string;
  furnace_location?: FurnaceLocation;
  dryer_vent_exit_point?: string;
}

export interface QuoteResponse {
  status: number;
  data: string;
}

export const useQuote = () => {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [error, setError] = useState<string>("");

  const getQuote = async (params: QuoteParams) => {
    setIsLoading(true);
    setError("");
    setQuote(null);

    try {
      const filteredParams = filterEmptyParams(params);
      const URL = `${import.meta.env.VITE_BASE_API_URL}/get-quote`;
      console.log({ URL });
      const response = await axios.post<QuoteResponse>(URL, filteredParams, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setQuote(response.data);
      return response.data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { getQuote, isLoading, quote, error };
};
