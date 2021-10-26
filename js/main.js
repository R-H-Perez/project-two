// References the button and navbar list, in the html code.
var button = document.querySelector("button");
var ul = document.querySelector("ul");

// The selections should come after one hits the hamburger menu, and makes it "active."
function toggle() {
  ul.classList.toggle("active");
}

// The event is wired so if the user clicks on the hamburger button, the selections will follow.
button.addEventListener("click", toggle);