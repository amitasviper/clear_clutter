chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    chrome.tabs.executeScript(tab.id, {
        "file": "toggle.js"
    }, function () { // Execute your code
    });
});