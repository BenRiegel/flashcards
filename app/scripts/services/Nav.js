(function() {
    function Nav($rootScope, $state, Options) {

        var Nav = {};

        $rootScope.$on('primary-option-selected', function(evt, option) {
            if (option){
                Nav.rightButtonState = "enabled";
            } else {
                Nav.rightButtonState = "disabled";
            }
        });

        $rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams){
        /*    if (fromState.name == ""){
              $state.go("primary-options");
            }*/
            switch(toState.name){
                case "primary-options":
                    Nav.leftButtonState = "disabled";
                    Nav.rightButtonState = (Options.primary)? "enabled" : "disabled";
                    Nav.prevState = null;
                    Nav.nextState = "secondary-options"
                    break;
                case "secondary-options":
                    Nav.leftButtonState = "enabled";
                    Nav.rightButtonState = "enabled";
                    Nav.prevState = "primary-options";
                    Nav.nextState = "quiz.numbers";  //this will need to be changed
                    break;
                case "quiz":
                case "quiz.numbers":
                    Nav.leftButtonState = "enabled";
                    Nav.rightButtonState = "disabled";
                    Nav.prevState = "secondary-options";
                    Nav.nextState = null;
                    break;
            }

        });

        Nav.goToPrevState = function(){
            $state.go(Nav.prevState);
        }

        Nav.goToNextState = function(){
            $state.go(Nav.nextState);
        }

        Nav.goHome = function(){
            $rootScope.$broadcast('primary-option-cleared');
            $state.go("primary-options");
            this.rightButtonState = "disabled";
        }

        return Nav;
    }

    angular
        .module('spanish')
        .factory('Nav', ['$rootScope', '$state', 'Options', Nav]);
})();
