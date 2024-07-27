import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

export const PickerButtons = () => {
  const { currentStep, setCurrentStep } = useContext(PickerContext);
  console.log("Rendering button");
  return (
    <Flex width="100%" justifyContent="space-between">
      <Button onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>
      <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
    </Flex>
  );
};
