(function() {
    'use strict';
    // jshint latedef: nofunc

    var module = angular
        .module('tpl.modalManager');

    module.service('modalManager', modalManager);

    function modalManager() {
        var modals = [];

        var service = {
        	saveModal: saveModal,
        	closeModals: closeModals
        };

        return service;

        ////////////////

        function saveModal(modal) {
            modals.push(modal);
        }

        function closeModals() {
            angular.forEach(modals, function(modal) {
                modal.dismiss ? modal.dismiss() : (modal.close ? modal.close() : null); // jshint ignore: line
            });
            modals = [];
        }
    }
})();
