let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let item =document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="X";
    delBtn.classList.add("X");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value ="";

});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})

/* let delBtns=document.querySelectorAll(".X");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);
        par.remove();
    });
} */

