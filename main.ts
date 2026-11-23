import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The honest count of browser tabs open right now: 47.
// Written as digits only, with no trailing newline or other characters.
const TABS_OPEN = "47";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TABS_OPEN, "utf8");
