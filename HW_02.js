  // 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1.

let x = 2
for (let n = 1; n <= 10; n++) {
  console.log(x ** n)
}

  // 1.1. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2.

const checkArg = function(num) {
  return 2**num
}
console.log(checkArg(10))

  // 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):), в третьей :):):) и так далее.

let smile = ":)"
let result = ""
for (let n = 1; n <= 5; n++) {
  console.log(result += smile)
}

  // 2.2. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль, а также количество строк для вывода.

function printLaugh (text, lineNumber) {
  for (let n = 1; n <= lineNumber; n++) {
    console.log(text.repeat(n))
  }
}
printLaugh("ha", 8)

  /* 3.*  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
          e.g. function getWordStructure(word)
          В консоли:
          Слово (word) состоит из  (число) гласных и (число) согласных букв
          Проверки: 'checklist', 'Test-case' */

let vowels = "aeiuoy".split('')
let consonants = "bcdfghjklmnpqrstvwxyz".split('')
let numberOfVowels = 0
let numberOfConsonants = 0

function getWordStructure(word) {
word = word.toLowerCase()
for (let n = 0; n < word.length; n++) {
    if (vowels.includes(word[n])) {
        numberOfVowels++
    } else if (consonants.includes(word[n])) {
        numberOfConsonants++
    }
}
console.log("Слово " + word + " состоит из " + numberOfVowels + " гласных и " + numberOfConsonants + " согласных букв.")
}

getWordStructure("checklist")
getWordStructure("Test-case")

  // 4.* Написать функцию, которая проверяет, является ли слово палиндромом
  //     e.g. function palindrom(word)

function palindrom(word) {
    let checkWord = ""
    for (n = word.length - 1; n >= 0; n --) {
        checkWord = checkWord + word[n]
    }
    if (word.toLowerCase() == checkWord.toLowerCase()) {
        console.log(word + " - палиндром")
    } else  {
        console.log(word + " - не палиндром")
    }
}

palindrom("довод")
palindrom("аргумент")
