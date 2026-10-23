import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

function htmlTransformPlugin() {
  return {
    name: "html-transform",
    transformIndexHtml(html: string) {
      try {
        const configPath = path.resolve(__dirname, "./src/site.config.json");
        if (fs.existsSync(configPath)) {
          const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
          const pageTitle = config.meta?.title || config.businessName || "Site";
          html = html.replace(/<title>(.*?)<\/title>/, `<title>${pageTitle}</title>`);

          if (config.meta?.description) {
            html = html.replace(
              /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/,
              `<meta name="description" content="${config.meta.description}" />`
            );
          }
          if (config.businessName) {
            html = html.replace(
              /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/,
              `<meta property="og:title" content="${pageTitle}" />`
            );
          }
        }
      } catch (e) {
        console.error("htmlTransformPlugin error:", e);
      }
      return html;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    htmlTransformPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
