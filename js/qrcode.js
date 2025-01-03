function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = pageId === 'main' ? 'mainPage' : 'storesPage';
    document.getElementById(selectedPage).classList.add('active');

    // Update navigation buttons
    document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}

function generateMainQRCode() {
    const url = document.getElementById('urlInput').value;
    const qrCodeContainer = document.getElementById('qrCode');

    // Clear existing QR Code
    qrCodeContainer.innerHTML = '';

    // Validate URL
    if (!url || !url.startsWith('http')) {
        alert('Please enter a valid URL starting with http or https.');
        return;
    }

    // Generate QR Code
    new QRCode(qrCodeContainer, {
        text: url,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}

function generateStoreQRCodes() {
    const appStoreURL = document.getElementById('appStoreInput').value;
    const playStoreURL = document.getElementById('playStoreInput').value;
    
    // Validate URLs
    if (!appStoreURL || !playStoreURL) {
        alert('Please enter both App Store and Play Store URLs');
        return;
    }

    if (!appStoreURL.startsWith('http') || !playStoreURL.startsWith('http')) {
        alert('Please enter valid URLs starting with http or https.');
        return;
    }

    // Generate App Store QR Code
    const appStoreContainer = document.getElementById('appStoreQR');
    appStoreContainer.innerHTML = '';
    new QRCode(appStoreContainer, {
        text: appStoreURL,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });

    // Generate Play Store QR Code
    const playStoreContainer = document.getElementById('playStoreQR');
    playStoreContainer.innerHTML = '';
    new QRCode(playStoreContainer, {
        text: playStoreURL,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}