const { task, workflow } = require("zenaton");

// workflow definitions
workflow("ParentWorkflow", require("./Workflows/ParentWorkflow"));
workflow("ParallelParentWorkflow", require("./Workflows/ParallelParentWorkflow"));
workflow("DateWorkflow", require("./Workflows/DateWorkflow"));
workflow("RandomWorkflow", require("./Workflows/RandomWorkflow"));
workflow("ChildWorkflow", require("./Workflows/ChildWorkflow"));
workflow("DocumentValidation", require("./Workflows/DocumentValidation"));

// tasks definitions
task("TaskA", require("./Tasks/TaskA"));
task("TaskB", require("./Tasks/TaskB"));
task("TaskC", require("./Tasks/TaskC"));
task("TaskD", require("./Tasks/TaskD"));
task("TaskWithRetry", require("./Tasks/TaskWithRetry"));
task("SendEmail", require("./Tasks/SendEmail"));

// Versioned Workflow
workflow("VersionWorkflow_v0", require("./Workflows/VersionWorkflow_v0"));
// workflow("VersionWorkflow_v1", require("./Workflows/VersionWorkflow_v1"));
// workflow("VersionWorkflow_v2", require("./Workflows/VersionWorkflow_v2"));
