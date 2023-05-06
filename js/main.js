const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;


document.querySelector('#input').onkeypress = function (e){
    if (e.charCode == 13){
        if (this.value.trim().length === 0) return
        if (i >= 15) return
       createDeleteElement(input.value);
    }
}

btn.addEventListener('click',(e)=>{
    if (input.value.trim().length === 0) return
    if (i >= 15) return
    
    createDeleteElement(input.value)
})

function createDeleteElement(value){
    i++;
    const todoItem = document.createElement('div')
    const itemImgRemove = document.createElement('div')
    const itemImgDisableEneble = document.createElement('div')

    todoItem.className = "result__item"
    todoItem.textContent = value 

    itemImgRemove.className = "result__remove-img"
    todoItem.appendChild(itemImgRemove)

    itemImgDisableEneble.className = "result__disable-img"
    todoItem.appendChild(itemImgDisableEneble)


    itemImgRemove.addEventListener('click', (e) => {
       i--;
      total.textContent = i;

      todoItem.classList.remove("result__item") 
      todoItem.classList.add("result__item-remove") 
      todoItem.removeChild(itemImgRemove);
      todoItem.removeChild(itemImgDisableEneble);

      setTimeout( function(e){
        result.removeChild(todoItem);
      },700)
  })

  itemImgDisableEneble.addEventListener('click', (e) =>{
    itemImgDisableEneble.classList.toggle("result__eneble-img");
    if(itemImgDisableEneble.classList.contains("result__eneble-img")){

      const night = document.querySelector('.night');

      night.classList.remove('hidden')

      setTimeout(function(e){
        night.classList.add('hidden')
      },5000)
    }
  })

   input.value = " ";
    total.textContent = i;
    result.appendChild(todoItem);
}

