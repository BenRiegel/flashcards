(function() {
    function ToFromCtrl(Options) {
        this.mainOption = Options.mainOption;

        this.ui_sref = "quiz";

        this.recordOption = function(option){
            Options.toFromOption = option;
        }
    }

    angular
        .module('spanish')
        .controller('ToFromCtrl', ['Options', ToFromCtrl]);
})();
