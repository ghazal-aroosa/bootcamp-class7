console.log("before prepare Food");


function prepareFood(data){
  let promise = new Promise(function (resolve,reject){
    setTimeout(()=>{
        if(data!==2){
            console.log("prepare Food");
            resolve("Food is ready");
       }
       else {
           reject("value not acceptable");
       }
        
     },10);
    });
    return promise;
}

    

function prepareFrenchToast(){
    let promise = new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("prepare French Toast");
        resolve("French Toast is ready");
    },20);
   });
   return promise;
}

function prepareCoffee(){
    let promise = new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        resolve("Coffee  is ready");
    },30);
});
  return promise;
}

let promise=prepareFood();
// console.log("Promise =",promise);
promise.then(function (value){
    console.log("Food is ready callback =",value);
    return prepareFrenchToast();

})
.then(function(frenchToastValue){
    console.log("French Toast is ready callback =",frenchToastValue);
    return prepareCoffee();
})
.then(function (coffeeValue){
    console.log("Food is ready callback =",coffeeValue);

})
.catch(function(error){
    console.log("Error=",error);

});


/*prepareFood(function (value){
    console.log("Food is ready callback =",value);
prepareFrenchToast(function (value){
    console.log("French Toast is ready callback =",value);
prepareCoffee(function (value){
     console.log("coffee is ready callback =",value);
      });
    });
});  */

console.log("After prepare Food dinner is ready");