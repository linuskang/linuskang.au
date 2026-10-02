const n = document.getElementById("social-name")
const socials = document.querySelectorAll(".social")

socials.forEach((s) => {
  s.addEventListener("mouseenter", () => {
    n.textContent = s.dataset.name
  })

  s.addEventListener("mouseleave", () => {
    n.textContent = "linus kang"
  })
})