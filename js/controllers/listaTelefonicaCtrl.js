angular.module("aries").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "Lista Telefonica";
	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().success(function(data, status){
			$scope.operadoras = data;
		}).error(function(data, status){
			$scope.message = "Aconteceu um problema ao buscar as operadoras!" + data;
		});
	};
	var carregarContatos = function(){
		contatosAPI.getContatos().success(function(data, status){
			$scope.contatos = data;
		});
	};
	$scope.adicionarContato = function (contato) {
		// Somente um exemplo de serviços do tipo provider
		// contato.serial = serialGenerator.generate();
		contatosAPI.saveContatos(contato).success(function(data){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		}).error(function(data, status){
			$scope.message = "Aconteceu um problema ao adicionar!" + data;
		});
	};
	$scope.apagarContatos = function (contatos) {
		delete $scope.contato;	

		var _contatosSelecionados = contatos.filter(function(contato){
			if (contato.selecionado) {
				return contato;
			};
		});

		for(var i=0; i <_contatosSelecionados.length; i++) {
    	contatosAPI.deleteContato(_contatosSelecionados[i]).success(function(data){
					$scope.contatoForm.$setPristine();
					carregarContatos();	
				}).error(function(data, status){
					$scope.message = "Aconteceu um problema ao excluir um contato!" + data;	
			});
		};

	};
	$scope.isContatoSelecionado = function (contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};		
	$scope.classe1 = "selecionado";
	$scope.classe2 = "negrito";
	$scope.ordenarPor = function (campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = ! $scope.direcaoDaOrdenacao;
	};
	carregarContatos();
	carregarOperadoras();
});	