if (window.FONT2DAFACE) {
  location.reload();
} else {
  window.FONT2DAFACE = true;
}

window.FONT2DAFACE
  ? document.addEventListener("mouseover", showFont)
  : document.removeEventListener("mouseover", showFont);

function getActiveFont(fontSize, fontFamily) {
  const fonts = fontFamily.split(",");
  return fonts.find(font => document.fonts.check(`${fontSize} ${font}`));
}

function showFont(e) {
  e.preventDefault();
  e.stopPropagation();

  const computedStyle = window.getComputedStyle(e.srcElement);

  const previousBackground = e.srcElement.style.background;
  const previousColor = e.srcElement.style.color;

  e.srcElement.style.background = "lightgrey";
  e.srcElement.style.color = "black";

  function setStyleOnElement() {
    e.srcElement.style.background = previousBackground;
    e.srcElement.style.color = previousColor;
  }

  e.srcElement.addEventListener("mouseout", setStyleOnElement);

  e.srcElement.setAttribute(
    "title",
    getActiveFont(computedStyle.fontSize, computedStyle.fontFamily)
  );
}
