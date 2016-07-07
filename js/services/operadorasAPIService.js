angular.module("aries").factory("operadorasAPI", function($http, config){
	var _getOperadoras = function(){
		return $http.get(config.baseUrl+"/operadoras");
	};

	var _saveOperadoras = function(contato){
		return $http.post(config.baseUrl+"/operadoras", contato);
	};


	return {
		getOperadoras: _getOperadoras,
		saveOperadoras: _saveOperadoras
	};
});