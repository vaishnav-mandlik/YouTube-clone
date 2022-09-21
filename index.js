let input = document.getElementById("inp");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let inp = document.getElementById("inp").value;
    localStorage.setItem("inp", JSON.stringify(inp));

    location.href = "Search.html";
  }
});
function showVdo() {
  let inp = document.getElementById("inp").value;
  localStorage.setItem("inp", JSON.stringify(inp));
  location.href = "Search.html";
}

let vdoId = JSON.parse(localStorage.getItem("inp"));
// if (vdoId) {
//   getData(vdoId);
// }
function getVdoId() {
  let inp = event.target.parentNode.id;
  localStorage.setItem("vdeID", JSON.stringify(inp));
  location.href = "video.html";
}

// let videos = document.getElementById("videos");
const likesFormat = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

let getDataTrend = async () => {
  let data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=AIzaSyCp_fGmjqW95H6tdQ-R2_ywrh941RbFkms`
  );
  let d1 = await data.json();
  d1 = d1.items;
  console.log(d1);

  let tredVdo = document.getElementById("tredVdo");
  d1.forEach(function (el) {
    // let vid = String(el.id.videoId);
    // console.log(vid);
    // console.log(typeof vid);
    console.log(el.snippet.title);

    let likes = likesFormat(el.statistics.viewCount);
    let title = el.snippet.title;
    if (title.length >= 70) {
      title = title.substring(0, 70) + "...";
    }
    let vid = el.id;
    console.log(vid);
    tredVdo.innerHTML += ` 
<div class="w-[auto] h-[328px] mx-[16px] hover:cursor-pointer"  onclick="getVdoId()" id=${vid}>
<img
  src=${el.snippet.thumbnails.medium.url}
  alt=""
  class="w-full h-[173px]"
/>
<p class="font-medium text-[14px] mt-2 ml-5 leading-5">
${title}
</p>
<p class="text-[12px] text-[gray] ml-5 mt-2 ">${el.snippet.channelTitle}</p>
<p class="text-[12px] text-[gray] ml-5 mt-1">${likes}</p>
</div>
`;
  });
};

getDataTrend();
function getVdoId() {
  let inp = event.target.parentNode.id;
  localStorage.setItem("vdeID", JSON.stringify(inp));

  location.href = "video.html";
}
