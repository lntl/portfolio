var page = {
  onload : function(){
    var title = {
			html : "h1",
			typeof : "string",
			text : "Contact",
			class : "toto",
			id : "titre",
    }
    var title2 = {
			html : "h2",
			typeof : "string",
			text : "Titre 2",
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
			text : "Page accueil",
			href : "?page=home",
			id : "mylink",
		}
		var img = {
			html : "img",
			typeof : "string",
			src : "https://img.lemde.fr/2019/04/22/0/191/1619/1079/688/0/60/0/e39da8d_2FIads9h8wB-0SwSgxVaVWsp.jpg",
			id : "mylink",
    }
    compiler.create_element(title);
    compiler.create_element(title2);
		compiler.create_element(nav);
    compiler.create_element(link);
    compiler.create_element(img);

  }
}

