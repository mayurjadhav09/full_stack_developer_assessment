const blueBtn = document.getElementById("blue-btn");
const pinkBtn = document.getElementById("pink-btn");
const yellowBtn = document.getElementById("yellow-btn");

const uploadLogoBtn = document.getElementById("upload-button");
const uploadFile = document.getElementById("input-file");
const loader = document.getElementById("loader-container");
const logoDiv = document.getElementById("logo-div");
const imgDiv = document.getElementById("img-div");

const blueUmbrellaImg = "./assets/Blue.png";
const pinkUmbrellaImg = "./assets/Pink.png";
const yellowUmbrellaImg = "./assets/Yellow.png";

const hideLoader = () => {
  loader.style.opacity = "0";
};
const showLoader = () => {
  loader.style.opacity = "1";
};

const handleFileUpload = (event) => {
  const imgFile = event.target.files[0];
  const render = new FileReader();
  render.readAsDataURL(imgFile);
  render.onloadend = () => {
    const umbrellaImg = document.getElementById("logo-img");
    umbrellaImg.src = render.result;
  };

  showLoader();

  imgDiv.style.opacity = "0";
  logoDiv.style.opacity = "0";

  setTimeout(() => {
    hideLoader();
    imgDiv.style.opacity = "1";
    logoDiv.style.opacity = "1";
  }, 3000);
};
const handlOnClick = () => {
  uploadFile.click();
};

// handle uploading logo image
uploadFile.setAttribute("type", "file"); // input type set to file
uploadFile.setAttribute("accept", ".jpg, .png"); // added validation

uploadFile.addEventListener("change", handleFileUpload);

uploadLogoBtn.addEventListener("click", handlOnClick);

blueBtn.addEventListener("click", () => {
  imgDiv.style.opacity = "0";
  logoDiv.style.opacity = "0";
  document.body.style.backgroundColor = "lightblue";

  showLoader();

  setTimeout(() => {
    hideLoader();
    const umbrellaImg = document.getElementById("umbrella-img");
    umbrellaImg.src = blueUmbrellaImg;

    imgDiv.style.opacity = "1";
    logoDiv.style.opacity = "1";
  }, 2000);
});
pinkBtn.addEventListener("click", () => {
  imgDiv.style.opacity = "0";
  logoDiv.style.opacity = "0";
  document.body.style.backgroundColor = "lightpink";

  showLoader();

  setTimeout(() => {
    hideLoader();
    const umbrellaImg = document.getElementById("umbrella-img");
    umbrellaImg.src = pinkUmbrellaImg;

    imgDiv.style.opacity = "1";
    logoDiv.style.opacity = "1";
  }, 2000);
});

yellowBtn.addEventListener("click", () => {
  imgDiv.style.opacity = "0";
  logoDiv.style.opacity = "0";
  document.body.style.backgroundColor = "lightyellow";

  showLoader();
  setTimeout(() => {
    hideLoader();
    const umbrellaImg = document.getElementById("umbrella-img");
    umbrellaImg.src = yellowUmbrellaImg;
    imgDiv.style.opacity = "1";
    logoDiv.style.opacity = "1";
  }, 2000);
});
