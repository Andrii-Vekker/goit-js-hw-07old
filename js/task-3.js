const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector("#gallery");

gallery.insertAdjacentHTML("afterbegin", images.map(({ url, alt }) =>
  `<li><img height="120" width='200' src="${url}" alt="${alt}"></li>`).join(''));
//gallery.classList.add("gallery");

// images.forEach(element => {
//     gallery.insertAdjacentHTML('afterbegin', `<li><img class = "img" width = 300px src = ${element.url} alt = ${element.alt}></li>`)
// });

// const galleryRef = document.querySelector("#gallery");
// const imagesList = document.createElement("li");
// const img1 = document.createElement("img");
// const img2 = document.createElement("img");
// const img3 = document.createElement("img");
// img1.src = images[0].url;
// img2.src = images[1].url;
// img3.src = images[2].url;
// imagesList.append(img1, img2, img3);
// galleryRef.insertAdjacentElement("afterbegin", imagesList);