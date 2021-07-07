const version = "3.12.1";

var beatles = ["Paul", "George", "John", "Ringo"];

function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];

      const cuantasLetras = name.length;

      console.log(
        name +
          " was found at index " +
          index +
          `and it has ${cuantasLetras} letters in it`
      );
    }
    // console.log("name and index after loop is " + name + ":" + index);
  }
  actuallyPrintingNames();
}

// console.log(names);

printNames(beatles);
