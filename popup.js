chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    // https://developer.chrome.com/docs/extensions/reference/identity/#method-getProfileUserInfo
    chrome.identity.getProfileUserInfo((userInfo) => {
        document.getElementById("email").innerHTML = "My email is: " + userInfo.email;
        document.getElementById("id").innerHTML = "My ID is: " + userInfo.id;
    });
});

