// Todo with DOM loading or static selection  problem


/*
let btn =document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";   //reset to empty String(input mai task add hone ke baad hat jaye)

})


let delBtns = document.querySelectorAll(".delete");

for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par =this.parentElement;
        par.remove();


    })
}
*/

/*ismai ek problem hai ki jo element or todo kaam(sleep , eat) exist krte hai phle se ye sirf unpe kaam krta hai jo event listner se task bnaya hai, kaam nhi karega woh sirf existing element ke liye kaam krta hai
already exist kaam hai unpe hi delte btn wala eventListner kaam krega aur unpe kaam nhi krta jo hmne eventListner lga ke task add kiye due to   */


/*
⚠️ Problem kya hai?

👉 Delete button ka event sirf jo elements already page par the unpe kaam kar raha hai
👉 Jo tu baad me JS se add kar raha hai (new tasks), unpe kaam nahi kar raha

🧠 Reason (main point):

Event listener sirf un elements par lagta hai jo us time exist karte hain

Matlab:

let btns = document.querySelectorAll(".delete");

👉 Ye sirf initial buttons ko select karega
👉 Baad me jo naye buttons add hue → unpe event laga hi nahi

🔥 Isko kya bolte hain?

👉 Ye issue hota hai DOM loading + static selection ki wajah se
👉 Solution hai: Event Delegation
*/




//   Todo with DOM loading or static selection  solution




let btn =document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";   //reset to empty String(input mai task add hone ke baad hat jaye)

});

ul.addEventListener("click",function(event){

    if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
    }
});


