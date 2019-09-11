const all_pages = {
  home : "pages/home",
  contact : "pages/contact"
}

var getUrl = getQueryParams(location.search);
console.log(Object.entries(getUrl).length);
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
  console.log('test')
  getRoutesExist("home");
}

function getRoutesExist(arg){
  for (let [key, value] of Object.entries(all_pages))  {
    if(key===arg){
      getScript(all_pages[key]+'.js');
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
// var newUrl = ""
// console.log(location.searchParams.get("test"));