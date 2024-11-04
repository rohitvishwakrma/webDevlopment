/* object key value pair */
let car={
    'name':"scorpio",
     'pric':100010,
     'color':"black",
     'year':5895,
     'model no':4994,
};
//print the object use for in
for (let ele in car) {
    if (Object.hasOwnProperty.call(car, ele)) {
      console.log(ele,car[ele]);
    }
}