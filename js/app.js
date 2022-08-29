let ul;
let li;
addEventListener('DOMContentLoaded', (event) => {
      ul = document.getElementById("list");
    for(let i = 1; i< 5; i++) {
      li = document.createElement("li");
    li.setAttribute("class", "section" +[i]); 
      ul.append(li); 
    }
      

});

