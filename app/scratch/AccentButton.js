(function() {
    function accentButton() {

        return {
            templateUrl: '/templates/directives/accent_button.html',
            replace: true,
            restrict: 'E',
            scope: {
                onSelect: '&',
            },
            link: function(scope, element, attributes) {

                scope.char = attributes.char;

                var notifyOnSelect = function() {
                    if (typeof scope.onSelect === 'function') {
                        scope.onSelect({char:scope.char});
                    }
                };

                scope.keypressHandler = function(evt){
                    if (evt.which == 13){
                        scope.select();
                    };
                }

                scope.select = function(){
                    notifyOnSelect();
                }
            }
        };
    }

    angular
        .module('spanish')
        .directive('accentButton', accentButton);
})();
