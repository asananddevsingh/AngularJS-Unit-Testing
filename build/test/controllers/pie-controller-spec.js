describe('pieController', function () {
    var $rootScope, $scope, controller;

    beforeEach(function () {
        module('pie');
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('pieController', {
                $scope: $scope
            });
        });
    });

    describe('Initialization', function () {
        it('should instantiate to slice 8', function () {
            expect($scope.slices).toEqual(8);
        });
    });
        
});