module.exports.handle = function*(...input) {
  const job = this.run.workflow("ChildWorkflow", this.context.id, ...input);
  //waiting for event sent by child workflow
  yield this.wait.event(job.id).forever();
  
  yield this.run.task("TaskC");
};




  