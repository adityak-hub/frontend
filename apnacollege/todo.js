

let todo = [];

let req = prompt("enter your request:");


while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }else if(req=="add"){
        let task = prompt("enter you want to add");
        todo.push(task);
    }else if(req=="list"){
        console.log("-------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("--------------------------");
    }
    else if(req=="delete"){
        let idx = parseInt(prompt("enter your idx to delete"));
        todo.splice(idx,1);  //idx se 1 element delete kr do
    }else{
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}






















