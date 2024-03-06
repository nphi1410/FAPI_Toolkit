// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'mergeCookies') {
        // Get cookies from Chrome API
        chrome.cookies.getAll({ domain: "fap.fpt.edu.vn" }, cookies => {
            const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
            // Merge the cookies from document.cookie and Chrome API
            const updatedCookie = message.cookie + ";ASP.NET_SessionId=" + cookieString;
            // Send back the updated cookie string to the content script
            sendResponse(updatedCookie);
        });
        // Return true to indicate that we want to use sendResponse asynchronously
        return true;
    }
});


