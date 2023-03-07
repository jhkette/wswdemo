export default function runAccordion() {
  const qAnda = document.querySelectorAll(".question-container");

  const question = (elem) => {
    console.log(elem.childNodes[0]);
    console.log(elem.nextSibling.id);
    const arrow = document.getElementById(elem.childNodes[1].id);
    const answer = document.getElementById(elem.nextSibling.id);
    arrow.classList.toggle("rotated");
    answer.classList.toggle("visible");
  };
  if (qAnda) {
    qAnda.forEach((elem) => {
      elem.addEventListener("click", () => question(elem));
    });
  }
}
