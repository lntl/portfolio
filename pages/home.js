var home = {
  onload : function(){
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
				text: ["list1","list2"],
				class_list: "maclasseliste",
			},
		}
		var link = {
			html : "a",
			typeof : "string",
			target : "_blank",
			text : "Ceci est un lien",
			href : "https://www.google.fr",
			id : "mylink",
    }
		compiler.create_element(title);
		compiler.create_element(nav);
    compiler.create_element(link);

  }
}

