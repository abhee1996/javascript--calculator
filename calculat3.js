var Equal = document.getElementById("equal")
var clear = document.getElementById("clear")
var result = document.getElementById("result")
 const output = document.querySelector("#output");
 const preResult = document.querySelector("#pre-result");
var numbersEl = document.querySelectorAll('.number')
const operationEl = document.querySelectorAll(".operation");
let dis2Num = "";
let dis1Num = "";
let res =""
let lastOperation= "";
numbersEl.forEach((number) => {
     number.addEventListener("click", (e) => {
       // debugger
      dis2Num += e.target.innerText;
      result.value = dis2Num;
    });
  });
  operationEl.forEach((op)=>{
    op.addEventListener('click',function(e){
        // debugger
      if(!dis2Num) return
      const opName = e.target.innerText
      if(dis1Num && dis2Num && lastOperation){
         calculate(lastOperation)
      }  else {
        res = dis2Num
      }
      clearVar(opName)
      lastOperation = opName;// put operation in lastOperation

    })
})
function clearVar(name) {
    dis1Num +=  dis2Num + " " + name + ""; 
    output.value = dis1Num //+ " " + name;
    result.value = "";
    dis2Num = "";
    preResult.value = res;
    //dis1Num = res

  }
Equal.addEventListener('click', function(){
    //debugger
    if (!dis2Num || !dis1Num ) return;

    calculate(lastOperation)
  
    //clearVar()
    result.value = res;
    preResult.value = "";
    dis2Num = res;
    dis1Num = "";
})
function calculate(op) {
  var f = {
           add: '+',
           sub: '-',
           div: '/',
           mlt: '*'
         };

  switch(op){
    case  f.mlt:
      return res = parseInt(res) * parseInt(dis2Num);
      break;
    case f.add:
      return res = parseInt(res) + parseInt(dis2Num)
      break;
    case  f.sub:
      return res = parseInt(res) - parseInt(dis2Num)
      break;
    case f.div:
      return res = parseInt(res) / parseInt(dis2Num)
      break;
  }
}

clear.addEventListener('click', doClear)
function doClear() {
    result.value = null
    output.value = null;
    dis2Num = "";
    dis1Num = "";

}
    // function calculate(a, op, b) {
    //   var f = {
    //     add: '+',
    //     sub: '-',
    //     div: '/',
    //     mlt: '*'
    //   };
    //     a = a * 1;
    //     b = b * 1;
    //     switch (op) {
    //         case f.add:
    //             return res = a + b;
    //             break;
    //         case f.sub:
    //             return res = a - b;
    //             break;
    //         case f.div:
    //             return res = a / b;
    //             break;
    //         case f.mlt:
    //             return res = a * b;
    //             break;

    //         default:
    //             null;
    //     }
    // }

    // function mycal(op) {
    //   var f = {
    //       add: '+',
    //       sub: '-',
    //       div: '/',
    //       mlt: '*'
    //     };
        
    // if (op === f.mlt) {
    //   res = res * dis2Num;
    // } else if (op === f.add) {
    //   res = res + dis2Num;
    // } else if (op === f.sub) {
    //   res = res - dis2Num
    // } else if (op === f.div) {
    //   res = res / dis2Num
    // } 
    // }

