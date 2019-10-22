const mocha = require("mocha");

class Reporter extends mocha.reporters.Spec {
  constructor(runner) {
    super(runner);

    runner.on("start", () => {
      // clear screen
      process.stdout.write("\u001b[2J");

      // move cursor to the top
      process.stdout.write("\u001b[1;3H");

      // clear (this works for tmux)
      process.stdout.write("\u001b[3J");
    });
  }
}

module.exports = Reporter;
