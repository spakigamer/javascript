let w=document.querySelectorAll("button");
for(l of w){
    l.addEventListener("click",def);
    l.addEventListener("click",sd);
    l.addEventListener("hover",sd);
}

function def()
{
    console.log("sdsd")

}
function sd(){
    console.log("dcdc");
}

let q=document.querySelector("input");
q.addEventListener("keydown",function(event){
    console.log(event.code);
})