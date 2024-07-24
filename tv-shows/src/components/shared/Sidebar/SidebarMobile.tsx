"use client";
import {
  Image,
  Flex,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SidebarLinks } from "./SidebarLinks";

export const SidebarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        bg="purple.500"
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
        <DrawerContent bg="purple.300" mt="6" borderTopLeftRadius="default">
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

          <DrawerBody maxHeight="80vh">
            <SidebarLinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
