function getNumber(info, tab) {
    chrome.storage.sync.get({
        favoriteHandler: 'phone://',
    }, function (items) {
        alert(items.favoriteHandler + info.selectionText);
        chrome.tabs.create({
            url: items.favoriteHandler + info.selectionText
        })
    });
}

chrome.contextMenus.create({
    title: "Dial: %s",
    contexts: ["selection"],
    onclick: getNumber
});
