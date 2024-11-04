const student={
    name:"Rohit",
    age:24,
    mail:"rohit@123gamil.com",
    getInfo(){
        console.log(this);
        let info=(this.name,this.age,this.mail);
        console.log(info);
    }
}
getInfo();