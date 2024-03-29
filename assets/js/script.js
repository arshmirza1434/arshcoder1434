const audio = document.getElementById("myAudio");
const audioControlButton = document.getElementById("audio-control");

// Play the audio in a loop when the window is loaded
window.onload = function() {
  audio.play();
  audioControlButton.textContent = "♫";
};

audioControlButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    audioControlButton.textContent = "|| ";
  } else {
    audio.pause();
    audioControlButton.textContent = "♫";
  }
});



Draggable.create(".flair--3", {
  type: "rotation",
  inertia: true
});

// Draggable.create(".flair--3", {
//   type: "x,y",
//   inertia: true
// });

// document.addEventListener("wheel", function(event) {
//   gsap.to(".flair--3", { rotation: "+=" + event.deltaY * 3.0, duration: 0.1 });
// });
// document.addEventListener("wheel", function(event) {
//   // Move the element down when scrolling down (adjust the value as needed)
//   gsap.to(".flair--3", { y: "+=" + event.deltaY, duration: 0.1 });
// });

const element = document.querySelector(".flair--3");
let isScrolling = false;

document.addEventListener("wheel", function(event) {
  if (!isScrolling) {
    isScrolling = true;

    // Calculate the new Y position based on scroll direction
    const newY = event.deltaY > 0 ? window.innerHeight - 190 : -100;
    gsap.to(".flair--3", { rotation: "+=" + event.deltaY * 6.0, duration: 1.5 });
    // Move the element to the new position
    gsap.to(element, { y: newY, duration: 1.5 });

    // Wait for the scroll to end and then reset the flag
    setTimeout(() => {
      isScrolling = false;
    }, 300); // Adjust the duration to match the gsap.to duration
  }
})



function effect(){
  const end = Date.now() + 15 * 1000;

  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];
  
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
  
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}




var timeout

function fancyCursor(e) {

  let halfCursorSize = 12
  let halfTrailSize = 40
  let scaleMin = 0.35
  let scaleMax = 3.0
  let finalX = e.pageX - halfCursorSize
  let finalY = e.pageY - halfCursorSize
  let finalTrailX = e.pageX - halfTrailSize
  let finalTrailY = e.pageY - halfTrailSize
  
  document.querySelector('.cursor').style.transform = 'translate('+finalX+'px,'+finalY+'px) scale('+scaleMin+')'
  
  setTimeout(() => {
    document.querySelector('.cursor-trail').style.transform = 'translate('+finalTrailX+'px,'+finalTrailY+'px) scale('+scaleMin+')'
  }, 100)
  
  if(timeout !== undefined) {
    window.clearTimeout(timeout)
  }
  
  timeout = window.setTimeout(function() {
    document.querySelector('.cursor').style.transform = 'translate('+finalX+'px,'+finalY+'px) scale('+scaleMax+')'
    document.querySelector('.cursor-trail').style.transform = 'translate('+finalTrailX+'px,'+finalTrailY+'px) scale('+scaleMax+')'
  }, 250)
  document.querySelector('.cursor').style.opacity = '1'
  document.querySelector('.cursor-trail').style.opacity = '1'
}

function cursorLoader() {
  if(document.querySelector('.cursor__wrapper')) {
    document.querySelector('.cursor__wrapper').addEventListener('mousemove',fancyCursor)
    document.querySelector('.cursor__wrapper').addEventListener('mouseleave',() => {
      document.querySelector('.cursor').style.opacity = '0'
      document.querySelector('.cursor-trail').style.opacity = '0'
    },false)
    window.addEventListener('scroll', function (e) {
      document.querySelector('.cursor').style.opacity = '0'
      document.querySelector('.cursor-trail').style.opacity = '0'
    })
  }
}

window.addEventListener('load', function() {
  cursorLoader()
  function animate() {
    requestAnimationFrame(animate)
  }
  animate()
})

  document.addEventListener("DOMContentLoaded", function () {
    // Get the element by its ID
    var myElement = document.getElementById("loader-container");

    // Set a timeout to hide the element after 4 seconds
    setTimeout(function () {
      myElement.style.display = "none";
    }, 4000); // 4 seconds (4000 milliseconds)
  });


$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
   $("#contact-form").submit(function (event) {
        emailjs.init("JMp8TgnTgzVEMkJT8");
        var paramas = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          message: document.getElementById("message").value
      };
        emailjs.send('service_ijasr9h', 'template_6i8ltbb', paramas)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
              // alert("fdf");
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Form Submitted Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            }, function (error) {
                console.log('FAILED...', error);
              
                Swal.fire({
                  position: "top-end",
                  icon: "error",
                  title: "Form Submission Failed! Try Again",
                  showConfirmButton: false,
                  timer: 1500
                });
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Arsh Coder";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Backend Development", "Web Designing", "Android Development", "Web Development", "Video Editting", "Graphic Designing" ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// <!--Start of Tawk.to Script-->

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65a7a60b0ff6374032c14811/1hkbe17ui';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// <!--End of Tawk.to Script-->


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
