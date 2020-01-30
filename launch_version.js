const uniqid = require("uniqid");
const { run, select } = require("./client");

// dispatch a workflow
const tag = `id:${uniqid()}`;
run.withTag(tag).workflow("VersionWorkflow");

// then send it an event
setTimeout(function() {
  select
    .workflow("VersionWorkflow")
    .withTag(tag)
    .send("MyEvent");
}, 15000);
