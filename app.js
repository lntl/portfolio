
app = {
	start : function() {
		getScript('https://code.jquery.com/jquery-3.4.1.min.js');
		page.onload();

		// var test = compiler.load_page("pages/home.js");
		// console.log(test);
		//AJOUT DES CLICK
		// var title = document.getElementById('titre');
		// title.addEventListener('click', function(){
		// 	console.log("ca marche")
		// })
	},
	end : function(){
		console.log('end');
	}
}