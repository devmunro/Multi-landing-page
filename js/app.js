//global variables
let ul = document.querySelector("ul");
let li;
let section = document.querySelectorAll("section");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let form;

addEventListener("DOMContentLoaded", (event) => {
  //create nav links via JS, link to section page
  for (let i = 0; i < main.children.length; i++) {
    console.log(section[i]);
    li = document.createElement("li");
    let attribute = section[i].getAttribute("data-nav");
    li.setAttribute("data-nav", attribute);

    li.innerHTML = `<a href="#section${[i + 1]}" >${attribute}</a>`;

    ul.append(li);
  }

  // active class to top section
  let links = document.querySelectorAll("li");
  section[0].classList.add("active");
  links[0].classList.add("active");

  //add active class to section and li
  let sections = document.querySelectorAll("section");
  function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      const VALUE = 150;
      if (box.top <= VALUE && box.bottom >= VALUE) {
        section.classList.add("active");

        for (let i = 0; i < ul.children.length; i++) {
          if (
            links[i].getAttribute("data-nav") !==
            section.getAttribute("data-nav")
          ) {
            links[i].classList.remove("active");
          } else {
            links[i].classList.add("active");
          }
        }
      } else {
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

  //create nav links via JS, link to section page

  form = document.createElement("form");
 form.setAttribute("method", "GET")
 form.setAttribute("action", " ")
  form.innerHTML = `
    <fieldset>
    <legend>Sign up to our weekly email </legend>
    <input required type="text" name ="name" placeholder="Your Name Here"></input>
    <input required type="email" name ="email" placeholder="Your Email Here" onclick="checkValidity()"></input>
    <br/>
    <input required name="checkbox" type="checkbox">I agree to receive weekly emails</input>
    <br/>
    
    <input type="submit"></input>
    </fieldset>`;

  footer.append(form);

  let submit = document.querySelector(`[type="submit"]`);
  submit.addEventListener("click", submitted)

  function submitted (e) {
    e.preventDefault();
    
   if ( form.reportValidity() )//from https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity
   {
   alert("Thank you for subscribing")
  }
  }

});
