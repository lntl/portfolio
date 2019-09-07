//NEED
/*
create_element(option simple) {
	html : "string html **required",
	id : "string multiple with space",
	class : "string multiple with space",
	text : "string without html",
	//optional if list node like ul/li **required
	list : {
			html: "string html **required",
			text: ["string"],
			class_list: "maclasseliste",
	}
}
*/

var routes = {
	home : function(){
		//CONSTRUCTION DE LA HOME
		var title = {
			html : "h1",
			typeof : "string",
			text : "lucas natale",
			class : "toto",
			id : "titre",
		}
		var nav = {
			html : "ul",
			typeof: "list",
			id : "e",
			class: "maclass test",
			list: {
				html: "li",
				text: ["test","test2"],
				class_list: "maclasseliste",
			},
		}
		compiler.create_element(title);
		compiler.create_element(nav);
	},
}