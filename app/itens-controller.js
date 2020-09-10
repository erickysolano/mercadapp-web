app.controller('ItensController', function ($scope, $window) {

    $scope.descricao = "";
    $scope.itens = [];
    $scope.checkHead = false;


    //-------------------------------------------- Functions
    
    $scope.setFocus = function() {
        let descricao = $window.document.getElementById('descricao');
        descricao.focus();
    };
    $scope.setFocus();


    $scope.limpar = function() {
        $scope.descricao = "";
        $scope.setFocus();
    };


    $scope.adicionar = function() {
        if ($scope.descricao != "") {
            let item = {};
            item.descricao = $scope.descricao;
            item.check = false;
            $scope.itens.push(item);
            $scope.limpar();    
        }
    };

    $scope.remover = function(index) {
        $scope.itens.splice(index, 1);
    };

    $scope.trataCheckBoxIndex = function(index) {
        $scope.itens[index].check = !$scope.itens[index].check;
    };

    $scope.trataCheckBoxHead = function() {
        $scope.checkHead = !$scope.checkHead;
        for (let index = 0; index < $scope.itens.length; index++) {
            $scope.itens[index].check = $scope.checkHead;            
        }
    };

    $scope.trataShowList = function() {
        let arrayAux = [];
        for (let index = 0; index < $scope.itens.length; index++) {
            if (!$scope.itens[index].check) {
                arrayAux.push($scope.itens[index]);
            }            
        }
        for (let index = 0; index < $scope.itens.length; index++) {
            if ($scope.itens[index].check) {
                arrayAux.push($scope.itens[index]);
            }            
        }
        $scope.itens = arrayAux;
    };

    $scope.getItens = function() {
        $scope.itens = [
            { id: 1, descricao: "Item 1", check: false },
            { id: 2, descricao: "Item 2", check: true },
            { id: 3, descricao: "Item 3", check: false },
            { id: 4, descricao: "Item 4", check: true },
            { id: 5, descricao: "Item 5", check: false }
        ];
    };
    $scope.getItens();


});