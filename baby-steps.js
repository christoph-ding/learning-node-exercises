let processArguments = process.argv

let numbers = processArguments.slice(2)

let sum = numbers.reduce((accumulator, elem) => {
  return Number(accumulator) + Number(elem)
})
console.log(sum)
