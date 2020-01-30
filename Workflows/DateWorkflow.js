module.exports.handle = function*(user, conference) {
    
    if (this.date().valueOf()/1000 < conference.date - 3600) {
        yield this.wait.until(conference.date-3600);

        yield this.run.task("SendEmail", user.email, "do not forget the conference");
    } 

    yield this.wait.until(conference.date+7200);

    yield this.run.task("SendEmail", user.email, "here is the video");
};
