let app = angular.module('mercadapp',['ngRoute']);

app.config(function($routeProvider) {

   $routeProvider
    .when('/home', {
        templateUrl : 'app/views/home.html'
    })
    .when('/login', {
        templateUrl : 'app/views/login.html'
    })
    .when('/itens', {
        templateUrl : 'app/views/itens.html',
        controller  : 'ItensController'
    })    
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/home' });
});