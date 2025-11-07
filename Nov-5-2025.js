/*
    The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

    Process I found:
        -generate some random points inside the first quadrant of the unit square  
        -if "x^2 + y^2 <= 1" is satisified incremenbt the counter
        -multiple the number of internal circle points by 4 because we are only checking the first quadrant and need all 4, then divide by the total number of points tested
*/




function monteCarlo(max){
    let circleCounter = 0;

    for(let i = 0; i < max; i++){
        const x = Math.random();        //calculate a point in the range of [0, 1] as it has to be inside the unit square in the first quadrant
        const y = Math.random();

        const sum = Math.pow(x, 2) + Math.pow(y, 2);

        //unit circle has a radius of 1
        if(sum <= 1){
            circleCounter++;
        }
    }

    //compute pi
    const pi = 4 * circleCounter / max;

    return pi;
}

console.log(monteCarlo(1000000));