const apiKey = '7623f6fe77add6c69e4063b6698fbf66';
const city = 'Paris,fr';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&lang=fr&appid=7623f6fe77add6c69e4063b6698fbf66&units=metric';

let test = document.querySelector(".test");
let choix1 = document.querySelector("#choix1");
let activites = document.querySelector(".activites");
activites.style.display="none";



fetch(url)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const tempmin = data.main.temp_min;
        const tempmax = data.main.temp_max;
        const vent = data.wind.speed;
        const humidite = data.main.humidity;
        const nomVille = data.name;
        const descr = data.weather[0].description

        /*console.log(temperature);
        console.log(tempmin);
        console.log(tempmax)
        console.log(vent);
        console.log(humidite);
        console.log(nomVille);
        console.log(descr);*/

        
       choix1.addEventListener("click", () => {

        // function meteo() {

            test.style.display = "flex";
            test.innerHTML = `<div class="weather"> 
    <h1>${nomVille}</h1>
    <span>Température : ${temperature} °C </span> 
    <p>Température min/max : ${tempmin} °C / ${tempmax} °C</p> 
    <p>Vitesse du vent : ${vent} km/h</p>
    <p>Humidité : ${humidite} % </p>
    <h2>${descr}</h2>
    </div>`

    // }
    //     meteo();
function activite(){
    if( temperature < 10 ) {
activites.style.display="flex";
activites.innerHTML= ` 
<h3>Les activités proposés:</h3>
 <div class="bricolage">
<div class="paragraphe">
  <h2 class="h2_xa">Bricolage</h2>
  <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
    Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
  </p>
</div>
<div class="img"><img class="img_xa" src="assets/image/bricolage.jpg" alt="bricolage"></div>
</div>
<div class="loisirs">
<div class="paragraphe">
  <h2 class="h2_xa">Loisirs créatifs en intérieur</h2>
  <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
    Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
  </p>
</div>
<div class="img"><img class="img_xa" src="assets/image/loisir_creatif.jpg" alt="Loisirs"></div>
</div>
<div class="puzzles">
<div class="paragraphe">
  <h2 class="h2_xa">Puzzles</h2>
  <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
    Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
  </p>
</div>
<div class="img"><img class="img_xa" src="assets/image/puzzle.jpg" alt=""></div>
</div>
<div class="lecture">
<div class="paragraphe">
  <h2 class="h2_xa">Lecture</h2>
  <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
    Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
  </p>
</div>
<div class="img"><img class="img_xa" src="assets/image/lecture.jpg" alt=""></div>
</div>
<div class="relaxation">
<div class="paragraphe">
  <h2 class="h2_xa">Relaxation</h2>
  <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
    Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
  </p>
</div>
<div class="img"><img class="img_xa" src="assets/image/relaxation.jpg" alt=""></div>
</div>
<div class="cuisine">
<div class="paragraphe">
  <h2 class="h2_xa">Cuisine</h2>
  <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
    Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
  </p>
</div>
<div class="img"><img class="img_xa" src="assets/image/cuisine.jpg" alt=""></div>
</div>
<div class="societe">
<div class="paragraphe">
  <h2 class="h2_xa">Jeux de société</h2>
  <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
    Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
  </p>
</div>
<div class="img"><img class="img_xa" src="assets/image/societe.jpg" alt=""></div>
</div>`
    }else{
        ` <div class="marche">
        <div class="paragraphe">
          <h2 class="h2_xa">Marche</h2>
          <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
            Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
          </p>
        </div>
        <div class="img"><img class="img_xa" src="assets/image/marche.jpg" alt=""></div>
      </div>
      <div class="musee">
        <div class="paragraphe">
          <h2 class="h2_xa">Visites de Musées et Expos</h2>
          <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
            Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
          </p>
        </div>
        <div class="img"><img class="img_xa" src="assets/image/musee.jpg" alt=""></div>
      </div>
      <div class="velo">
          <div class="paragraphe">
            <h2 class="h2_xa">Balades à vélo</h2>
            <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
              Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
            </p>
          </div>
          <div class="img"><img class="img_xa" src="assets/image/velo.jpg" alt="velo"></div>
        </div>
        <div class="jardinage">
          <div class="paragraphe">
            <h2 class="h2_xa">Jardinage</h2>
            <p class="p_xa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Amet ad eligendi nihil explicabo quae. Vitae et dolore autem.
              Odit ipsum quae cum ut in? Nihil accusamus nam similique iure veritatis?
            </p>
          </div>
          <div class="img"><img class="img_xa" src="assets/image/jardinage.jpg" alt="jardinage"></div>
        </div>`
    }
}
   activite()  ;
    })
    .catch (error => {
    console.error(error);
})});