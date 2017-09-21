function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  let divs = document.getElementById('grand-node').querySelectorAll('div')
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].innerHTML.includes('<div>') === false)
    return divs[i]
  }
}
