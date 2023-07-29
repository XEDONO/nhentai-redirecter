chrome.contextMenus.create({
    title: "Redirect to Selected DOUJINSHI Number in Nhentai",
    contexts: ["selection"],
    id: "redirectNHentai"
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "redirectNHentai" && info.selectionText) {
      const query = encodeURIComponent(info.selectionText.trim());
      const url = `https://nhentai.net/g/${query}/`;
  
      // Open the nhentai.net link in a new tab
      chrome.tabs.create({ url: url });
    }
  });
  