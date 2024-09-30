$(document).ready(function () {
  $('.your-class').slick({
    dots: true,  // Mostra os pontos de navegação
    infinite: true,  // Loop infinito
    speed: 300,  // Velocidade de transição
    slidesToShow: 1,  // Quantidade de slides mostrados por vez
    adaptiveHeight: true,  // Ajusta a altura conforme o conteúdo
    autoplay: true,  // Habilita autoplay
    autoplaySpeed: 2000,  // Velocidade do autoplay (2 segundos)
  });


  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});