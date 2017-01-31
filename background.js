if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

chrome.webNavigation.onBeforeNavigate.addListener(function(evt){
	if (evt.url.startsWith("data")){
		alert("WARNING!\n\nThe page you are being sent to is a 'data URI' page. This means that it may appear to be a legitimate page, such as a login page for online banking, email, or similar.\n\n It is strongly advised that you do not enter any sensitive information, and highly recommended that you close the tab or page completely!");
		chrome.tabs.sendMessage(evt.tabId, {text: "duri"}, function(data){
			return console.log(data);
		});
	}
});