let friendlyName = false;
let fullDetails = false;

function friendlyListener() {
  const checkbox = document.getElementById('checkFriendly');

  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      window.location = "/breadth-first-search/sample?friendlyName=true";
    } else {
      window.location = "/breadth-first-search/sample";
    }
  });
}

// parei aqui
function setInternalParams() {
  const url_string = window.location.href;
  const url = new URL(url_string);
  friendlyName = url.searchParams.get('friendlyName');
  fullDetails = url.searchParams.get('fullDetails');


  console.log(friendlyName);
  console.log(fullDetails);
}

function fullDetailsListener() {
  const checkbox = document.getElementById('checkFull');

  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {

    } else {

    }
  })
}

function showFullDetails(bool) {
  var canHide = document.getElementsByClassName('full');

  let toAdd = 'show';
  let toRemove = 'hide';

  if(! bool) {
    toAdd = 'show';
    toRemove = 'hide';
  }

  for (let i = 0; i < canHide.length; i++) {
    canHide[i].classList.remove(toRemove);
    canHide[i].classList.add(toAdd);
  }
}

function loadScript() {
  //getParams();
  friendlyListener();
  fullDetailsListener();
}

window.onload = loadScript;