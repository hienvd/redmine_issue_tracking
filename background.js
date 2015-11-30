// Copyright (c) 2015 Hien Vuong-Duc.
//
var abc;

function getRedmineUrl(){
  return "https://redmine.elarion.com";
}

function goToRedmine(){
  console.log('Going to redmine....');
  chrome.tabs.create({url: getRedmineUrl()});
}


chrome.browserAction.onClicked.addListener(goToRedmine);
