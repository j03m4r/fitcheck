import { defineConfig } from "wxt";
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// See https://wxt.dev/api/config.html
export default defineConfig({
    modules: ["@wxt-dev/module-react"],
    srcDir: "src",
    manifest: ({ browser }) => ({
        name: "FitCheck",
        description: "See how clothes would fit on you!",
        permissions: browser === "chrome" ? ["scripting", "storage"] : ["scripting", "storage", "data_collection_permissions"],
        host_permissions: ["https://www.freepeople.com/*", "https://evereve.com/*"]
    }),
    vite: () => ({
        plugins: [
            tailwindcss()
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./")
            }
        }
    }),
});
