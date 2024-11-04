function Add(a,b){
    this.a=a;
    this.b=b;
    this.ro=function(){
        console.log( );
    }
}
// ceate obj
let Addobj = new Add(5,10)
console.log(Addobj);