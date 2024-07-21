import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "default",
  },
  sizes: {
    md: {
      px: "50px",
      py: "20px",
      maxWidth: "min-content",
      fontSize: "sm",
      textTransform: "uppercase",
      height: "auto",
      borderRadius: "lg",
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
      fontWeight: "normal",

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
