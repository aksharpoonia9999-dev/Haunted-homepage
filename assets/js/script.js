// Navbar

const NAV_DATA = ["Minting", "Road Map", "Faq", "Team", "Join Us"];

const navlist = document.getElementById("navlist");
const menuToggle = document.getElementById("menuToggle");
const menuLines = menuToggle.querySelectorAll(".menu-line");

NAV_DATA.forEach((item) => {
  navlist.innerHTML += `
    <li>
      <a
        href="#"
        class="
          relative
          inline-block
          font-medium
          text-lg
          leading-150
          text-white

          after:absolute
          after:left-0
          after:bottom-[-5px]
          after:h-[3px]
          after:w-0
          after:rounded-full
          after:bg-white
          after:content-['']

          after:transition-all
          after:duration-300

          hover:after:w-full
        "
      >
        ${item}
      </a>
    </li>
  `;
});

// OPEN MENU

function openMenu() {
  navlist.classList.add(
    "!opacity-100",
    "!visible",
    "!pointer-events-auto",
    "!translate-x-0",
  );

  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");

  document.body.classList.add("overflow-hidden");

  menuLines[0].classList.add("translate-y-[8px]", "rotate-45");

  menuLines[1].classList.add("opacity-0");

  menuLines[2].classList.add("-translate-y-[8px]", "-rotate-45");
}

// CLOSE MENU

function closeMenu() {
  navlist.classList.remove(
    "!opacity-100",
    "!visible",
    "!pointer-events-auto",
    "!translate-x-0",
  );

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");

  document.body.classList.remove("overflow-hidden");

  menuLines[0].classList.remove("translate-y-[8px]", "rotate-45");

  menuLines[1].classList.remove("opacity-0");

  menuLines[2].classList.remove("-translate-y-[8px]", "-rotate-45");
}

// TOGGLE MENU

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navlist.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    closeMenu();
  }
});

// Auto Changing Images

const IMAGE_DATA = [
  "./assets/images/SPECIAL BULLIES.webp",
  "./assets/images/BREEDING.webp",
  "./assets/images/DIGITALMARKETS.webp",
  "./assets/images/MERCH.webp",
  "./assets/images/CHARITY.webp",
  "./assets/images/ART COLLECTION.webp",
];

const changingImg = document.getElementById("changing-img");

let imageIndex = 0;
let imageInterval;

function startImageSlider() {
  imageInterval = setInterval(() => {
    imageIndex++;

    if (imageIndex >= IMAGE_DATA.length) {
      imageIndex = 0;
    }

    changingImg.src = IMAGE_DATA[imageIndex];
  }, 900);
}

function stopImageSlider() {
  clearInterval(imageInterval);
}

startImageSlider();

changingImg.addEventListener("mouseenter", stopImageSlider);
changingImg.addEventListener("mouseleave", startImageSlider);

// Cards
const CARDS = [
  {
    Image: "./assets/images/ART COLLECTION.webp",
    heading: "ART COLLECTION",
    para: "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
  },
  {
    Image: "./assets/images/SPECIAL BULLIES.webp",
    heading: "SPECIAL BULLIES",
    para: "20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}.",
  },
  {
    Image: "./assets/images/BREEDING.webp",
    heading: "BREEDING",
    para: "Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.",
  },
  {
    Image: "./assets/images/DIGITALMARKETS.webp",
    heading: "DIGITALMARKETS",
    para: "Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed.",
  },
  {
    Image: "./assets/images/MERCH.webp",
    heading: "MERCH",
    para: "The team is working on the future merch thet will be available for the community members directly on our webpage.",
  },
  {
    Image: "./assets/images/CHARITY.webp",
    heading: "CHARITY",
    para: "We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.",
  },
];

const card = document.getElementById("card");

CARDS.forEach((item, index) => {
  card.innerHTML += `
    <div data-aos="fade-up" data-aos-delay="${(index % 3) * 150}" class="w-full max-w-[426px]">
    <div class="group h-full max-w-[426px] cursor-pointer lg:min-h-[511px] md:min-h-[460px] min-h-[400px] lg:pt-[39px] lg:pb-[34px] md:py-8 py-6 lg:pl-[39px] lg:pr-10 md:px-8 sm:px-7 px-6 rounded-card bg-card-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(0,157,255,0.25)]">
      <div class="flex flex-col">
        <img class="md:w-[117px] md:h-[145px] w-[100px] h-[120px]" src="${item.Image}" alt="">
        <h1 class="font-semibold lg:text-[30px] md:text-[26px] text-2xl leading-100 lg:mt-[44px] md:mt-8 mt-4 text-white">
          ${item.heading}
        </h1>
        <p class="font-normal md:text-xl sm:text-lg text-base leading-150 text-card-text lg:mt-[25px] md:mt-[22px] mt-3">
          ${item.para}
        </p>
      </div>
    </div>
    </div>
  `;
});

// FAQ
const faqitem = document.querySelectorAll(".faqitem");

faqitem.forEach((item) => {
  const faqbutton = item.querySelector(".faqbutton");
  const faqcontent = item.querySelector(".faqcontent");
  const icon = item.querySelector("span svg");

  faqbutton.addEventListener("click", () => {
    faqitem.forEach((otherItem) => {
      const otherContent = otherItem.querySelector(".faqcontent");
      const otherIcon = otherItem.querySelector("span svg");

      if (otherItem !== item) {
        otherContent.classList.remove("grid-rows-[1fr]");
        otherContent.classList.add("grid-rows-[0fr]");
        otherIcon.classList.remove("rotate-180");
      }
    });

    faqcontent.classList.toggle("grid-rows-[1fr]");
    faqcontent.classList.toggle("grid-rows-[0fr]");
    icon.classList.toggle("rotate-180");
  });
});

if (faqitem.length > 0) {
  const firstContent = faqitem[0].querySelector(".faqcontent");
  const firstIcon = faqitem[0].querySelector("span svg");

  firstContent.classList.remove("grid-rows-[0fr]");
  firstContent.classList.add("grid-rows-[1fr]");
  firstIcon.classList.add("rotate-180");
}

// Team
let TEAM_DATA = [
  {
    Image: "./assets/images/Prime Bullister.webp",
    heading: "Prime Bullister ",
    para: "Pruduct Designer",
    height: "h-[311px]",
    weidth: "w-[311px]",
  },

  {
    Image: "./assets/images/SPECIAL BULLIES.webp",
    heading: "Solvador Bulli",
    para: "Artist",
    height: "h-[312px]",
    weidth: "w-[312px]",
    objectFit: "object-cover",
  },

  {
    Image: "./assets/images/Meta Bully.webp",
    heading: "Meta Bully",
    para: "Developer",
    height: "h-[312px]",
    weidth: "w-[293.43px]",
  },
];

const ourteam = document.getElementById("ourTeam");

TEAM_DATA.forEach((item, index) => {
  ourteam.innerHTML += `
    <div data-aos="zoom-in-up" data-aos-delay="${(index % 3) * 150}" class="flex flex-col items-center justify-center">
      <img class="${item.height} ${item.weidth} ${item.objectFit || ""} transition-transform duration-500 hover:scale-105 hover:-rotate-2" src="${item.Image}" alt="">

      <div class="flex flex-col text-center mt-8">
        <h1 class="font-semibold text-[30px] leading-136 text-white">${item.heading}</h1>
        <p class="font-normal text-lg leading-136 text-white mt-[2px]">${item.para}</p>
      </div>
    </div>
  `;
});

// AOS Animation
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });

  window.addEventListener("load", () => AOS.refresh());
}
