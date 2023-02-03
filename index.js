const hamburgerMenu = document.querySelector(".hamburgermenu");
const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const modalWindow = document.createElement("div");

modalWindow.className = "modal-background";
document.body.appendChild(modalWindow);

function createModalWindow(projButton) {
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
`;
}

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("showmenu");
  hamburger.classList.toggle("hamburgerclicked");
  bar1.classList.toggle("bar1clicked");
  bar2.classList.toggle("bar2clicked");
  bar3.classList.toggle("bar3clicked");
});

document.querySelectorAll(".hamItem").forEach((item) =>
  item.addEventListener("click", () => {
    hamburgerMenu.classList.remove("showmenu");
    bar1.classList.remove("bar1clicked");
    bar2.classList.remove("bar2clicked");
    bar3.classList.remove("bar3clicked");
    hamburger.classList.remove("hamburgerclicked");
  })
);
