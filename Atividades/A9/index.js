var elemento = document.getElementById("elemento");
var cssCodeTextarea = document.getElementById("cssCode");

function atualizarVisualizacao() {
  var borderRadius = document.getElementById("borderRadius").value;
  elemento.style.borderRadius = borderRadius + "px";
  document.getElementById("borderRadiusValue").textContent = borderRadius;
  updateCSSCode(); // Chama a função para atualizar o código CSS
}


  function trocarCor() {
var elemento = document.getElementById("elemento");
var cor = document.getElementById("cor").value;

elemento.style.backgroundColor = cor;
}



var box = document.getElementById("elemento");
function changeBorderRadius() {

  var topLeft = document.getElementById("topLeft").value;
  var topRight = document.getElementById("topRight").value;
  var bottomLeft = document.getElementById("bottomLeft").value;
  var bottomRight = document.getElementById("bottomRight").value;


  box.style.borderRadius = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;
}

document.getElementById("topLeft").addEventListener("change", changeBorderRadius);
document.getElementById("topRight").addEventListener("change", changeBorderRadius);
document.getElementById("bottomLeft").addEventListener("change", changeBorderRadius);
document.getElementById("bottomRight").addEventListener("change", changeBorderRadius);


function updateCSSCode() {
  var topLeft = document.getElementById("topLeft").value;
  var topRight = document.getElementById("topRight").value;
  var bottomLeft = document.getElementById("bottomLeft").value;
  var bottomRight = document.getElementById("bottomRight").value;
  var cor = document.getElementById("cor").value;


  var cssCode = `#elemento {
    border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;
    background-color: ${cor};
  }`;

  cssCodeTextarea.value = cssCode;
}

function copyCSSCode() {
  cssCodeTextarea.select();
  document.execCommand("copy");
}

// Atualiza a visualização inicial
atualizarVisualizacao();
