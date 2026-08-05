let navbar = document.createElement("ul");
navbar.setAttribute("id", "navbar");

let menu = document.createElement("ul");
menu.setAttribute("id", "menu")

let li1 = document.createElement("li");
li1.innerText = "STUDIO NAMMA";

let li2 = document.createElement("li");
li2.innerText = "DARK MODE";


let li3 = document.createElement("li");
li3.innerText = "MENU";

let li4 = document.createElement("li");
li4.innerText = "LET'S TALK";

function menuEffect(element) {

  element.addEventListener("mouseenter", () => {
    if (element.innerText == "MENU") {
      element.innerText = "OPEN"
    }
    else if(element.innerText == "LET'S TALK"){
      element.innerText = "CONTACT US"
    }
  })

  element.addEventListener("mouseout", () => {
    if (element.innerText == "OPEN") {
      element.innerText = "MENU"
    }
    else if(element.innerText == "CONTACT US"){
      element.innerText = "LET'S TALK"
    }
  })
}


li3.addEventListener("click", ()=>{
  if(li3.innerText == "OPEN"){
    menu.classList.add("show");
    li3.innerText = "CLOSE"
  }
  else if(li3.innerText == "CLOSE"){
    menu.classList.remove("show")
    li3.innerText = "OPEN"
  }
})

menuEffect(li3);
menuEffect(li4);

function createListElement(value){
  let li = document.createElement("li");
  li.innerText = value;
  menu.append(li);
}

createListElement("HOME");
createListElement("")
createListElement("WORK")
createListElement("STUDIO");
createListElement("SERVICES");
createListElement("PLANS");
createListElement("APPROACH");
createListElement("NEWS")

console.log(menu);

navbar.append(li1, li2, li3, li4);
document.body.append(navbar, menu);