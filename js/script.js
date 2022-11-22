const firstContainter = document.querySelector(".first");
const secondContainer = document.querySelector("#second");
const oneButton = document.querySelector(".onebt");
const secondButton = document.querySelector(".secondbt");
const thirdButton = document.querySelector(".thirdbt");
const div = document.createElement("div");
var count= document.querySelector(".counter");
var click= document.querySelector(".click");
const templateString =
  `<div class="container">
  <article>Vai palmeiras!</article>
</div>
`
oneButton.addEventListener("click", () => {
    div.innerHTML = templateString;
    secondContainer.appendChild(div)
  }, false);

let clicked = 0;
secondButton.addEventListener("click", () => {
  clicked++
  click.innerHTML = `<h5>ClickCounter</h5>` + clicked;
  if(upto > 0){
  count.innerHTML=`<h3>Timer</h3>` + ++upto;
  console.log(upto)
  }
}, false);

let upto=0;
thirdButton.addEventListener("click", () => {
    let counts=setInterval(updated,1000);
    function updated(){
      count.innerHTML=`<h3>Timer</h3>` + ++upto;
      console.log(upto)
      if(upto===100)
      {
          clearInterval(counts);
          upto = 0;
          clicked = 0;
          click.innerHTML = `<h5>ClickCounter</h5>` + clicked;
          count.innerHTML=`<h3>Timer</h3>` + upto;
      }
  }
  }, false);
  