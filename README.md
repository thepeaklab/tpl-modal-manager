# How to use
* Add ___tpl.modalManager___ as a dependency to your angular module  
    ```
    angular.module('yourModule', ['tpl.modalManager']);
    ```

* Inject ___modalManager___ in the controllers where you open modals of type ___ngDialog___ or ___angular ui bootstrap modal___
    ```
    .controller([..., 'modalManager'], function(..., modalManager)) {}
    ```

* Everytime you create a modal, save him in a variable and call the ___saveModal___ method of the modalManager
		```
    modalManager.saveModal(modal);
    ```

* Call the method ___closeModals___ of the modalManager in your event handler for state changes
    ```
    $rootScope.$on('$stateChangeStart', function() {
        modalManager.closeModals();
    })
    ```

That's it. Have fun.
