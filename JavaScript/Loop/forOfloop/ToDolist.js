/* daily work list  eat walk (task)*/
let todo=[];
 let req=prompt("enter the request:");
 while(true){
    /* list is empty  */
    if(req=="quite")
    {
        console.log("quitting app.");
        break;
    }
    if (req="list") {
        console.log("-------------------");
        for (task of todo) {
            console.log(task);
        }
        console.log("-------------------");
    }
    else if(req=="add"){
        console.log("add your task")
    }

 }