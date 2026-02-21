document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  /* efeito lista se movendo - miya*/
  if (body.id === "miyabody") {
    const itens = document.querySelectorAll("#miyaul li");

    itens.forEach(item => {
      item.style.transition = "transform 0.25s ease, color 0.25s ease";

      item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.12)";
        item.style.color = "#EA64A5";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
        item.style.color = "";
      });
    });

    console.log("✨ Efeito da Miya carregado!");
  }

  /* efeito mudar de cor passando o mouse - filme */
  if (body.id === "filmesbody") {
    const titulo = document.getElementById("titulofilme");

    if (titulo) {
      titulo.style.transition = "color 0.4s ease";

      titulo.addEventListener("mouseenter", () => {
        titulo.style.color = "#ff0000";
      });

      titulo.addEventListener("mouseleave", () => {
        titulo.style.color = "#863636";
      });

      console.log("🎬 Efeito dos filmes carregado!");
    }
  }

  /* efeito mudar de cor ao clicar no fundo - roblox */
  if (body.id === "torbibody") {
    const titulo = document.getElementById("titulotorbi");

    const cores = ["#ffffff", "#ffd6e7", "#d8fffc", "#fffbcc", "#e4c6ff"];
    let index = 0;

    if (titulo) {
      titulo.addEventListener("click", () => {
        index = (index + 1) % cores.length;
        body.style.backgroundColor = cores[index];
      });

      console.log("🎮 Efeito do Roblox carregado!");
    }
  }
});