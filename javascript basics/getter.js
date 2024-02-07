const obj=
{
    hello:['d','e','f'],
    get latest(){
        return this.hello[this.hello.length - 1];
        
        
    },
};
console.log(obj.latest);