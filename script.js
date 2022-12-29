// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.

// let arr = [4, 54, 49]
// let newArr = arr.map((el) => {
//     return el * el
// })
// console.log (newArr)



// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.filter ((el) => {
//     return el < 0
// })
// console.log (newArr)



// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

// let arr = [3, 51, 30, 54, 60]
// let newArr = arr.filter((el) => {
//     return el % 2 === 0
// })

// console.log (newArr)



// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша']. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr = ['Бегимай', 'Баяман', 'Калмамат','Саша']
// let newArr = arr.filter ((el) => {
//     return el.length > 5 
// })
// console.log (newArr)



// task5  Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.

// let arr =  [-13, 96, -41, -28, 40]
// let newArr = arr.filter ((el) => {
//     return el < 0
// })
// console.log (newArr.length)



// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

// let arr = [3, 51, -30, -54, 60]
// let newArr = arr.filter ((el) =>{
//     return el > 0
// })

// let result = arr.map ((el) => {
//     if (el > 30) {
//         return Math.sqrt (el) 
//     } else {
//         return el
//     }
// })

// console.log (result)



// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.


// let arr=[55, 44, 55, 44, 15, 49];
// let obj = arr.reduce((acc, rec) => (acc[rec] = (acc[rec] || 0) + 1, acc), {});

// let uniq = Object.keys(obj).filter(rec => obj[rec] == 1).map(Number)

// console.log(uniq)



// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// let newArr = arr.map ((el) => {
//     return el.length
// })
// console.log(newArr)    

