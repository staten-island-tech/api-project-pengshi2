const skins = "https://valorant-api.com/v1/bundles";

const DOM = {
  form: document.getElementById("#skinbar"),
  name: document.getElementById("name"),
  card: document.getElementsByClassName("card"),
};

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

document.form.addEventListener("submit", function () {
  event.preventDefault();
});

PPAP();
