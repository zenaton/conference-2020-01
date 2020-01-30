module.exports.handle = function*() {
  this.run.task("TaskA");
  this.run.task("TaskB");
  yield this.run.task("TaskC");
  yield this.wait.event("MyEvent").forever();
};

module.exports.onEvent = function*(name) {
  this.log(`Event ${name} received for Version 1`);
};
