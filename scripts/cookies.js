const cookieBtn = document.querySelector("#cookieBtn");
cookieBtn.addEventListener("click", () => {
  document.cookie = "cookie=accepted ";
  document.querySelector(".cookie-banner").style.display = "none";
});
// if (document.cookie !== null) {
//   document.querySelector(".cookie-banner").style.display = "none";
// }
if (document.cookie.includes("cookie=accepted")) {
  document.querySelector(".cookie-banner").style.display = "none";
} else {
  console.log("Cookie is not set");
}
