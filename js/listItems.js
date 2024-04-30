// List of public IP addresses
const ipAddresses = [
    '1.34.165.233:8282',
    '188.233.189.119:8085',
    '116.121.216.151:8080',
    '195.189.29.6:8181',
    '74.105.120.201:444',
    '92.100.144.74:8080',
    '191.97.151.27:8080',
    '190.213.67.64:10001',
    '139.64.168.120:8080',
    '75.149.26.30:1024'
    // Add more IP addresses here...
];

// Function to fetch preview images for IP addresses
async function fetchPreviewImages() {
    const ipContainer = document.getElementById('ip-container');

    for (const ip of ipAddresses) {
        const ipItem = document.createElement('div');
        ipItem.classList.add('ip-item');

        // we would like to also fetch images from the gh-repo thumnail database
        // these are to be added at the administrator level

        const ipText = document.createElement('a');
        ipText.href = "http://" + ip;
        ipText.textContent = ip;
        ipItem.appendChild(ipText);

        ipContainer.appendChild(ipItem);
    }
}

// Fetch preview images when the page loads
window.onload = fetchPreviewImages;