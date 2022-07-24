
chrome.runtime.onInstalled.addListener((tab) => {
  chrome.scripting.insertCSS({
    target: {
      tabId: tab.id
    },
    files: ["blr.css"],
  });
  // console.log(document.getElementById("side-pane"));
});




function injectedFunction() {

  var side = document.getElementById('pane-side');
  side.classList.toggle("blr");
  // if (side.style.display == "none") {
  //   side.style.display = '';
  //   side.classList.add("blr");
  // }
  // else {
  //   side.classList.remove("blr");
  //   side.style.display = "none";

  // }
  // console.log(document.getElementById('side'));
  console.log('toggled');
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: injectedFunction
    });
  });
