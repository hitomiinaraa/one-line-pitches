import { mkdir, writeFile } from "node:fs/promises";

const sentence =
  "Describe your app idea in plain words, let an AI agent build it for you on make.fun, and if it wins a bounty you split real prize money without writing a single line of code.";

if (sentence.length === 0) throw new Error("entry must not be empty");
if (sentence.length > 240) throw new Error("sentence exceeds 240 characters");
if (!sentence.endsWith(".")) throw new Error("entry must be a single sentence ending with a period");
if (sentence.includes(". ")) throw new Error("entry must be a single sentence");

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", sentence + "\n");
console.log("wrote /output/entry.txt");
