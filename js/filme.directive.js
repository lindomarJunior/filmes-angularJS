angular.module("Filmes").directive("dvFilme", function(){
	return{
		restrict: 'EA',
		scope:{
			filme: '=item',
			fnFechar: '&fnFechar'
		},
		templateUrl: "templates/filme.template.html",
		link: function(scope, element, attr){
			element.addClass('filme com-cartaz');

			if(!attr.fnFechar){
				element.find('button');
			}
		}
	};
})