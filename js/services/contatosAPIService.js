angular.module("aries").factory("contatosAPI", function($http, config){
	var _getContatos = function(){
		return $http.get(config.baseUrl+"/contatos");
	};

	var _saveContatos = function(contato){
		return $http.post(config.baseUrl+"/contatos", contato);
	};

	var _deleteContatos = function(contato){
		return $http.delete(config.baseUrl+"/contatos/" + contato._id);
	};


	return {
		getContatos: _getContatos,
		saveContatos: _saveContatos,
		deleteContato: _deleteContatos
	};
});