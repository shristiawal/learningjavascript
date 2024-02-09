 var name ="shristi";
var age =23;
var hashobbies=true;
 
function summarizeuser(username, userage, userhashobbies){
    //const summarizeuser = (username,userage,userHobby)=>{}(this both function means same)
    return(
        '  my Name is ' + 
         username +
        ', age is ' 
        + userage + 
        ' and the user has hobbies:' +
        userhashobbies);
    }

console.log(summarizeuser(name,age,hashobbies));

//let variable value can be changed 
// const value can't be changed
