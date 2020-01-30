const uniqid = require("uniqid");
const { run, select } = require("./client");

const tag = `id:${uniqid()}`;
run.withTag(tag).workflow("DocumentValidation", {"user":{"email":"foo@example.com"},"documents":[{"type":"driver-lisence"},{"type":"passeport"}]});

// then send it an event
setTimeout(function() {
    select
        .workflow("DocumentValidation")
        .withTag(tag)
        .send("ProofReceivedEvent", {"document_id": 456, "isValid": true});
}, 5000);

setTimeout(function() {
    select
        .workflow("DocumentValidation")
        .withTag(tag)
        .send("ProofReceivedEvent", {"document_id": 759, "isValid": true});
}, 10000);

