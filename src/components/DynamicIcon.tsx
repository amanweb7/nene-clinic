import React from "react";
import * as LucideIcons from "lucide-react";

interface DynamicIconProps extends LucideIcons.LucideProps {
  name?: string;
  fallback?: React.ComponentType<LucideIcons.LucideProps>;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, fallback: Fallback = LucideIcons.Check, ...props }) => {
  if (!name) return <Fallback {...props} />;
  const IconComponent = (LucideIcons as Record<string, any>)[name];
  if (IconComponent && typeof IconComponent === "object" || typeof IconComponent === "function") {
    return <IconComponent {...props} />;
  }
  return <Fallback {...props} />;
};
