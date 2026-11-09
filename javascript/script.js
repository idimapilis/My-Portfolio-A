// Theme switcher (remembers the visitor's choice in this browser)
const body = document.body;
const themeButton = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-icon");
const savedTheme = localStorage.getItem("ina-theme");
if (savedTheme) body.dataset.theme = savedTheme;
function refreshThemeIcon(){ if(icon) icon.textContent = body.dataset.theme === "dark" ? "☀" : "☾"; }
refreshThemeIcon();
if(themeButton) themeButton.addEventListener("click",()=>{
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("ina-theme",body.dataset.theme);
  refreshThemeIcon();
});

// Small-screen navigation
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if(menuButton && nav){
  menuButton.addEventListener("click",()=>{
    const isOpen = nav.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded",String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    nav.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded","false");
    menuButton.textContent = "☰";
  }));
}

// Animate sections when they scroll into view
if("IntersectionObserver" in window){
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}else{
  document.querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"));
}
document.querySelectorAll(".year").forEach(el=>el.textContent=new Date().getFullYear());

// Portfolio category buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");
filterButtons.forEach(button=>button.addEventListener("click",()=>{
  filterButtons.forEach(b=>b.classList.remove("active"));
  button.classList.add("active");
  portfolioItems.forEach(item=>{
    item.hidden = button.dataset.filter !== "all" && item.dataset.category !== button.dataset.filter;
  });
}));

// Preview selected files on this device. This does not upload them to a server.
const mediaInput = document.querySelector("#media-upload");
const preview = document.querySelector("#upload-preview");
if(mediaInput && preview){
  mediaInput.addEventListener("change",()=>{
    preview.innerHTML = "";
    [...mediaInput.files].forEach(file=>{
      if(!file.type.startsWith("image/") && !file.type.startsWith("video/")) return;
      const card = document.createElement("div");
      card.className = "preview-card";
      const media = document.createElement(file.type.startsWith("video/") ? "video" : "img");
      media.src = URL.createObjectURL(file);
      if(media.tagName === "VIDEO") media.controls = true;
      else media.alt = file.name;
      const label = document.createElement("p");
      label.textContent = file.name;
      card.append(media,label);
      preview.append(card);
    });
    if(!preview.children.length) preview.innerHTML = "<p>Your selected previews will appear here.</p>";
  });
}

// Contact form prepares an email in the visitor's email application.
const contactForm = document.querySelector("#contact-form");
if(contactForm){
  contactForm.addEventListener("submit",event=>{
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent("Portfolio inquiry from " + data.get("name"));
    const bodyText = encodeURIComponent("Name: "+data.get("name")+"\\nEmail: "+data.get("email")+"\\n\\n"+data.get("message"));
    document.querySelector("#form-note").textContent = "Your email app should open with the message ready to send.";
    window.location.href = "mailto:inarazondimapilis@gmail.com?subject="+subject+"&body="+bodyText;
  });
}
