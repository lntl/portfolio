

var compiler = {
	create_element : function(content){
		switch(content.typeof){
			case 'string':
					var node = document.createElement(content.html);
					var text = document.createTextNode(content.text);
					node.appendChild(text);
					compiler.add_attr(node, content);
					return document.body.append(node);
			break;
			case 'list':
				var list = document.createElement(content.html);
				list.rand=true;
				if(!content.id){
					list.id =	Math.random().toString(36).substring(2, 9);
					list.rand=true;
				} else {
					list.id =	content.id;
					list.rand=false;
				}
				if(content.class){
					compiler.add_attr(list, {class: content.class})
				};
				document.body.append(list);
				for (let [key, value] of Object.entries(content.list.text)) {
					var node = document.createElement(content.list.html);
					var text = document.createTextNode(value);
					node.appendChild(text);
					compiler.add_attr(node, {class_list: content.list.class_list});
					document.getElementById(list.id).append(node);
				}
				if(list.rand===true){list.removeAttribute('id')}
			break;
		}
	},
	add_attr : function(node, element){
		for (let [key, value] of Object.entries(element)) {
			switch (key) {
				case 'class':
						node.className = value;
					break;
				case 'class_list':
					node.className = value;
				break;
				case 'id':
					node.id = value;
				break;
				case 'href':
					node.href = value;
					if(element.target){ node.target = element.target;}
				break;
				case 'src':
					node.src = value;
					if(element.target){ node.target = element.target;}
				break;
				default:
			}
		}
	},
}
