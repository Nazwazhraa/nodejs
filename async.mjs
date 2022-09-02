function samplePromise(){
    return Promise.resolve("Nazwa")
}

const name = await samplePromise();
console.info(name);