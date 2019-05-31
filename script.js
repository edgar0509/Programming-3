// var matrix = [
//     [0, 0, 1, 0, 0, 0, 1, 3, 2, 0],
//     [1, 0, 0, 4, 5, 1, 1, 0, 4, 2],
//     [0, 1, 5, 2, 0, 3, 2, 1, 0, 1],
//     [0, 2, 1, 0, 4, 0, 0, 1, 0, 0],
//     [1, 1, 0, 5, 0, 2, 1, 0, 3, 1],
//     [1, 1, 4, 2, 5, 1, 4, 2, 1, 0],
//     [1, 1, 0, 0, 2, 2, 4, 5, 2, 2],
//     [0, 0, 1, 0, 0, 0, 1, 3, 2, 0],
//     [1, 0, 0, 4, 5, 1, 1, 0, 4, 2],
//     [0, 1, 5, 2, 0, 3, 2, 1, 0, 1],
//     [0, 2, 1, 0, 4, 0, 0, 1, 0, 0],
//     [1, 1, 0, 5, 0, 2, 1, 0, 3, 1],
//     [1, 1, 4, 2, 5, 1, 4, 2, 1, 0],
//     [1, 1, 0, 0, 2, 2, 4, 5, 2, 2]
// ];


// stex zangvacnery verjum Arr barov
let matrix = [];
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var doctorArr = [];
var yakudzaArr = [];
var chechenArr = [];
var side = 30;


function setup() {

    // Մատրիցի ստեղծում
    let rows = 30; // Տողերի քանակ
    let columns = 30; // Սյուների քանակ

    for (let y = 0; y < rows; y++) {
        matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
        for (let x = 0; x < columns; x++) {
            let a = Math.floor(Math.random() * 100);
            if (a >= 0 && a < 10) {
                matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
            }
            if (a >= 10 && a < 20) {
                matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
            }
            else if (a >= 20 && a < 35) {
                matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
            }
            else if (a >= 35 && a < 65) {
                matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
            }
            else if (a >= 65 && a < 80) {
                matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
            }
            else if (a >= 80 && a < 95) {
                matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
            }
            else if (a >= 95 && a <= 100) {
                matrix[y][x] = 6;
            }
        }
    }



    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');



    //pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);

            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                var doc = new Doctor(x, y, 4);
                doctorArr.push(doc)
            }
            else if (matrix[y][x] == 5) {
                var yak = new Yakudza(x, y, 5);
                yakudzaArr.push(yak)
            }
            else if (matrix[y][x] == 6) {
                var che = new Chechen(x, y, 6);
                chechenArr.push(che);
            }

        }
    }

}
//draw uxaki nerkuma
function draw() {
    console.log(predatorArr)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");

            }
            else if (matrix[y][x] == 3) {
                fill("red");

            }
            else if (matrix[y][x] == 4) {
                fill("blue");

            }

            else if (matrix[y][x] == 5) {
                fill("black");

            }
            else if (matrix[y][x] == 6) {
                fill("White");
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");

            }
            rect(x * side, y * side, side, side);
        }
    }

    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }

    for (var i in predatorArr) {
        // predatorArr[i].move();
        predatorArr[i].eat();
        // predatorArr[i].mul();
        // predatorArr[i].die();
    }
    for (var i in doctorArr) {
        doctorArr[i].life();
        doctorArr[i].move();
        doctorArr[i].die();
    }
    for (var i in yakudzaArr) {
        yakudzaArr[i].shoot();

    }
    for (var i in chechenArr) {
        chechenArr[i].medved();
    }

}















