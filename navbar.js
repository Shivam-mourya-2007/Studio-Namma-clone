(() => {
  // Determine path prefix dynamically based on the current page's subfolder level
  const isSubfolder = window.location.pathname.includes('/work/') || window.location.pathname.includes('/plan/');
  const prefix = isSubfolder ? '../' : './';

  let menu = document.createElement("ul");
  menu.setAttribute("id", "menu");

  function createListElement(value, url) {
    let li = document.createElement("li");
    if (url) {
      li.innerHTML = `<a href="${url}" style="color:inherit; text-decoration:none;">${value}</a>`;
    } else {
      li.innerText = value;
    }
    menu.append(li);
  }

  createListElement("HOME", prefix + "index.html");
  createListElement("");
  createListElement("WORK", prefix + "work/work.html");
  createListElement("STUDIO");
  createListElement("SERVICES");
  createListElement("PLANS", prefix + "plan/index.html");
  createListElement("APPROACH");
  createListElement("NEWS", prefix + "plan/index.html");

  document.body.append(menu);

  // Bind to static menu toggle if it exists on the page
  const staticNavbar = document.querySelector(".navbar");
  if (staticNavbar) {
    // We are on a page with a static navbar (Work or Plan page)
    const menuBtn = document.getElementById("menu-toggle") || [...document.querySelectorAll("button, a")].find(el => el.textContent.trim().toLowerCase() === "menu");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        if (menu.classList.contains("show")) {
          menu.classList.remove("show");
          menuBtn.textContent = "MENU";
        } else {
          menu.classList.add("show");
          menuBtn.textContent = "CLOSE";
        }
      });
    }
  } else {
    // Home page dynamic navbar behavior
    let navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

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
          element.innerText = "OPEN";
        }
        else if (element.innerText == "LET'S TALK") {
          element.innerText = "CONTACT US";
        }
      });

      element.addEventListener("mouseout", () => {
        if (element.innerText == "OPEN") {
          element.innerText = "MENU";
        }
        else if (element.innerText == "CONTACT US") {
          element.innerText = "LET'S TALK";
        }
      });
    }

    li3.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        li3.innerText = "OPEN";
      } else {
        menu.classList.add("show");
        li3.innerText = "CLOSE";
      }
    });

    menuEffect(li3);
    menuEffect(li4);

    navbar.append(li1, li2, li3, li4);
    document.body.append(navbar);
  }
})();