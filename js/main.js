        // Tailwind script
        function initializeTailwind() {
            document.documentElement.style.setProperty('--accent', '#f59e0b');
        }
        
        // Product data
        let products = [
            {
                id: 1,
                name: "iTech Gamer Pro RTX 4070",
                brand: "iTech",
                category: "gaming",
                price: 1899,
                originalPrice: 2199,
                rating: 4.8,
                reviews: 1240,
                image: "https://picsum.photos/id/1015/300/200",
                specs: "Intel i7-14700K • RTX 4070 12GB • 32GB DDR5 RGB • 1TB NVMe • AIO 360mm"
            },
            {
                id: 2,
                name: "iTech Gamer Elite Ryzen 7",
                brand: "iTech",
                category: "gaming",
                price: 1649,
                originalPrice: null,
                rating: 4.9,
                reviews: 890,
                image: "https://picsum.photos/id/201/300/200",
                specs: "AMD Ryzen 7 7800X3D • RTX 4070 Ti • 32GB DDR5 • 2TB NVMe • Gabinete RGB premium"
            },
            {
                id: 3,
                name: "iTech Creator Studio",
                brand: "iTech",
                category: "creator",
                price: 2499,
                originalPrice: 2799,
                rating: 4.7,
                reviews: 650,
                image: "https://picsum.photos/id/160/300/200",
                specs: "Intel i9-14900K • RTX 4080 Super 16GB • 64GB DDR5 • 2TB + 4TB NVMe • AIO 360mm"
            },
            {
                id: 4,
                name: "Radeon RX 7900 XTX",
                brand: "AMD",
                category: "gpu",
                price: 899,
                originalPrice: 999,
                rating: 4.6,
                reviews: 420,
                image: "https://picsum.photos/id/251/300/200",
                specs: "24GB GDDR6 • 6144 Stream Processors • FSR 3 • 2.5 GHz Game Clock"
            },
            {
                id: 5,
                name: "Vengeance RGB 32GB (2x16GB) DDR5",
                brand: "Corsair",
                category: "ram",
                price: 129,
                originalPrice: null,
                rating: 4.8,
                reviews: 2100,
                image: "https://picsum.photos/id/180/300/200",
                specs: "DDR5-6000 • CL30 • RGB • Perfil XMP 3.0 • Compatible Intel & AMD"
            },
            {
                id: 6,
                name: "Dominator Platinum RGB 64GB",
                brand: "Corsair",
                category: "ram",
                price: 279,
                originalPrice: 319,
                rating: 4.9,
                reviews: 380,
                image: "https://picsum.photos/id/29/300/200",
                specs: "DDR5-6400 • CL32 • RGB Premium • 2x32GB Kit"
            },
            {
                id: 7,
                name: "990 PRO 2TB NVMe SSD",
                brand: "Samsung",
                category: "almacenamiento",
                price: 179,
                originalPrice: null,
                rating: 4.9,
                reviews: 1560,
                image: "https://picsum.photos/id/133/300/200",
                specs: "PCIe 4.0 • Hasta 7450 MB/s lectura • 6900 MB/s escritura • DRAM Cache"
            },
            {
                id: 8,
                name: "T700 4TB PCIe 5.0 SSD",
                brand: "Crucial",
                category: "almacenamiento",
                price: 449,
                originalPrice: 499,
                rating: 4.7,
                reviews: 290,
                image: "https://picsum.photos/id/201/300/200",
                specs: "PCIe 5.0 • Hasta 12,400 MB/s • Ideal para creadores y gaming extremo"
            },
            {
                id: 9,
                name: "ROG Strix B650-E Gaming WiFi",
                brand: "ASUS",
                category: "placa",
                price: 289,
                originalPrice: null,
                rating: 4.6,
                reviews: 710,
                image: "https://picsum.photos/id/160/300/200",
                specs: "Socket AM5 • DDR5 • WiFi 6E • PCIe 5.0 • 2.5Gb LAN • Aura Sync"
            },
            {
                id: 10,
                name: "MAG B760 Tomahawk WiFi",
                brand: "MSI",
                category: "placa",
                price: 199,
                originalPrice: 229,
                rating: 4.5,
                reviews: 540,
                image: "https://picsum.photos/id/251/300/200",
                specs: "Socket LGA 1700 • DDR5 • WiFi 6E • PCIe 5.0 • 4x M.2"
            },
            {
                id: 11,
                name: "Focus GX-850 80+ Gold",
                brand: "Seasonic",
                category: "fuente",
                price: 139,
                originalPrice: null,
                rating: 4.8,
                reviews: 920,
                image: "https://picsum.photos/id/180/300/200",
                specs: "850W • Modular • 80+ Gold • 10 años garantía • ATX 3.0"
            },
            {
                id: 12,
                name: "RM1000x 80+ Gold",
                brand: "Corsair",
                category: "fuente",
                price: 189,
                originalPrice: 219,
                rating: 4.7,
                reviews: 480,
                image: "https://picsum.photos/id/29/300/200",
                specs: "1000W • Totalmente modular • ATX 3.0 • Silenciosa • 10 años garantía"
            }
        ];

        let cart = [];
        
        // Render all products
        function renderProducts(filteredProducts = products) {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = '';
            
            if (filteredProducts.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-12 text-center">
                        <i class="fa-solid fa-search text-4xl text-zinc-600 mb-4"></i>
                        <p class="text-zinc-400">No se encontraron productos con esos criterios.</p>
                        <button onclick="resetFilters()" class="mt-4 text-blue-400 hover:underline text-sm">Limpiar filtros</button>
                    </div>
                `;
                return;
            }
            
            filteredProducts.forEach(product => {
                const hasDiscount = product.originalPrice && product.originalPrice > product.price;
                const discountPercent = hasDiscount ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
                
                const cardHTML = `
                    <div class="product-card bg-zinc-900 border border-zinc-700 hover:border-zinc-600 rounded-3xl overflow-hidden group flex flex-col h-full">
                        <!-- Image -->
                        <div class="relative bg-zinc-950 aspect-[16/10] overflow-hidden">
                            <img src="${product.image}" alt="${product.name}" 
                                 class="product-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            
                            ${hasDiscount ? `
                                <div class="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-2xl tracking-wider">
                                    -${discountPercent}%
                                </div>
                            ` : ''}
                            
                            <div class="absolute top-3 right-3 bg-zinc-900/90 text-xs px-2.5 py-1 rounded-2xl flex items-center gap-x-1 border border-zinc-700">
                                <i class="fa-solid fa-star text-amber-400 text-xs"></i>
                                <span class="font-medium">${product.rating}</span>
                            </div>
                        </div>
                        
                        <div class="p-5 flex flex-col flex-1">
                            <div>
                                <div class="text-xs text-blue-400 font-semibold tracking-wider">${product.brand}</div>
                                <h3 class="font-semibold text-lg leading-tight mt-0.5 pr-2">${product.name}</h3>
                            </div>
                            
                            <div class="mt-auto pt-4">
                                <div class="flex items-baseline gap-x-2">
                                    <span class="text-2xl font-bold">$${product.price}</span>
                                    ${hasDiscount ? `<span class="text-sm text-zinc-400 line-through">$${product.originalPrice}</span>` : ''}
                                </div>
                                
                                <div class="flex items-center justify-between mt-4">
                                    <button onclick="quickViewProduct(${product.id})" 
                                            class="text-xs font-medium px-4 py-2 rounded-2xl border border-zinc-600 hover:bg-zinc-800 transition-colors">
                                        Ver detalles
                                    </button>
                                    
                                    <button onclick="addToCart(${product.id}, event)" 
                                            class="flex items-center justify-center gap-x-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all text-white text-sm font-semibold px-5 h-9 rounded-2xl">
                                        <i class="fa-solid fa-plus text-xs"></i>
                                        <span class="hidden sm:inline">Añadir</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                grid.innerHTML += cardHTML;
            });
        }
        
        // Filter products by category
        function filterByCategory(category) {
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered);
            
            // Scroll to products section
            document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Optional: highlight active filter (could be improved)
            showToast(`Mostrando productos de ${getCategoryName(category)}`);
        }
        
        function getCategoryName(cat) {
            const names = {
                'procesador': 'Procesadores',
                'gpu': 'Tarjetas Gráficas',
                'ram': 'Memoria RAM',
                'almacenamiento': 'Almacenamiento',
                'placa': 'Placas Madre',
                'fuente': 'Fuentes de Poder',
                'refrigeracion': 'Refrigeración',
                'gabinete': 'Gabinetes'
            };
            return names[cat] || cat;
        }
        
        // Search functionality
        function setupSearch() {
            const searchInput = document.getElementById('search-input');
            
            searchInput.addEventListener('input', () => {
                const term = searchInput.value.toLowerCase().trim();
                
                if (!term) {
                    renderProducts(products);
                    return;
                }
                
                const filtered = products.filter(product => 
                    product.name.toLowerCase().includes(term) || 
                    product.brand.toLowerCase().includes(term) ||
                    product.specs.toLowerCase().includes(term)
                );
                
                renderProducts(filtered);
            });
            
            // Allow pressing Enter to focus products
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        
        function resetFilters() {
            document.getElementById('search-input').value = '';
            renderProducts(products);
        }
        
        // Add to cart
        function addToCart(productId, event) {
            if (event) event.stopImmediatePropagation();
            
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            // Check if already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartCount();
            showToast(`${product.name} añadido al carrito`);
            
            // Optional animation on button
            if (event && event.currentTarget) {
                const btn = event.currentTarget;
                btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>Añadido</span>`;
                setTimeout(() => {
                    if (btn) btn.innerHTML = `<i class="fa-solid fa-plus text-xs"></i> <span class="hidden sm:inline">Añadir</span>`;
                }, 1200);
            }
        }
        
        function addToCartFromOffer(offerIndex) {
            let productId;
            if (offerIndex === 0) productId = 3; // RTX 4070 Ti Super
            else if (offerIndex === 1) productId = 2; // Ryzen 7800X3D
            else if (offerIndex === 2) productId = 6; // Corsair 64GB RAM
            
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity = (existing.quantity || 1) + 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartCount();
            showToast(`${product.name} añadido desde oferta`);
        }
        
        function updateCartCount() {
            const countEl = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            countEl.textContent = totalItems;
            
            if (totalItems > 0) {
                countEl.classList.add('!bg-emerald-500');
            } else {
                countEl.classList.remove('!bg-emerald-500');
            }
        }
        
        // Quick view modal
        let currentProductId = null;
        
        function quickViewProduct(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            currentProductId = productId;
            
            document.getElementById('modal-product-image').src = product.image;
            document.getElementById('modal-product-brand').textContent = product.brand.toUpperCase();
            document.getElementById('modal-product-name').textContent = product.name;
            document.getElementById('modal-product-price').innerHTML = `$${product.price} <span class="text-base align-baseline font-normal text-zinc-400">USD</span>`;
            
            const originalPriceEl = document.getElementById('modal-product-original-price');
            if (product.originalPrice) {
                originalPriceEl.textContent = `$${product.originalPrice}`;
                originalPriceEl.style.display = 'block';
            } else {
                originalPriceEl.style.display = 'none';
            }
            
            // Rating
            const ratingContainer = document.getElementById('modal-product-rating');
            ratingContainer.innerHTML = '';
            const fullStars = Math.floor(product.rating);
            const hasHalf = product.rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                ratingContainer.innerHTML += `<i class="fa-solid fa-star"></i>`;
            }
            if (hasHalf) {
                ratingContainer.innerHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
            }
            ratingContainer.innerHTML += `<span class="ml-2 text-xs text-zinc-300 font-medium">(${product.reviews} reseñas)</span>`;
            
            document.getElementById('modal-product-specs').innerHTML = product.specs;
            
            document.getElementById('product-modal').classList.remove('hidden');
            document.getElementById('product-modal').classList.add('flex');
        }
        
        function hideProductModal() {
            const modal = document.getElementById('product-modal');
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
        
        function addCurrentProductToCart() {
            if (!currentProductId) return;
            addToCart(currentProductId);
            hideProductModal();
        }
        
        // Cart modal
        function showCartModal() {
            const modal = document.getElementById('cart-modal');
            const itemsContainer = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            const countEl = document.getElementById('cart-items-count');
            
            itemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                itemsContainer.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-center py-10">
                        <i class="fa-solid fa-shopping-cart text-5xl text-zinc-700 mb-4"></i>
                        <p class="text-zinc-400">Tu carrito está vacío</p>
                        <button onclick="hideCartModal()" class="mt-5 text-sm px-5 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-2xl">Explorar productos</button>
                    </div>
                `;
                totalEl.textContent = '$0';
                countEl.textContent = '0 productos';
            } else {
                let total = 0;
                let itemCount = 0;
                
                cart.forEach((item, index) => {
                    const itemTotal = item.price * (item.quantity || 1);
                    total += itemTotal;
                    itemCount += (item.quantity || 1);
                    
                    const itemHTML = `
                        <div class="flex gap-x-4 border-b border-zinc-700 pb-5 last:border-b-0 last:pb-0">
                            <div class="w-16 h-16 flex-shrink-0 bg-zinc-800 rounded-2xl overflow-hidden">
                                <img src="${item.image}" class="w-full h-full object-cover" alt="${item.name}">
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex justify-between">
                                    <div>
                                        <div class="font-semibold text-sm leading-tight">${item.name}</div>
                                        <div class="text-xs text-zinc-400">${item.brand}</div>
                                    </div>
                                    <div class="text-right">
                                        <div class="font-bold">$${itemTotal}</div>
                                        <div class="text-xs text-zinc-400">$${item.price} c/u</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-center justify-between mt-3">
                                    <div class="flex items-center border border-zinc-600 rounded-xl">
                                        <button onclick="changeCartQuantity(${index}, -1)" class="px-3 py-0.5 hover:bg-zinc-800 rounded-l-xl">-</button>
                                        <span class="px-3 text-sm font-medium">${item.quantity || 1}</span>
                                        <button onclick="changeCartQuantity(${index}, 1)" class="px-3 py-0.5 hover:bg-zinc-800 rounded-r-xl">+</button>
                                    </div>
                                    
                                    <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-500 text-xs flex items-center gap-x-1">
                                        <i class="fa-solid fa-trash"></i>
                                        <span class="hidden sm:inline">Eliminar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    itemsContainer.innerHTML += itemHTML;
                });
                
                totalEl.textContent = `$${total}`;
                countEl.textContent = `${itemCount} producto${itemCount > 1 ? 's' : ''}`;
            }
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
        
        function hideCartModal() {
            const modal = document.getElementById('cart-modal');
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
        
        function changeCartQuantity(index, delta) {
            cart[index].quantity = (cart[index].quantity || 1) + delta;
            
            if (cart[index].quantity < 1) cart[index].quantity = 1;
            
            showCartModal(); // Refresh modal
            updateCartCount();
        }
        
        function removeFromCart(index) {
            cart.splice(index, 1);
            showCartModal();
            updateCartCount();
        }
        
        function checkout() {
            if (cart.length === 0) return;
            
            const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
            
            hideCartModal();
            
            // Simulate checkout
            setTimeout(() => {
                alert(`¡Gracias por tu compra!\n\nTotal: $${total}\n\nEn un entorno real serías redirigido a la pasarela de pago.\n\nTu pedido ha sido registrado con éxito.`);
                
                // Clear cart after "purchase"
                cart = [];
                updateCartCount();
            }, 600);
        }
        
        // Toast notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            const msgEl = document.getElementById('toast-message');
            
            msgEl.textContent = message;
            toast.style.display = 'flex';
            toast.classList.remove('hidden');
            
            setTimeout(() => {
                toast.style.transition = 'all 0.3s ease';
                toast.style.opacity = '0';
                
                setTimeout(() => {
                    toast.style.opacity = '1';
                    toast.style.transition = '';
                    toast.style.display = 'none';
                    toast.classList.add('hidden');
                }, 300);
            }, 2600);
        }
        
        // Mobile menu (simple)
        function toggleMobileMenu() {
            const nav = document.querySelector('nav');
            const mobileMenu = document.createElement('div');
            
            mobileMenu.innerHTML = `
                <div class="fixed inset-0 bg-black/60 z-[90] md:hidden" onclick="this.remove()"></div>
                <div class="fixed top-[73px] left-0 right-0 bg-zinc-900 border-b border-zinc-700 p-6 z-[95] md:hidden">
                    <div class="flex flex-col gap-y-1 text-lg">
                        <a href="#" class="py-3 px-2 hover:bg-zinc-800 rounded-xl">Inicio</a>
                        <a href="#productos" class="py-3 px-2 hover:bg-zinc-800 rounded-xl">Productos</a>
                        <a href="#categorias" class="py-3 px-2 hover:bg-zinc-800 rounded-xl">Categorías</a>
                        <a href="#ofertas" class="py-3 px-2 hover:bg-zinc-800 rounded-xl">Ofertas</a>
                        
                        <div class="h-px bg-zinc-700 my-3"></div>
                        
                        <a href="#" class="py-3 px-2 text-blue-400">Iniciar sesión</a>
                    </div>
                </div>
            `;
            
            document.body.appendChild(mobileMenu.children[0]);
            document.body.appendChild(mobileMenu.children[0]);
            
            // Auto remove on link click
            setTimeout(() => {
                const links = mobileMenu.querySelectorAll('a');
                links.forEach(link => {
                    link.onclick = () => mobileMenu.remove();
                });
            }, 100);
        }
        
        // Initialize everything
        function initializeWebsite() {
            initializeTailwind();
            
            // Render initial products
            renderProducts();
            
            // Setup search
            setupSearch();
            
            // Update initial cart count
            updateCartCount();
            
            // Keyboard support for search (already in setupSearch)
            
            // Bonus: Randomly highlight one category or show welcome toast (disabled for cleanliness)
            // showToast("¡Bienvenido a iTech! Explora nuestros componentes premium.");
            
            // Make sure logo is visible
            console.log('%c[iTech Template] Plantilla de tienda de componentes lista.', 'color:#64748b');
        }
        
        // Boot app
        window.onload = initializeWebsite;
        
        // Expose some functions globally if needed for debugging
        window.iTech = { resetFilters, filterByCategory, addToCart };
