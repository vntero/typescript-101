const names: Array<string> = [] // same as string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('This is done')
    }, 2000)
})

promise.then(data => {

})