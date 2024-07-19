
//returns true if all the values full fill the condition
let a=[1,2,3,34];
console.log(a.every((el)=>(el%2==0)));
//returns true if few values full fill the condition
console.log(a.some((el)=>(el%2==0)));
function ab(b,c=10){
    console.log(b,c);
}
ab(2);
//how to use spread
console.log(Math.min(...a));
console.log(Math.max(...a));
//spread in arrays and object literals and functions
let y=[...a];
let q={sdd:"kff",efke:1223};
let o={...q,wdw:"efef"};
console.log(o)
function sum(...arg){
    for(i=0;i<arg.length;i++){
        console.log("hdwjudn",arg[i]);
    }
}

sum(1,2,2,3,3);

//rest buddle alll the values into one object
function df(a,s,c){
    console.log(arguments);
}

df(1,2,3)

//destructuring 
//in arrays
let p=[1,22,3,4,5];
let [win,...others]=p;
console.log(others);

// in object litterals
let student={name:"rohit",rollno:120,subject:"english"};
let {name,rollno}=student;
console.log(name);
//to store it in some another name
//if city exesists then it will show the value in student other wise 
//default vale Mumbai
let{name:na,city="Mumbai"}=student;
console.log(na);
