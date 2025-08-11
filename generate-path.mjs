import path from 'node:path';
import fs from 'node:fs';

const weirdPath = path.join(import.meta.dirname, import.meta.dirname.slice(1), "src/a.js");

fs.mkdirSync(path.dirname(weirdPath), { recursive: true });
fs.writeFileSync(weirdPath, `invalid javascript`);
