const name="Rohit Kumar";

 let asumeN=prompt("Your name pleas!");

  while(asumeN!=name && name!="quite");{
    console.log("sorry!");
     asumeN=prompt("plaes try again!");
    
  }
if(asumeN==name){
    console.log(name);
}
else console.log("try again!")