let ul =document.querySelector("ul");
let li;
let section = document.querySelectorAll("section");
let main = document.querySelector("main")


addEventListener('DOMContentLoaded', (event) => {

for ( let i=0; i < main.children.length; i++) {
console.log(section[i])

     li = document.createElement("li");
     let attribute = section[i].getAttribute("data-nav");
     li.innerHTML = `<a href="#section${[i+1]}" >${attribute}</a>`
    
    ul.append(li); 
   
  }


});

