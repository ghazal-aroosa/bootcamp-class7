console.log("before prepare Food");


function prepareFood(callback){
    setTimeout(()=>{
        console.log("prepare Food");
        callback("Food is ready");
    },10);
}

function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("prepare French Toast");
        callback("French Toast is ready");
    },20);
}

function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee  is ready");
    },30);
}



prepareFood(function (value){
    console.log("Food is ready callback =",value);
prepareFrenchToast(function (value){
    console.log("French Toast is ready callback =",value);
prepareCoffee(function (value){
     console.log("coffee is ready callback =",value);
      });
    });
});

console.log("After prepare Food dinner is ready");