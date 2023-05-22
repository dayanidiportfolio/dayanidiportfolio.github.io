/*==================== TITLE TYPING====================*/
typeTitle();
async function typeTitle() {
  document.title = "";
  let title = "Welcome to my Portfolio";
  for (let charIndex = 0; charIndex < title.length; charIndex++) {
    document.title += title.charAt(charIndex) === " "? `-`: title.charAt(charIndex);
    await sleep(100);
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
/*==================== ABOUT TYPING STYLE ====================*/
const words = ['Python Coder', 'Java Coder','Web Developer', "Data analytics", 'IOT Developer'];
let currentIndex = 0;

function typeNextWord() {
  if (currentIndex >= words.length) {
    currentIndex = 0;
  }

  const currentWord = words[currentIndex];
  const wordElement = document.getElementById('word');
  wordElement.textContent = ''; 

  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex >= currentWord.length) {
      clearInterval(typingInterval);
      currentIndex++;
      setTimeout(typeNextWord, 1000); 
      return;
    }
    const nextChar = currentWord.charAt(charIndex);
    wordElement.textContent += nextChar;
    charIndex++;
  }, 100);
 
}

typeNextWord();

/*==================== Send Message ====================*/
let token = '5830822420:AAGvhHGM5UIEOKo6hUa4lPQkwoAdnW8i5eQ';
let chatId = '1221832086';
                    
function sendMessage(event) {
  event.preventDefault();
  const button = document.getElementById('sendmessage');
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const subject = document.getElementById('subjectInput').value;
  const description = document.getElementById('descriptionInput').value;
  const message = `✔️From Portfolio \n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nDescription: \n\t${description}`;
  const encodedMessage = encodeURIComponent(message);
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`)
  .then(response => response.json())
  .then(data => {
     console.log(data);
      if (data.ok === true) {
         document.getElementById('nameInput').value = "";
         document.getElementById('emailInput').value = "";
         document.getElementById('subjectInput').value = "";
         document.getElementById('descriptionInput').value = "";
         button.style.color = '#00ff37';
         button.style.border = '2px solid #00ff37';
         button.style.animation = 'glowgreen 5s infinite';

        // Add event listener to remove animation after it finishes
        button.addEventListener('animationend', () => {
          button.style.animation = '';
        });
         } else {
          button.style.color = '#ff0000';
         button.style.border = '2px solid #ff0000';
         button.style.animation = 'glowgreen 1s infinite';

        // Add event listener to remove animation after it finishes
        button.addEventListener('animationend', () => {
          button.style.animation = '';
        });
         }
        })
        .catch(error => {
          console.error(error);
          button.style.color = '#ff0000';
         button.style.border = '2px solid #ff0000';
         button.style.animation = 'glowred 1s infinite';

        // Add event listener to remove animation after it finishes
        button.addEventListener('animationend', () => {
          button.style.animation = '';
        });
        });
  }

    /*==================== changeMode ====================*/                


    function changeMode() {
     if(window.location.pathname === '/coderview/'){
      window.location.pathname = "/normalview";
     }else{
      window.location.pathname = "/coderview";
     }
    }
  
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) { 
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img,.about-data, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img,.button,  .about__subtitle,.qualification1, .qualification2, .qualification3,.quote, .about__text, .skills__img,.contact__label',{delay: 150}); 
sr.reveal('.home__social-icon,  .contact__information',{ interval: 150}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 150}); 


