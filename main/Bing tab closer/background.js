chrome.action.onClicked.addListener((tab) => {
  // Query for all tabs that have a URL containing 'bing.com'
  chrome.tabs.query({ url: "*://*.bing.com/*" }, (tabs) => {
    // Get the IDs of all the tabs we found
    const bingTabIds = tabs.map(tab => tab.id);

    // If there are any Bing tabs, close them
    if (bingTabIds.length > 0) {
      chrome.tabs.remove(bingTabIds, () => {
        console.log(`Closed ${bingTabIds.length} Bing tab(s).`);
      });
    } else {
      console.log("No Bing tabs found.");
    }
  });
});

/*
 * Bing Tab Closer
 * Copyright (c) 2026 codeluke7
 * Licensed under the MIT License
 */
