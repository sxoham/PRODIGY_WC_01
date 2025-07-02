const btn = document.getElementById("toggleTheme");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const halfway = document.body.scrollHeight / 2;

  if (window.scrollY > halfway) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


