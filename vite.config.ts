import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    filename: "index.html",
                    template: "index.html",
                    injectOptions: {
                        data: {
                            title: "index",
                        },
                    },
                },
                {
                    filename: "test.html",
                    template: "test.html",
                    injectOptions: {
                        data: {
                            title: "iaaandex",
                        },
                    },
                },
            ],
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                //whitelist: "./whitelist.html",
                //cleni: "./cleni/index.html",
            },
        },
    },
    publicDir: "public",
    server: {
        fs: {
            allow: [".."],
        },
    },
});
