import localFont from "next/font/local";

export const amiko = localFont( {
    src: [
        { path: "./fonts/Amiko-Regular.ttf", weight: "400" },
        { path: "./fonts/Amiko-SemiBold.ttf", weight: "600" },
        { path: "./fonts/Amiko-Bold.ttf", weight: "700" },
    ],

    variable: "--font-amiko",
});