let submit;
let message;

function bindSubmit() {
  submit = document.getElementById('submit');
}

function bindMessage() {
  message = document.getElementById('message');
}

function resetForm() {
  submit.disabled = true;
  message.innerText = '';
}

function addListener() {
  resetForm();
  let fileElement = document.getElementById('uploadFile');
  fileElement.addEventListener('change', (event) => {
    if(fileElement.files.length > 0) {
      const selectedFile = fileElement.files[0];
      if(selectedFile.type === 'application/json') {
        canSendForm();
      } else {
        fileElement.value = '';
        message.innerText = 'Favor selecione um arquivo json.';
      }
    }
  });
}

function canSendForm() {
  submit.disabled = false;
  message.innerText = '';
}

function loadPage() {
  bindSubmit();
  bindMessage();
  resetForm();
  addListener();
}

window.onload = loadPage;