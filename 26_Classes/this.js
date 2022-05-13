// http://jsraccoon.ru/es6-classes

/**
 * this
 */

const obj = {
  name: "Alex",
  sing() {
    console.log("a this ", this);
    let anotherFunc = function () {
      console.log("b this ", this);
    };
    anotherFunc();
  },
};

obj.sing();

// a this  {name: "Alex", sing: ƒ}
// b this  Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

let b = {
  name: "jay",
  say() {
    console.log("this is ", this);
  },
};
b.say();
// this is  {name: "jay", say: ƒ}

let c = {
  name: "jay",
  say() {
    return function () {
      console.log("this is ", this);
    };
  },
};
c.say()();
// this is  Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

let d = {
  name: "jay",
  say() {
    // стрелочная функция не имеют собственного контекста выполнения.
    return () => console.log("this is ", this);
  },
};
d.say()();
// this is  {name: "jay", say: ƒ}



