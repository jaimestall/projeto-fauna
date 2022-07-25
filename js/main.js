const activeClass = 'ativo'

function smoothScroll() {
  // Seleciona todos os links cujos atributos 'href' começam com o valor "#"
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    });
    function scrollToSection(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
  }
}
smoothScroll();

function showTabMenu() {
  const imagens = document.querySelectorAll('.img-animal');
  const description = document.querySelectorAll('.description')
  description[0].classList.add(activeClass);
  if (imagens.length && description.length) {
    // função que exibe/deixa de exibir a descrição de um animal conforme a imagem clicada
    imagens.forEach((img, index) => {
      img.addEventListener('click', () => {
        description.forEach(i => i.classList.remove(activeClass))
        description[index].classList.add(activeClass)
      })
    });
  }
}
showTabMenu();

function showFaq() {
  const faqItem = document.querySelectorAll('.faq-lista dt');
  faqItem[0].classList.add(activeClass);
  faqItem[0].nextElementSibling.classList.add(activeClass);
  if (faqItem.length) {
    faqItem.forEach((item) => {
      item.addEventListener('click', ativaResposta)
    });
    function ativaResposta() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
  }
}
showFaq();

function animacaoScroll() {
  const sections = document.querySelectorAll('.scroll');
  const windowCorte = window.innerHeight * 0.85
  window.addEventListener('scroll', chamaSection)
  function chamaSection() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowCorte) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');
      }
    })
  }
  chamaSection();
}
animacaoScroll();

// Função para atribuir/remover determinada classe da tag HTML ao pressionar determinada tecla
window.addEventListener('keydown', (e) => {
  if (e.key === "F8") {
    document.documentElement.classList.toggle('texto-maior')
  }
});