import React from "react";
import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    otherColor?: PaletteColor;
  }

  interface PaletteColor {
    main?: string;
  }

  interface PaletteOptions {
    otherColor?: PaletteColorOptions;
  }

  interface;

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
