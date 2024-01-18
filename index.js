// const images = [
//   "./images/fe-ngo-bvx3G7RkOts-unsplash.jpg",
//   "./images/garrett-jackson-oOnJWBMlb5A-unsplash.jpg",
//   "./images/adorable-baby-lying-bed-smiling.jpg"
// ];

// const text = [
//     "Welcome to Bee’s surrogacy consultancy, is your trusted partner in surrogacy solutions in Nigeria.",
//     "With us you are safe being a surrogate",
//     "We love you being a parent"
// ]
// let currentIndex = 0;
// const imageElement = document.getElementById('display-image-inner');

//     function displayImage() {
//       if (currentIndex < images.length) {
//         imageElement.style.backgroundImage = `url(${images[currentIndex]})`;
//         currentIndex++;
//         if (currentIndex >= images.length) {
//           currentIndex = 0; // Loop back to the beginning of the array
//         }

//         setTimeout(displayImage, 4000); // Change image every 2 seconds (2000 milliseconds)
//       }
//     }

//     // Start displaying images when the page loads
//     displayImage();

//     function displayText() {
//       if (currentIndex < text.length) {
//         const content = document.getElementById('intro-text');
//         content.textContent = text[currentIndex];
//         currentIndex++;
//         if (currentIndex >= text.length) {
//           currentIndex = 0; // Loop back to the beginning of the array
//         }

//         setTimeout(displayText, 4000); // Change image every 2 seconds (2000 milliseconds)
//       }
//     }

//     // Start displaying images when the page loads
//     displayText();
const hamBtn = document.getElementsByClassName("harmburger-menu")[0];
const showBtn = document.getElementsByClassName("show-harmburger")[0];
const hideBtn = document.getElementsByClassName("hide-harmburger")[0];
console.log(hamBtn);
showBtn.addEventListener("click", function() {
  hamBtn.classList.remove("hidden");
});

hideBtn.addEventListener("click", function() {
  // Add the 'hidden' class to hide the item
  hamBtn.classList.add("hidden");
});

setTimeout(function() {
  document.getElementById('resizableImage').style.width = '100%';
}, 500);