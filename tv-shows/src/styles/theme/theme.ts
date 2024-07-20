import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import { Card } from "./components/card";
import radii from "./foundations/radius";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const colors = {
  white: "#FFFFFF",
  purple: {
    light: "#8D5CE5",
    primary: "#371687",
    dark: "#1B004C",
  },
  error: "#FF2498",
};

const fonts = {
  body: "Roboto, sans-serif",
  heading: "Roboto, sans-serif",
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "36px",
  "4xl": "40px",
  "5xl": "48px",
  "6xl": "64px",
};

const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

const theme = extendTheme({
  components: {
    Button,
    Card,
  },
  colors,
  fonts,
  radii,
  fontSizes,
  fontWeights,
});

export default theme;
