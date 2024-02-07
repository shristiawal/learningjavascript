//walk the dog-3500
//clean the kitchen-5000
//throw the trash-4000



function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const walked = true;
            if(walked){resolve("I've walked the dog")}
            else{reject("No you didn't walked the dog")}
        }, 3500);
    })
}




function cleanKitchen(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cleaned = true;
            if(cleaned){resolve("I've already cleaned the kitchen")}
            else{reject("You've not cleaned the kitchen")}
        },5000);
    });
}

function throwTrash(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const thrown = false;
            if(thrown){resolve("I've thrown the trash in the house")}
            else{reject("You've not thrown the trash in the house")}
        },4000);
    });
}

walkDog().then(value=>{console.log(value); return cleanKitchen()})
        .then(value=>{console.log(value); return throwTrash()})
        .then(value=>{console.log(value);})
        .catch(value=>{console.log(value)});
