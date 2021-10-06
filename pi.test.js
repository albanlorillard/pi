function approxPi(pts) {

    const insidePts = pts.filter( ([x, y]) => Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2))) <= 1);

    return (insidePts.length/pts.length) * 4;
}


test('example', () => {

    const generatePoints = (n) => {
        const pts = [];
        for (let i = 0; i< n ; i++) {
            const x = Math.random();
            const y = Math.random();
            pts.push([x,y]);
        }
        return pts;
    }

    // Arrange
    const pts = generatePoints(100000);

    // Act
    const result = approxPi(pts);

    // Assert
    console.log(result);
    expect(result).toBeCloseTo(3.14, 1);
})

test('example 2', () => {

    const generatePoints = (n) => {
        const pts = [];
        for (let i = 0; i< n ; i++) {
            const x = Math.random();
            const y = Math.random();
            pts.push([x,y]);
        }
        return pts;
    }

    // Arrange
    const pts = generatePoints(1000000);

    // Act
    const result = approxPi(pts);

    // Assert
    console.log(result);
    expect(result).toBeCloseTo(3.14, 2);

})