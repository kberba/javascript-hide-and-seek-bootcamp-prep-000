
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rankedLists.length; i++) {
    parseInt(rankedLists[i].innerHTML = (i + n).toString());
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
