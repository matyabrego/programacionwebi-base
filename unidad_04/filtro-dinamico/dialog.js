const url = new URL(window.location.href);
const searchParams = url.searchParams;
const countryName = searchParams.get("country");

const title = document.querySelector("h2");
title.innerHTML = `Details ${countryName}`;

const dialogConfirmation = document.querySelector("#dialog-confirmation");
const buttonOpen = document.querySelector("#open-dialog");
const buttonClose = document.querySelector(".btn-close");

buttonOpen.addEventListener("click", (event) => {
  dialogConfirmation.showModal();
});

buttonClose.addEventListener("click", (event) => {
  dialogConfirmation.close();
});
