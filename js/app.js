//create nav links via JS, link to section page

let ul = document.querySelector("ul");
let li;
let section = document.querySelectorAll("section");
let main = document.querySelector("main");

addEventListener("DOMContentLoaded", (event) => {
  for (let i = 0; i < main.children.length; i++) {
    console.log(section[i]);

    li = document.createElement("li");
    li.classList.add("links");
    
    let attribute = section[i].getAttribute("data-nav");
    li.innerHTML = `<a href="#section${[i + 1]}" >${attribute}</a>`;

    ul.append(li);
  }

  // active class
  let links = document.querySelectorAll(".links");



  //add active class to section
  let sections = document.querySelectorAll("section");
  function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();

      const VALUE = 150;
      if (box.top <= VALUE && box.bottom >= VALUE) {
        section.classList.add("active");
        }            
        
     else {
        section.classList.remove("active");
        
      }
    }
  }



  document.addEventListener("scroll", function () {
    makeActive();
    

  });

  // link scroll
  document.querySelectorAll("a").forEach((linkScroll) => {
    linkScroll.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(linkScroll.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
