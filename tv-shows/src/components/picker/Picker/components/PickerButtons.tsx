import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

interface IPickerButtonsProps {
  onClose: () => void;
}

export const PickerButtons = ({ onClose }: IPickerButtonsProps) => {
  const { currentStep, setCurrentStep } = useContext(PickerContext);
  return (
    <Flex
      width="100%"
      justifyContent={
        currentStep < 1 || currentStep > 4 ? "center" : "space-between"
      }
    >
      {currentStep > 0 && currentStep < 5 && (
        <Button onClick={() => setCurrentStep(currentStep - 1)}>
          Previous
        </Button>
      )}

      {currentStep < 5 && (
        <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
      )}

      {currentStep === 5 && <Button onClick={onClose}>Close</Button>}
    </Flex>
  );
};
