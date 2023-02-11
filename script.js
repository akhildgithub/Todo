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
      let break1 = 0
      for (var i = 0; i < localStorage.length; i++) {
        if (k == localStorage.key(i)) {
          localStorage.setItem(k, v)
          break1++;
          break;
        }
      }
      if (break1 == 0) {
        alert('there is no such key')
      }
      break;
    case '2':
      k = prompt('enter the key')
      v = prompt('add the value ')
      let breaking = 0
      for (var i = 0; i < localStorage.length; i++) {
        if (k == localStorage.key(i)) {
          alert('this key already exists')
          breaking++;
          break;
        }
      }
      if (breaking == 0)
        localStorage.setItem(k, v)
      break;
    case '3':
      k = prompt('enter the key')
      for (var i = 0; i < localStorage.length; i++) {
        if (k == localStorage.key(i)) {
          localStorage.removeItem(k);
          break;
        }
        if (i == localStorage.length - 1) {
          alert('there is no such key')
        }
      }
      break;
    case '4':
      if (localStorage.length == 0)
        alert('it\'s already empty')
      else
        localStorage.clear()
      break;
  }
  todos.innerHTML = items();
}, 3000)
