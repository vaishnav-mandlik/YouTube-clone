let videos = document.getElementById("videos");

let getData = async (inp) => {
  let data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${inp}&key=AIzaSyCp_fGmjqW95H6tdQ-R2_ywrh941RbFkms`
  );
  let d1 = await data.json();
  d1 = d1.items;
  console.log(d1);
  videos.innerHTML = "";

  d1.forEach((el) => {
    // const {snippet.channelTitle,} = el;
    let videoHTML = ` <div class="flex flex-row mt-5 ml-[5%] mr-[10%] w-[full] h-[200px]">
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
    videos.innerHTML += videoHTML;
  });
};
function showVdo() {
  let inp = document.getElementById("inp").value;
  getData(inp);
}

let input = document.getElementById("inp");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let inp = document.getElementById("inp").value;
    getData(inp);
  }
});
