function save_options() {
    var handler = document.getElementById('handler').value;
    chrome.storage.sync.set({
        favoriteHandler: handler,
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 2000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        favoriteHandler: 'phone://',
    }, function (items) {
        document.getElementById('handler').value = items.favoriteHandler;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);