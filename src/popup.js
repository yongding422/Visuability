const enableButton = document.getElementById("enableButton");

enableButton.addEventListener('click', handleButtonClick);

chrome.storage.sync.get(["extensionEnabled"], (result) => {
    SetDisplayText(result.extensionEnabled);
});

function handleButtonClick(event) {
    chrome.storage.sync.get(["extensionEnabled"], (result) => {
        chrome.storage.sync.set({"extensionEnabled" : !result.extensionEnabled });
        SetDisplayText(result.extensionEnabled);
    });
}

function SetDisplayText(enabled){
    if(enabled)
        enableButton.innerText = "Disable";
    else
        enableButton.innerText = "Enable";
}