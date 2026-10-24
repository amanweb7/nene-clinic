import React, { useEffect } from "react";
import siteConfig from "../site.config.json";

export const DemoMode: React.FC = () => {
  const isDemo = Boolean((siteConfig as any).demo);

  useEffect(() => {
    if (!isDemo) return;

    let metaRobots = document.querySelector('meta[name="robots"]');
    let added = false;
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
      added = true;
    }
    metaRobots.setAttribute("content", "noindex");

    return () => {
      if (added && metaRobots && metaRobots.parentNode) {
        metaRobots.parentNode.removeChild(metaRobots);
      }
    };
  }, [isDemo]);

  if (!isDemo) {
    return null;
  }

  const rawWhatsapp = (siteConfig as any).demoContactWhatsapp || "";
  const cleanWhatsapp = rawWhatsapp.replace(/[^\d]/g, "");
  const whatsappUrl = cleanWhatsapp ? `https://wa.me/${cleanWhatsapp}` : undefined;

  // Diagonal repeating DEMO PREVIEW watermark pattern (SVG data URI)
  const watermarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="160" viewBox="0 0 300 160"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" transform="rotate(-30 150 80)" fill="#666666" fill-opacity="0.10" font-size="20" font-weight="800" font-family="sans-serif" letter-spacing="3">DEMO PREVIEW</text></svg>`;
  const watermarkUrl = `url("data:image/svg+xml,${encodeURIComponent(watermarkSvg)}")`;

  return (
    <>
      {/* Full-screen diagonal repeating watermark */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] select-none max-w-full"
        style={{
          backgroundImage: watermarkUrl,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Slim one-line top banner strip (about 36px tall, not sticky) */}
      <aside role="banner" aria-label="Demo Preview Notice" className="w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full min-h-[36px] py-2 px-4 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 transition-colors text-xs sm:text-sm font-medium text-center border-b border-neutral-800 select-none"
          aria-label="Demo preview. Tap to activate this site"
        >
          Demo preview. Tap to activate this site
        </a>
      </aside>
    </>
  );
};
