    // 1. Создать переменную “item_1”
let item_1

    // 2. Присвоить переменной item_1 цифру 5
item_1 = 5

    // 3. Вывести в консоль item_1
console.log(item_1)

    /* 4. Создать переменную “item_2”
    5. Присвоить переменной item_2 цифру 3
    6. Вывести в консоль item_2 */

let item_2 = 3
console.log(item_2)

    /*7. Создать переменную “item_3”
    8. Присвоить переменной item_3 сложение item_1 и item_2
    9. Вывести в консоль item_3 */

let item_3 = item_1 + item_2
console.log(item_3)

    /* 10. Создать переменную “item_4”
    11. Присвоить переменной item_4 строку “Yolochka”
    12. Вывести в консоль item_4 */

let item_4 = "Yolochka"
console.log(item_4)

    //13. Вывести в консоль сложение item_3 и item_4

console.log(item_3 + item_4)

    //14. Вывести в консоль умножение item_3 и item_4

console.log(item_3 * item_4)

    /* 15. Создать переменную “item_5”
    16. Присвоить переменной item_5 переменную item_3 */

let item_5 = item_3

    /* 17. Создать переменную item_6
    18. Создать переменную item_6_type
    19. Присвоить переменной item_6 значение 15
    20. Присвоить переменной item_6_type тип переменной item_6 */

let item_6 = 15
let item_6_type = typeof item_6

    //21. Вывести в консоль значения данных item_6 в виде “item_6 ==”  item_6,  “item_6_type ==”  item_6_type

console.log('item_6 ==', item_6,", ",'item_6_type ==', item_6_type)

    //22. Вывести в консоль тип данных item_6 в виде “item_6 ==”  item_6,  “item_6_type ==”  item_6_type

console.log('item_6 ==', typeof item_6,", ",'item_6_type ==', + typeof item_6_type)

    /* 23. Создать переменную item_7 и в ней преобразовать item_6 в String
    24. Создать переменную item_7_type
    25. Присвоить переменной item_7_type тип переменной item_7 */

let item_7 = String(item_6)
let item_7_type = typeof item_7

    //26. Вывести в консоль тип данных item_7 в виде “item_7 ==”  item_7,  “item_7_type ==”  item_7_type

console.log('item_7 ==', String(item_6),", ",'item_7_type ==', typeof item_7)

    /* 27. Создать переменную “age_1” и присвоить ей значение 10
    28. Создать переменную “age_2” и присвоить ей значение 18
    29. Создать переменную “age_3” и присвоить ей значение 60
    30. Создать if в котором будете проверять значение переменной age_1
    31. Если age_1 < age_2, вывести в консоль “You don’t have access 'cause your age is ” + age_1 + “ It’s less than ”
    32. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome!”
    33. Если age_1  >= age_3, вывести в консоль “Keep calm and watch Culture channel”
    34. Иначе выводите “Technical works” */

let age_1 = 10
let age_2 = 18
let age_3 = 60

if (age_1 < age_2) {
    console.log("You don't have access 'cause your age is " + age_1 + ". It's less than " + age_2)
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!")
} else if (age_1 >= age_3) {
    console.log("Keep calm and watch 'Culture channel'")
} else {
    console.log("Technical works")
}

    // 35. Преобразовать код из 27-34 пунктов в функцию, принимающую на вход возраст.
    Вывести в консоль результат работы функции с проверочными значениями для границ 18 и 60 лет */

let age_1 = 18
let age_2 = 60

const checkAge = function(age) {
    if (age < age_1) {
        console.log("You don't have access 'cause your age is " + age + ". It's less than " + age_1)
    } else if (age >= age_1 && age < age_2) {
        console.log("Welcome!")
    } else if (age >= age_2) {
        console.log("Keep calm and watch 'Culture channel'")
    } else {
        console.log("Technical works")
    }
}

checkAge(18)
checkAge(60)
checkAge(17)
checkAge(19)
checkAge(59)
checkAge(61)

    // 36. Преобразовать п. 35 таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - отображалась ошибка.

let age_1 = 18
let age_2 = 60

const checkAge = function(age) {
    if (typeof age == "number") {
        if (age < age_1) {
            console.log("You don't have access 'cause your age is " + age + ". It's less than " + age_1)
        } else if (age >= age_1 && age < age_2) {
            console.log("Welcome!")
        } else if (age >= age_2) {
            console.log("Keep calm and watch 'Culture channel'")
        } else {
            console.log("Technical works")
        }
    } else  {console.log("Field must contain only numbers")}
    }

checkAge(18)
checkAge("eighteen")

    // 37. Преобразовать п. 36 таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number.

let age_1 = 18
let age_2 = 60

const checkAge = function(age) {
    if (!isNaN(age)) {
        if (age < age_1) {
            console.log("You don't have access 'cause your age is " + age + ". It's less than " + age_1)
        } else if (age >= age_1 && age < age_2) {
            console.log("Welcome!")
        } else if (age >= age_2) {
            console.log("Keep calm and look 'Culture channel'")
        } else {
            console.log("Technical work")
        }
    } else  {console.log("Field must contain only numbers")}
}

checkAge(60)
checkAge("60")
checkAge("sixty")
