//drinkWater- 5000
//pushCode- 4500
//goWashroom- 7000

function drinkWater(){
   
    return new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            const drinked =false;
            if(drinked){
                resolve("i have drinked water");
            }
            else{
            reject("you have not drinked");
            }
        },5000);

    })
    
}
drinkWater().then((value)=>{console.log(value)}) .catch((value)=>{console.log(value)});
