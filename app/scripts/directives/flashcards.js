(function() {
    function flashcards() {

        return {
            templateUrl: '/templates/directives/flashcards.html',
            replace: true,
            restrict: 'E',
            scope: {
                onResponse: '&',
                onNewCard: '&'
            },
            link: function(scope, element, attributes) {

                 var responseInput = document.getElementById("response-input");
                 var submitButton = document.getElementById("submit-button");

                 var counter = 0;
                 var flippingInProgress = false;

                 attributes.$observe('cardFrontHtml', function(newValue) {
                     scope.cardFrontHtml = newValue;
                 });

                 attributes.$observe('cardBackHtml', function(newValue) {
                     scope.cardBackHtml = newValue;
                 });

                 var notifyOnResponse = function(newValue) {
                     if (typeof scope.onResponse === 'function') {
                         scope.onResponse({response: newValue});
                     }
                 };

                 var notifyOnNewCard = function() {
                     if (typeof scope.onNewCard === 'function') {
                         scope.onNewCard();
                     }
                 };

                 card.addEventListener("transitionend", function(){
                     scope.$apply(function(){
                         if (counter % 2 == 0){
                             responseInput.value = "";
                             responseInput.focus();
                             submitButton.textContent = "Submit";
                             notifyOnNewCard();
                         }
                         else {
                             submitButton.textContent = "OK";
                             submitButton.focus();
                             notifyOnResponse(responseInput.value);
                         }
                      });
                      flippingInProgress = false;
                  });

                 scope.flipCard = function(){
                     counter++;
                     flippingInProgress = true;
                     document.getElementById("card").style.transform = `rotateY(${180*counter}deg)`;
                 }

                 scope.insertChar = function(event){
                     var insertText = event.target.textContent;
                     var currentText = responseInput.value;
                     var newTextContent = currentText.slice(0, responseInput.selectionStart);
                     newTextContent += insertText;
                     newTextContent += currentText.slice(responseInput.selectionStart)
                     var cursorLocation = responseInput.selectionStart;
                     responseInput.value = newTextContent;
                     responseInput.setSelectionRange(cursorLocation + 1, cursorLocation + 1);
                 }

                 scope.keypressHandler = function(evt){
                     if ((flippingInProgress == false) && (evt.which == 13)){
                         if ((evt.target.id == "submit-button") || (evt.target.id == "response-input")){
                             scope.flipCard();
                         } else {
                             scope.insertChar(evt);
                         }
                     };
                 }

                 scope.submitButtonClickHandler = function(){
                     if (flippingInProgress == false){
                         scope.flipCard();
                     }
                 }

            }
        };
    }

    angular
        .module('spanish')
        .directive('flashcards', flashcards);
})();
