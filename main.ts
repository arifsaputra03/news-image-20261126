// THE DAY IN THE WORLD — Thursday 26 November 2026 on one page.
//
// This entry is a single 1024x1024 front page (entry.png, kept beside this
// file) that packs the whole day into one image: a lead story on the new US
// tariff plan, then 33 more dated stories in three columns — world and
// conflict, disasters and health, politics, economy and business, science
// and space, climate, sport and culture — under a markets ticker.
//
// The program's whole job is to deliver that page to the grader unchanged:
// it copies entry.png to a file also named entry.png inside the output
// directory (the harness sets MAKEFUN_OUTPUT_DIR, or /output by default). It uses
// nothing but the Node 22 standard library and touches no network, so two
// runs always produce exactly the same bytes.
//
// Run it locally the same way the harness does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (MAKEFUN_OUTPUT_DIR stands in for /output outside the grading container.)

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

copyFileSync(source, target);

// A one-line receipt on stderr (stdout stays clean): what was delivered.
const { size } = statSync(target);
console.error(`the-day-in-the-world: wrote ${target} (${size} bytes)`);
