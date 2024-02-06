const food ={
    set favourite (name){
     this.log.push(name);
    },
    log:[],
};
food.favourite="pizza";
food.favourite="momo";



console.log(...food.log);