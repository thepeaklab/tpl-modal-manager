# How to use
* Add 'tpl.modalManager' as a dependency to your angular module
    angular.module('yourModule', ['tpl.modalManager']);
* Inject 'modalManager' in the controllers where you open modals of type 'ngDialog' or 'angular ui bootstrap modal'
    .controller([..., 'modalManager'], function(..., modalManager)) {}
* Everytime you create a modal, save him in a variable and call the saveModal method of the modalManager
    modalManager.saveModal(modal);
* Call the method closeModals of the modalManager in your event handler for state changes
    $rootScope.$on('$stateChangeStart', function() {
        modalManager.closeModals();
    })

That's it. Have fun.
