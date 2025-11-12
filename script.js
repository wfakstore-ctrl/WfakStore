document.addEventListener('DOMContentLoaded', () => {
    // العناصر الرئيسية
    const productGrid = document.getElementById('product-grid');
    const categoryList = document.getElementById('category-list');
    const cartCountElement = document.getElementById('cart-count');
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // حالة السلة
    let cart = JSON.parse(localStorage.getItem('wafaakCart')) || [];

    // --------------------------------------------------
    // وظائف مساعدة
    // --------------------------------------------------

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    function calculateTotal() {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    function saveCart() {
        localStorage.setItem('wafaakCart', JSON.stringify(cart));
    }

    // --------------------------------------------------
    // 1. وظيفة إنشاء بطاقة المنتج (Product Card)
    // --------------------------------------------------
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);

        // محتوى الصورة (مؤقت لعدم وجود صور)
        const imagePlaceholder = document.createElement('div');
        imagePlaceholder.className = 'product-image';
        imagePlaceholder.textContent = صورة ${product.name};

        // تفاصيل المنتج
        const details = document.createElement('div');
        details.className = 'product-details';

        const name = document.createElement('h3');
        name.textContent = product.name;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('div');
        price.className = 'product-price';
        price.textContent = ${product.price} ريال;

        details.appendChild(name);
        details.appendChild(price);
        // لا نضيف الوصف في هذا التصميم

        card.appendChild(imagePlaceholder);
        card.appendChild(details);

        // زر السلة العائم
        const floatButton = document.createElement('div');
        floatButton.className = 'cart-float-btn';
        floatButton.innerHTML = <i class="fas fa-shopping-cart"></i>;
        floatButton.addEventListener('click', () => {
            addToCart(product);
        });
        card.appendChild(floatButton);

        return card;
    }

    // --------------------------------------------------
    // 2. وظيفة عرض المنتجات
    // --------------------------------------------------
    function renderProducts(productsToRender) {
        if (productGrid) {
            productGrid.innerHTML = ''; // مسح المنتجات الحالية
            productsToRender.forEach(product => {
                productGrid.appendChild(createProductCard(product));
            });
        }
    }

    // --------------------------------------------------
    // 3. وظيفة الإضافة للسلة
    // --------------------------------------------------
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        saveCart();
        updateCartCount();
        alert(تمت إضافة "${product.name}" إلى السلة!);
    }

    // --------------------------------------------------
    // 4. وظيفة تصفية المنتجات (موجودة فقط في products.html)
    // --------------------------------------------------
    if (categoryList) {
        categoryList.addEventListener('click', (event) => {
            const target = event.target;
            if (target.tagName === 'LI') {
                // إزالة التفعيل من الكل
                document.querySelectorAll('#category-list li').forEach(li => {
                    li.classList.remove('active');
                });

                // تفعيل العنصر المختار
                target.classList.add('active');

                const category = target.getAttribute('data-category');
                let filteredProducts = [];

                if (category === 'all') {
                    filteredProducts = productsData;
                } else {
                    filteredProducts = productsData.filter(product => product.category === category);
                }

                renderProducts(filteredProducts);
            }
        });
    }

    // --------------------------------------------------
    // 5. وظائف المودال (السلة)
    // --------------------------------------------------

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">سلة التسوق فارغة.</p>';
            cartTotalElement.textContent = '0';
            checkoutBtn.disabled = true;
            return;
        }

        checkoutBtn.disabled = false;

        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <span>${item.name} (×${item.quantity})</span>
                <span>${item.price * item.quantity} ريال</span>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });

        cartTotalElement.textContent = calculateTotal().toFixed(2); // تنسيق الرقم
    }

    // إظهار السلة عند الضغط على الأيقونة
    if (cartIcon && cartModal) {
        cartIcon.addEventListener('click', () => {
            renderCart();
            cartModal.style.display = 'block';
        });
    }

    // إغلاق السلة عند الضغط على زر الإغلاق (X)
    if (closeModalBtn && cartModal) {
        closeModalBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }

    // إغلاق السلة عند الضغط خارجها
    if (cartModal) {
        window.addEventListener('click', (event) => {
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
    }

    // --------------------------------------------------
    // 6. وظيفة تأكيد الطلب عبر واتساب
    // --------------------------------------------------
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('سلة التسوق فارغة. يرجى إضافة منتجات أولاً.');
                return;
            }

            const total = calculateTotal().toFixed(2);
            let message = "مرحباً متجر وفاك، أود تأكيد طلبي:\n\n";

            cart.forEach((item, index) => {
                message += ${index + 1}. ${item.name} (الكمية: ${item.quantity}) - الإجمالي: ${item.price * item.quantity} ريال\n;
            });

            message += \nالإجمالي الكلي للطلب: ${total} ريال.\n;
            message += "يرجى إتمام عملية الطلب وتزويدي بتفاصيل الدفع.";

            // رقم الواتساب الأساسي لخدمة العملاء
            const whatsappNumber = "967700647749"; 
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = https://wa.me/${whatsappNumber}?text=${encodedMessage};

            window.open(whatsappURL, '_blank');
            
            // إغلاق السلة بعد توجيه المستخدم
            cartModal.style.display = 'none';
        });
    }

    // --------------------------------------------------
    // 7. بدء التشغيل
    // --------------------------------------------------
    updateCartCount();
    // يتم عرض المنتجات فقط في صفحة products.html
    // يجب التأكد من وجود productsData و productGrid قبل العرض
    if (document.URL.includes("products.html") && typeof productsData !== 'undefined' && productGrid) {
        renderProducts(productsData);
    }
});