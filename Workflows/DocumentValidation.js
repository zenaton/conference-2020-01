const { task } = require('zenaton');

module.exports.handle = function*(request) {
  let remainingReminders = 3;
  this.counter = request.documents.length;

  // While there are documents missing and the reminder limit hasn't been reached yet
  while (this.counter > 0 && remainingReminders > 0) {
    // Wait for a document to be uploaded for up to 3 days
    const event = yield this.wait.event("ProofReceivedEvent").for(3*24*3600);

    // If a document is received
    if(event) {
      // Get the data of the event
      const [eventName, eventData] = event;
      // to know if the document is valid and update the counter of remaining documents.
      if (eventData.isValid) {
        this.counter--;
      }
    } else {
      // If no document has been uploaded within 3 days
      // Send an email reminder to the user
      yield this.run.task('sendEmailReminder', request, remainingReminders);
      remainingReminders--;
    }
  }

  // Notify the user via email using the Sendgrid API connector
  // about the registration process completion
  // depending on the number of valid documents.
  // If all documents are valid
  if (this.counter === 0) {
    // Notify the user that the registration process is complete
    yield this.run.task('sendEmailRegistrationComplete', request);
  } else {
    // Notify the user that the registration process failed
    yield this.run.task('sendEmailRegistrationFailed', request, remainingReminders);
  }
};

task('sendEmailReminder', async function(request, remainingReminders) {
  // ...
});


task('sendEmailRegistrationComplete', async function(request) {
  // ...
});

task('sendEmailRegistrationFailed', async function(request, remainingReminders) {
  // ...
});


