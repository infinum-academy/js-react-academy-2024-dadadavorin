import { useContext } from "react";
import { PickerStep } from "./PickerStep";
import { PickerResults } from "./PickerResults";
import { PickerContext } from "./PickerContextProvider";
import { PickerStart } from "./PickerStart";

export const PickerStepper = () => {
  const { currentStep } = useContext(PickerContext);

  if (currentStep === 0) {
    return <PickerStart />;
  } else if (currentStep > 0 && currentStep < 5) {
    return <PickerStep />;
  } else {
    return <PickerResults />;
  }
};
