import { promises as fs } from "fs";
import * as path from "path";

const rootDir = process.cwd();

interface PackageJSON {
    version: string;
}

export async function getChangelog(): Promise<string> {
    const fullPath = path.join(rootDir, "CHANGELOG.md");
    const content = await fs.readFile(fullPath);
    return content.toString();
}

export async function getCurrentVersion(): Promise<string> {
    const content = await fs.readFile(path.join(rootDir, "package.json"), "utf-8");
    const json = JSON.parse(content) as unknown as PackageJSON;
    return json.version;
}

export async function getSha(): Promise<string> {
    const rev = (await fs.readFile('.git/HEAD')).toString().trim();
    if (rev.indexOf(':') === -1) {
        return rev;
    } else {
        return (await fs.readFile('.git/' + rev.substring(5))).toString().trim();
    }
}