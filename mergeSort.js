import * as fs from 'fs'

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    const compareLeftRight = (leftArray, rightArray) => {
        const outputArray = []

        while (leftArray.length && rightArray.length) {
            if (leftArray[0]< rightArray[0]) {
                outputArray.push(leftArray.shift())
            } else {
                outputArray.push(rightArray.shift())
            }
        }

        return outputArray.concat(leftArray).concat(rightArray)
    }

    return compareLeftRight(mergeSort(left), mergeSort(right))
}

const size = 15_000
const numberArray = fs.readFileSync('numberData.txt').toString().trim().split('\n').slice(0, size).map(n => Number(n))
const stringArray = fs.readFileSync('stringData.txt').toString().trim().split('\n').slice(0, size)

//NUMBER ARRAY
console.log('------------------------------------------------------------------------------------')
const numberAverageStart = Date.now()
mergeSort(numberArray)
const numberAverageEnd = Date.now()
console.log(`Array data: Numbers\nArray size: ${size}\nCase: Average\nElapsed time: ${ (numberAverageEnd - numberAverageStart) / 1000 }s\n`)

const numberBest = mergeSort(numberArray)
const numberBestStart = Date.now()
mergeSort(numberBest)
const numberBestEnd = Date.now()
console.log(`Array data: Numbers\nArray size: ${size}\nCase: Best\nElapsed time: ${ (numberBestEnd - numberBestStart) / 1000 }s\n`)

const numberWorst = mergeSort(numberArray).reverse()
const numberWorstStart = Date.now()
mergeSort(numberWorst)
const numberWorstEnd = Date.now()
console.log(`Array data: Numbers\nArray size: ${size}\nCase: Worst\nElapsed time: ${ (numberWorstEnd - numberWorstStart) / 1000 }s`)

//STRING ARRAY
console.log('------------------------------------------------------------------------------------')
const stringAverageStart = Date.now()
mergeSort(stringArray)
const stringAverageEnd = Date.now()
console.log(`Array data: String\nArray size: ${size}\nCase: Average\nElapsed time: ${ (stringAverageEnd - stringAverageStart) / 1000 }s\n`)

const stringBest = mergeSort(stringArray)
const stringBestStart = Date.now()
mergeSort(stringBest)
const stringBestEnd = Date.now()
console.log(`Array data: String\nArray size: ${size}\nCase: Best\nElapsed time: ${ (stringBestEnd - stringBestStart) / 1000 }s\n`)

const stringWorst = mergeSort(stringArray).reverse()
const stringWorstStart = Date.now()
mergeSort(stringWorst)
const stringWorstEnd = Date.now()
console.log(`Array data: String\nArray size: ${size}\nCase: Worst\nElapsed time: ${ (stringWorstEnd - stringWorstStart) / 1000 }s`)
console.log('------------------------------------------------------------------------------------')