

    function outside() {
      // what is the scope of this variable?
      var x = 1;

      // what is the scope of this function and the scope of y?
      function inside(y) {

        console.log(x + y);
      }

      return inside;

    

    // what is happening here?
    var insideOut = outside();

    // What does this return?
    insideOut(2);

    // Uncaught ReferenceError: x is not defined.
    // How does insideOut have access to x?
    console.log("The value of 'x' outside 'outside()' is: " + x);
    }
  


