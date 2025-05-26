const imagenes = [
  "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg",
  "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"
];

imagenes.sort(() => 0.5 - Math.random());

const tablero = document.getElementById("tablero");
let abierta = null;

imagenes.forEach((nombre, index) => {
  const carta = document.createElement("div");
  carta.classList.add("carta");
  const img = document.createElement("img");
  img.src = `imagenes/${nombre}`;
  carta.appendChild(img);

  carta.addEventListener("click", () => {
    if (carta.classList.contains("abierta")) return;
    carta.classList.add("abierta");

    if (!abierta) {
      abierta = carta;
    } else {
      if (abierta.querySelector("img").src === img.src) {
        abierta = null;
      } else {
        setTimeout(() => {
          carta.classList.remove("abierta");
          abierta.classList.remove("abierta");
          abierta = null;
        }, 1000);
      }
    }
  });

  tablero.appendChild(carta);
});
