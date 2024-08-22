let projectNames = document.querySelectorAll(".project-name");

projectNames.forEach(function (element) {
  element.addEventListener("click", function () {
    projectNames.forEach(function (el) {
      el.classList.remove("clicked");
    });

    this.classList.add("clicked");
  });
});

function filterProjects(category) {
  let cards = document.querySelectorAll(".project-card");

  cards.forEach(function (card) {
    let cardCategory = card.getAttribute("data-category");
    if (category === "all" || category === cardCategory) {
      card.style.display = "block";

      let categoriesWithLargeSize = [
        "workIdeas",
        "mockup",
        "psdDesign",
        "logo",
        "presentation",
        "icons",
      ];
      if (categoriesWithLargeSize.includes(category)) {
        card.classList.add("large");
      } else {
        card.classList.remove("large");
      }
    } else {
      card.style.display = "none";
    }
  });
}

window.onload = function () {
  filterProjects("workIdeas");
};