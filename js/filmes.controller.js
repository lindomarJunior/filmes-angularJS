angular.module("Filmes").controller("FilmesController", function($scope, MeusFilmes){
    $scope.titulo = "Filmes que já assisti";

    $scope.filmes = []

    var carregarFilmes = function(){
        MeusFilmes.listar().then(function(filmes){
        $scope.filmes = filmes;
        });
    }    

    $scope.novoFilme = {};

    $scope.removerFilme = function(id){        
        /*angular.forEach($scope.filmes, function(filme, i){
            if(filme.id == id){
                $scope.filmes.splice(i,1);
            }
        });*/
        
        MeusFilmes.remover(id).then(carregarFilmes);
    }

    $scope.adicionarFilme = function(){

        if($scope.formFilme.$invalid){
            return;
        }

        var filme = angular.copy($scope.novoFilme);
        filme.id = Date.now();

        MeusFilmes.inserir(filme).then(carregarFilmes);

        $scope.novoFilme = {};
    }

    carregarFilmes();
})