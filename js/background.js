const img = ["1.jpeg", "2.jpeg", "3.jpeg"];
const selectedImage = img[Math.floor(Math.random() * img.length)];

document.body.style.backgroundImage = `URL(img/${selectedImage})`;
