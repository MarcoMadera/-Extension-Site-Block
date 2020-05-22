window.onload = function () {
  var state = {
    facebookState: true,
    twitterState: true,
    lichessState: true,
    youtubeState: true,
    newsState: true,
  };

  let facebook = document.getElementById("facebook");
  let twitter = document.getElementById("twitter");
  let lichess = document.getElementById("lichess");
  let youtube = document.getElementById("youtube");
  let news = document.getElementById("news");

  function updateState(site) {
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

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "state" });
    });
  }

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
