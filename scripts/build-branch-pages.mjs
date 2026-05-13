import { cpSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';

const viteBin = process.platform === 'win32'
  ? resolve('node_modules', '.bin', 'vite.cmd')
  : resolve('node_modules', '.bin', 'vite');

copyFileSync('dev.html', 'index.html');

const result = spawnSync(viteBin, ['build'], { stdio: 'inherit', shell: process.platform === 'win32' });
if (result.error) {
  console.error(result.error);
}
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

copyFileSync(join('dist', 'index.html'), 'index.html');

rmSync('assets', { recursive: true, force: true });
if (existsSync(join('dist', 'assets'))) {
  cpSync(join('dist', 'assets'), 'assets', { recursive: true });
}

const publicAssets = [
  'ChizuCode.png',
  'CrisisCenterPage.png',
  'JasmineConseil.png',
  'JasmineDiagram.png',
  'portrait.png',
  'Resume.jpg',
  'SeydiCheikhWade_resume.pdf',
  'Soki.png',
  'StatCan.png',
];

for (const asset of publicAssets) {
  const builtAsset = join('dist', asset);
  if (existsSync(builtAsset)) {
    copyFileSync(builtAsset, asset);
  }
}
