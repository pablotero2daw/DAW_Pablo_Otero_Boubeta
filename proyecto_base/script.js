// Funcionalidad básica para el portfolio

// Navegación suave
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave entre secciones
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Botón CTA del hero
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const proyectosSection = document.getElementById('proyectos');
            if (proyectosSection) {
                proyectosSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validación básica
            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            
            // Simular envío (en una aplicación real se enviaría al servidor)
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderemos pronto a ${email}.`);
            
            // Limpiar formulario
            this.reset();
        });
    }

    // Efectos de animación al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar las tarjetas de proyectos para animarlas
    const proyectoCards = document.querySelectorAll('.proyecto-card');
    proyectoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Función para mostrar el año actual en el footer
function updateCurrentYear() {
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} Mi Portfolio - Estudiante DAW. Proyecto para práctica de Git.`;
    }
}

// Ejecutar al cargar la página
updateCurrentYear();

// Funciones adicionales que se pueden agregar en futuras versiones
const PortfolioUtils = {
    // Función para agregar un nuevo proyecto dinámicamente
    addProject: function(title, description, technologies) {
        const proyectosGrid = document.querySelector('.proyectos-grid');
        if (!proyectosGrid) return;
        
        const projectCard = document.createElement('div');
        projectCard.className = 'proyecto-card';
        
        projectCard.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            ${technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        `;
        
        proyectosGrid.appendChild(projectCard);
    },
    
    // Función para cambiar el tema de colores
    toggleTheme: function() {
        document.body.classList.toggle('dark-theme');
    },
    
    // Función para validar email
    isValidEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};

// Hacer disponibles las utilidades globalmente para futuras expansiones
window.PortfolioUtils = PortfolioUtils;