function updatePreview() {
    const title = document.getElementById('titleInput').value || 'My Website';
    const text = document.getElementById('textInput').value || 'Welcome!';
    const color = document.getElementById('colorInput').value || '#3498db';

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: ${color};
                    color: white;
                    text-align: center;
                    padding: 50px;
                }
                h1 { font-size: 3em; margin-bottom: 20px; }
                p { font-size: 1.5em; }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <p>${text}</p>
        </body>
        </html>
    `;

    const iframe = document.getElementById('preview');
    iframe.srcdoc = html;
}

function downloadSite() {
    const title = document.getElementById('titleInput').value || 'My Website';
    const text = document.getElementById('textInput').value || 'Welcome!';
    const color = document.getElementById('colorInput').value || '#3498db';

    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: ${color};
            color: white;
            text-align: center;
            padding: 50px;
        }
        h1 { font-size: 3em; margin-bottom: 20px; }
        p { font-size: 1.5em; }
    </style>
</head>
<body>
    <h1>${title}</h1>
    <p>${text}</p>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'my-website.html';
    a.click();
}

// Initialize preview on load
updatePreview();
