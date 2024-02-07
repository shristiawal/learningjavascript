function resolveAfter2second(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('i am asynchronous');

        },2000);
    });
}
async function asyncall(){
    console.log("i am synchronous ")
    const result = await resolveAfter2second();
    console.log(result);

}
asyncall();;