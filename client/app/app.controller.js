class AppController {
    constructor($timeout, $scope) {
        'ngInject';
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    cancelNotify() {
        this.notify = false;
    }

    startNotify() {
        this.notify = true;
        this.$timeout(() => this.notify = false, 2000);
    }

    $onInit() {
        this.$scope.$on('onDataUpdated', this.startNotify.bind(this));
    }
}


export default AppController;