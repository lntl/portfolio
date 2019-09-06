var routes = {
	home : function(){
		//CONSTRUCTION DE LA HOME
		var title = {
			html : "H1",
			text : "lucas natale",
			class : "toto",
			id : "titre",
		}
		var nav = {
			html : "ul",
			class:"test",
			text: ["test","test2"]
		}
		compiler.create_element(title);
		compiler.create_element(nav);
		
	},
}