document.getElementById("read-more").addEventListener("click", function () {
  alert("More information coming soon!");
});
const events = document.querySelectorAll(".event");

events.forEach((event) => {
  event.addEventListener("click", () => {
    event.classList.toggle("active");
  });
});
