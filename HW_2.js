/*1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Вывести в консоль результат работы функции с возрастами 17, 18, 61*/
const age_2 = 18
const age_3 = 60

const checkAge_1 = function(age1) {
    if(age1 < age_2){
        console.log("You don’t have access cause your age is", age1, "It’s less then")
    }
    else if(age1 >= age_2 && age1 < age_3){
        console.log("Welcome  !")
    }
    else if(age1 > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}

checkAge_1(17)
checkAge_1(18)
checkAge_1(61)

/*2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.*/

const checkAge_2 = function(age2) {
    if(typeof(age2) == 'number') {
    if(age2 < age_2) {
        console.log("You don’t have access cause your age is", age2, "It’s less then")
    }
    else if(age2 >= age_2 && age2 < age_3){
        console.log("Welcome  !")
    }
    else if(age2 > age_3){
        console.log("Keep calm and look Culture channel")
    }
 } else {
        console.log("Technical work")
    }
}

checkAge_2(17)
checkAge_2(18)
checkAge_2(61)
checkAge_2('hello')

/*3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number*/

const checkAge_3 = function(age3) {
    if(age3 && !isNaN(age3)) {
    if(age3 < age_2) {
        console.log("You don’t have access cause your age is", age3, "It’s less then")
    }
    else if(age3 >= age_2 && age3 < age_3){
        console.log("Welcome  !")
    }
    else if(age3 > age_3){
        console.log("Keep calm and look Culture channel")
    }
 } else {
        console.log("Technical work")
    }
}

checkAge_3(17)
checkAge_3(18)
checkAge_3(61)
checkAge_3('hello')
checkAge_3('15')
checkAge_3('')

/*4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке */

const checkAge_4 = function(age4) {
    if(age4 && !isNaN(age4)) {
    if(age4 < age_2) {
        alert(`You don’t have access cause your age is" ${age4} It’s less then`)
    }
    else if(age4 >= age_2 && age4 < age_3){
        alert("Welcome  !")
    }
    else if(age4 > age_3){
        alert("Keep calm and look Culture channel")
    }
 } else {
        alert("Technical work")
    }
}

checkAge_4(prompt('Enter your age'))