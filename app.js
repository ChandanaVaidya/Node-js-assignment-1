const myPromise = new Promise((resolve,reject)=>{
    const success = true;
    if(success){
        resolve("Hello this message is of promise!");
    }
    else{
        reject("Something is wrong!");
    }
});

myPromise
.then((message)=>{
    console.log(message);
})
.catch((Error)=>{
    console.log(error);

});