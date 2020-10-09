let newPromise = new Promise(function(resolve,reject){
    let array = ['PIZZA',10,TRUE,FALSE,25,'WINGS'];
    let nArray = array.map((item) => {
      return item.toLowerCase();
    });
   
    if (nArray==toLowerCase){
                   
        resolve('success')
    }
    else {
    
    reject('Error')
    
    }})
    
console.log(nArray);



