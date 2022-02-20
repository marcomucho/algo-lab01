import * as fs from 'fs'

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        for (let k = i; k > 0 && array[k] < array[k - 1]; k--) {
            const current = array[k]
            array[k] = array[k - 1]
            array[k-1] = current
        }
    }
}

const size = 60_000

const numberArray = fs.readFileSync('numberData.txt').toString().trim().split('\n').slice(0, size).map(n => Number(n))
const stringArray = fs.readFileSync('stringData.txt').toString().trim().split('\n').slice(0, size)

//NUMBER ARRAY
console.log('------------------------------------------------------------------------------------')
const numberAverageStart = Date.now()
insertionSort(numberArray)
const numberAverageEnd = Date.now()
console.log(`Array data: Numbers\nArray size: ${size}\nCase: Average\nElapsed time: ${ (numberAverageEnd - numberAverageStart) / 1000 }s\n`)

const numberBestStart = Date.now()
insertionSort(numberArray)
const numberBestEnd = Date.now()
console.log(`Array data: Numbers\nArray size: ${size}\nCase: Best\nElapsed time: ${ (numberBestEnd - numberBestStart) / 1000 }s\n`)

numberArray.reverse()
const numberWorstStart = Date.now()
insertionSort(numberArray)
const numberWorstEnd = Date.now()
console.log(`Array data: Numbers\nArray size: ${size}\nCase: Worst\nElapsed time: ${ (numberWorstEnd - numberWorstStart) / 1000 }s`)

//STRING ARRAY
console.log('------------------------------------------------------------------------------------')
const stringAverageStart = Date.now()
insertionSort(stringArray)
const stringAverageEnd = Date.now()
console.log(`Array data: String\nArray size: ${size}\nCase: Average\nElapsed time: ${ (stringAverageEnd - stringAverageStart) / 1000 }s\n`)

const stringBestStart = Date.now()
insertionSort(stringArray)
const stringBestEnd = Date.now()
console.log(`Array data: String\nArray size: ${size}\nCase: Best\nElapsed time: ${ (stringBestEnd - stringBestStart) / 1000 }s\n`)

stringArray.reverse()
const stringWorstStart = Date.now()
insertionSort(stringArray)
const stringWorstEnd = Date.now()
console.log(`Array data: String\nArray size: ${size}\nCase: Worst\nElapsed time: ${ (stringWorstEnd - stringWorstStart) / 1000 }s`)
console.log('------------------------------------------------------------------------------------')