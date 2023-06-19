function toggleImageVisibility(element) {
  var img = element.nextElementSibling;
  img.style.display = img.style.display === 'none' ? 'block' : 'none';

  // Cerrar la imagen después de 5 segundos
  setTimeout(function() {
    img.style.display = 'none';
  }, 10000); // 15000 milisegundos = 15 segundos
}