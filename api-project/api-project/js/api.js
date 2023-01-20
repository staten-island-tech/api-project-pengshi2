import { DOM } from "./dom";

const skins = "https://valorant-api.com/v1/bundles";

async function getData(skins) {
  try {
    const response = await fetch(skins);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.data.forEach((bundle) => {
        document.getElementById("display").insertAdjacentHTML(
          "beforeend",
          `<div class = "card">
          <div id = "${bundle.displayName}">
            <h2 class = "bundle"> ${bundle.displayName} </h2>
            <img class = "bundle-images" src = ${bundle.displayIcon} alt = ""> 
            </div>
            </div> `
        );
      });

      console.log("ok");
    }
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}
getData(skins);

function reset() {
  document.display.innerHTML = ``;
}
function apple() {
  document.querySelector("#display").innerHTML = ``;
}

apple();
// data.forEach((data) => {
//   document.getElementById("display")
//     .insertAdjacentHTML("beforeend"`<div class = "list">
//   <li> ${bundle.displayName}</li>
//   </div>`);
// });
