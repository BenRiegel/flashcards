(function() {
    function Flashcard($rootScope) {

        return {
            templateUrl: '/templates/directives/flashcard.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {

                var counter = 0;

                element[0].addEventListener("transitionend", function(){
                    $rootScope.$broadcast('flipping-ended');
                });

                scope.flipCard = function(){
                    counter++;
                    element[0].style.transform = `rotateY(${180*counter}deg)`;
                    $rootScope.$broadcast('flipping-started');
                }

                scope.$on('quiz-state-change', function(){
                    scope.flipCard();
                });

                scope.$on('quiz-answer-correct', function(){
                    scope.currentResponseCorrect = true;
                });

                scope.$on('quiz-answer-incorrect', function(evt, param){
                    scope.currentResponseCorrect = false;
                    scope.correctAnswer = param;
                });



            }
        };
    }

    angular
        .module('spanish')
        .directive('flashcard', ['$rootScope', Flashcard]);
})();
