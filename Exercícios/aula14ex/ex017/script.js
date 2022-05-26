function tabuada(){ 
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
      alert('Por favor, digite um número! ')
    } else {
      var n = Number(num.value)
   
   // Estrutura de repetição para fazer a conta da tabuada   
      tab.innerHTML = ''
      for(c = 1; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab ${c}`
        tab.appendChild(item)
      }
    } 
  }  