import fs from 'fs';
import { marked } from 'marked';

// read your README.md
const markdown = fs.readFileSync('./README.md', 'utf-8');

// convert Markdown to HTML
const htmlContent = marked(markdown);

// wrap in a basic HTML page
const finalHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Um texto pequeno explicando o que eu, como Lead Software Engineer, faço na empresa que trabalho, para alunos de um curso de programação" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rainan Miranda de Jesus &lt;rainan.jesus@pm.me&gt; | Lead Software Engineer (Full-Stack / DevOps / Scrum Master)</title>
  <style>
    body { font-family: sans-serif; background: #18181b; color: #f4f4f5; max-width: 800px; margin: auto; padding: 2rem; }
    pre { background: #3f3f46; padding: 1rem; overflow-x: auto; }
    code { font-family: monospace; background: #3f3f46; }
    blockquote { background: #3f3f46; padding: 0.8rem 1rem; border-radius: 0.5rem }
    blockquote p { margin: 0; padding: 0 }
    a { color: #51a2ff !important; }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>
`;

const distFolder = './dist';

// create dist file
if (fs.existsSync(distFolder)) {
  fs.rmSync(distFolder, { recursive: true }); // Remove existing folder first
}

fs.mkdirSync(distFolder);

// write final dist html file
fs.writeFileSync('./dist/index.html', finalHtml);
console.log('index.html generated successfully!');

