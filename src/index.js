const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

const container = document.querySelector(".signin-container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  console.log(container.classList);
  
  container.classList.toggle("change");
});
