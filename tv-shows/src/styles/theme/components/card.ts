import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: "white",
    borderRadius: "default",
    overflow: "hidden",
  },
  header: {
    paddingBottom: "2px",
  },
  body: {
    padding: "18px",
    color: "purple.primary",
  },
  footer: {
    paddingTop: "2px",
  },
});

// define custom styles for funky variant
const variants = {
  review: definePartsStyle({
    container: {
      bg: "purple.primary",
    },
    body: {
      color: "white",
      padding: "32px 30px",
    },
  }),
};

const sizes = {
  xl: definePartsStyle({
    body: {
      padding: "40px",
    },
  }),
};

// export variants in the component theme
export const Card = defineMultiStyleConfig({ variants, baseStyle, sizes });
