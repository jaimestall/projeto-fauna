const activeClass = 'ativo'

function smoothScroll() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  // função que atribui/deixa de atribuir determinada classe para um elemento (neste caso os links internos)
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  });
}
smoothScroll();

function showTabMenu() {
  const imagens = document.querySelectorAll('.img-animal');
  const description = document.querySelectorAll('.description')
  description[0].classList.add(activeClass);

  // função que exibe/deixa de exibir a descrição de um animal conforme a imagem clicada
  imagens.forEach((img, index) => {
    img.addEventListener('click', () => {
      description.forEach(i => i.classList.remove(activeClass))
      description[index].classList.add(activeClass)
    })
  });
}
showTabMenu();

function showFaq() {
  const faqItem = document.querySelectorAll('.faq-lista dt');
  faqItem[0].classList.add(activeClass);
  faqItem[0].nextElementSibling.classList.add(activeClass);

  function ativaResposta() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }
  faqItem.forEach((item) => {
    item.addEventListener('click', ativaResposta)
  });
}
showFaq();

function animacaoScroll() {
  const sections = document.querySelectorAll('.scroll');
  if (sections.length) {
    const windowCorte = window.innerHeight * 0.85
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
    window.addEventListener('scroll', chamaSection)
  }
}
animacaoScroll();

// função para atribuir/remover determinada classe da tag HTML ao pressionar determinada tecla
window.addEventListener('keydown', (e) => {
  if (e.key === "F8") {
    document.documentElement.classList.toggle('texto-maior')
  }
});