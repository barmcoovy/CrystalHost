const pricingPlansSet1 = [
  {
    title: "Command Block",
    description: "Lorem ipsum dolor sit amet.",
    price: "19.99 PLN",
    image: "dev.png",
    details: [
      { header: "Dysk", detail: "10 GB" },
      { header: "Pamięć RAM", detail: "2 GB" },
      { header: "vCPU", detail: "75%" },
    ],
  },
  {
    title: "Dirt",
    description: "Lorem ipsum dolor sit amet.",
    price: "29.99 PLN",
    image: "dirt.png",
    details: [
      { header: "Pamięć RAM", detail: "4 GB" },
      { header: "Dysk", detail: "15 GB" },
      { header: "vCPU", detail: "100%" },
    ],
  },
  {
    title: "Sand",
    description: "Lorem ipsum dolor sit amet.",
    price: "39.99 PLN",
    image: "sand.png",
    details: [
      { header: "Pamięć RAM", detail: "8 GB" },
      { header: "Dysk", detail: "30 GB" },
      { header: "vCPU", detail: "200%" },
    ],
  },
];

const pricingPlansSet2 = [
  {
    title: "BRONZE",
    description: "Lorem ipsum dolor sit amet.",
    price: "24.99 PLN",
    details: [
      { header: "AMD Ryzen 9 5950X", detail: "2vCore" },
      { header: "Pamięć RAM", detail: "2 GB" },
      { header: "Szybkość dysku NVMe", detail: "3 GB" },
      { header: "Własny itemshop", detail: "Tak" },
      { header: "Anty-DDoS", detail: "Tak" },
      { header: "Pluginy i Mody", detail: "Bez Limitu" },
      { header: "Łącza Serwera", detail: "15 Gbps" },
    ],
  },
  {
    title: "SILVER",
    description: "Lorem ipsum dolor sit amet.",
    price: "34.99 PLN",
    details: [
      { header: "AMD Ryzen 9 5950X", detail: "3vCore" },
      { header: "Pamięć RAM", detail: "4 GB" },
      { header: "Szybkość dysku NVMe", detail: "6 GB" },
      { header: "Własny itemshop", detail: "Tak" },
      { header: "Anty-DDoS", detail: "Tak" },
      { header: "Pluginy i Mody", detail: "Bez Limitu" },
      { header: "Łącza Serwera", detail: "25 Gbps" },
    ],
  },
  {
    title: "GOLD",
    description: "Lorem ipsum dolor sit amet.",
    price: "44.99 PLN",
    details: [
      { header: "AMD Ryzen 9 5950X", detail: "5vCore" },
      { header: "Pamięć RAM", detail: "8 GB" },
      { header: "Szybkość dysku NVMe", detail: "12 GB" },
      { header: "Własny itemshop", detail: "Tak" },
      { header: "Anty-DDoS", detail: "Tak" },
      { header: "Pluginy i Mody", detail: "Bez Limitu" },
      { header: "Łącza Serwera", detail: "50 Gbps" },
    ],
  },
];

const pricingContainer = document.querySelector(".pricing-blocks");
const pricingSelect = document.getElementById("pricing-select");

function renderPricingPlans(plans) {
  pricingContainer.innerHTML = "";
  plans.forEach((plan) => {
    const planBlock = document.createElement("div");
    planBlock.classList.add("price-block");

    planBlock.innerHTML = `
                              <h1 class="pricing-header">${
                                plan.title
                              } <img src='../media/${
      plan.image
    }' alt='image' class='pricing-image'></h1>
                              <span class="pricing-desc">${
                                plan.description
                              }</span>
                              <span class="price">${plan.price}</span>
                              <div class="pricing-details">
                                      ${plan.details
                                        .map(
                                          (detail) => `
                                              <div class="pricing-detail-element">
                                                      <span class="pricing-detail-header detail-element">${detail.header}</span>
                                                      <span class="pricing-detail detail-element">${detail.detail}</span>
                                              </div>
                                              <hr />
                                      `
                                        )
                                        .join("")}
                              </div>
                              <button class="pricing-button">Kup teraz</button>
                      `;

    pricingContainer.appendChild(planBlock);
  });
}

pricingSelect.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  if (selectedValue === "set1") {
    renderPricingPlans(pricingPlansSet1);
  } else if (selectedValue === "set2") {
    renderPricingPlans(pricingPlansSet2);
  }
});

// Initial render
renderPricingPlans(pricingPlansSet1);
