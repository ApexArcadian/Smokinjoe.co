// List of public IP addresses
const ipAddresses = [
    'http://1.34.165.233:8282',
    'http://188.233.189.119:8085',
    'http://116.121.216.151:8080',
    'http://195.189.29.6:8181',
    'http://74.105.120.201:444',
    'http://92.100.144.74:8080',
    'http://191.97.151.27:8080',
    'http://190.213.67.64:10001',
    'http://139.64.168.120:8080',
    'http://75.149.26.30:1024',
    'http://185.14.139.118:81/view/index.shtml'
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
        ipText.href = ip;
        ipText.textContent = ip;
        ipItem.appendChild(ipText);

        ipContainer.appendChild(ipItem);
    }
}

// Fetch preview images when the page loads
window.onload = fetchPreviewImages;