# portfolio
portfolio

# NEED
var element_html = {
	html : "string html **div|a|ul** *required",
  typeof : "string **list|string|link** *required",
	id : "string multiple with space",
	class : "string multiple with space",
	text : "string without html",
	//if typeof is on "list" *required
	list : {
			html: "string html **li** *required",
			text: ["string"],
			class_list: "string multiple with space",
	}
}

compiler.create_element(element_html);
