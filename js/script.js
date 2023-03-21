"use strict";

const accordionList = document.querySelector(".faq-accordion");

accordionList.addEventListener("click", function (e) {
  const click = e.target.parentElement.classList.contains("faq-item")
    ? e.target.parentElement
    : e.target;
  if (click.tagName !== "DIV" || !click.classList.contains("faq-item")) return;
  if (click.classList.contains("open")) {
    click.classList.toggle("open");
  } else {
    const accordion = Array.from(accordionList.children);
    accordion.forEach((item) => {
      item.classList.remove("open");
    });
    click.classList.toggle("open");
  }
});
