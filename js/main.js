//Función para animacion de onda para enlaces de la navbar
function animacionOndaEnlaces() {
  // Capturamos todos los elementos con la clase 'ripple'
  const rippleElements = document.querySelectorAll(".ripple");

  // Agregamos el evento 'click' a cada elemento
  rippleElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      // Crear un elemento <span> para la onda
      const ripple = document.createElement("span");

      // Obtener las dimensiones del enlace (contenedor)
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      // Configurar el estilo del <span> dinámicamente
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.position = "absolute";
      ripple.style.backgroundColor = "white";
      ripple.style.borderRadius = "50%";
      ripple.style.opacity = "0.5";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "rippleEffect 0.6s ease-out";
      ripple.style.pointerEvents = "none";
      ripple.style.overflow = "hidden";

      // Agregar el <span> al contenedor
      element.appendChild(ripple);

      // Remover el <span> después de la animación
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    });
  });

  // Definimos la animación en el DOM
  const style = document.createElement("style");
  style.textContent = `
    @keyframes rippleEffect {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
//Función para cerrar o abrir menu en vista mobile
const actionMenu = () => {
  const btnMenu = document.getElementById("btnMenu");
  const menu = document.getElementById("menu");
  btnMenu.addEventListener("click", () => {
    if (!menu.classList.contains("max-h-[500px]")) {
      menu.classList.add("max-h-[500px]");
    } else {
      menu.classList.remove("max-h-[500px]");
    }
  });
};

function startCarrusel() {
  const $carousel = $(".header");
  $carousel.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    centerPadding: "0",
    arrows: false,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  animacionOndaEnlaces();
  actionMenu();
  startCarrusel();
});
