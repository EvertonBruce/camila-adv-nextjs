function scrollToElement (elementId) {
  const element = document.querySelector(elementId);
  const to = element.offsetTop;
  console.log(element.clientHeight)
  window.scroll({
    top: to,
    behavior: "smooth"
  });
}

export default scrollToElement;