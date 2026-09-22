$(document).ready(function() {

    var params = new URLSearchParams(window.location.search);
    var catKey = params.get('cat') || 'outerwear';
    var category = CATEGORIES[catKey] || CATEGORIES.outerwear;

    $('#heroBg').css('background-image', 'url(' + category.bg + ')');
    $('#heroLabel').text(category.label);
    $('#heroTitle').text(category.title);
    $('#heroCount').text(category.products.length + ' товаров');
    $('#breadcrumbCat').text(category.title);
    document.title = 'NOIR — ' + category.title;

    var brands = [];
    category.products.forEach(function(p) {
        if (brands.indexOf(p.brand) === -1) brands.push(p.brand);
    });
    var $bf = $('#brandFilters');
    $bf.append('<button class="filter-tag active" data-brand="all">Все</button>');
    brands.forEach(function(b) {
        $bf.append('<button class="filter-tag" data-brand="' + b + '">' + b + '</button>');
    });

    var activeBrand = 'all';
    var sortMode = 'default';

    function renderProducts() {
        var products = category.products.slice();
        if (activeBrand !== 'all') {
            products = products.filter(function(p) { return p.brand === activeBrand; });
        }
        if (sortMode === 'price-asc') products.sort(function(a,b) { return a.price - b.price; });
        else if (sortMode === 'price-desc') products.sort(function(a,b) { return b.price - a.price; });
        else if (sortMode === 'name') products.sort(function(a,b) { return a.name.localeCompare(b.name); });

        var $grid = $('#productsGrid');
        $grid.empty();

        if (products.length === 0) {
            $grid.html('<div class="col-12 text-center" style="padding:60px 0;"><p style="color:var(--gray);font-weight:200;">Товары не найдены</p></div>');
            return;
        }

        products.forEach(function(p) {
            var badgeHtml = '';
            if (p.badge === 'new') badgeHtml = '<span class="product-badge badge-new">New</span>';
            else if (p.badge === 'sale') {
                var pct = Math.round((1 - p.price / p.oldPrice) * 100);
                badgeHtml = '<span class="product-badge badge-sale">-' + pct + '%</span>';
            }
            else if (p.badge === 'sold-out') badgeHtml = '<span class="product-badge badge-sold-out">Sold out</span>';

            var priceHtml = '';
            if (p.oldPrice) priceHtml = '<span class="old-price">\u20AC' + p.oldPrice.toLocaleString() + '</span>\u20AC' + p.price.toLocaleString();
            else priceHtml = '\u20AC' + p.price.toLocaleString();

            var sizesHtml = '';
            p.sizes.forEach(function(s) {
                sizesHtml += '<span class="size-option">' + s + '</span>';
            });

            $grid.append(
                '<div class="col-lg-3 col-md-6 fade-in">' +
                    '<div class="product-card">' +
                        '<div class="product-img">' +
                            '<img src="' + p.img + '" alt="' + p.name + '">' +
                            badgeHtml +
                            '<div class="product-wishlist"><i class="far fa-heart"></i></div>' +
                        '</div>' +
                        '<div class="product-body">' +
                            '<div class="product-brand">' + p.brand + '</div>' +
                            '<div class="product-name">' + p.name + '</div>' +
                            '<div class="product-price">' + priceHtml + '</div>' +
                            '<div class="product-sizes">' + sizesHtml + '</div>' +
                            '<button class="add-to-cart-btn" data-brand="' + p.brand + '" data-name="' + p.name + '" data-price="' + p.price + '">В корзину</button>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
        });

        setTimeout(function() {
            $('.fade-in').each(function() {
                var top = $(this).offset().top;
                var bottom = $(window).scrollTop() + $(window).height();
                if (top < bottom - 60) $(this).addClass('visible');
            });
        }, 50);
    }

    renderProducts();

    $(document).on('click', '.filter-tag', function() {
        $('.filter-tag').removeClass('active');
        $(this).addClass('active');
        activeBrand = $(this).data('brand');
        renderProducts();
    });

    $('#sortSelect').on('change', function() {
        sortMode = $(this).val();
        renderProducts();
    });

    $(document).on('click', '.size-option', function() {
        $(this).siblings('.size-option').removeClass('selected');
        $(this).addClass('selected');
    });

    $(document).on('click', '.product-wishlist', function(e) {
        e.stopPropagation();
        var icon = $(this).find('i');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            icon.removeClass('far').addClass('fas');
            showToast('Добавлено в избранное');
        } else {
            icon.removeClass('fas').addClass('far');
            showToast('Удалено из избранного');
        }
    });

    var cart = JSON.parse(localStorage.getItem('noirCart') || '[]');
    $('#cartCount').text(cart.length);

    $(document).on('click', '.add-to-cart-btn', function() {
        var card = $(this).closest('.product-card');
        var brand = $(this).data('brand');
        var name = $(this).data('name');
        var price = $(this).data('price');
        var selectedSize = card.find('.size-option.selected');

        if (selectedSize.length === 0) {
            showToast('Пожалуйста, выберите размер');
            return;
        }

        var size = selectedSize.text();
        cart.push({ brand: brand, name: name, price: price, size: size });
        localStorage.setItem('noirCart', JSON.stringify(cart));
        $('#cartCount').text(cart.length);
        showToast(name + ' добавлен в корзину');

        var btn = $(this);
        btn.text('Добавлено \u2713').css({ background:'var(--accent)', color:'var(--black)' });
        setTimeout(function() {
            btn.text('В корзину').css({ background:'transparent', color:'var(--accent)' });
        }, 1500);
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 80) $('.navbar-noir').addClass('scrolled');
        else $('.navbar-noir').removeClass('scrolled');
        $('.fade-in').each(function() {
            var top = $(this).offset().top;
            var bottom = $(window).scrollTop() + $(window).height();
            if (top < bottom - 60) $(this).addClass('visible');
        });
    });
    $(window).trigger('scroll');

    function showToast(message) {
        var toast = $('<div class="toast-noir">' + message + '</div>');
        $('#toastContainer').append(toast);
        setTimeout(function() { toast.addClass('show'); }, 10);
        setTimeout(function() {
            toast.removeClass('show');
            setTimeout(function() { toast.remove(); }, 400);
        }, 2500);
    }
});
