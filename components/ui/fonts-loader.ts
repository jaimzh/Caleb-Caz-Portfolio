import localFont from "next/font/local";

export const flyWheel = localFont({
  src: [{ path: "../../public/fonts/flywheel.regular.otf", weight: "400", style: "normal" }],
  variable: "--font-flywheel",
  display: "swap",
});

export const myUglyFont = localFont({
  src: [{ path: "../../public/fonts/my-ugly-handwritting.regular.otf", weight: "400", style: "normal" }],
  variable: "--font-ugly",
  display: "swap",
});
