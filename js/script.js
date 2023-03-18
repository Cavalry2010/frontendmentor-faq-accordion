"use strict";

const accordionList = document.querySelector(".faq-accordion");

accordionList.addEventListener("click", function (e) {
  const click = e.target.parentElement.classList.contains("faq-item")
    ? e.target.parentElement
    : e.target;
  if (click.tagName !== "DIV") return;
  click.classList.toggle("open");
});
