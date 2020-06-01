window.onload = function () {
  let state = {
    facebookState: true,
    twitterState: true,
    lichessState: true,
    youtubeState: true,
    newsState: true,
  };

  //Ask state to background
  chrome.runtime.sendMessage("", { message: "give me your state" }, function (
    response
  ) {
    this.state = response;
  });

  let facebook = document.getElementById("facebook");
  let twitter = document.getElementById("twitter");
  let lichess = document.getElementById("lichess");
  let youtube = document.getElementById("youtube");
  let news = document.getElementById("news");

  function setState(state) {
    facebook.checked = state.facebookState;
    twitter.checked = state.twitterState;
    lichess.checked = state.lichessState;
    youtube.checked = state.youtubeState;
    news.checked = state.newsState;
  }

  function updateState(site) {
    let state = new Object();
    switch (site) {
      case facebook:
        state.facebookState = site.checked;
        break;
      case twitter:
        state.twitterState = site.checked;
        break;
      case lichess:
        state.lichessState = site.checked;
        break;
      case youtube:
        state.youtubeState = site.checked;
        break;
      default:
        state.newsState = site.checked;
    }

    //Send state to  background
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.message == "I'm background give me your state") {
        sendResponse(state);
      }
    });
  }

  setState(state);

  facebook.addEventListener("click", function () {
    updateState(facebook);
  });
  twitter.addEventListener("click", function () {
    updateState(twitter);
  });
  lichess.addEventListener("click", function () {
    updateState(lichess);
  });
  youtube.addEventListener("click", function () {
    updateState(youtube);
  });
  news.addEventListener("click", function () {
    updateState(news);
  });
};
