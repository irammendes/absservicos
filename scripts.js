// Initialize current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Initialize financial charts
document.addEventListener('DOMContentLoaded', function() {
    // Tax Savings Chart
    Highcharts.chart('tax-savings-chart', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            style: {
                fontFamily: 'Open Sans, sans-serif'
            }
        },
        title: {
            text: 'Economia em Impostos para Clientes',
            style: {
                fontWeight: 'bold',
                fontFamily: 'Montserrat, sans-serif'
            }
        },
        xAxis: {
            categories: ['Sem Assessoria', 'Com ABS Serviços'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Valor (R$)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>R$ {point.y:.2f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Impostos Pagos',
            color: '#E53E3E',
            data: [25000, 17500]
        }, {
            name: 'Economia',
            color: '#38A169',
            data: [0, 7500]
        }]
    });

    // Growth Chart
    Highcharts.chart('growth-chart', {
        chart: {
            type: 'line',
            backgroundColor: 'transparent',
            style: {
                fontFamily: 'Open Sans, sans-serif'
            }
        },
        title: {
            text: 'Crescimento de Empresas Assessoradas',
            style: {
                fontWeight: 'bold',
                fontFamily: 'Montserrat, sans-serif'
            }
        },
        xAxis: {
            categories: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5']
        },
        yAxis: {
            title: {
                text: 'Crescimento (%)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    format: '{y}%'
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'Com ABS Serviços',
            color: '#3B82F6',
            data: [10, 18, 25, 32, 45]
        }, {
            name: 'Média do Mercado',
            color: '#9CA3AF',
            data: [5, 8, 12, 15, 18]
        }]
    });

    // Load financial news
    loadFinancialNews();
});

// Financial News Feed
function loadFinancialNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;

    // Sample news data (in a real implementation, this would come from an API)
    const news = [
        {
            id: 1,
            title: "Nova regulamentação para MEIs entra em vigor",
            date: "25 Abr 2025",
            source: "Economia Brasil",
            summary: "Novas regras para Microempreendedores Individuais trazem mudanças significativas na tributação e obrigações fiscais."
        },
        {
            id: 2,
            title: "Mercado financeiro reage positivamente a novos índices econômicos",
            date: "24 Abr 2025",
            source: "Valor Econômico",
            summary: "Bolsa de valores registra alta após divulgação de dados positivos sobre a economia brasileira."
        },
        {
            id: 3,
            title: "Mudanças na declaração do Imposto de Renda para 2026",
            date: "23 Abr 2025",
            source: "Portal Tributário",
            summary: "Receita Federal anuncia simplificações no processo de declaração do IR para o próximo ano."
        },
        {
            id: 4,
            title: "Banco Central anuncia nova taxa de juros para o próximo trimestre",
            date: "22 Abr 2025",
            source: "Economia Brasil",
            summary: "Copom decide por redução na taxa Selic, impactando investimentos e financiamentos."
        }
    ];

    // Create news cards
    news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-date">${item.date} • ${item.source}</div>
            <h3 class="news-title">${item.title}</h3>
            <p class="news-summary">${item.summary}</p>
            <a href="#" class="news-link">Ler mais →</a>
        `;
        newsContainer.appendChild(newsCard);
    });

    // Simulate automatic news updates
    setInterval(() => {
        // In a real implementation, this would fetch new data from an API
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} Abr 2025`;
        
        const newItem = {
            id: Math.floor(Math.random() * 1000),
            title: `Atualização do mercado: ${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(2, '0')}`,
            date: formattedDate,
            source: "Atualização Automática",
            summary: "Esta notícia foi atualizada automaticamente para demonstrar a funcionalidade de feed em tempo real."
        };
        
        // Add new news item at the beginning
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.style.opacity = '0';
        newsCard.innerHTML = `
            <div class="news-date">${newItem.date} • ${newItem.source}</div>
            <h3 class="news-title">${newItem.title}</h3>
            <p class="news-summary">${newItem.summary}</p>
            <a href="#" class="news-link">Ler mais →</a>
        `;
        
        // Add to the beginning of the container
        if (newsContainer.firstChild) {
            newsContainer.insertBefore(newsCard, newsContainer.firstChild);
        } else {
            newsContainer.appendChild(newsCard);
        }
        
        // Fade in animation
        setTimeout(() => {
            newsCard.style.transition = 'opacity 1s';
            newsCard.style.opacity = '1';
        }, 100);
        
        // Remove oldest news item if there are more than 4
        if (newsContainer.children.length > 4) {
            newsContainer.removeChild(newsContainer.lastChild);
        }
    }, 60000); // Update every minute
}

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});
