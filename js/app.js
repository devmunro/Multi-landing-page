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
  const links = document.querySelectorAll(".links");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", active);
  }

  function active(e) {
    const activeClass = document.getElementsByClassName("active");

    for (let i = 0; i < activeClass.length; i++) {
      activeClass[i].classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  }

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
