const PENDING_PURCHASES_KEY = "flowpost-pending-service-purchases-v1";

const serviceCatalog = {
  website: { id: "website", name: "Pagina web landing", price: 1200000, group: "Web" },
  hosting: { id: "hosting", name: "Hosting administrado", price: 180000, group: "Web" },
  domain: { id: "domain", name: "Dominio anual", price: 85000, group: "Web" },
  ads: { id: "ads", name: "Campanas Meta Ads", price: 420000, group: "Publicidad" },
  reels: { id: "reels", name: "Paquete de reels", price: 280000, group: "Produccion" },
  chatbot: { id: "chatbot", name: "Chatbot y soporte", price: 450000, group: "Automatizacion" },
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

function renderIcons() {
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
