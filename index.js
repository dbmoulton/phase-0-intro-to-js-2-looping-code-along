for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

function writeCards(names, event) {
    const newArray = [] 
    for (let i = 0; i < names.length; i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(n) {
    let countDown = n;
    while (countDown >= 0) {
      console.log(countDown--);
    }  
    }