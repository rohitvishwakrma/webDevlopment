/* let  fragment=document.createDocumentFragment();

for (let i = 0; i <100; i++) {
    let para=document.createElement('p');
    para.textContent='this is para ='+i;

    // no reflow  and np repaint 
     fragment.appendChild(para);

     // the below line takes 1 reflow and 1 repaint
     document.body.appendChild(fragment); 
} */

     // resolve and reject
 /*  promise all */
  let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Frist");
  })
  let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Frist");
  })
  let promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Frist");
  })
  let promise4=new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Frist");
  })
  promise.all([promise1,promise2,promise3,promise4])
  .then((values)=>{
    console.log(values);
  })
.catch((error)=>{
    console.log("error here ");
})

      