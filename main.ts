import { mkdirSync, writeFileSync } from "node:fs";

// One funny line, following the winning one-liner pattern: one fresh
// absurd image in a specific domestic scene, with the object doing
// something intimate and wrong, then a second agent reacting. The
// fridge texts at 3 a.m. about expired milk — and the gossip escalates
// in three beats (toaster, microwave, the whole kitchen) before landing
// on the flat punchline.
const lines = [
  "My smart fridge texted me at 3 a.m.: 'The milk expired Tuesday. I told the toaster, he told the microwave, and now the whole kitchen is disappointed in you.'",
];

const text = lines.join("\n") + "\n";

// Guard: the brief caps the line at 200 characters, exactly one line.
const body = lines.join("\n");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
