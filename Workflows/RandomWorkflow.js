module.exports.handle = function*() {

    this.choice = this.random();

    if (this.choice > 0.5) {
        yield* this.handle1();
    } else {
        yield* this.handle2();
    }
    yield this.run.task("TaskC");
};

module.exports.handle1 = function*() {
    yield this.run.task("SendEmail", "test email 1");
    yield this.run.task("TaskA");
};

module.exports.handle2 = function*() {
    yield this.run.task("SendEmail", "test email 2");
    yield this.run.task("TaskB");
};