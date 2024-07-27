import { Progress } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

export const PickerProgress = () => {
  const { currentStep } = useContext(PickerContext);

  const progress = (currentStep / 5) * 100;
  return <Progress value={progress} colorScheme="purple" />;
};
