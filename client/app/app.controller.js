class AppController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    cancelNotify() {
        this.notify = false;
    }

    startNotify() {
        this.notify = true;
    }

    log(item) {
        this.$log.log(item);
    }

    $onInit() {
    }
}


export default AppController;