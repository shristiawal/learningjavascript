function product (...theArgs){
    let total=1;
    for(const arg of theArgs){
        total*=arg;
    }
    return total;

}
console.log (product(5,6,2));
console.log(product(2,4,6,8));