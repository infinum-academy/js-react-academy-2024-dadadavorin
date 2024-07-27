"use client";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { PickerButtons } from "./components/PickerButtons";
import { PickerProgress } from "./components/PickerProgress";
import { PickerStepper } from "./components/PickerStepper";

export const Picker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Show Picker</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Show Picker</ModalHeader>
          <ModalBody>
            <PickerStepper />
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%" gap={3}>
              <PickerProgress />
              <PickerButtons />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
