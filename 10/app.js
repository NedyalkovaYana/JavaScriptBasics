function GetRect([x1, y1, x2, y2]) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let a = Math.max(x1, x2) - Math.min(x1, x2);
    let b = Math.max(y1, y2) - Math.min(y1, y2);
    console.log(`Area = ${a * a}`);
    console.log(`Perimeter = ${2 * (a + b)}`);

}
GetRect(['10', '50', '60', '20']);
GetRect(['30', '40', '50', '-10']);
