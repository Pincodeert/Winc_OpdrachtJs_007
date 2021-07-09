/* eerste opdracht is een een functie te maken zonder argument.:
const paintWall = function (){
    console.log("The wall has been painted red");
};

paintWall();*/


/* in deze opdracht 1 argument toegevoegd aan de functie
const paintWall = function (color){
    console.log("The wall has been painted " + color);
};

paintWall("green")
paintWall("yellow")*/

const paintWall = function (color, location){
    console.log("The "+ location + " wall has been painted " + color);
};

const wall = "north";
const paint = "orange";


paintWall(wall, paint);
paintWall(paint, wall);
