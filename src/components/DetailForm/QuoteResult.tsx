import type { QuoteResponse } from "./useQuote";

interface QuoteResultProps {
  quote: QuoteResponse | null;
  error: string;
}

export const QuoteResult = ({ quote, error }: QuoteResultProps) => {
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <p className="font-medium">Error fetching quote</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    );
  }

  if (quote) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Your Quote</h4>
        <p className="text-2xl font-bold text-green-600">${quote.data}</p>
      </div>
    );
  }

  return null;
};
