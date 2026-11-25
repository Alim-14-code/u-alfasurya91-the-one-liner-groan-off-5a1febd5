// The One-Liner Groan-Off — entry: one original dad joke.
// The pun: a router that "drops the connection" — the joke fails to land
// because the router literally drops connections. Dad-joke groan, delivered
// in one line with the punchline on the last words.
// Revision note: the em-dash before the punchline keeps the setup and the
// turn inside a single breath, so the groan lands fast when read aloud.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I told my Wi-Fi router a joke, but it didn't laugh — it just kept dropping the connection.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
