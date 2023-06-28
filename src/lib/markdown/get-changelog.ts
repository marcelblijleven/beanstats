import * as path from "path";
import {readFileSync} from "fs";

const rootDir = process.cwd();

export async function getChangelog(): Promise<string> {
    const fullPath = path.join(rootDir, "CHANGELOG.md");
    const content = readFileSync(fullPath);
    return content.toString();
}