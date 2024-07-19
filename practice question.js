

function as(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let z=`(${r},${g},${b})`;
    let p=`rgb${z}`;
    return p;
}

function df(){
    let h=document.querySelector("h1");
    let y=document.querySelector("div");
    let m=as();
    h.innerText=m;
    y.style.backgroundColor=m;
}

let d=document.querySelector("button");
d.addEventListener("click",df);