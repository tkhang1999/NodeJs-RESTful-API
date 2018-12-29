const rect = require("./rectangle.js");

const solveRect = (l, b) => {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b, (err,rectangle) => {
        if (err) {
            console.log("ERROR: " + err.message);
        }
        else{
            console.log("The area of the rectangle: " + rectangle.area());
            console.log("The perimeter of the rectangle: " + rectangle.perimeter());
        }
    });

    console.log("This statement is after the call to rect()");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);