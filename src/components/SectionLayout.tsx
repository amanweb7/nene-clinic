import React from "react";

interface SectionLayoutProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  bgAlt?: boolean;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  subtitle,
  className = "",
  containerClassName = "",
  bgAlt = false,
  children,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 scroll-mt-16 md:scroll-mt-20 w-full ${
        bgAlt ? "bg-section-alt" : "bg-background"
      } ${className}`}
    >
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 w-full box-border ${containerClassName}`}>
        {title && (
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-base text-muted-foreground text-left max-w-[65ch] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
