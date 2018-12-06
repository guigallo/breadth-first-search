let friendlyName = false;
let fullDetails = false;

function changeLocation() {
  let location = '/sample?';

  if(friendlyName)
    location += 'friendlyName=true&';

  if(fullDetails)
    location += 'fullDetails=true';

  window.location = location;
}

function friendlyListener() {
  const checkbox = document.getElementById('checkFriendly');
  friendlyName = checkbox.checked;

  checkbox.addEventListener('change', (event) => {
    friendlyName = event.target.checked;
    changeLocation();
  });
}

function fullDetailsListener() {
  const checkbox = document.getElementById('checkFull');
  fullDetails = checkbox.checked;

  checkbox.addEventListener('change', (event) => {
    fullDetails = event.target.checked;
    showFullDetails(fullDetails);
    changeLocation();
  })
}

function showFullDetails(bool) {
  var canHide = document.getElementsByClassName('full');

  let toAdd = 'show';
  let toRemove = 'hide';

  if(! bool) {
    toAdd = 'hide';
    toRemove = 'show';
  }

  for (let i = 0; i < canHide.length; i++) {
    canHide[i].classList.remove(toRemove);
    canHide[i].classList.add(toAdd);
  }
}

function loadPage() {
  friendlyListener();
  fullDetailsListener();
  showFullDetails(fullDetails);
}

window.onload = loadPage;