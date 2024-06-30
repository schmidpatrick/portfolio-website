import { Octokit, App } from 'https://esm.sh/octokit';

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit();

const { data } = await octokit.request('GET /users/schmidpatrick/repos');
console.log(data);
