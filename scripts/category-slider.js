// scripts/category-slider.js
// Sistema de animação horizontal para o slider de categorias

class CategorySlider {
  constructor() {
    this.slides = document.querySelectorAll('.category-slide');
    this.progressBar = document.querySelector('.progress-fill');
    this.currentIndex = 0;
    this.animationDuration = 3000; // 3 segundos por slide
    this.isAnimating = false;
    this.interval = null;
    
    if (this.slides.length > 0) {
      this.init();
    }
  }
  init() {
    // Inicializa o primeiro slide como ativo
    this.showSlide(0);
    
    // Inicia a animação automática
    this.startAutoSlide();
    
    // Adiciona listeners para pausar/retomar no hover
    const container = document.querySelector('.category-slider-container');
    if (container) {
      container.addEventListener('mouseenter', () => this.pauseAutoSlide());
      container.addEventListener('mouseleave', () => this.resumeAutoSlide());
      
      // Adiciona controle por clique/toque
      container.addEventListener('click', (e) => this.handleClick(e));
      
      // Adiciona suporte a gestos de swipe em dispositivos móveis
      this.addSwipeSupport(container);
    }
  }

  handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    // Se clicou na metade esquerda, vai para o slide anterior
    // Se clicou na metade direita, vai para o próximo
    if (clickX < containerWidth / 2) {
      this.prevSlide();
    } else {
      this.nextSlide();
    }
  }

  addSwipeSupport(container) {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;
      this.handleSwipe(startX, startY, endX, endY);
    }, { passive: true });
  }

  handleSwipe(startX, startY, endX, endY) {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const minSwipeDistance = 50;
    
    // Verifica se é um swipe horizontal significativo
    if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        // Swipe para a direita - slide anterior
        this.prevSlide();
      } else {
        // Swipe para a esquerda - próximo slide
        this.nextSlide();
      }
    }
  }
  showSlide(index, direction = 'next') {
    if (this.isAnimating || this.slides.length === 0) return;
    
    this.isAnimating = true;
    
    // Remove classes de todos os slides
    this.slides.forEach(slide => {
      slide.classList.remove('active', 'entering', 'exiting');
    });
    
    const currentSlide = this.slides[this.currentIndex];
    const nextSlide = this.slides[index];
    
    // Anima a saída do slide atual
    if (currentSlide !== nextSlide) {
      currentSlide.classList.add('exiting');
      
      // Prepara o próximo slide para entrar
      nextSlide.classList.add('entering');
      
      // Após um pequeno delay, move o próximo slide para ativo
      setTimeout(() => {
        nextSlide.classList.remove('entering');
        nextSlide.classList.add('active');
        
        // Remove a classe exiting do slide anterior
        setTimeout(() => {
          currentSlide.classList.remove('exiting');
          this.isAnimating = false;
        }, 400);
      }, 200);
    } else {
      nextSlide.classList.add('active');
      this.isAnimating = false;
    }
    
    this.currentIndex = index;
    this.restartProgressBar();
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex, 'next');
  }

  prevSlide() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex, 'prev');
  }

  restartProgressBar() {
    if (this.progressBar) {
      // Remove a animação temporariamente
      this.progressBar.style.animation = 'none';
      
      // Force reflow
      this.progressBar.offsetHeight;
      
      // Reaplica a animação
      this.progressBar.style.animation = `progressAnimation ${this.animationDuration}ms ease-in-out`;
    }
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.animationDuration);
  }

  pauseAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    
    // Pausa a animação da barra de progresso
    if (this.progressBar) {
      this.progressBar.style.animationPlayState = 'paused';
    }
  }

  resumeAutoSlide() {
    if (!this.interval) {
      this.startAutoSlide();
    }
    
    // Resume a animação da barra de progresso
    if (this.progressBar) {
      this.progressBar.style.animationPlayState = 'running';
    }
  }

  destroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

// Inicializa o slider quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  window.categorySlider = new CategorySlider();
});

// Expõe a classe globalmente para uso em outros scripts
window.CategorySlider = CategorySlider;
