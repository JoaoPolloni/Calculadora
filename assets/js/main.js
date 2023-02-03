let text = document.querySelector(".previewCalc")
let res = document.querySelector(".result")

let calculate = (number)=>{
  text.value += number;
}

let result = () =>{
  try{
    res.value = eval(text.value)
  }
  catch(err){
    alert("Operação incorreta");
  }
}

function clr(){
  res.value = "";
  text.value = "";
}

function del(){
  text.value = text.value.slice(0,-1)
}

function round(){
  res.value = res.value.tofixed(2);
}