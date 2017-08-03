function solve([radius]) {
    radius = Number(radius);
    let area = Math.PI * radius * radius;
    let perimeter = 2 * Math.PI * radius;
    console.log(area);
    console.log(perimeter);
}
solve(['5']);
