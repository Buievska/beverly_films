import "./style.css";

const copyrightElement = document.querySelector("#copyright");

const currentYear = new Date().getFullYear();

copyrightElement.textContent = `© ${currentYear} Beverly Films`;
