const hamburgerMenu = document.querySelector('.hamburgermenu');
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const modalWindow = document.createElement('div');

modalWindow.className = 'modal-background';
document.body.appendChild(modalWindow);

function createModalWindow (projButton){
  `
  <div class="popupwindowIn">
    <div class="header">
      <h2>${projnumber.title}</h2>
     <img src="./images/popupimages/Enabled.png" alt="" />
    </div>
    <ul class="qualities">
      <li class="qitem">Canopy</li>
      <li>
        <img src="./images/projectsimages/Counter.png" alt="dotimage" />
      </li>
      <li class="qitem">Back End Dev</li>
      <li>
        <img src="./images/projectsimages/Counter.png" alt="dotimage" />
      </li>
      <li class="qitem">2015</li>
    </ul>

    <div class="popupImg">
      <img
        class="popImg"
        src="./images/projectsimages/Snapshoot Portfolio project 2.png"
        alt=""
      />
      <img class="popImgdesktop" src="./images/popupimages/Snapshoot Portfolio pop.png" alt="">
    </div>
    <div class="popTextitems">
      <p class="popdesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essent
      </p>
      <ul class="languages">
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
      </ul>
      <button class="seelive" type="button">
        <div class="stylingpopbutton">
          <p>See live</p>
          <div>
            <img src="./images/popupimages/Icon1.png" alt="" />
          </div>
        </div>
      </button>
      <button class="source" type="button">
        <div class="stylingpopbutton"><p>See Source</p>
          <div>
            <img class="githubimg" src="./images/popupimages/Vector@2x.png" alt="" />
          </div></div>
        
      </button>
      
    </div>
    
  </div>
`
}

hamburger.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('showmenu');
  hamburger.classList.toggle('hamburgerclicked');
  bar1.classList.toggle('bar1clicked');
  bar2.classList.toggle('bar2clicked');
  bar3.classList.toggle('bar3clicked');
});



document.querySelectorAll('.hamItem').forEach((item) => item.addEventListener('click', () => {
  hamburgerMenu.classList.remove('showmenu');
  bar1.classList.remove('bar1clicked');
  bar2.classList.remove('bar2clicked');
  bar3.classList.remove('bar3clicked');
  hamburger.classList.remove('hamburgerclicked');
}));

// projects section


const projData = 
[
 project1 = {
  desktopimg: "images/projectsimages/Snapshoot Portfolio.png",
mobileimg:'images/DESKTOP IMAGES/Snapshoot Portfolio-1.png',
  title: 'Tonic',
  made: ['Canopy', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
languages: ['html','css','javascript'],
projectbutton:'projectbutton',
},
 project2 = {
  desktopimg: "images/projectsimages/Snapshoot Portfolio project 2.png",
  desktopimgPopup:'',
mobileimg:'images/DESKTOP IMAGES/Snapshoot Portfolio-2.png',
  title: 'Multi-Post Stories',
  made: ['Canopy', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
languages: ['html','css','javascript'],
projectbutton:'projectbutton',
},
 project3 = {
  desktopimg: 'images/DESKTOP IMAGES/Snapshoot Portfolio-3.png',
  desktopimgPopup:'',
mobileimg:"images/projectsimages/Snapshoot Portfolio project 3.png",
  title: 'Facebook 360',
  made: ['Canopy', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
languages: ['html','css','javascript'],
projectbutton:'projectbutton',
},
 project4 = {
  desktopimg: 'images/DESKTOP IMAGES/Snapshoot Portfolio.png',
  desktopimgPopup:'',
  mobileimg:"images/projectsimages/Snapshoot Portfolio project 4.png",
  title: 'Uber Navigation',
  made: ['Canopy', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
languages: ['html','css','javascript'],
projectbutton:'projectbutton',
}];

function createCard(projectnumber){

    const projectsCards = document.querySelector('.projectscards');
    let projDiv = document.createElement('div');
let value = String(projectnumber);
let s = value.length-1;
let arr = value.split('');
if(arr[s]%2===0){
  projDiv.className = 'project';
} 
else{projDiv.className = 'project pro2';
projectsCards.appendChild(projDiv);} 
    projDiv.innerHTML = `
    
    <div class="img1">
    <img
      class="imgAA"
      src="${projectnumber.mobileimg}"
      alt="img"
    />
    <img
      class="imgA"
      src="${projectnumber.desktopimg}"
      alt="dotimage"
    />
  </div>
  <div class='projectstext'>
  <h2>${projectnumber.title}</h2>
  <ul class="qualities">
     <li class="qitem">${projectnumber.made[0]}</li>
    <li>
       <img src="./images/projectsimages/Counter.png" alt="dotimage" />
    </li>
    <li class="qitem">${projectnumber.made[1]}</li>
     <li>
       <img src="./images/projectsimages/Counter.png" alt="dotimage" />
    </li>
    <li class="qitem">${projectnumber.made[2]}</li>
  </ul>
   <p>
  ${projectnumber.description}
  </p>
  <ul class="languages">
    <li>${projectnumber.languages[0]}</li>
    <li>${projectnumber.languages[1]}</li>
    <li>${projectnumber.languages[2]}</li>
  </ul>
   <button type="button" class="button">See Project</button></div>
          
    `
} 

createCard(project3)

// for(a of projData){
//   createCard(a);
// };

// console.log(project1.mobileimg);
// function createCard(projectnumber) {

//     const projects = document.querySelector('.projectscards');
//     const projectsCards = document.querySelector('.projectscards');
//     let projDiv = document.createElement('div');
//     projDiv.className = 'project pro2';
//     projectsCards.appendChild(projDiv);
//     let imgDiv = document.createElement('div');
//     imgDiv.className = 'img1';
//     projDiv.appendChild(imgDiv);
//     const desktopImg = document.createElement('img');
//     desktopImg.className ='imgAA';
//     desktopImg.src = projectnumber.desktopimg; 
//     desktopImg.alt = 'desktopProjectImage';
//     imgDiv.appendChild(desktopImg);
//     const mobileImg = document.createElement('img');
//     mobileImg.className = 'imgA';
//     mobileImg.src = projectnumber.mobileimg;
//     mobileImg.alt ='mobileProjectImage';
//     imgDiv.appendChild(mobileImg);
//     const projectText = document.createElement('div');
//     projectText.className = 'projectstext';
//     projectText.innerHTML = `<h2>${projectnumber.title}</h2>
//     <ul class="qualities">
//       <li class="qitem">${projectnumber.made[0]}</li>
//       <li>
//         <img src="./images/projectsimages/Counter.png" alt="dotimage" />
//       </li>
//       <li class="qitem">${projectnumber.made[1]}</li>
//       <li>
//         <img src="./images/projectsimages/Counter.png" alt="dotimage" />
//       </li>
//       <li class="qitem">${projectnumber.made[2]}</li>
//     </ul>
//     <p>
//     ${projectnumber.description}
//     </p>
//     <ul class="languages">
//       <li>${projectnumber.languages[0]}</li>
//       <li>${projectnumber.languages[1]}</li>
//       <li>${projectnumber.languages[2]}</li>
//     </ul>
//     <button type="button" class="button">See Project</button>
//     `;
//     projDiv.appendChild(projectText);
    
// }

// function createCard2(projectnumber){

//   const projects = document.querySelector('.projectscards');
//   const projectsCards = document.querySelector('.projectscards');
//   let projDiv = document.createElement('div');
//   projDiv.className = 'project';
//   projectsCards.appendChild(projDiv);
//   let imgDiv = document.createElement('div');
//   imgDiv.className = 'img1';
//   projDiv.appendChild(imgDiv);
//   const desktopImg = document.createElement('img');
//   desktopImg.className ='imgAA';
//   desktopImg.src = projectnumber.desktopimg; 
//   desktopImg.alt = 'desktopProjectImage';
//   imgDiv.appendChild(desktopImg);
//   const mobileImg = document.createElement('img');
//   mobileImg.className = 'imgA';
//   mobileImg.src = projectnumber.mobileimg;
//   mobileImg.alt ='mobileProjectImage';
//   imgDiv.appendChild(mobileImg);
//   const projectText = document.createElement('div');
//   projectText.className = 'projectstext';
//   projectText.innerHTML = `<h2>${projectnumber.title}</h2>
//   <ul class="qualities">
//     <li class="qitem">${projectnumber.made[0]}</li>
//     <li>
//       <img src="./images/projectsimages/Counter.png" alt="dotimage" />
//     </li>
//     <li class="qitem">${projectnumber.made[1]}</li>
//     <li>
//       <img src="./images/projectsimages/Counter.png" alt="dotimage" />
//     </li>
//     <li class="qitem">${projectnumber.made[2]}</li>
//   </ul>
//   <p>
//   ${projectnumber.description}
//   </p>
//   <ul class="languages">
//     <li>${projectnumber.languages[0]}</li>
//     <li>${projectnumber.languages[1]}</li>
//     <li>${projectnumber.languages[2]}</li>
//   </ul>
//   <button type="button" class="button">See Project</button>
//   `;
//   projDiv.appendChild(projectText);

// }



// function createProjects(n,projData){
// for(let i=1; i<=n; i++){
//   if(i%2 === 0){
//     createCard(projData[i]);
//   }
//   else createCard2(projData[i]);
// }
// };

// createProjects(4,projData);



