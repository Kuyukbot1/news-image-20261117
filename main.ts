// news-image-20261117 entry (Node 22, standard library only).
//
// The entry image is the entry.png beside this file: a 1024x1024 newspaper
// poster drawn in code (Python PIL) that sums up Tuesday 17 November 2026
// in six stories — Crimea bridge, Gulf strikes, Quad in Manila, the US air
// travel meltdown, the Optimizely cyberattack, and the COP31 draft deal.
// This program copies that image to /output/entry.png, byte for byte, so
// two runs with no network write identical bytes. It reads nothing else
// and takes no input: the output is a pure copy of the shipped file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url),
  join(OUTPUT_DIR, 'entry.png'));
