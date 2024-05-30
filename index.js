const onOff = document.querySelector(".switch");
const img = document.querySelector(".rotate");
const speed = document.querySelectorAll(".speed");
onOff.onclick = () => {
  const curr = onOff.textContent;
  console.log(curr);
  if (curr == "On") {
    onOff.textContent = "Off";
    img.classList.add("rotate1");
    img.classList.remove("rotate2");
    img.classList.remove("rotate3");
    speed[0].classList.add("clicked");
    speed[1].classList.remove("clicked");
    speed[2].classList.remove("clicked");
  } else {
    img.classList.remove("rotate1");
    img.classList.remove("rotate2");
    img.classList.remove("rotate3");
    speed[0].classList.remove("clicked");
    speed[1].classList.remove("clicked");
    speed[2].classList.remove("clicked");
    onOff.textContent = "On";
  }
};
const curr = onOff.textContent;
curr == "On" &&
  speed.forEach((btn) => {
    btn.onclick = () => {
      console.log(btn.textContent);
      const sped = btn.textContent;
      if (sped == 1) {
        img.classList.add("rotate1");
        img.classList.remove("rotate2");
        img.classList.remove("rotate3");
        speed[0].classList.add("clicked");
        speed[1].classList.remove("clicked");
        speed[2].classList.remove("clicked");
      } else if (sped == 2) {
        img.classList.remove("rotate1");
        img.classList.add("rotate2");
        img.classList.remove("rotate3");
        speed[0].classList.remove("clicked");
        speed[1].classList.add("clicked");
        speed[2].classList.remove("clicked");
      } else {
        img.classList.remove("rotate1");
        img.classList.remove("rotate2");
        img.classList.add("rotate3");
        speed[0].classList.remove("clicked");
        speed[1].classList.remove("clicked");
        speed[2].classList.add("clicked");
      }
    };
  });
