(() => {
  // Determine path prefix dynamically based on the current page's subfolder level
  const isSubfolder = window.location.pathname.includes('/work/') || 
                      window.location.pathname.includes('/plan/') || 
                      window.location.pathname.includes('/news/') || 
                      window.location.pathname.includes('/plans-Studio-Nama/');
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
  createListElement("STUDIO", prefix + "index.html");
  createListElement("SERVICES", prefix + "index.html");
  createListElement("PLANS", prefix + "plans-Studio-Nama/index.html");
  createListElement("APPROACH", prefix + "index.html");
  createListElement("NEWS", prefix + "news/index.html");

  document.body.append(menu);

  // Global Theme toggle synchronization
  function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    
    document.querySelectorAll("#theme-toggle").forEach(btn => {
      btn.textContent = newTheme === "dark" ? "LIGHT MODE" : "DARK MODE";
    });
  }

  document.querySelectorAll("#theme-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  // Bind to static navbar if present on page
  const staticNavbar = document.querySelector(".navbar");
  if (staticNavbar) {
    const menuBtn = document.getElementById("menu-toggle") || [...document.querySelectorAll("button, a")].find(el => el.textContent.trim().toLowerCase() === "menu");
    if (menuBtn) {
      menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (menu.classList.contains("show")) {
          menu.classList.remove("show");
          menuBtn.innerHTML = "MENU";
        } else {
          menu.classList.add("show");
          menuBtn.innerHTML = "CLOSE";
        }
      });
    }
  } else {
    // Home page dynamic navbar behavior (unchanged for homepage)
    let navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    let li1 = document.createElement("li");
    li1.innerText = "STUDIO NAMMA";

    let li2 = document.createElement("li");
    li2.innerText = "DARK MODE";
    li2.addEventListener("click", () => {
      toggleTheme();
      const currentTheme = document.body.getAttribute("data-theme") || "light";
      li2.innerText = currentTheme === "dark" ? "LIGHT MODE" : "DARK MODE";
    });

    let li3 = document.createElement("li");
    li3.innerText = "MENU";

    let li4 = document.createElement("li");
    li4.innerText = "LET'S TALK";

    function menuEffect(element) {
      element.addEventListener("mouseenter", () => {
        if (menu.classList.contains("show")) return;
        if (element.innerText === "MENU") {
          element.innerText = "OPEN";
        }
        else if (element.innerText === "LET'S TALK") {
          element.innerText = "CONTACT US";
        }
      });

      element.addEventListener("mouseout", () => {
        if (menu.classList.contains("show")) return;
        if (element.innerText === "OPEN") {
          element.innerText = "MENU";
        }
        else if (element.innerText === "CONTACT US") {
          element.innerText = "LET'S TALK";
        }
      });
    }

    li3.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        li3.innerText = "MENU";
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