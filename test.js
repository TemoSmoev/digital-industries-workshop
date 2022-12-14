// task 1
const call1 = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call1.says();

// task 2
const call2 = {
  caller: "mom",
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call2.says();

// task 3
const call3 = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall3 = call3.says;

newCall3();

// task 4
function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call4 = {
  caller: "mom",
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall4 = call4.anotherCaller;

newCall4();
