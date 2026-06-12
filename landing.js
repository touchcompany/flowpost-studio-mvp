const PENDING_PURCHASES_KEY = "flowpost-pending-service-purchases-v1";

const serviceCatalog = {
  website: { id: "website", name: "Pagina web landing", price: 1200000, group: "Web", summary: "Diseño, estructura, publicación y preparación para dominio." },
  hosting: { id: "hosting", name: "Hosting administrado", price: 180000, group: "Web", summary: "Servidor, soporte, renovación y conexión con cPanel." },
  domain: { id: "domain", name: "Dominio anual", price: 85000, group: "Web", summary: "Compra o renovación de dominio para la marca del cliente." },
  ads: { id: "ads", name: "Campanas Meta Ads", price: 420000, group: "Publicidad", summary: "Estrategia, anuncios y seguimiento para Facebook e Instagram." },
  reels: { id: "reels", name: "Paquete de reels", price: 280000, group: "Produccion", summary: "Guiones, edición simple, copies y programación." },
  chatbot: { id: "chatbot", name: "Chatbot y soporte", price: 450000, group: "Automatizacion", summary: "Asistente para responder dudas, captar leads y guiar clientes." },
};

const currencyRates = {
  COP: { label: "COP", symbol: "$", rate: 1, locale: "es-CO", maximumFractionDigits: 0 },
  USD: { label: "USD", symbol: "US$", rate: 0.00026, locale: "en-US", maximumFractionDigits: 0 },
  EUR: { label: "EUR", symbol: "EUR", rate: 0.00024, locale: "es-ES", maximumFractionDigits: 0 },
  MXN: { label: "MXN", symbol: "$", rate: 0.0048, locale: "es-MX", maximumFractionDigits: 0 },
};

let selectedCurrency = localStorage.getItem("touch-note-public-currency") || "COP";

const socialIcons = {
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="landingIgGlow" cx="30%" cy="25%" r="85%"><stop offset="0%" stop-color="#ffd776"/><stop offset="34%" stop-color="#f56040"/><stop offset="62%" stop-color="#e1306c"/><stop offset="100%" stop-color="#833ab4"/></radialGradient></defs><rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6" style="fill:url(#landingIgGlow)"/><rect x="6.8" y="6.8" width="10.4" height="10.4" rx="3.2" style="fill:none;stroke:#fff;stroke-width:1.65"/><circle cx="12" cy="12" r="2.65" style="fill:none;stroke:#fff;stroke-width:1.65"/><circle cx="16.1" cy="7.9" r="1.05" style="fill:#fff"/></svg>',
};

function formatMoney(amount, currency = selectedCurrency) {
  const config = currencyRates[currency] || currencyRates.COP;
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency,
    maximumFractionDigits: config.maximumFractionDigits,
  }).format(amount * config.rate);
}

function pendingPurchases() {
  try {
    return JSON.parse(localStorage.getItem(PENDING_PURCHASES_KEY) || "[]");
  } catch {
    return [];
  }
}

function savePendingPurchase(service) {
  const purchase = {
    id: `landing-${service.id}-${Date.now()}`,
    serviceId: service.id,
    serviceName: service.name,
    amount: service.price,
    currency: "COP",
    status: "Solicitado",
    source: "landing",
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(PENDING_PURCHASES_KEY, JSON.stringify([purchase, ...pendingPurchases()].slice(0, 12)));
  return purchase;
}

function updateCurrencyLabels() {
  document.querySelectorAll("[data-price-service]").forEach((element) => {
    const service = serviceCatalog[element.dataset.priceService];
    if (!service) return;
    element.textContent = `${formatMoney(service.price)} ${selectedCurrency}`;
  });
  document.querySelectorAll("[data-currency-select]").forEach((select) => {
    select.value = selectedCurrency;
  });
}

function renderSocialIcons() {
  document.querySelectorAll('i[data-lucide="instagram"]').forEach((icon) => {
    const wrapper = document.createElement("span");
    wrapper.className = "social-icon instagram marketing-social-icon";
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.innerHTML = socialIcons.instagram;
    icon.replaceWith(wrapper);
  });
}

function renderIcons() {
  renderSocialIcons();
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 1.65,
      },
    });
  }
}

document.querySelectorAll("[data-buy-service]").forEach((button) => {
  button.addEventListener("click", async () => {
    const service = serviceCatalog[button.dataset.buyService];
    if (!service) return;
    button.disabled = true;
    const purchase = savePendingPurchase(service);
    const result = document.querySelector("#purchaseResult");
    try {
      const response = await fetch("/api/store/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          serviceId: service.id,
          serviceName: service.name,
          description: service.summary,
          amount: service.price,
          currency: "COP",
          reference: purchase.id,
        }),
      });
      const checkout = await response.json().catch(() => ({}));
      if (checkout.checkoutUrl) {
        window.location.href = checkout.checkoutUrl;
        return;
      }
    } catch {
      // La landing conserva el pedido pendiente aunque la pasarela no este lista.
    } finally {
      button.disabled = false;
    }
    if (result) {
      result.classList.add("is-ready");
      result.innerHTML = `
        <i data-lucide="check-circle-2"></i>
        <span>${service.name} agregado por ${formatMoney(service.price)}. Entra para verlo en Clientes.</span>
        <a class="marketing-button dark" href="login.html?service=${encodeURIComponent(service.id)}&next=%23store">Continuar</a>
      `;
      renderIcons();
    }
  });
});

document.querySelectorAll("[data-currency-select]").forEach((select) => {
  select.addEventListener("change", () => {
    selectedCurrency = currencyRates[select.value] ? select.value : "COP";
    localStorage.setItem("touch-note-public-currency", selectedCurrency);
    updateCurrencyLabels();
  });
});

window.addEventListener("load", () => {
  updateCurrencyLabels();
  renderIcons();
});
