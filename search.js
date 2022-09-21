let videos = document.getElementById("videos");

let getData = async (inp) => {
  let data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inp}&key=AIzaSyCp_fGmjqW95H6tdQ-R2_ywrh941RbFkms`
  );
  let d1 = await data.json();
  d1 = d1.items;
  console.log(d1);
  videos.innerHTML = "";

  d1.forEach(function (el) {
    let vid = String(el.id.videoId);
    // console.log(vid);
    // console.log(typeof vid);
    videos.innerHTML += ` <div  class="flex flex-row mt-5 ml-[5%] mr-[10%] w-[full] h-[200px] hover:cursor-pointer"  onclick="getVdoId()" id=${vid}  >
    <img
      src=${el.snippet.thumbnails.medium.url}
      alt=""
    />
    <div class="ml-5">
      <p class="font-medium text-[18px]">${el.snippet.title}</p>
      <p class="font-medium text-[14px]">${el.snippet.channelTitle}</p>
      <p class="text-[12px] mt-2">${el.snippet.description}</p>
    
    </div>
  </div>`;
  });
};
function showVdo() {
  let inp = document.getElementById("inp").value;
  console.log("clicked");
  localStorage.setItem("inp", JSON.stringify(inp));
  getData(inp);
}

let input = document.getElementById("inp");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let inp = document.getElementById("inp").value;
    localStorage.setItem("inp", JSON.stringify(inp));

    getData(inp);
  }
});

let vdoId = JSON.parse(localStorage.getItem("inp"));
if (vdoId) {
  getData(vdoId);
}
function getVdoId() {
  let inp = event.target.parentNode.id;
  localStorage.setItem("vdeID", JSON.stringify(inp));
  location.href = "video.html";
}
