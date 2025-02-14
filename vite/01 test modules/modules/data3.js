console.log("---data3")
let number = 0
const allFunctions = {

    add(value) {
        number += value
    },

    remove(value) {
        number -= value
    }

}

export { number, allFunctions } 