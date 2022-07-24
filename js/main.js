// seleciona todas as imagens da página
const imagens = document.querySelectorAll('.img-animal');
// seleciona todas as descrições dos animais
const description = document.querySelectorAll('.description')
// seleciona todos os links internos da página
const linksInternos = document.querySelectorAll('a[href^="#"]');
// estabelece o primeiro elemento de animais-descricao como ativo
description[0].classList.add('ativo');

// função que exibe/deixa de exibir a descrição de um animal conforme a imagem clicada
imagens.forEach((img, index) => {
  img.addEventListener('click', () => {
    description.forEach(i => i.classList.remove('ativo'))
    description[index].classList.add('ativo')
  })
});

// função que atribui/deixa de atribuir determinada classe para um elemento (neste caso os links internos)
function handleLink(e) {
  e.preventDefault();
  linksInternos.forEach(link => {
    link.classList.remove('ativo');
  })
  e.currentTarget.classList.add('ativo');
}
linksInternos.forEach(link => {
  link.addEventListener('click', handleLink)
});

// função para atribuir/remover determinada classe da tag HTML ao pressionar determinada tecla
window.addEventListener('keydown', (e) => {
  if (e.key === "F8") {
    document.documentElement.classList.toggle('texto-maior')
  }
});