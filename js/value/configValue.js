// Não podem ser injetados em serviços do tipo provider
// angular.module("aries").value("config", {
// 	baseUrl: "http://localhost:3000/api"
// });

// Podem ser injetados em serviços do tipo provider
angular.module("aries").constant("config", {
	baseUrl: "http://localhost:3000/api"
});