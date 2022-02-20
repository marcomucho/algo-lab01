let x = 3
while (x) {
    console.log(x)
    x--
}

const sortWorstCase = (array) => {
    const length = array.length
    const left = []
    const right = []

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            left.push(array.shift())
        } else {
            right.push(array.shift())
        }
    }
    
    return [...left, ...right]
}

console.log(sortWorstCase([1, 2, 3, 4, 5, 6, 7, 8]))