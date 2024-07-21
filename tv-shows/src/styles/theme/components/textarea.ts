import { defineStyleConfig } from "@chakra-ui/react";

const Textarea = defineStyleConfig({
  baseStyle: {
    borderRadius: "default",
    paddingInline: "10",
    paddingBlock: "7",
  },
  variants: {
    white: {
      bg: "white",
      color: "purple.light",
      _placeholder: {
        color: "purple.light",
      },
    },
  },
});

export default Textarea;
