angular.module("Filmes").controller("FilmesController", function($scope){
    $scope.titulo = "Filmes que já assisti";

    $scope.filmes = [
        {
            id: "123",
            titulo: "DeadPool",
            ano: 2016,
            produtora: "Fox",
            sinopse: "Wade Wilson é um ex-agente especial que passou a trabalhar como mercenário. Seu mundo é destruído quando um cientista maligno o tortura e o desfigura completamente. O experimento brutal transforma Wade em Deadpool, que ganha poderes especiais de cura e uma força aprimorada.",
            cartaz: "http://www.universohq.com/wp-content/uploads/2016/02/DeadpoolDiaNamorados.jpg"
        }
    ]

    $scope.novoFilme = {};

    $scope.removerFilme = function(id){
        angular.forEach($scope.filmes, function(filme, i){
            if(filme.id == id){
                $scope.filmes.splice(i,1);
            }
        });
    }

    $scope.adicionarFilme = function(){
        var filme = angular.copy($scope.novoFilme);
        filme.id = Date.now();
        $scope.filmes.push(filme);
        $scope.novoFilme = {};
    }
})