const skins = "https://valorant-api.com/v1/bundles";

async function getData(skins) {
  try {
    const response = await fetch(skins);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.data.forEach((bundle) => {
        document.getElementById("display").insertAdjacentHTML(
          "beforeend",
          `<div class = "card">
          <div id = "${bundle.displayName}">
            <h2 class = "bundle"> ${bundle.displayName} </h2>
            <img class = "bundle-images" src = ${bundle.displayIcon} alt = "${bundle.displayName}"> 
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

const displayDiv = document.querySelector("#display");

document.querySelector("#all").addEventListener("click", function () {
  displayDiv.innerHTML = ``;
  apple();
});

document.querySelector("#best").addEventListener("click", function () {
  displayDiv.innerHTML = ``;
  orange();
});

document.querySelector("#random").addEventListener("click", function () {
  displayDiv.innerHTML = ``;
  pear();
});

document.querySelector("#great").addEventListener("click", function () {
  displayDiv.innerHTML = ``;
  bananna();
});

async function bananna() {
  const response = await fetch(skins);
  const info = await response.json();
  info.data
    .filter((bundle) => bundle.displayName.includes("Prime"))
    .forEach((bundle) =>
      document.getElementById("display").insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
      <div id = "${bundle.displayName}">
      <h2 class = "bundle"> ${bundle.displayName} </h2>
      <img class = "bundle-images" src = ${bundle.displayIcon} alt = "${bundle.displayName}"> 
      </div>
      </div>`
      )
    );
}

async function apple() {
  const response = await fetch(skins);
  const info = await response.json();
  info.data.forEach((bundle) =>
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
      <div id = "${bundle.displayName}">
      <h2 class = "bundle"> ${bundle.displayName} </h2>
      <img class = "bundle-images" src = ${bundle.displayIcon} alt = "${bundle.displayName}"> 
      </div>
      </div>`
    )
  );
}

async function pear() {
  const response = await fetch(skins);
  const info = await response.json();
  const data = info.data;
  const bundle = data[parseInt(Math.random() * data.length)];
  document.getElementById("display").insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
    <div id = "${bundle.displayName}">
      <h2 class = "bundle"> ${bundle.displayName} </h2>
      <img class = "bundle-images" src = ${bundle.displayIcon} alt = "${bundle.displayName}"> 
      </div>
      </div> `
  );
}

async function orange() {
  const response = await fetch(skins);
  const info = await response.json();
  const data = info.data;
  const bundles = data
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .forEach((bundle) =>
      document.getElementById("display").insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
  <div id = "${bundle.displayName}">
    <h2 class = "bundle"> ${bundle.displayName} </h2>
    <img class = "bundle-images" src = ${bundle.displayIcon} alt = "${bundle.displayName}"> 
    </div>
    </div> `
      )
    );
}
