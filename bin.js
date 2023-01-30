#!/usr/bin/env node
import { spawn } from 'child_process';

const repositoryUrl = 'https://github.com/your-username/your-repo.git';
const destination = process.cwd();

spawn('git', ['clone', repositoryUrl, destination], { stdio: 'inherit' }).on('close', (code) => {
	console.log(`Cloned your repo at ${destination}`);
	process.exit(code);
});
