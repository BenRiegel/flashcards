(function() {
    function OptionsCtrl(Options) {
        this.options = Options;
    }

    angular
        .module('spanish')
        .controller('OptionsCtrl', ['Options', OptionsCtrl]);
})();
