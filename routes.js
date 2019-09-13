const all_pages = {
  home : "pages/home",
  contact : "pages/contact"
}
var page = {
  onload : function(){

  }
}

var getUrl = getQueryParams(location.search);

if(Object.entries(getUrl).length>0) {
  //AJOUT DES MODULES DE PAGE DYNAMIQUE
  for (let [key, value] of Object.entries(getUrl)) {
    switch (key) {
      case 'page':
        getRoutesExist(value);
      break;
    }
  }
} else {
  getScript(all_pages.home+'.js');
}

function getRoutesExist(arg){
  for (let [key, value] of Object.entries(all_pages))  {
    if(key===arg){
      getScript(all_pages[key]+'.js');
    } else {
      console.log('tedazdsttt')
    }
  }
}

function getQueryParams(qs) {
  qs = qs.split('+').join(' ');
	var params = {},
			tokens,
			re = /[?&]?([^=]+)=([^&]*)/g;
	while (tokens = re.exec(qs)) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}
	return params;
}

function getScript(url){
	var x = document.createElement('script');
	x.src = url;
	return document.getElementsByTagName("head")[0].appendChild(x);
}