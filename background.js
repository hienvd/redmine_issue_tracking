// Copyright (c) 2015 Hien Vuong-Duc.
//

function getRedmineUrl(){
  return "https://redmine.elarion.com";
}

function goToRedmine(){
  chrome.tabs.create({url: getRedmineUrl()});
}

var oauth = ChromeExOAuth.initBackgroundPage({
  'request_url': 'https://redmine.elarion.com/',
  'authorize_url': 'https://redmine.elarion.com/',
  'access_url': 'https://redmine.elarion.com/',
  'consumer_key':'anomyous' ,
  'consumer_secret': 'anomyous',
  'scope': 'https://redmine.elarion.com/',
  'app_name': 'My Kool Extension' 
});





chrome.browserAction.onClicked.addListener(goToRedmine);
