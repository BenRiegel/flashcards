(function() {
    function PrimaryOptionsBar(Options) {

        return {
            templateUrl: '/templates/directives/primary_options_bar.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {

                scope.options = ["Verbs", "Numbers", "Vocab"];

                scope.selectedOption = Options.primary;

                scope.select = function(option){
                    if (scope.selectedOption == option){
                        scope.selectedOption = null;
                    } else {
                        scope.selectedOption = option;
                    }
                    scope.$emit('primary-option-selected', scope.selectedOption);
                }

                scope.$on('primary-option-cleared', function(){
                    scope.selectedOption = null;
                })
            }
        };
    }

    angular
        .module('spanish')
        .directive('primaryOptionsBar', ['Options', PrimaryOptionsBar]);
})();
