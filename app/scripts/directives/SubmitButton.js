(function() {
    function SubmitButton($rootScope) {

        return {
            templateUrl: '/templates/directives/submit_button.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {

                var currentState;

                scope.buttonText= "Submit";

                scope.submit = function(){
                    $rootScope.$broadcast('user-submit-event');
                }

                scope.$on('flipping-started', function(){
                    element[0].disabled = true;
                });

                scope.$on('quiz-state-change', function(evt, param){
                    currentState = param;
                });

                scope.$on('flipping-ended', function(){
                    element[0].disabled = false;
                    scope.$apply(function(){
                        if (currentState == 'question'){
                            scope.buttonText = "Submit"
                        } else {
                            scope.buttonText = "OK";
                            element[0].focus();
                        }
                    });
                });
            }
        };
    }

    angular
        .module('spanish')
        .directive('submitButton', ['$rootScope', SubmitButton]);
})();
