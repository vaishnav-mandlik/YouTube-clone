let renderVdo = document.getElementById("renderVdo");
let vdoId = JSON.parse(localStorage.getItem("vdeID"));
// vdoId = "BGA7Ee4jS2w";
let vdoHtml = ` <iframe
id="video"
src=https://www.youtube.com/embed/${vdoId}?autoplay=1
allowfullscreen
frameborder="0"
width="100%"
height="70%"
class="pt-[56px] h-[100%]"
></iframe>`;
renderVdo.innerHTML = vdoHtml;

function showVdo() {
  let inp = document.getElementById("inp").value;
  localStorage.setItem("inp", JSON.stringify(inp));
  getData(inp);
}
let input = document.getElementById("inp");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let inp = document.getElementById("inp").value;
    location.href = "Search.html";
    localStorage.setItem("inp", JSON.stringify(inp));
    getData(inp);
  }
});
