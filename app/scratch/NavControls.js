(function() {
    function navControls(Nav) {

        return {
            templateUrl: '/templates/directives/nav_controls.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {

                scope.leftButtonState;
                scope.rightButtonState;
                scope.prevState;
                scope.nextState;

                scope.$on('right-button-state-set', function(evt, state){
                    scope.rightButtonState = state;
                });

                scope.$on('nav-ready', function(evt, states){
                    scope.rightButtonState = states;
                });

                scope.goToPrevState = function(){
                    Nav.goToPrevState();
                }

                scope.goToNextState = function(){
                    Nav.goToNextState();
                }
            }
        };
    }

    angular
        .module('spanish')
        .directive('navControls', ['Nav', navControls]);
})();
