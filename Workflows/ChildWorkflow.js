module.exports.handle = function*(parentId, ...input) {
   // Workflow implementation
   yield this.run.task("TaskA");
   yield this.run.task("TaskB");
   
  // When completed, send an event to parent workflow with output
  this.select.workflow().withId(parentId).send(this.context.id, 'ok');
};

