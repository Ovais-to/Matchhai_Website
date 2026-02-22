import { Montserrat, Raleway } from "next/font/google";

export const fontHeading = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-heading"
});

export const fontBody = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body"
});
