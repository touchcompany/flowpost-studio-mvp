const PENDING_PURCHASES_KEY = "flowpost-pending-service-purchases-v1";

const serviceCatalog = {
  website: { id: "website", name: "Pagina web landing", price: 1200000, group: "Web" },
  hosting: { id: "hosting", name: "Hosting administrado", price: 180000, group: "Web" },
  domain: { id: "domain", name: "Dominio anual", price: 85000, group: "Web" },
  ads: { id: "ads", name: "Campanas Meta Ads", price: 420000, group: "Publicidad" },
  reels: { id: "reels", name: "Paquete de reels", price: 280000, group: "Produccion" },
  chatbot: { id: "chatbot", name: "Chatbot y soporte", price: 450000, group: "Automatizacion" },
};

const socialIcons = {
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="landingIgGlow" cx="30%" cy="25%" r="85%"><stop offset="0%" stop-color="#ffd776"/><stop offset="34%" stop-color="#f56040"/><stop offset="62%" stop-color="#e1306c"/><stop offset="100%" stop-color="#833ab4"/></radialGradient></defs><rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6" style="fill:url(#landingIgGlow)"/><rect x="6.8" y="6.8" width="10.4" height="10.4" rx="3.2" style="fill:none;stroke:#fff;stroke-width:1.65"/><circle cx="12" cy="12" r="2.65" style="fill:none;stroke:#fff;stroke-width:1.65"/><circle cx="16.1" cy="7.9" r="1.05" style="fill:#fff"/></svg>',
};

function formatMoney(amount) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
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
  button.addEventListener("click", () => {
    const service = serviceCatalog[button.dataset.buyService];
    if (!service) return;
    savePendingPurchase(service);
    const result = document.querySelector("#purchaseResult");
    if (result) {
      result.classList.add("is-ready");
      result.innerHTML = `
        <i data-lucide="check-circle-2"></i>
        <span>${service.name} agregado por ${formatMoney(service.price)}. Entra para verlo en Clientes.</span>
        <a class="marketing-button dark" href="login.html?service=${encodeURIComponent(service.id)}">Continuar</a>
      `;
      renderIcons();
    }
  });
});

window.addEventListener("load", renderIcons);
