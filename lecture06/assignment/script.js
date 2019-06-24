
let para=document.getElementById("para");
function calc()
{let n=document.getElementById("input").value;
 let start=new Date().getTime(); 
 let str="";
  for(i=0;i<=n;i++)
    {  
           if(i%5===0)
              {str+="buzz";}
            if(i%3===0)
               {str+="fizz";}
            if(i%3!==0 && i%5!==0){str+=i;}
            str+="\n";
    } 
    para.innerText+=str;
    let end= new Date().getTime();
    console.log(end-start);
}

function refresh()
{
    para.innerText="";
}