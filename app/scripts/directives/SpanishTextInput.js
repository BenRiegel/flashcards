(function() {
    function SpanishTextInput($rootScope) {

        return {
            templateUrl: '/templates/directives/spanish_text_input.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {

                var currentState;

                const accentLookupObj = {
                    a: ['a', 'á'],
                    e: ['e', 'é'],
                    i: ['i', 'í'],
                    o: ['o', 'ó'],
                    u: ['u', 'ú', 'ü'],
                    n: ['n', 'ñ']
                }
                const charsWithAccents = Object.keys(accentLookupObj);
                const timeThreshold = 500;
                var prevTimeStamp,
                    prevKey,
                    currentAccentIndex = 0;

                scope.insertChar = function(char){
                    var textInput = element[0];
                    var currentText = textInput.value;
                    var cursorLocation = textInput.selectionStart;
                    var newText = currentText.slice(0, cursorLocation-1);
                    newText += char;
                    newText += currentText.slice(cursorLocation);
                    textInput.value = newText;
                    textInput.setSelectionRange(cursorLocation, cursorLocation);
                    scope.response = newText;
                 }

                 scope.keypressHandler = function(evt){
                     var accentChar = charsWithAccents.includes(evt.key);
                     var multiplePresses = (prevKey == evt.key);
                     var timeDiff = evt.timeStamp - prevTimeStamp;
                     var soon = (timeDiff < timeThreshold);
                     if (accentChar && multiplePresses && soon){
                         evt.preventDefault();
                         currentAccentIndex++;
                         var accents = accentLookupObj[evt.key];
                         var numAccents = accents.length;
                         var accentIndex = currentAccentIndex % numAccents;
                         scope.insertChar(accents[accentIndex]);
                     } else {
                         currentAccentIndex = 0;
                     }
                     prevKey = evt.key;
                     prevTimeStamp = evt.timeStamp;
                }

                scope.$on('user-submit-event', function(){
                    $rootScope.$broadcast('end-state-event', element[0].value);
                });

                scope.$on('flipping-started', function(){
                    element[0].disabled = true;
                });

                scope.$on('quiz-state-change', function(evt, param){
                    currentState = param;
                });

                scope.$on('flipping-ended', function(){
                    scope.$apply(function(){
                        if (currentState == 'question'){
                            element[0].disabled = false;
                            element[0].value = "";
                            element[0].focus();
                        }
                    });
                });
            }
        };
    }

    angular
        .module('spanish')
        .directive('spanishTextInput', ['$rootScope', SpanishTextInput]);
})();
