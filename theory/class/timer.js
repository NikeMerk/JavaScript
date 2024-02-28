class Timer {
  _myInterval;
  _localNumber = 0;
  constructor(container, number) {
    this.localNumber = number;
    this.defaultNumber = number;
    container.append(this.createDom().block);
  }

  createDom() {
    if (this.obj) return this.obj;
    const block = document.createElement("div");
    const display = document.createElement("div");
    const blockButton = document.createElement("div");
    const buttonStop = document.createElement("button");
    const buttonStart = document.createElement("button");
    const buttonReset = document.createElement("button");

    block.classList.add("main-block");
    display.classList.add("display");
    blockButton.classList.add("block-button");
    buttonStop.classList.add("button-stop");
    buttonStart.classList.add("button-start");
    buttonReset.classList.add("button-reset");

    display.textContent = this.localNumber;
    buttonStop.textContent = "stop";
    buttonStart.textContent = "start";
    buttonReset.textContent = "reset";

    blockButton.append(buttonStop, buttonStart, buttonReset);
    block.append(display, blockButton);

    buttonStop.addEventListener("click", () => {
      this.stopTimer();
    });
    buttonStart.addEventListener("click", () => {
      this.startTimer();
    });
    buttonReset.addEventListener("click", () => {
      this.resetTimer();
    });

    this.obj = { block, display };

    return { block, display };
  }

  startTimer() {
    clearInterval(this._myInterval);
    this._myInterval = setInterval(() => {
      this.localNumber--;
    }, 1000);
  }
  stopTimer() {
    clearInterval(this._myInterval);
  }
  resetTimer() {
    this.localNumber = this.defaultNumber;
    this.createDom().display.textContent = this._localNumber;
    clearInterval(this._myInterval);
  }

  set localNumber(value) {
    this._localNumber = value;
		console.log(this.createDom())
    this.createDom().display.textContent = value;
  }
  get localNumber() {
    return this._localNumber;
  }
}

new Timer(document.querySelector(".container"), 30);
