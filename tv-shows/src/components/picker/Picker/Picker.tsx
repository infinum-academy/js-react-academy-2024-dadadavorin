"use client";
import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { PickerButtons } from "./components/PickerButtons";
import { PickerProgress } from "./components/PickerProgress";
import { PickerStepper } from "./components/PickerStepper";

export const Picker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={useBreakpointValue({
          base: "purple",
          md: "purpleDark",
        })}
        variant="solid"
        size="sm"
      >
        Show Picker
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="purple.300" color="white">
            <Heading fontSize="2xl" textAlign="center">
              TV Show Picker
            </Heading>
          </ModalHeader>
          <ModalBody paddingBlock="10">
            <PickerStepper />
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%" gap={3}>
              <PickerProgress />
              <PickerButtons onClose={onClose} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
