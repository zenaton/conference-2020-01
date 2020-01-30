module.exports.handle = function*(...input) {
  // dispatch child workflow, and add to waiting list
  this.ids = [
    this.run.workflow("ChildWorkflow", this.context.id, ...input),
    this.run.workflow("ChildWorkflow", this.context.id, ...input),
    this.run.workflow("ChildWorkflow", this.context.id, ...input)
  ].map(job => job.id);
  // wait for completion of all child workflows
  yield this.wait.event("allWaitCompleted").forever();
  
  // let's continue
  yield this.run.task("TaskC", ...input);
};

module.exports.onEvent = function*(name, ...data) {
  let i = this.ids.indexOf(name);
  if (i >= 0) {
    // if this is a waited event
    this.ids.splice(i,1);
    // if last on, send allWaitCompleted to itself
    if (this.ids.length === 0) this.send("allWaitCompleted");
  }
}
  