// 1. Создать переменную “item_1”
let item_1

// 2. Присвоить переменной item_1 цифру 5
item_1 = 5

// 3. Вывести в консоль item_1
console.log(item_1)

/* 4. Создать переменную “item_2”
5. Присвоить переменной item_2 цифру 3 */

let item_2 = 3
console.log(item_2)

// 6. Вывести в консоль item_2

let item_3 = item_1 + item_2
console.log(item_3)

let item_4 = "Yolochka"
console.log(item_4)

console.log(item_3 + item_4)

console.log(item_3 * item_4)

let item_5 = item_3

let item_6 = 15
let item_6_type = typeof 15

console.log(item_6 == 15, item_6_type == typeof 15)

let item_7 = String(item_6)
let item_7_type = typeof item_7

console.log(item_7 == String(item_6), item_7_type == typeof item_7)

let age_1 = 10
let age_2 = 18
let age_3 = 60

if (age_1 < age_2) {
    console.log(("You don't have access 'cause your age is " + age_1) + (". It's less then " + age_2))
} if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!")
} if (age_1 > age_3) {
    console.log("Keep calm and look 'Culture channel'")
} else {
    console.log("Technical work")
}