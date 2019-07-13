
let list =document.getElementById('list')

document.getElementById('add').onclick=function (e){
      
      let li=document.createElement('li')
     
       //adding text
       let input_val =document.getElementById('input').value
       li.innerHTML=input_val
       
      //adding delete button 
      let delbtn = document.createElement('button')
      delbtn.innerText='delete'
      
      //adding up
      let upbtn = document.createElement('button')
      upbtn.innerText='🔼'

       //adding down
       let downbtn = document.createElement('button')               //(windows icon)+;
       downbtn.innerText='🔽'
      
      //delete function
      delbtn.onclick=function (e){
          console.log('in delete')
          e.target.parentElement.remove()
      }

      //up function
      upbtn.onclick=function (e){
          console.log('in up')
          e.target.parentElement.parentElement.insertBefore(
              e.target.parentElement,
              e.target.parentElement.previousElementSibling
          )
      }

      
      //down function
      downbtn.onclick=function (e){
        console.log('in down')
        e.target.parentElement.parentElement.insertBefore(
            e.target.parentElement.nextElementSibling,
            e.target.parentElement
        )
    }

      li.appendChild(upbtn)
      li.appendChild(delbtn)
      li.appendChild(downbtn)

     
       list.appendChild(li)
       
       document.getElementById('input').value=""
}


