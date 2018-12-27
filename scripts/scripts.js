

// Add Task Menu ------------------------------------------------------------------------------------------------------------------------
document.getElementById('addTask').addEventListener('click', openTaskMenu);
document.querySelector('.overlay-close').addEventListener('click', openTaskMenu);

function openTaskMenu() {
  const element = document.querySelector('.popmenu');
  document.getElementById('body').classList.toggle('popupmenu-open');
  document.querySelector('.popmenu').classList.toggle('display-menu');
  fade(element);
}

function fade(element) {
  let op = 0.1;  // initial opacity
  let timer = setInterval(function () {
      
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";

      if (document.querySelector('.display-menu')) {
        if (op >= 1){
          clearInterval(timer);
        }
        op += op * 0.1;
      } else {
        if (op <= 0.1){
          clearInterval(timer);
        }
        op -= op * 0.1;
      }
  }, 10);
}

// Save Contact ------------------------------------------------------------------------------------------------------------------------
let fullContactList = [];
const saveBtnExist = document.getElementById('saveContact');

if (saveBtnExist) {
  document.getElementById('saveContact').addEventListener('click', saveContact);
  
  function saveContact () {
    console.log('hello');
    const inputData = document.querySelectorAll('input.form-control');
    let newContact = {
      firstName: inputData[0].value,
      lastName: inputData[1].value,
      email: inputData[2].value,
      company: inputData[3].value,
      title: inputData[4].value,
      phone: inputData[5].value
    }

    fullContactList.push(newContact);
    console.log(fullContactList);
 
  }
  
}

