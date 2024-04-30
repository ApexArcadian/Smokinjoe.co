// List of public IP addresses
const ipAddresses = [
    '1.34.165.233:8282',
    '188.233.189.119:8085',
    '116.121.216.151:8080',
    '195.189.29.6:8181',
    '74.105.120.201:444',
    '92.100.144.74:8080',
    '191.97.151.27:8080'
    // Add more IP addresses here...
];

// Function to fetch preview images for IP addresses
async function fetchPreviewImages() {
    const ipContainer = document.getElementById('ip-container');

    for (const ip of ipAddresses) {
        // try {
        // `https://cors-anywhere.herokuapp.com/http://api.thumbnail.ws/api/ab95a5c79faf774a226af65072d81add4a5b50da17ff/thumbnail/get?url=http://${ip}/&width=800`
        // const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.thumbnail.ws/api/ab95a5c79faf774a226af65072d81add4a5b50da17ff/thumbnail/get?url=http://${ip}/&width=800`);
        // const data = await response.json();

        // if (data && data.status === 'ok' && data.thumbnail) {
        const ipItem = document.createElement('div');
        ipItem.classList.add('ip-item');

        // const img = document.createElement('img');
        // img.src = `http://api.thumbnail.ws/api/ab95a5c79faf774a226af65072d81add4a5b50da17ff/thumbnail/get?url=${ip}/&width=800`;
        // console.log(img.src);
        // img.alt = `Preview of ${ip}`;

        const ipText = document.createElement('a');
        ipText.href = "http://" + ip;
        ipText.textContent = ip;

        // ipItem.appendChild(img);
        ipItem.appendChild(ipText);

        ipContainer.appendChild(ipItem);
        // } else {
        // console.log(`No preview image found for ${ip}`);
    }
    // } catch (error) {
    // console.error(`Error fetching preview image for ${ip}:`, error);
}

// Fetch preview images when the page loads
window.onload = fetchPreviewImages;