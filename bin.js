#!/usr/bin/env node
import { spawn } from 'child_process';
const [, , ...args] = process.argv;

const repositoryUrl = 'https://github.com/maxmillionbeatz/sveltekit-tailwind-starter.git';
let destination = process.cwd();

if (args[0]) {
	destination = `${destination}/${args[0]}`;
}

spawn('git', ['clone', repositoryUrl, destination], { stdio: 'inherit' }).on('close', (code) => {
	console.log(`Cloned your repo at ${destination}`);
	process.exit(code);
});
