var node;
var compiler = {
	create_element : function(content){
		switch(typeof content.text){
			case 'string':
					node = document.createElement(content.html); 
					var text = document.createTextNode(content.text); 
					node.appendChild(text);
					compiler.add_attr(content);
					return document.body.append(node);
			break;
			case 'object':
				node = document.createElement("ul");
				node.id = "ok";
				document.body.append(node);
				for (let [key, value] of Object.entries(content.text)) {
					node = document.createElement("li");
					node.id = Math.random().toString(36).substring(2, 9); 
					var text = document.createTextNode(value);  
					node.appendChild(text); 
					compiler.add_attr(content);
					document.getElementById("ok").append(node);
				}
			break;
		}
	},
	add_attr : function(element){
		for (let [key, value] of Object.entries(element)) {
			switch (key) {
				case 'class':
						node.className = value;
					break;
				case 'id':
						node.id = value;
					break;
				default:
			}
		}
	},
}
