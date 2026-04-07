import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
    base: "/F8-React-Day-36/",
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
