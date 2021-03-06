import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    filename: "./index.html",
                    template: "./index.html",
                    injectOptions: {
                        data: {
                            title: "TrospySMP - Trospyho Minecraft server",
                            description:
                                "TrospySMP je minecraftový survival SMP server kde hrá mnoho YouTuberov ako Trospy, Hestreng, Zovicek, Medvid3k a další. Nájdeš tu všetky informácie a ako sa dostať na Trospysmp.",
                            url: "https://trospysmp.cz/",
                            theme: "#4d4d4d",
                            card_image:
                                "https://trospysmp.cz/assets/pozadie.jpg",
                            footer: "Trospysmp 1973 - 2020",
                        },
                    },
                },
                {
                    filename: "./whitelist.html",
                    template: "./whitelist.html",
                    injectOptions: {
                        data: {
                            title: "TrospySMP - Whitelist",
                            description:
                                "TrospySMP je minecraftový survival SMP server kde hrá mnoho YouTuberov ako Trospy, Hestreng, Zovicek, Medvid3k a další. Nájdeš tu všetky informácie a ako sa dostať na Trospysmp.",
                            url: "https://trospysmp.cz/whitelist",
                            theme: "#4d4d4d",
                            card_image:
                                "https://trospysmp.cz/assets/pozadie.jpg",
                            footer: "Trospysmp 1973 - 2020",
                        },
                    },
                },
                {
                    filename: "./cleni.html",
                    template: "./cleni.html",
                    injectOptions: {
                        data: {
                            title: "TrospySMP - Zoznam členov",
                            description:
                                "TrospySMP je minecraftový survival SMP server kde hrá mnoho YouTuberov ako Trospy, Hestreng, Zovicek, Medvid3k a další. Nájdeš tu všetky informácie a ako sa dostať na Trospysmp.",
                            url: "https://trospysmp.cz/cleni",
                            theme: "#4d4d4d",
                            card_image:
                                "https://trospysmp.cz/assets/pozadie.jpg",
                            footer: "Trospysmp 1973 - 2020",
                        },
                    },
                },
                {
                    filename: "./404.html",
                    template: "./404.html",
                    injectOptions: {
                        data: {
                            title: "TrospySMP - 404",
                            description:
                                "TrospySMP je minecraftový survival SMP server kde hrá mnoho YouTuberov ako Trospy, Hestreng, Zovicek, Medvid3k a další. Nájdeš tu všetky informácie a ako sa dostať na Trospysmp.",
                            url: "https://trospysmp.cz/cleni",
                            theme: "#4d4d4d",
                            card_image:
                                "https://trospysmp.cz/assets/pozadie.jpg",
                            footer: "Trospysmp 1973 - 2020",
                        },
                    },
                },
                {
                    filename: "./trospy.html",
                    template: "./trospy.html",
                    injectOptions: {
                        data: {
                            title: "TrospySMP - Trospy",
                            description:
                                "Trospy je členom a zároveň menodržitelom TrospySMP do nedávna bol na serveri aj Primátor kým ho Kráľ Hestreng zosadil a ovládol tento terraria RPG server.",
                            url: "https://trospysmp.cz/cleni/trospy",
                            theme: "#4d4d4d",
                            card_image:
                                "https://trospysmp.cz/assets/pozadie.jpg",
                            footer: "Trospysmp 1973 - 2020",
                        },
                    },
                },
                {
                    filename: "./sitemap.html",
                    template: "./sitemap.html",
                    injectOptions: {
                        data: {
                            title: "TrospySMP - Mapa Webu",
                            description:
                                "Trospy je členom a zároveň menodržitelom TrospySMP do nedávna bol na serveri aj Primátor kým ho Kráľ Hestreng zosadil a ovládol tento terraria RPG server.",
                            url: "https://trospysmp.cz/cleni/trospy",
                            theme: "#4d4d4d",
                            card_image:
                                "https://trospysmp.cz/assets/pozadie.jpg",
                            footer: "Trospysmp 1973 - 2020",
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
                whitelist: "./whitelist.html",
                cleni: "./cleni.html",
                trospy: "./trospy.html",
                404: "./404.html",
                sitemap: "./sitemap.html",
            },
        },
    },
    publicDir: "public",
    base: "./",
    server: {
        host: true,
        fs: {
            allow: [".."],
        },
    },
});
