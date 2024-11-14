function calcularCFT() {
    const costo = parseFloat(document.getElementById("productoCosto").value);
    const cuotas = parseInt(document.getElementById("cuotasCantidad").value);
    const valorCuota = parseFloat(document.getElementById("cuotaValor").value);
    const resultLabel = document.getElementById("cftResultado").dataset.resultLabel;

    if (!isNaN(costo) && costo > 0 && !isNaN(cuotas) && cuotas > 0 && !isNaN(valorCuota) && valorCuota > 0) {
        const costoTotal = valorCuota * cuotas;
        const cft = ((costoTotal / costo) - 1) * 100;
        document.getElementById("cftResultado").innerText = `${resultLabel}: ${cft.toFixed(2)}%`;
    } else {
        document.getElementById("cftResultado").innerText = "Por favor, complete todos los campos.";
    }
}

function calcularCuota() {
    const precioProducto = parseFloat(document.getElementById("precioProducto").value);
    const tasaInteres = parseFloat(document.getElementById("tasaInteres").value) / 100;
    const cuotas = parseInt(document.getElementById("cuotasDisponibles").value);

    if (precioProducto && tasaInteres && cuotas) {
        const cuotaMensual = (precioProducto * (1 + tasaInteres)) / cuotas;
        document.getElementById("cuotaResultado").innerText = `${translations[currentLang].cuotaResultadoLabel} ${cuotas} cuotas: $${cuotaMensual.toFixed(2)}`;
    } else {
        document.getElementById("cuotaResultado").innerText = translations[currentLang].completeCampos;
    }
}



// Mostrar la herramienta seleccionada
function showTool() {
    const toolSelect = document.getElementById("toolSelect").value;
    const newsSection = document.getElementById("newsSection");
    const toolContainers = document.querySelectorAll(".tool-container");

    // Ocultar todas las herramientas y mostrar la sección de noticias si no hay selección
    toolContainers.forEach(container => {
        container.classList.remove("visible");
        container.style.display = "none";
    });
    
    if (toolSelect) {
        // Muestra la herramienta seleccionada y oculta la sección de noticias
        newsSection.style.display = "none";
        document.getElementById(toolSelect).style.display = "block";
    } else {
        // Si no hay selección, muestra la sección de noticias
        newsSection.style.display = "block";
    }
}


// Función de traducción
function setLanguage(lang) {
    currentLang = lang; // Asegúrate de actualizar el idioma aquí
    document.getElementById("main-title").innerText = translations[lang].mainTitle;
    document.getElementById("news-title").innerText = translations[lang].newsTitle;
    document.getElementById("comprador-section").innerText = translations[lang].compradorSection;
    document.getElementById("producto-label").innerText = translations[lang].productoLabel;
    document.getElementById("cuotas-label").innerText = translations[lang].cuotasLabel;
    document.getElementById("valor-cuota-label").innerText = translations[lang].valorCuotaLabel;
    document.getElementById("calcular-cft-button").innerText = translations[lang].calcularCFTButton;
    document.getElementById("cftResultado").dataset.resultLabel = translations[lang].cftResultLabel;
    document.getElementById("vendedor-section").innerText = translations[lang].vendedorSection;
    document.getElementById("precio-label").innerText = translations[lang].precioLabel;
    document.getElementById("tasa-label").innerText = translations[lang].tasaLabel;
    document.getElementById("cuotas-disponibles-label").innerText = translations[lang].cuotasDisponiblesLabel;
    document.getElementById("mostrar-cuota-button").innerText = translations[lang].mostrarCuotaButton;
    document.getElementById("annualize-title").innerText = translations[lang].annualizetitle;
    document.getElementById("monthly-rate-label").innerText = translations[lang].monthlyratelabel;
    document.getElementById("calculate-annualized-button").innerText = translations[lang].calculateannualizedbutton;
    
    
    // Reconstruir el select con las opciones traducidas
    const toolSelect = document.getElementById("toolSelect");

    // Limpia el select y crea las opciones nuevamente
    toolSelect.innerHTML = '';

    // Opción predeterminada traducida
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = translations[lang].toolSelectLabel; // Traduce el texto de la opción por defecto
    toolSelect.appendChild(defaultOption);

    // Opción "Calcula el Costo Financiero" traducida
    const costoFinancieroOption = document.createElement("option");
    costoFinancieroOption.value = "costoFinanciero";
    costoFinancieroOption.id = "cf";
    costoFinancieroOption.text = translations[lang].calculoCostoFinanciero;
    toolSelect.appendChild(costoFinancieroOption);

    // Opción "Calcula un Índice Anualizado" traducida
    const indiceAnualizadoOption = document.createElement("option");
    indiceAnualizadoOption.value = "indiceAnualizado";
    indiceAnualizadoOption.id = "ia";
    indiceAnualizadoOption.text = translations[lang].calculaIndiceAnualizado;
    toolSelect.appendChild(indiceAnualizadoOption);

    // Establecer el valor predeterminado
    toolSelect.value = "";
}


// Traducciones
const translations = {
    es: {
        mainTitle: "Herramientas Financieras",
        toolSelectLabel: "Selecciona:",
        newsTitle: "Últimas Noticias Financieras",
        compradorSection: "Sección para el Comprador",
        productoLabel: "Costo del Producto ($)",
        cuotasLabel: "Cantidad de Cuotas",
        valorCuotaLabel: "Valor de la Cuota ($)",
        calcularCFTButton: "Calcular CFT",
        vendedorSection: "Sección para el Vendedor",
        precioLabel: "Precio del Producto ($)",
        tasaLabel: "Tasa de Interés Anual (%)",
        cuotasDisponiblesLabel: "Cantidad de Cuotas",
        mostrarCuotaButton: "Mostrar Valor de Cuotas",
        cftResultLabel: "Costo Financiero Total",
        calculoCostoFinanciero: "Calcula el Costo Financiero",
        calculaIndiceAnualizado: "Calcula un Índice Anualizado",
        annualizetitle: "Calcula un Índice Anualizado",
        monthlyratelabel: "Calcula un Índice Anualizado",
        calculateannualizedbutton: "Calcular",
        cuotaResultadoLabel: "Valor de la cuota para",
        completeCampos: "Por favor, complete todos los campos."
    },
    en: {
        mainTitle: "Financial Tools",
        toolSelectLabel: "Select:",
        newsTitle: "Latest Financial News",
        compradorSection: "Buyer Section",
        productoLabel: "Product Cost ($)",
        cuotasLabel: "Number of Installments",
        valorCuotaLabel: "Installment Value ($)",
        calcularCFTButton: "Calculate TFC",
        vendedorSection: "Seller Section",
        precioLabel: "Product Price ($)",
        tasaLabel: "Annual Interest Rate (%)",
        cuotasDisponiblesLabel: "Number of Installments",
        mostrarCuotaButton: "Show Installment Value",
        cftResultLabel: "Total Financing Cost",
        calculoCostoFinanciero: "Calculate Financial Cost",
        calculaIndiceAnualizado: "Calculate an Annualized Index",
        annualizetitle: "Calculate an Annualized Index",
        monthlyratelabel: "Monthly Index/Rate (%)",
        calculateannualizedbutton: "calculate",
        cuotaResultadoLabel: "Installment value for",
        completeCampos: "Please fill in all fields."
    },
    de: {
        mainTitle: "Finanzwerkzeuge",
        toolSelectLabel: "Wählen:",
        newsTitle: "Aktuelle Finanznachrichten",
        compradorSection: "Abschnitt für Käufer",
        productoLabel: "Produktkosten (€)",
        cuotasLabel: "Anzahl der Raten",
        valorCuotaLabel: "Ratenwert (€)",
        calcularCFTButton: "GFK berechnen",
        vendedorSection: "Abschnitt für Verkäufer",
        precioLabel: "Produktpreis (€)",
        tasaLabel: "Jährlicher Zinssatz (%)",
        cuotasDisponiblesLabel: "Anzahl der Raten",
        mostrarCuotaButton: "Ratenwert anzeigen",
        cftResultLabel: "Gesamtkosten für Finanzierung",
        calculoCostoFinanciero: "Berechnen Sie die finanziellen Kosten",
        calculaIndiceAnualizado: "Berechnen Sie einen annualisierten Index",
        annualizetitle: "Berechnen Sie einen annualisierten Index",
        monthlyratelabel: "Index/Monatsrate (%)",
        calculateannualizedbutton: "berechnen",
        cuotaResultadoLabel: "Ratenbetrag für",
        completeCampos: "Bitte füllen Sie alle Felder aus."
    }
};

function calculateAnnualizedIndex() {
    const monthlyRateInput = parseFloat(document.getElementById("monthlyRate").value);

    if (!isNaN(monthlyRateInput)) {
        const monthlyRateDecimal = monthlyRateInput / 100; // Convierte el porcentaje ingresado a decimal
        const annualizedIndex = (Math.pow(1 + monthlyRateDecimal, 12) - 1) * 100; // Calcula el índice anualizado y convierte a porcentaje
        document.getElementById("annualizedResult").innerText = `Índice anualizado: ${annualizedIndex.toFixed(2)}%`;
    } else {
        document.getElementById("annualizedResult").innerText = "Por favor, ingrese un índice o tasa mensual válida.";
    }
}

