function getNumber(info, tab) {
    chrome.storage.sync.get({
        favoriteHandler: 'phone://',
    }, function (items) {
        chrome.tabs.create({
            url: items.favoriteHandler + info.selectionText.trim()
        })
    });
}

chrome.contextMenus.create({
    title: "Dial: %s",
    contexts: ["selection"],
    onclick: getNumber
});
