const menuBar = document.querySelector (".menubar");
const navBar = document.querySelector(".navbar ul");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".navbar ul li").forEach(n => n.addEventListener("click" , () => {
    menuBar.classList.remove("active");
    navBar.classList.remove("active");
}))