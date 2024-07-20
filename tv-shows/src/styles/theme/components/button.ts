import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
  },
  sizes: {
    md: {
      px: 8,
      py: 4,
      h: "auto",
    },
    sm: {
      py: "2",
      px: "5",
      maxWidth: "min-content",
      fontSize: "2xl",
      height: "auto",
    },
  },

  variants: {
    white: {
      bg: "white",
      color: "purple.primary",

      _hover: {
        bg: "purple.light",
        color: "white",
      },
    },

    purple: {
      bg: "purple.primary",
      color: "white",

      _hover: {
        bg: "purple.light",
        color: "white",
      },
    },
    purpleDark: {
      bg: "purple.dark",
      color: "white",
      fontWeight: "normal",

      _hover: {
        bg: "purple.primary",
        color: "white",
        fontWeight: "medium",
      },
    },

    link: {
      bg: "transparent",
      color: "white",
      fontWeight: "normal",

      _hover: {
        bg: "transparent",
        color: "white",
      },
    },
  },
});

export default Button;
