const imagens = document.querySelectorAll('img');
const description = document.querySelectorAll('.description')

imagens.forEach((img, index) => {
  img.addEventListener('click', () => {
    description.forEach(i => i.classList.add('display-none'))
    description[index].classList.remove('display-none')
  })
});