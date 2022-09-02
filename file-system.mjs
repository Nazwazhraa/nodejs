import fs from "fs/promises";
import path from "path/posix";

const buffer = await fs.readFile("file-system.mjs" );

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello NodeJS");