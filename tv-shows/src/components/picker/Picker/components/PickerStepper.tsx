import { useContext } from "react";
import { PickerStep } from "./PickerStep";
import { PickerResults } from "./PickerResults";
import { PickerContext } from "./PickerContextProvider";

export const PickerStepper = () => {
  const { currentStep, showLists } = useContext(PickerContext);

  if (!showLists) {
    return null;
  }

  if (currentStep < 5) {
    return <PickerStep />;
  } else {
    return <PickerResults />;
  }
};
