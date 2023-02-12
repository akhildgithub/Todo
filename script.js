edit.addEventListener("click", (e) => {
  e.preventDefault()
  let k = key1.value
  let v = value1.value
  let break1 = 0
  for (var i = 0; i < localStorage.length; i++) {
    if (k == localStorage.key(i)) {
      if(!k=='' && !v==''){
      localStorage.setItem(k, v);
        key1.value='';value1.value=''
      break1++;
      break;
    }}
  }
  if(k=='' || v=='')
    alert('Not provided required values')
  else{
  if (break1 == 0) {
    alert('There is no such key')
  }
  }
  todos.innerHTML = items();
})

add.addEventListener("click", (e) => {
  e.preventDefault()
  let k = key1.value
  let v = value1.value
  let breaking = 0
  for (var i = 0; i < localStorage.length; i++) {
    if (k == localStorage.key(i)) {
      alert('This key already exists')
      breaking++;
      break;
    }
  }
  if(k=='' || v=='')
    alert('Not provided required values')
  else{ 
    if (breaking == 0)
    localStorage.setItem(k, v);
        key1.value='';value1.value=''
  }
  todos.innerHTML = items();
})

delet.addEventListener("click", (e) => {
  e.preventDefault()
  let k = key1.value
  if (localStorage.length == 0)
    alert('It\'s already empty')
  for (var i = 0; i < localStorage.length; i++) {
    if (k == localStorage.key(i)) {
      localStorage.removeItem(k);
        key1.value='';value1.value=''
      break;
    }
    if (i == localStorage.length - 1) {
      alert('There is no such key')
    }
  }
  todos.innerHTML = items();
})

clear1.addEventListener("click", (e) => {
  e.preventDefault()
  if (localStorage.length == 0)
    alert('It\'s already empty')
  else
    localStorage.clear();
        key1.value='';value1.value=''
  todos.innerHTML = items();
})

function items() {
  var text = 'Todos are '
  for (var i = 0; i < localStorage.length; i++) {
    text = text + "<br>" + localStorage.key(i) + ' : ' + localStorage.getItem(localStorage.key(i));
  }
  if (localStorage.length > 0)
    return text
  else
    return ('No todos')
}

todos.innerHTML = items();
