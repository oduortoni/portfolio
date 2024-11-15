document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".nav-list ul");
  const menuItem = document.querySelectorAll(".nav-list ul li a");
  const header = document.querySelector(".header.container");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  });

  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "#000";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });

  const fallingLetters = document.getElementById("falling-letters");

  const message = "#;$%*^|&~`{}[]=-/+_abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const colors = ["red", "green", "white", "yellow", "blue", "aliceblue"];
  const colors = ["#000000", "#FCFEFB", "#08ddfd", "#454545", "#f5f5f5"];
  function createFallingLetter() {
    const letter = document.createElement("div");
    let clr = colors[Math.floor(Math.random() * colors.length)];
    letter.style.color = clr;
    letter.style.fontWeight = "bold";
    letter.classList.add("falling-letter");
    letter.textContent = message[Math.floor(Math.random() * message.length)];
    
    // Set random horizontal position and animation duration
    letter.style.left = `${Math.random() * 100}vw`;
    letter.style.animationDuration = `${Math.random() * 2 + 3}s`;
    
    fallingLetters.appendChild(letter);
    
    // Remove letter after animation ends
    letter.addEventListener("animationend", () => {
      letter.remove();
    });
  }

  // Generate letters at intervals
  setInterval(createFallingLetter, 300);
});
