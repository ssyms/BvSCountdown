 chrome.topSites.get(function(info){
   for(var i=0;i<info.length;i++) {alert(info[i].url);}
  });