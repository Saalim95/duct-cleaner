import { useState } from "react";
import type { FurnaceLocation, DryerVentExitPoint } from "./useQuote";

export const useDetailForm = () => {
  const [numFurnace, setNumFurnace] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [furnaceLocation, setFurnaceLocation] = useState<FurnaceLocation>("");
  const [dryerVentCleaning, setDryerVentCleaning] = useState<string>("");
  const [dryerVentExitPoint, setDryerVentExitPoint] = useState<DryerVentExitPoint>("");
  const [validationError, setValidationError] = useState<string>("");
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const handleAreaChange = (value: string) => {
    if (value === "" || /^\d+$/.test(value)) {
      setArea(value);
      setValidationError("");
    }
  };

  const handleNumFurnaceChange = (value: string) => {
    if (value === "3+") {
      setShowContactModal(true);
    }
    setNumFurnace(value);
  };

  const handleDryerVentCleaningChange = (value: string) => {
    if (value === "no") {
      setDryerVentExitPoint("");
    }
    setDryerVentCleaning(value);
  };

  const handleFurnaceLocationChange = (value: string) => {
    setFurnaceLocation(value as FurnaceLocation);
  };

  const handleDryerVentExitPointChange = (value: string) => {
    setDryerVentExitPoint(value as DryerVentExitPoint);
  };

  const validateForm = (): boolean => {
    if (!numFurnace) {
      setValidationError("Please select number of furnaces");
      return false;
    }
    setValidationError("");
    return true;
  };

  const getQuoteParams = () => ({
    square_footage: area ? Number(area) : undefined,
    num_furnace: numFurnace,
    furnace_location: furnaceLocation,
    dryer_vent_exit_point: dryerVentExitPoint,
  });

  return {
    formState: {
      numFurnace,
      area,
      location,
      furnaceLocation,
      dryerVentCleaning,
      dryerVentExitPoint,
      validationError,
      showContactModal,
    },
    handlers: {
      setNumFurnace: handleNumFurnaceChange,
      setArea: handleAreaChange,
      setLocation,
      setFurnaceLocation: handleFurnaceLocationChange,
      setDryerVentCleaning: handleDryerVentCleaningChange,
      setDryerVentExitPoint: handleDryerVentExitPointChange,
      setShowContactModal,
    },
    validateForm,
    getQuoteParams,
  };
};
