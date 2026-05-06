import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const lucidePkg = require.resolve('lucide-static/package.json');
const lucideRoot = dirname(lucidePkg);

const aliases: Record<string, string> = {
  'BarChart3': 'chart-column',
  'BarChart': 'chart-column',
};

function toKebab(name: string): string {
  if (aliases[name]) return aliases[name];
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

const cache = new Map<string, string>();

export function lucideSvg(name: string): string {
  const cached = cache.get(name);
  if (cached) return cached;

  const file = resolve(lucideRoot, 'icons', `${toKebab(name)}.svg`);
  let svg = readFileSync(file, 'utf-8');
  // Strip width/height so the SVG inherits sizing from parent CSS.
  svg = svg
    .replace(/\swidth="[^"]*"/, '')
    .replace(/\sheight="[^"]*"/, '');
  cache.set(name, svg);
  return svg;
}
