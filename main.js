window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopOnScroll();
  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(services);
  activeMenuAtCurrentSection(about);

}

function activeMenuAtCurrentSection(section) {
  // pega a posicao da linha imaginaria
  const targetLine = scrollY + innerHeight / 2;

  //pega a posicao da linha de cima da secao
  const sectionTop = section.offsetTop;
  //pega a posicao da linha de abaixo da secao
  const sectionHeight = section.offsetHeight;

  //verifica se a linha acima da secao passou da linha imaginaria
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
  //verifica o tamamho total da secao
  const sectionEndsAt = sectionTop + sectionHeight;

  //verifica se a linha abaixo da secao passou da linha imaginaria
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  // estamos dentro da secao ( a linha imaginaria nao passou das duas linhas de controle)
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const menuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute("id")}]`
  );
  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  "#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content"
);
