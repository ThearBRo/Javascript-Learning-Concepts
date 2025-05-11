//////////////////////////////////////////////////////////////
// Funtion inside the function that create new function 🦾 //
/////////////////////////////////////////////////////////////

function myClass() {
  const people = 20; // Work with const and !var

  function numPeople() {
    console.log(people);
  }
  return numPeople;
}

const myClassA = myClass();

// myClassA();

/////////////////////////////////////////////////////////////////////////////////
// It work so well with the way call the function inside the first function 🆕//
////////////////////////////////////////////////////////////////////////////////

function init() {
  var man = "Thearith";
  function displayName() {
    console.log(man);
  }
  displayName();
}

// init();

//////////////////////////
// Conditonal Statement //
//////////////////////////
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
// console.log(x);

///////////////////////////////////
// Double add statement function //
///////////////////////////////////

function makeAdd(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdd(5);
// console.log(add5(10));

///////////////////////////////////////////////////////////////////////////
// How we can access function inside function using Counter Example////////
// Using the arrow Function ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function makeCounter() {
  let num = 0;
  function changeBy(i) {
    num += i;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },

    value() {
      return num;
    },
  };
}

const counter1 = makeCounter();

// console.log(counter1.value());

// counter1.increment(); + 1
// counter1.increment(); + 2
// counter1.increment(); + 3
// counter1.decrement(); - 1

// console.log(counter1.value()); 2

// ============================================================================ //

///////////////////////////
// Global Scope function //
///////////////////////////

/////////////////////////////////////
// Advance closure Value of Sum 🅰️//
/////////////////////////////////////

const e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

// console.log(sum(1)(2)(3)(4)); 20

/////////////////////
// Another Example // *( STRING )
/////////////////////

function ILoveVideoGame(what) {
  return function (why) {
    return function (where) {
      return function (How) {
        return function (when) {
          return what + why + where + How + when;
        };
      };
    };
  };
}

// console.log(
//   ILoveVideoGame("Dragon Dogma")(
//     " Because i love Fantasy, Medieval and Quest Castle"
//   )(
//     " I play video game in my room, watching film and going around looking at history stuff"
//   )(" By watching these kind of stuff it makes my heart skipped so fasinating")(
//     " since i was in Middle-school throughout High-school and still Today"
//   )
// );

// Out put // JUST LOOK AT WHAT WE ACHIEVED JUST BY WRITING THIS FUNCTION LIKE DAMN!!! //🔭
// Dragon Dogma Because i love Fantasy, Medieval and Quest Castle I play video game in my room, watching film
// and going around looking at history stuff By watching these kind of stuff it makes my heart skipped so fasinating
//  since i was in Middle-school throughout High-school and still Today

// LOOP WITH FUNCTION //

function loop() {
  var dance = [
    { style: "Clapped", song: "despacito" },
    { style: "Mexicano", song: "BoemBoem" },
    { style: "Francois", song: "Danse Danse" },
  ];
  for (i = 0; i < dance.length; i++) {
    // console.log(dance[i]); // items ^
    // console.log(dance[i].style == "Francois"); // True & False
  }
}
loop();

// CLASS OBJECT // 😶

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
