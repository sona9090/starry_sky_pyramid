import "./styles.css";

const animateStars = () => {
  const starsSpace = document.querySelector("#stars");
  document.querySelectorAll(".star").forEach((item, key) => {
    item.setAttribute(
      "style",
      `top: ${Math.random() * starsSpace.clientHeight}px; 
      left: ${Math.random() * starsSpace.clientWidth}px;
      right: ${Math.random() * starsSpace.clientWidth}px;`
    );
  });
};

const generateStars = () => {
  if (document.getElementById("stars") === null) return;

  const stars = document.getElementById("stars");
  const star = `<div class="star"></div>`;

  const starrySky = star.repeat(300);
  stars.innerHTML = starrySky;

  animateStars();
};

generateStars();
setInterval(() => {
  animateStars();
}, 4000);

document.getElementById("mountain").innerHTML = `
`;
