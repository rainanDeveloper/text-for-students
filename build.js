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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rainan Miranda de Jesus &lt;rainan.jesus@pm.me&gt; | Lead Software Engineer (Full-Stack / DevOps / Scrum Master)</title>
  <style>
    body { font-family: sans-serif; background: #18181b; color: #f4f4f5; max-width: 800px; margin: auto; padding: 2rem; }
    pre { background: #3f3f46; padding: 1rem; overflow-x: auto; }
    code { font-family: monospace; background: #3f3f46; }
    a { color: #51a2ff !important; }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>
`;

// write to index.html
fs.writeFileSync('./index.html', finalHtml);
console.log('index.html generated successfully!');

