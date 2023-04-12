document.title = "Modifying the DOM";
/*console.log(document.title);
document.body.style.backgroundColor = "rgb(12,200,159)";
for(let child of document.body.children){
    console.log(child.textContent);
}*/
/*let important = document.querySelectorAll('.important');
important.forEach(elem =>{
    elem.setAttribute('title',"This is an important item");
});
console.log(important);
let img = document.querySelectorAll('img:not(.important)');
img.forEach(image =>{
    image.style.display = 'none';
});
let para = document.querySelectorAll('p');
para.forEach(text =>{
    console.log(text.textContent);
    console.log(text.className);
});
let paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
  let paragraph = paragraphs[i];
  if (paragraph.classList.length == 0) {
    paragraph.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}*/
let learners = [
  "Abel",
  "Alexandra",
  "Anthony",
  "Benjamin",
  "Bruno",
  "Delphine",
  "Emilien",
  "Ethan",
  "Ismaël",
  "Jodie",
  "Julien",
  "Louka",
  "Loïc",
  "Luciano",
  "Marine",
  "Nikko",
  "Noa",
  "Steve",
  "Sylvain",
  "Willy",
];
function randomize(learners) {
  for (let i = learners.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    [learners[i], learners[x]] = [learners[x], learners[i]];
  }
  return learners;
}
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 
  return `rgb(${r}, ${g}, ${b})`;
}
function createSection(i) {
  if (i < learners.length) {
    let article = document.querySelector("article");
    let section = document.createElement("section");
    let color = generateRandomColor()
    section.style.backgroundColor = color;
    let p = document.createElement("p");
    article.appendChild(section);
    section.appendChild(p);
    p.textContent = learners[i];
    let backgroundColor = window.getComputedStyle(section).backgroundColor;
    let brightness = parseInt(backgroundColor.match(/\d+/g).join("")) / 1000;
    let background;
    if(brightness < 150){
      background = '#FFFFFF';
    }
    else{
      background = '#000000';
    }
    section.style.color = background;
    createSection(i + 1);
  }
}
randomize(learners);
createSection(0);
