var Equal = document.getElementById("equal")
var clear = document.getElementById("clear")
var history = document.querySelector("#history")
var result = document.getElementById("result")
const output = document.querySelector("#output");
var numbersEl = document.querySelectorAll('.number')
const operationEl = document.querySelectorAll(".operation");
let dis2Num = "";
let dis1Num = "";
numbersEl.forEach((number) => {
     number.addEventListener("click", (e) => {
       // debugger
      dis2Num += e.target.innerText;
      result.value = dis2Num;
    });
  });
  operationEl.forEach((op)=>{
    op.addEventListener('click',function(e){
        //debugger
      if(!dis2Num) return
      const opName = e.target.innerText
      if(dis2Num && dis1Num && opName){
          calculate(dis2Num, opName, dis1Num)
      }  else {
        result.value = parseFloat(dis2Num);
      }
      dis1Num += dis2Num // put dis2Num(first value) in dis1Num
      dis2Num = "";//then clear dis2Num to retake second value
      lastOperation = opName;// put operation in lastOperation
      result.value = "";
    })
})
// function clearVar(name) {
//     dis1Num += dis2Num // put dis2Num in dis1Num
//     dis2Num = "";
//   }
Equal.addEventListener('click', function(){
    //debugger
    if (!dis2Num || !dis1Num || !lastOperation) return;
    result.value = "";

    calculate(dis1Num, lastOperation,dis2Num )
 
    result.value = res;
    //dis2Num = result;
    dis1Num = "";
})
// I/O handling 
    function calculate(a, op, b) {
      var f = {
        add: '+',
        sub: '-',
        div: '/',
        mlt: '*'
      };
        a = a * 1;
        b = b * 1;
        switch (op) {
            case f.add:
                return res = a + b;
                break;
            case f.sub:
                return res = a - b;
                break;
            case f.div:
                return res = a / b;
                break;
            case f.mlt:
                return res = a * b;
                break;

            default:
                null;
        }
    }


clear.addEventListener('click', doClear)
function doClear() {
    result.value = null
    output.value = null;
    dis2Num = "";
    dis1Num = "";

}


