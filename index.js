const btnHome = document.querySelector("button#home");
const btnKeunggulan = document.querySelector("button#keunggulan");
const btnKelas = document.querySelector("button#kelas");
const btnContact = document.querySelector("button#contact");

btnHome.addEventListener("click", () => {
    const componen = document.querySelector("section.hero");
    componen.scrollIntoView({
        behavior: "smooth"
    })
})

btnKeunggulan.addEventListener("click", () => {
  const componen = document.querySelector("section.keunggulan");
  componen.scrollIntoView({
    behavior: "smooth"
  });
});

btnKelas.addEventListener("click", () => {
  const componen = document.querySelector("section.kelas");
  componen.scrollIntoView({
    behavior: "smooth"
  });
});

btnContact.addEventListener("click", () => {
  const componen = document.querySelector("footer");
  componen.scrollIntoView({
    behavior: "smooth"
  });
});
