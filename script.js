//bring in all panels; use query all selector to bring panels into node list

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEentListerne("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
