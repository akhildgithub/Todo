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

setTimeout(() => {
  let change = prompt('1:edit item \n2:add item \n3:delete item \n4:remove all items')
  let k, v;
  switch (change) {
    case '1':
      k = prompt('enter the key')
      v = prompt('change the value ')
      for (var i = 0; i < localStorage.length; i++) {
        if (k == localStorage.key(i)) {
          localStorage.setItem(k, v)
          break;
        }
      }
      break;
    case '2':
      k = prompt('enter the key')
      v = prompt('change the value ')
      for (var i = 0; i < localStorage.length; i++) {
        if (k == localStorage.key(i)) {
          alert('this key already exists')
          break;
        }
      }
      localStorage.setItem(k, v)
      break;
    case '3':
      k = prompt('enter the key')
      for (var i = 0; i < localStorage.length; i++) {
        if (k == localStorage.key(i)) {
      localStorage.removeItem(k)
          break;
        }
      }
          alert('there is no such key')
      break;
    case '4':
      localStorage.clear()
      break;
  }
  todos.innerHTML = items();
}, 3000)
