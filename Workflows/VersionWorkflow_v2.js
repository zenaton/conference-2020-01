module.exports.handle = function*() {
  this.run.task("TaskA");
  this.run.task("TaskB");
  this.run.task("TaskC");
  yield this.run.task("TaskD");
  yield this.wait.event("MyEvent").forever();
};

module.exports.onEvent = function*() {
  this.log(`Event ${name} received for Version 2`);
};
