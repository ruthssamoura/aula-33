
let globalVar = "Oi global"

function global() {
  console.log(globalVar);
}

function global2() {
  
  let functionVar = "Oi função"
  console.log(globalVar);
  console.log(functionVar);
}

function global3() {
    console.log(globalVar);
    //escopo de bloco
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    console.log(i)
}