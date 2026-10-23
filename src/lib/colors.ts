export function hexToHslChannels(hex: string): string {
  let c = hex.replace('#', '').trim();
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h = h * 60;
  }

  return `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function applyTheme(colors?: {
  primary?: string;
  secondary?: string;
  primaryForeground?: string;
  secondaryForeground?: string;
}) {
  if (typeof document === 'undefined' || !colors) return;
  const root = document.documentElement;
  if (colors.primary) {
    root.style.setProperty('--primary', hexToHslChannels(colors.primary));
  }
  if (colors.primaryForeground) {
    root.style.setProperty('--primary-foreground', hexToHslChannels(colors.primaryForeground));
  }
  if (colors.secondary) {
    root.style.setProperty('--secondary', hexToHslChannels(colors.secondary));
  }
  if (colors.secondaryForeground) {
    root.style.setProperty('--secondary-foreground', hexToHslChannels(colors.secondaryForeground));
  }
}
