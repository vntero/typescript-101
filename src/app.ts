function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(_: Function) {
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
            hookEl.innerHTML = template
        }
    }
}



@WithTemplate('<h1>My Person Object</h1>', 'app')
class Character {
    name= 'Max'

    constructor(){
        console.log('Creating a character object...')
    }
}

const char = new Character()

console.log(char)