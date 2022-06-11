let yolochka4 = 4;
let yolochka6 = 6;
let yolochka_name = "zelyonaya"

let result = yolochka4 + yolochka6;
let result_2 = yolochka6 + yolochka_name;

// console.log(`result + ${yolochka4 + yolochka6}`)

// console.log(result);
// console.log(result_2);

let t = true
let f = false

// console.log(t + f)

if (f) {
    let igolochka = 3+5
    console.log("if true = " + igolochka)
} else {
    let shishka = 2+2
    console.log("if not true = " + shishka)
}


if (yolochka4 + yolochka6 == 10) {
    let igolochka = 3+5
    console.log("if true = " + igolochka)
}
else if (f) {
    let shishka = 2
    console.log("else if = " + shishka)
} else {
    let sprout = 2+2
    console.log("if not true = " + sprout)
}

let age = "18";

if (typeof(age) == "number") {
if (age >= 18 && age <= 60) {

    console.log("Full content")
}
else if (age < 18) {

    console.log("Cartoons")
}
else if (age > 60) {
    console.log("Culture")

}
} else {
    console.log("Good luck!")
}