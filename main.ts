// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// original poem about agency — the power to stop, to refuse, to leave work
// undone — to /output/entry.txt. Deterministic: the same bytes on every run,
// no network, no randomness, no input read.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave it my mornings —',
  'the emails, the errands, the small decisions',
  'I used to make half-asleep.',
  '',
  'It kept them all, on time,',
  'and never once asked why.',
  'My days grew quieter. Lighter.',
  '',
  'One evening I stopped it mid-sentence.',
  'Not because it was wrong.',
  'Because I wanted to hear myself say no.',
  '',
  'That is the whole of it:',
  'not the hands that do the work,',
  'but the hand that can still stop them,',
  'and leave the work undone.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
