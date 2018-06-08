// Formula Cifrado César (x - 65  + n ) % 26 +65
// Código ASKII
function cifrar (elemento) {
  let frase = document.getElementsByTagName("input")[0].value;
  let fraseCifrada = btoa(frase);
  document.getElementById("resultado").innerHTML = fraseCifrada;
}
function descifrar (elemento) {
  let frase = document.getElementsByTagName("input")[0].value;
  let fraseDesifrada = atob(frase);
  document.getElementById("resultado").innerHTML = fraseDesifrada;
}
