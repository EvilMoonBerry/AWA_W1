import "./styles.css";
//Dog datas are from: https://en.wikipedia.org/wiki/Basenji,https://en.wikipedia.org/wiki/Akita_(dog),https://en.wikipedia.org/wiki/Newfoundland_dog,https://en.wikipedia.org/wiki/Whippet,https://en.wikipedia.org/wiki/Rottweiler
//the breed information is taken from the Wikipedia page of that breed
if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  async function submmit() {
    const dogList = ["basenji", "pug", "doberman", "malamute", "pomeranian"];
    const dogData = [
      "The Basenji is a breed of hunting dog. It was bred from stock that originated in central Africa. The Fédération Cynologique Internationale places the breed in the Spitz and primitive types. The Basenji produces an unusual yodel-like sound, due to its unusually shaped larynx. This trait also gives the Basenji the nickname the 'barkless dog.",
      "The Pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often fawn (light brown) or black, and a compact, square body with well developed and thick muscles all over the body.",
      "The Dobermann or Doberman Pinscher in the U.S. and Canada, is a medium-large breed of domestic dog that was originally developed around 1890 by Louis Dobermann, a tax collector from Germany. The Dobermann has a long muzzle. It stands on its pads and is not usually heavy-footed. Ideally, they have an even and graceful gait. Traditionally, the ears are cropped and posted and the tail is docked. However, in some countries, these procedures are now illegal and it is often considered cruel and unnecessary. Dobermanns have markings on the chest, paws/legs, muzzle, above the eyes, and underneath the tail.",
      "The Alaskan Malamute is a large breed of dog that was originally bred for its strength and endurance, to haul heavy freight as a sled dog, and as a hound. It is similar to other arctic breeds such as the husky, the spitz, the Greenland Dog, Canadian Eskimo Dog, the Siberian Husky, and the Samoyed.",
      "The Pomeranian (often known as a Pom) is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz. It has been determined by the Fédération Cynologique Internationale to be part of the German Spitz breed; and in many countries, they are known as the Zwergspitz (Dwarf Spitz)."
    ];

    for (let i = 0; i < dogList.length; i++) {
      const url = "https://dog.ceo/api/breed/" + dogList[i] + "/images/random";
      const dataPromise = await fetch(url);
      const data = await dataPromise.json();
      let containerDiv = document.getElementById("container");

      let img = document.createElement("img");
      img.classList.add("wiki-img");
      let h1 = document.createElement("h1");
      h1.classList.add("wiki-header");
      let text = document.createElement("p");
      text.classList.add("wiki-text");

      let div1 = document.createElement("div");
      div1.classList.add("wiki-item");
      let div2 = document.createElement("div");
      div2.classList.add("wiki-content");
      let div3 = document.createElement("div");
      div3.classList.add("img-container");

      img.src = data.message;
      h1.innerText = dogList[i];

      text.innerText = dogData[i];
      div3.appendChild(img);
      div2.appendChild(div3);
      div2.appendChild(text);
      div1.appendChild(h1);
      div1.appendChild(div2);
      containerDiv.appendChild(div1);
    }
  }
  submmit();
}
