function createProductCard(producto, waBase) {
  const msg = encodeURIComponent(
    `Hola, estoy interesado/a en el producto: *${producto.nombre}*. ¿Podría darme más información?`
  );

  return `
    <div class="product-card">
      <div class="product-img" style="background:${producto.bg}">
        ${producto.emoji}
      </div>

      <div class="product-body">
        <h3 class="product-name">${producto.nombre}</h3>
        <p class="product-desc">${producto.desc}</p>
        <span class="product-tag">${producto.tag}</span>
        <br>
        <a href="${waBase}${msg}" class="product-cta" target="_blank" rel="noopener">
          Consultar por WhatsApp →
        </a>
      </div>
    </div>
  `;
}

export function renderProductos({ containerId, productos, waBase }) {
  const grid = document.getElementById(containerId);

  if (!grid) {
    return;
  }

  grid.innerHTML = productos
    .map((producto) => createProductCard(producto, waBase))
    .join("");
}
