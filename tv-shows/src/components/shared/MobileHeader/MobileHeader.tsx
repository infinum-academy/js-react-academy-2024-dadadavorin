"use client";
import {
  Image,
  Hide,
  Flex,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SidebarNavigation } from "../Sidebar/SidebarNavigation";

export const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Hide above="md">
      <Flex
        justifyContent="space-between"
        bg="purple.dark"
        paddingTop="9"
        paddingInline="5"
      >
        <Image src="/images/logo.svg" alt="Mobile header" />
        <HamburgerIcon
          boxSize="6"
          color="white"
          cursor="pointer"
          onClick={onOpen}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent bg="purple.primary" mt="6" borderTopLeftRadius="default">
          <DrawerHeader>
            <Flex justifyContent="flex-end">
              <CloseIcon
                boxSize="6"
                cursor="pointer"
                color="white"
                border="2px solid white"
                borderRadius="50%"
                padding="1"
                onClick={onClose}
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <SidebarNavigation />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Hide>
  );
};
