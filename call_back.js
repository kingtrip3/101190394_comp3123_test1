//question---1
let resolvedPromise = new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimout(wait);
      resolve('successful');
      console.log(successful)
    }, 500)
  })

 //question--2 
  let rejectedPromise = new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject('error '+ 500 + 'ms.')
      }, 500)
  })