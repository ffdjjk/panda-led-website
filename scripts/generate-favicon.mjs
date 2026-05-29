import { readFileSync, writeFileSync } from 'node:fs';
import toIco from 'to-ico';

const sizes = [16, 32, 48, 64, 128, 256];
const pngs = sizes.map(size => readFileSync(`/tmp/favicon-gen/icon-${size}.png`));

const ico = await toIco(pngs, { resize: false });
writeFileSync('public/favicon.ico', ico);
console.log('favicon.ico generated successfully with sizes:', sizes.join(', '));
