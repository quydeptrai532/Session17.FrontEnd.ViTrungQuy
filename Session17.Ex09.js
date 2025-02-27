let a = Number(prompt("Nhập hệ số a:"));
let b = Number(prompt("Nhập hệ số b:"));
let c = Number(prompt("Nhập hệ số c:"));

if (a === 0) {
    if (b === 0) {
        document.write("Phương trình vô nghiệm.");
    } else {
        let x = -c / b;
        document.write(`Phương trình có một nghiệm duy nhất: x = ${x}`);
    }
} else {
    let delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
        document.write("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.write(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    }
}
