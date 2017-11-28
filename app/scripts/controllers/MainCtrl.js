(function() {
    function MainCtrl(Options) {
        this.recordOption = function(optionName){
            Options.mainOption = optionName;
        }
    }

    angular
        .module('spanish')
        .controller('MainCtrl', ['Options', MainCtrl]);
})();
