import fs from 'fs';
import { exec } from 'child_process';

const args = process.argv.slice(2); // Get command-line arguments excluding 'ts-node' and 'index.ts'

if (args.length > 0) {
    const param = args[0];
    const srcFile = `src/${param}.ts`;
    const testFile = `test/${param}.spec.ts`;
    if (fs.existsSync(srcFile) || fs.existsSync(testFile)) {
        console.error(`Error: case id ${param} already exists.`);
        process.exit(1);
    }
    fs.writeFileSync(srcFile, `export default function fn(s: string): string {
  
}`
    );
    fs.writeFileSync(testFile, `import fn from "../src/${param}";
import { expect } from "chai";

describe("${param}", () => {

  it("case 1", () => {
    expect(fn()).to.equal();
  })

  it("case 2", () => {
    expect(fn()).to.equal();
  })

})`
    );
    exec("code " + srcFile);
    exec("code " + testFile);
} else {
    console.error('Error: case id is missing.');
}