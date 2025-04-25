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
            summary: "Novas regras para Microempreendedores Individuais trazem mudanças significativas na tributação e obrigações fiscais.",
            fullContent: "A partir do próximo mês, Microempreendedores Individuais (MEIs) em todo o Brasil terão que se adaptar a novas regras de tributação e obrigações fiscais. As mudanças, aprovadas pelo Congresso Nacional e sancionadas pela Presidência da República, visam simplificar processos e reduzir a burocracia, mas exigirão atenção dos empreendedores para evitar problemas futuros.<br><br>Entre as principais alterações estão a atualização do limite de faturamento anual, que passará para R$ 145 mil, e novas regras para emissão de notas fiscais. Além disso, MEIs que contratarem funcionários terão processos simplificados para registro e pagamento de encargos.<br><br>Especialistas recomendam que todos os microempreendedores busquem orientação contábil para se adequarem às novas exigências. A ABS Serviços oferece consultoria especializada para MEIs, auxiliando na transição para o novo sistema e garantindo conformidade com todas as regulamentações."
        },
        {
            id: 2,
            title: "Mercado financeiro reage positivamente a novos índices econômicos",
            date: "24 Abr 2025",
            source: "Valor Econômico",
            summary: "Bolsa de valores registra alta após divulgação de dados positivos sobre a economia brasileira.",
            fullContent: "O mercado financeiro brasileiro reagiu com otimismo após a divulgação dos últimos indicadores econômicos pelo Banco Central e IBGE. A Bolsa de Valores de São Paulo (B3) registrou alta de 2,3% nesta quinta-feira, enquanto o dólar recuou 1,5% frente ao real.<br><br>Os dados de inflação vieram abaixo das expectativas do mercado, com o IPCA acumulando 3,2% nos últimos 12 meses, dentro da meta estabelecida pelo Conselho Monetário Nacional. Além disso, o PIB do primeiro trimestre mostrou crescimento de 0,8%, superando as projeções de analistas que previam expansão de 0,5%.<br><br>Segundo economistas, esses resultados indicam que a economia brasileira está em trajetória de recuperação sustentável, com inflação controlada e crescimento moderado. Isso pode abrir espaço para redução gradual da taxa básica de juros nos próximos meses, o que tende a estimular investimentos e consumo.<br><br>Para empresas, este cenário representa uma oportunidade de planejamento financeiro e tributário mais eficiente. Consultores da ABS Serviços recomendam que empresários revisem suas estratégias fiscais para aproveitar o momento econômico favorável."
        },
        {
            id: 3,
            title: "Mudanças na declaração do Imposto de Renda para 2026",
            date: "23 Abr 2025",
            source: "Portal Tributário",
            summary: "Receita Federal anuncia simplificações no processo de declaração do IR para o próximo ano.",
            fullContent: "A Receita Federal anunciou hoje um pacote de medidas que simplificarão o processo de declaração do Imposto de Renda para pessoas físicas a partir de 2026. As mudanças visam reduzir o tempo gasto pelos contribuintes no preenchimento da declaração e diminuir o número de erros que levam à malha fina.<br><br>Entre as principais novidades estão a ampliação da declaração pré-preenchida para todos os contribuintes, a simplificação das deduções de despesas médicas e educacionais, e a possibilidade de parcelamento do imposto devido em até 12 vezes sem juros para determinadas faixas de renda.<br><br>Outra mudança importante é a atualização da tabela do IR, com novos limites de isenção e faixas de tributação ajustadas pela inflação acumulada. A expectativa é que aproximadamente 3 milhões de brasileiros deixem de pagar o imposto com essas alterações.<br><br>Especialistas da ABS Serviços recomendam que os contribuintes comecem a se preparar desde já, organizando documentos e recibos ao longo do ano para facilitar o processo de declaração. A empresa oferece serviços especializados de assessoria para declaração de Imposto de Renda, com foco na maximização de benefícios fiscais legais e prevenção de problemas com a Receita Federal."
        },
        {
            id: 4,
            title: "Banco Central anuncia nova taxa de juros para o próximo trimestre",
            date: "22 Abr 2025",
            source: "Economia Brasil",
            summary: "Copom decide por redução na taxa Selic, impactando investimentos e financiamentos.",
            fullContent: "O Comitê de Política Monetária (Copom) do Banco Central anunciou ontem a redução da taxa Selic em 0,5 ponto percentual, passando de 8,5% para 8% ao ano. A decisão, tomada por unanimidade, reflete a avaliação do BC de que a inflação está sob controle e a economia apresenta sinais consistentes de crescimento.<br><br>Em comunicado oficial, o Banco Central destacou que o cenário externo, apesar de ainda desafiador, apresenta menor volatilidade, permitindo uma política monetária mais flexível. No cenário doméstico, a inflação tem convergido para o centro da meta e as expectativas de mercado estão ancoradas.<br><br>Para empresas e consumidores, a redução da Selic traz impactos diretos. O custo de financiamentos e empréstimos tende a cair, estimulando investimentos empresariais e o consumo das famílias. Por outro lado, investidores em renda fixa precisarão reavaliar suas estratégias, buscando alternativas para manter a rentabilidade de suas aplicações.<br><br>A ABS Serviços oferece consultoria especializada em planejamento financeiro para empresas, auxiliando na tomada de decisões estratégicas em cenários de mudança na política monetária. Nossos especialistas podem ajudar sua empresa a aproveitar as oportunidades geradas pela redução dos juros, otimizando investimentos e reduzindo custos financeiros."
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
            <button class="news-link" data-id="${item.id}">Ler mais →</button>
            <div class="news-full-content" id="news-content-${item.id}" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
                ${item.fullContent}
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });

    // Add event listeners to "Ler mais" buttons
    document.querySelectorAll('.news-link').forEach(button => {
        button.addEventListener('click', function() {
            const newsId = this.getAttribute('data-id');
            const contentDiv = document.getElementById(`news-content-${newsId}`);
            
            if (contentDiv.style.display === 'none') {
                contentDiv.style.display = 'block';
                this.textContent = 'Mostrar menos ↑';
            } else {
                contentDiv.style.display = 'none';
                this.textContent = 'Ler mais →';
            }
        });
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
            summary: "Esta notícia foi atualizada automaticamente para demonstrar a funcionalidade de feed em tempo real.",
            fullContent: "O mercado financeiro apresentou oscilações nas últimas horas, com o índice Bovespa registrando variação de 0,3% em relação ao fechamento anterior. O dólar comercial opera estável, cotado a R$ 5,12 para compra e R$ 5,13 para venda.<br><br>Analistas atribuem a estabilidade do mercado à expectativa pelos anúncios de resultados trimestrais das principais empresas listadas na bolsa, que começam a ser divulgados na próxima semana.<br><br>No cenário internacional, as bolsas europeias operam em leve alta, enquanto os mercados asiáticos fecharam o dia com resultados mistos. Os preços do petróleo apresentam ligeira queda, refletindo preocupações com a demanda global.<br><br>A ABS Serviços continua monitorando o cenário econômico para oferecer as melhores orientações aos seus clientes. Para consultoria financeira e contábil personalizada, entre em contato com nossa equipe de especialistas."
        };
        
        // Add new news item at the beginning
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.style.opacity = '0';
        newsCard.innerHTML = `
            <div class="news-date">${newItem.date} • ${newItem.source}</div>
            <h3 class="news-title">${newItem.title}</h3>
            <p class="news-summary">${newItem.summary}</p>
            <button class="news-link" data-id="${newItem.id}">Ler mais →</button>
            <div class="news-full-content" id="news-content-${newItem.id}" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
                ${newItem.fullContent}
            </div>
        `;
        
        // Add to the beginning of the container
        if (newsContainer.firstChild) {
            newsContainer.insertBefore(newsCard, newsContainer.firstChild);
            
            // Add event listener to the new "Ler mais" button
            const newButton = newsCard.querySelector('.news-link');
            newButton.addEventListener('click', function() {
                const newsId = this.getAttribute('data-id');
                const contentDiv = document.getElementById(`news-content-${newsId}`);
                
                if (contentDiv.style.display === 'none') {
                    contentDiv.style.display = 'block';
                    this.textContent = 'Mostrar menos ↑';
                } else {
                    contentDiv.style.display = 'none';
                    this.textContent = 'Ler mais →';
                }
            });
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
