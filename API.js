// let y="https://catfact.ninja/fact";

// fetch(y)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

// async function as(){
//     let r=await axios.get(y);
//     console.log(r.data.fact);

//     let c=await axios.get(y);
//     console.log(c.data.fact);
// }

// as();

let y=document.querySelector("input");
url="http://universities.hipolabs.com/search?name=";
let n=document.querySelector("button");
n.addEventListener("click",async ()=>{
    let name=y.value;
    let t=await show(url+name);
    console.log(t);
    
})

async function show(cont){
    try{
    let info=await axios.get(cont);
    return info.data;
    }
    catch(error){
        console.log(error);
    }
}
