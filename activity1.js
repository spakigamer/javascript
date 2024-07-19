let q=document.querySelector("button");
let y;
q.addEventListener("click",function(){
    y=prompt("enter the element");
    console.log("wd");
    let r=document.createElement("li");
    r.innerHTML=y;

    let f=document.querySelector("ul");
    f.insertAdjacentElement("beforeend",r);
})
