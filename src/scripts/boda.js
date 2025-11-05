// Scroll suave
const buttons = document.querySelectorAll('button[data-target]');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.target;
    if(id === 'inicio'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animaciones con reset
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view'); // resetea animación
      }
    });
  },
  { threshold: 0.3 }
);
sections.forEach(sec => observer.observe(sec));

// Formulario de confirmación
document.getElementById("form")?.addEventListener("submit", async function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  try {
    const resp = await fetch("https://script.google.com/macros/s/AKfycbzT1297LEFoW1XDyzybzGyYj6tXFiRCzLg64t9b6Q0OUHLY9auHjP_ufpJjSrOxZ_SVjQ/exec?nombre=" + encodeURIComponent(nombre));
    const text = await resp.text();
    document.getElementById("respuesta").innerText = text;
  } catch (err) {
    document.getElementById("respuesta").innerText = "Error al enviar. Intenta de nuevo.";
    console.error(err);
  }
});
