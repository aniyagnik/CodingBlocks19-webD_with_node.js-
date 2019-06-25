let list = document.getElementById('list')
let para = document.getElementById('para')
var result,val1,val2;

function addition() {
     val1 = document.getElementById('val1').value
     val2 = document.getElementById('val2').value
     result=+val1 + +val2;
     para.innerText+="addition result: "+result+"\n";
    
}

function subtract() {
    val1 = document.getElementById('val1').value
    val2 = document.getElementById('val2').value
    result=+val1 - +val2;
    para.innerText+="subtraction result:"+result+"\n";
  
}
function multiply() {
     val1 = document.getElementById('val1').value
     val2 = document.getElementById('val2').value
     result=+val1 * +val2;
     para.innerText+="multiplication result: "+result+"\n";
   
}
function division() {
     val1 = document.getElementById('val1').value
     val2 = document.getElementById('val2').value
     result=+val1 / +val2;
     para.innerText+="division result: "+result+"\n";
}