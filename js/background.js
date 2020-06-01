let state = {
  facebookState: true,
  twitterState: true,
  lichessState: true,
  youtubeState: true,
  newsState: true,
};

//ask state to popup
chrome.runtime.sendMessage(
  "",
  { message: "I'm background give me your state" },
  function (response) {
    this.state = response;
  }
);

//Send state
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message == "give me your state") {
    sendResponse(state);
  }
});
