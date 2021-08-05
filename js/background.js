const img = ["1.jpeg", "2.jpeg", "3.jpeg"];
const selectedImage = img[Math.floor(Math.random() * img.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${selectedImage}`;

document.body.appendChild(backgroundImage);