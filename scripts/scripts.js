
// Get Contact List ---------------------------------------------------------------------------------------------------------------------
// console.log();



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

const photos = {
  men: [
    'https://static1.squarespace.com/static/55d7222de4b07fe20b7babbf/593c217137c58172ed3b9e96/593c2a3bd2b857459a5217b8/1497115342841/Arlington-Corporate-Headshot.jpg?format=300w',
    'http://jackpei.com/wp-content/uploads/2015/11/enviromental-.jpg',
    'https://static1.squarespace.com/static/51ef4493e4b0561c90fa76d6/t/590b3f52893fc0d3189f7ffa/1532355525333/detroit+headshot+photographer+scott+lawrence?format=300whttps://i.pinimg.com/originals/91/3d/a7/913da710d016b57795d0a08ab46834b2.jpg',
    'https://i0.wp.com/photofocus.com/wp-content/uploads/2018/04/Bryan-Esler-Headshot-0046-6.jpg?resize=300%2C300&ssl=1',
    'https://static1.squarespace.com/static/50f79c6fe4b00d3480c9bbf0/59540890ebbd1a29d9e32cdb/5954d6293a04119ec062baa6/1516824619600/Headshot_20170311_Jay+Poff_Richard_Waine_Lancaster_PA_0100.jpg?format=300w',
    'https://static1.squarespace.com/static/5995fb196a4963fc8ec662c1/5aea0134352f531c0a9c8205/5aea5a2f1ae6cf4e5291dbf9/1540255969181/Intensive2211+5.jpg?format=300w',
    'https://static1.squarespace.com/static/5995fb196a4963fc8ec662c1/5aea0134352f531c0a9c8205/5aea5a191ae6cf4e5291d8d3/1540255969179/clay_bennet173278+6.jpg?format=300w',
    'https://static1.squarespace.com/static/5528a968e4b02ed06b8e918e/552c4a29e4b099037ab69c95/55307fe9e4b0a4f141b5b7e0/1430080924394/headshot-koskinen-08.jpg?format=300w',
    'https://static1.squarespace.com/static/5528a968e4b02ed06b8e918e/552c4a29e4b099037ab69c95/566fab0f841abaf40a261e84/1450159245714/Gregg_Adams-JKoskinen-1.jpg?format=300w',
    'https://static1.squarespace.com/static/5995fb196a4963fc8ec662c1/5aea0134352f531c0a9c8205/5aea59202b6a283a9f85b7cd/1540255969172/meagan2759+5.jpg?format=300w',
    'https://i0.wp.com/www.sqportraits.com/wp-content/uploads/2018/10/Male-Headshot-Before.jpg?fit=300%2C300&ssl=1',
    'https://static1.squarespace.com/static/5995fb196a4963fc8ec662c1/5aea0134352f531c0a9c8205/5bc8d74e0d92976a7095ead3/1539888991926/18-07-25_HSI2018_Matt_008.jpg?format=300w',
    'https://www.gravoc.com/wp-content/uploads/2016/10/Nate-Gravel-GraVoc-Headshot-2017-0083.jpg',
    'https://format-com-cld-res.cloudinary.com/image/private/s--0tPEhIst--/c_fill,g_rek_faces,h_300,w_300/a_auto,fl_keep_iptc.progressive,q_95/v1/9a687fda851194202e0553caf3493cb1/dads_headshotDSC_0022.jpg',
    'https://format-com-cld-res.cloudinary.com/image/private/s--JpKAQBGg--/c_fill,g_rek_faces,h_300,w_300/a_auto,fl_keep_iptc.progressive,q_95/v1/8ff8159b7347d0e691a67d6ea95870ef/Lucas-2-New-York-City-Headshots-NYC.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SY5pnFSaLVDjzEI4K9w6MNeSW91tyIFHDDw4yu7vkRGvYXIM'
  ],
  women: [
    'https://cdn.goodgallery.com/d47fdb0b-8dd2-4142-bc96-d28bc784f992/s/0300/1x1rtio6/beverly-hills-doctor-headshot-portrait-photograph.jpg',
    'https://i.pinimg.com/originals/2d/a8/a2/2da8a25feba94b1273b43dc7b60742ed.jpg',
    'https://www.georgedean.com/commercial/wp-content/uploads/2017/01/Realtor_headshot-300x300.jpg',
    'https://static1.squarespace.com/static/5528a968e4b02ed06b8e918e/552c4a29e4b099037ab69c95/58b6570e6a49630837116c00/1488344904487/00-young-woman-actor-headshots-denver.jpg?format=300w',
    'https://i.pinimg.com/originals/a7/53/0b/a7530b6aed54277313b9358dffb88dae.jpg',
    'https://www.richardsphotography.com/wp-content/uploads/2017/12/23-490-page/Headshots-Photographer-300x300.jpg',
    'https://static1.squarespace.com/static/5528a968e4b02ed06b8e918e/552c4a29e4b099037ab69c95/55307fe9e4b09bf3923fd4dc/1430080903900/headshot-koskinen-07.jpg?format=300w',
    'http://www.proshotsevent.com/wp-content/uploads/2017/11/corporate-headshot-8-cropped-300x300.jpg',
    'https://static1.squarespace.com/static/5995fb196a4963fc8ec662c1/5aea0134352f531c0a9c8205/5b8593a303ce642218a0ff5a/1540255969203/18-07-23_Amel+Zahid_Shot_1_060+1.jpg?format=300w',
    'https://static1.squarespace.com/static/5528a968e4b02ed06b8e918e/552c4a29e4b099037ab69c95/58b6570d6b8f5b9a422f35db/1488344897854/00-woman-professional-headshots-denver.jpg?format=300w',
    'http://greaterbinghamtonchamber.com/wp-content/uploads/2018/03/colleen-headshot.jpg',
    'https://format-com-cld-res.cloudinary.com/image/private/s--7I5qZwLO--/c_fill,g_rek_faces,h_300,w_300/a_auto,fl_keep_iptc.progressive,q_95/v1/ee216554c3478811c978d42a47604403/Seanna_Kennedy_Photography_Nov_2018_Savanna_Headshots_14_edited.jpg',
    'https://static1.squarespace.com/static/58ef872f3e00beca82fca430/5a42fe4dec212d2c0905a71d/5ac55c2d562fa748745e6db4/1522883648306/Sarah+HEadshot+1.jpg?format=300w',
    'https://www.ircs.org/wp-content/uploads/2018/10/yuri-ross-headshot.jpg',
    'https://format-com-cld-res.cloudinary.com/image/private/s--rHEhMTOj--/c_fill,g_rek_faces,h_300,w_300/a_auto,fl_keep_iptc.progressive,q_95/v1/316c993ebbe25c1e0f6054dfa263fcb1/Seanna_Kennedy_Photography_November_2017_Jacquie_Martin_Headshot_Proofs_89_edited.jpg',
    'https://photos.smugmug.com/Public-Viewing/Proofs/People/Portraits/Actor-Model-Headshots/201701123-Mikayla/i-Z4m2Vhh/1/6b62434d/S/ScottHallenbergPhotography%20Actor%20Headshot%2020170113%20d8c1-SCI_4871_n0371-ME-2-S.jpg',
    'https://static1.squarespace.com/static/586321f22e69cfccd3b2fc12/t/5b9307bccd83660363ceebf1/1536362448352/AP_headshot_square.jpeg?format=300w',
    'https://static1.squarespace.com/static/5abbcf3a70e80264efadd0a5/t/5af9ad82f950b7ff47c3744a/1526312382517/Wong_Angela_headshot_by_Jason_Wong.jpg'
  ]
}

if (localStorage.getItem('contacts')) {
  fullContactList = JSON.parse(localStorage.getItem('contacts'));
  console.log(fullContactList);
}

if (saveBtnExist) {
  document.getElementById('saveContact').addEventListener('click', saveContact);
  
  function saveContact () {
    const inputData = document.querySelectorAll('input.form-control');
    const inputRadioData = document.querySelector('input[name = "gender"]:checked');

    function randomPhoto() {
      if(newContact.gender === 'male') {
        let randomMan = Math.floor(Math.random() * photos.men.length);
        let photoNumber = randomMan;
        newContact.photo = photos.men[photoNumber]
      } else {
        let randomWoman = Math.floor(Math.random() * photos.women.length);
        let photoNumber = randomWoman;
        newContact.photo = photos.women[photoNumber]
      }
    }

    let newContact = {
      firstName: inputData[0].value,
      lastName: inputData[1].value,
      email: inputData[2].value,
      company: inputData[3].value,
      title: inputData[4].value,
      phone: inputData[5].value, 
      gender: inputRadioData.value,
      id: fullContactList.length
    }

    randomPhoto();

    fullContactList.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(fullContactList));
    console.log(fullContactList);
  }
  
}


// Display Contact

if (document.getElementById('contactList')) {
  
  for (let i = 0; i < fullContactList.length; i++) {
    let contactItem = document.createElement('li');
    contactItem.classList.add('contact-card');
    contactItem.innerHTML = '<div class="fluid-container"><div class="row"><div class="col-auto mr-auto"><div class="headshot-small" style="background-image:url(' + fullContactList[i].photo + ')"></div></div><div class="col"><h2 class="mt-4">' + fullContactList[i].firstName + ' ' + fullContactList[i].lastName + '</h2>' + '<p><em>' + fullContactList[i].company + '</em></p></div></div></div>';

    document.getElementById('contactList').appendChild(contactItem);
  }
  
}

// Search for contact

if (document.getElementById('searchContacts')) {
  const filterInput = document.getElementById('searchContacts');
  filterInput.addEventListener('keyup', filterList);

  function filterList() {
    // Get the value of the input
    let filterInputVal = filterInput.value.toUpperCase();

    // Get list item
    const li = document.querySelectorAll('li.contact-card');
    
    for (let i = 0; i < fullContactList.length; i++) {
      let name = fullContactList[i].firstName.toUpperCase() + ' ' + fullContactList[i].lastName.toUpperCase();
      
      if (name.includes(filterInputVal)) {
        console.log(name + ' includes search. Filter Input Val was ' + filterInputVal);
        console.log(li[i]);
        li[i].style.display = '';
      } else {
        console.log(name + ' does NOT include search. Filter Input Val was ' + filterInputVal);
        console.log(li[i]);
        li[i].style.display = 'none';
      }
    }
  }
}