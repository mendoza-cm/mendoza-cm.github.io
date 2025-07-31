// loadMarkdown.js

// Include this function in your blog HTML
function loadMarkdown(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        })
        .then(md => {
            const html = marked.parse(md); // Requires marked.js
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            document.getElementById(containerId).innerHTML = "<p>Error loading content.</p>";
        });
}
