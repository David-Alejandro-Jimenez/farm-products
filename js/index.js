import { WA_BASE } from "./config/whatsapp.js";
import { productos } from "./data/productos.js";
import { initScrollReveal } from "./ui/scrollReveal.js";
import { renderProductos } from "./ui/renderProductos.js";

renderProductos({
    containerId: "productosGrid",
    productos,
    waBase: WA_BASE,
});

initScrollReveal(".product-card, .gallery-item, .info-row");
