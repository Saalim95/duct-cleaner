import { Card } from "@/components/_common/Card";
import { rules } from "@/constants/rules";
import { useDetailForm } from "./useDetailForm";
import { useQuote } from "./useQuote";
import { FormField, SelectField, InputField } from "./FormField";
import { QuoteResult } from "./QuoteResult";
import { ContactModal } from "./ContactModal";

export const DetailForm = () => {
  const { formState, handlers, validateForm, getQuoteParams } = useDetailForm();
  const { getQuote, isLoading, quote, error } = useQuote();

  const handleGetQuote = async () => {
    if (!validateForm()) return;

    try {
      await getQuote(getQuoteParams());
    } catch (err) {
      // Error is already handled in the useQuote hook
    }
  };

  const handleRequestAppointment = () => {
    if (!validateForm()) return;
    handlers.setShowContactModal(true);
  };

  const isThreePlusFurnaces = formState.numFurnace === "3+";

  return (
    <div className="p-6">
      <ContactModal
        isOpen={formState.showContactModal}
        onClose={() => handlers.setShowContactModal(false)}
      />

      <Card>
        <div className="space-y-6 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Enter Your Details
          </h3>

          {/* Validation Error */}
          {formState.validationError && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">
              {formState.validationError}
            </div>
          )}

          {/* Area Input */}
          <FormField label="Area (sq ft)">
            <InputField
              value={formState.area}
              onChange={handlers.setArea}
              placeholder="Enter area in square feet"
            />
          </FormField>

          {/* Number of Furnaces */}
          <FormField label="Number of Furnaces">
            <SelectField
              value={formState.numFurnace}
              onChange={handlers.setNumFurnace}
              options={rules.numFurnaces}
            />
          </FormField>

          {/* Furnace Arrangement - Only shown when 2 furnaces are selected */}
          {formState.numFurnace === "2" && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <FormField label="Are your furnaces...?">
                <SelectField
                  value={formState.furnaceLocation}
                  onChange={handlers.setFurnaceLocation}
                  options={rules.furnaceLocations}
                />
              </FormField>
            </div>
          )}

          {/* Furnace Location */}
          <FormField label="Furnace Location">
            <SelectField
              value={formState.location}
              onChange={handlers.setLocation}
              options={rules.locations}
            />
          </FormField>

          {/* Dryer Vent Cleaning */}
          <FormField label="Add Dryer Vent Cleaning?">
            <SelectField
              value={formState.dryerVentCleaning}
              onChange={handlers.setDryerVentCleaning}
              options={rules.dryerVentOptions}
            />
          </FormField>

          {/* Dryer Vent Exit Point - Only shown when "yes" is selected */}
          {formState.dryerVentCleaning === "yes" && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <FormField label="Exit point of your Dryer Vent?">
                <SelectField
                  value={formState.dryerVentExitPoint}
                  onChange={handlers.setDryerVentExitPoint}
                  options={rules.exitPoints}
                />
              </FormField>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={
              isThreePlusFurnaces ? handleRequestAppointment : handleGetQuote
            }
            disabled={isLoading && !isThreePlusFurnaces}
            className={`w-full ${
              isThreePlusFurnaces
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            {isThreePlusFurnaces
              ? "Request Appointment"
              : isLoading
              ? "Loading..."
              : "Get Quote"}
          </button>

          {/* Display Quote Result */}
          <QuoteResult quote={quote} error={error} />
        </div>
      </Card>
    </div>
  );
};
