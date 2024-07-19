// let y=document.querySelector("h1");

// function change(color,delay,nextchange){
//     setTimeout(()=>{
//         y.style.color=color;
//         if(nextchange) nextchange();
//     },delay)
// }

// change("red",1000,()=>{
//     change("orange",1000,()=>{
//         change("yellow",1000);
//     })
// })

let y=document.querySelector("h1");
async function change(color){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            y.style.color=color;
            resolve();
        },1000);
    }
    )
}

async function sd(){
    await change("orange");
    await change("yellow"); 
}

