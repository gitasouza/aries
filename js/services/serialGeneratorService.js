angular.module("aries").provider("serialGenerator", function(){

	var _length = 0;

	// Para acessar a variável do serialGenerator
	// this.getLength = function(){
	// 	return _length;
	// }

	this.setLength = function(length){
		_length = length;
	}

	this.$get = function (){
		return {
			generate : function ()	{
				var serial = "";
				while (serial.length < _length){
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}
				return serial;				
			}
		}
	}
});