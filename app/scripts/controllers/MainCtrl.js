(function() {
    function MainCtrl(Nav) {
        this.nav = Nav;
    }

    angular
        .module('spanish')
        .controller('MainCtrl', ['Nav', MainCtrl]);
})();
