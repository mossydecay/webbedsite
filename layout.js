// Everything in here is executed once the DOM (the HTML content of your website) has finished loading.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

  // Inserting your header and footer:
  document.body.insertAdjacentHTML("afterbegin", headerEl);
  document.body.insertAdjacentHTML("beforeend", footerEl);

  // To insert something inside another element, e.g. for sidebars:
  const wrapperEl = document.querySelector(".my-wrapper"); // <- your selector here
  if (wrapperEl) wrapperEl.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
  if (wrapperEl) wrapperEl.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

  // Give class 'active' to links to the current page:
  initActiveLinks();

  // add your own JavaScript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
    <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
// You don't need to use the <header> element, but I recommend it.

const headerEl = `
<div class="container"> <!-- Keeps sections from getting too stretched on ultrawide monitors -->

    <aside><!-- Sidebar start -->

    <nav>
      <div>
      <!-- Optional image in sidebar, will be resized if it's too big -->
      <a href="/home.html" style="display: contents; font-size:0px;"> <img src="/images/claybat.png" style="margin-left:5.75%; margin-top:2.5%"> </a>
      <a href="/about.html">About</a>
      <a href="/interests.html">Interests</a>
      <a href="/original-works.html">Original Works</a>
      <a href="/journal.html">Journal</a>
      <a href="/vault.html">Vault</a>
      <!-- Up to 8 links fit comfortably on my small laptop screen with the image used in the preview;
          Without an image, up to 14 links fit -->
      </div>
    </nav>

    <div class="stripe"></div>

    <!-- Sidebar end --></aside>

</div>


`;