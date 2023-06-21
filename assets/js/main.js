let token = '5658730618:AAGHo2wGfEJvZ5DZxw1MMpxKAw2_8PnXR_Q';
let chatId = '1221832086';
/*==================== TITLE ====================*/
(window.location.origin == "https://dayanidiportfolio.github.io") ?( console.log("Access granted")):(document.body.innerHTML = "<div class='loader'><img src='/assets/images/404.gif'> </div>",fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Someone%20Clone%20Portfolio`));

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

// JavaScript code
const loader = document.querySelector('#loader');

// Function to hide the loader after a delay
function hideLoader() {
  setTimeout(function() {
    loader.style.display = 'none';
  }, 1000); // 1000 milliseconds = 1 second
}

// Call the hideLoader function after the page has loaded
window.addEventListener('load', hideLoader);


// JavaScript code
window.addEventListener('load', function() {
  const img = document.querySelector('#image-to-convert');
  const asciiArtElement = document.querySelector('#ascii-art');
  
  img.addEventListener('load', function() {
    asciiArtElement.textContent = ASCIIArt.toASCII(img);
  });
  
  img.src = 'D:\Html\Portfolio\assets\images\dayabg.png'; // Replace with the path to your image
});


/*==================== ABOUT TYPING STYLE ====================*/
const words = ['Web Developer', 'Python Coder', 'Java Coder', "Flutter Coder", 'IOT Developer'];
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
sr.reveal('.home__img,.button,  .about__subtitle,.qualification1, .qualification2, .qualification3,.quote, .about__text, .skills__img,.contact__label',{delay: 100}); 
sr.reveal('.home__social-icon,  .contact__information',{ interval: 100}); 
sr.reveal('.skills__data, .item, .contact__input',{interval: 100}); 


var modalInfo = {
  1: {
    title: "Automatic room light visitor counter",
    info: "The project is an integrated solution that combines a visitor counter, lighting control, and a security system. By utilizing sensors and a camera, the system effectively detects and counts visitors, adjusts lighting levels accordingly, and ensures room safety through motion detection and alerts. This comprehensive solution offers various benefits, including visitor tracking for monitoring footfall, automated lighting control for energy efficiency and convenience, and enhanced security measures for maintaining a safe environment within the room. By seamlessly integrating these functionalities, the project provides a robust and efficient solution for managing visitor traffic, optimizing lighting conditions, and enhancing overall room security.",
    link: "#",
    github: "#"
  },
  2: {
    title: "Py-Thanglish",
    info: "The \"Tamil to Thanglish Converter in Python\" is a package that allows users to convert Tamil text into Thanglish (Tamil written in English script). By installing the Py_Thanglish package and running the provided code examples, users can input Tamil text and obtain the corresponding Thanglish output. The package also includes integration with pyttsx3 for text-to-speech capabilities, enabling Thanglish text to be spoken aloud. This package serves as a beginner-level tool for Tamil to Thanglish conversion, facilitating pyttsx3 to read Tamil text in the form of Thanglish.",
    link: "https://pypi.org/project/Py-Thanglish/",
    github: "#"
  },
  3: {
    title: "Sign Language",
    info: "The project utilizes an IoT camera and Python to enable the transmission of emergency messages. The system captures sign language gestures through the camera, processes them using recognition techniques, and converts them into text messages. By employing Python and IoT technology, this project facilitates urgent communication for sign language users during emergencies. The provided code includes functionality to display text messages based on recognized gestures and interact with the Telegram messaging platform to send messages and photos. This project serves as a valuable tool for facilitating emergency communication for sign language users, ensuring effective and efficient messaging during critical situations.",
    link: "#",
    github: "#"
  },
  4: {
    title: "TeleChat Bot",
    info: '"The File Sharing Portal using a Telegram Bot" is a web application that enables secure and direct file sharing between systems and mobile devices. It leverages a Telegram bot for seamless communication and file transfer. Users can easily upload files of various types and sizes, specify recipients by chat IDs, and enjoy features such as distinct message styles, image and video previews, and organized document display. The portal offers a user-friendly interface, responsive design, and a hassle-free experience for secure file sharing across different devices.'
    ,
    link: "https://dayanidicode.github.io/",
    github: "#"
  },
  5: {
    title: "Smart Lighting System",
    info: "The \"Smart Lighting System\" is an advanced project that uses face and body recognition technology to automate and optimize lighting control in a room. It adjusts the lights based on the presence and behavior of occupants, offering convenience and energy efficiency. With features such as automatic light activation, dynamic lighting adjustments, and energy-saving mechanisms, it provides an enhanced lighting experience while promoting sustainability. The system can also be integrated with other smart devices for seamless control and customization.",
    link: "#",
    github: "#"
  },
  6: {
    title: "Flames",
    info: "The FLAMES project is a Flutter application designed to recreate the popular FLAMES game, which determines the relationship status between two individuals based on their names. The user interface follows Material Design principles, featuring text fields for entering names and validating inputs for special characters. The FLAMES algorithm calculates the result by removing common characters and counting the remaining characters. The result, accompanied by an image and sound effect, is displayed in an alert dialog. The project utilizes the audioplayers package for audio playback, adding an interactive element to the game. It also includes an About dialog providing information about the app and the author, along with a navigation drawer for easy access. Overall, the FLAMES project offers an enjoyable and engaging experience for users to discover their relationship compatibility.",
    link: "#",
    github: "#"
  }
};

// Get the modal
var modal = document.getElementById('myModal');

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal 
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("site").onclick = function(){
    window.open(modalInfo[id].link,'_blank');
  }
}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}


  /*==================== spark image on mouse moving ====================*/   
  function getRandomRotation() {
    return Math.floor(Math.random() * 360); // Generate a random angle between 0 and 360
}

function getRandomSize() {
    return Math.floor(Math.random() * 40) + 10; // Generate a random size between 10 and 50 pixels
}


document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mousemove', function (event) {
        var spark = document.createElement('img');
        spark.setAttribute('class', 'spark');
        spark.setAttribute('src', '/assets/images/spark.png');
        spark.style.left = event.clientX + 'px';
        spark.style.top = event.clientY + window.scrollY + 'px'; // Account for scroll position
        spark.style.transform = 'rotate(' + getRandomRotation() + 'deg)';
        spark.style.width = getRandomSize() + 'px';
        spark.style.height = 'auto';
        document.body.appendChild(spark);
        setTimeout(function () {
            document.body.removeChild(spark);
        }, 150); // Adjust the duration to your preference (in milliseconds)
    });
});

/*==================== Personal details ====================*/

var personalDetails = {
name: "Dayanidi",
initial: "GV",
age: 19,
occupation:"college student",
college: "KSR College of Engineering in Tiruchengode",
pursuing: "Third",
cgpa: 7.7,
address: "Salem, Tamilnadu.",
about:"",
email: "dayanidigv954@gmail.com",
phone: "+919677724053",
call:'tel:9345143372',
facebook:"https://www.facebook.com/dayanidi.dayanidi.792/",
instagram:"https://www.instagram.com/jaadoo.the_magic/",
twitter:"https://twitter.com/DayanidiCoder",
linkedin:"https://in.linkedin.com/in/dayanidi-gv-a37732249",
github:"https://github.com/dayanid",
};
personalDetails.about = `I am a ${personalDetails.age}-year-old college student, currently in my ${personalDetails.pursuing} year of pursuing a B. Tech in Information Technology at ${personalDetails.college} in Tiruchengode.`;

document.getElementsByClassName("navbar-brand")[0].innerHTML=personalDetails.name;
document.getElementsByClassName("nametag")[0].innerHTML=personalDetails.name;
(window.location.pathname === '/normalview/')?(
document.getElementById("normalviewAbout").innerHTML=personalDetails.about
):(
document.getElementById("name").innerHTML=personalDetails.name,
document.getElementById("age").innerHTML=personalDetails.age,
document.getElementById("occupation").innerHTML=personalDetails.occupation,
document.getElementById("year").innerHTML=personalDetails.pursuing
);
document.getElementById("cgpatag").innerHTML=personalDetails.cgpa;
document.getElementById("phone").innerHTML=personalDetails.phone;
document.getElementById("email").innerHTML=personalDetails.email;
document.getElementById("address").innerHTML=personalDetails.address;
var socialIcons = document.getElementsByClassName("home__social-icon");
socialIcons[0].href = personalDetails.linkedin;
socialIcons[1].href = personalDetails.github;
for (var k = 0 ; k<=5;k++){
document.getElementsByClassName("footer__social-icon")[k].href = personalDetails[Object.keys(personalDetails)[12 + k]];
}

