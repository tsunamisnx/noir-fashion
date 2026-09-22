$(document).ready(function() {

    // ===== Custom Cursor =====
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX; mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        const hoverTargets = 'a, button, input, select, textarea, .sidebar-link, .toggle-switch, .address-action-btn, .wishlist-remove, .wishlist-add-cart, .add-address-card, .btn-noir, .nav-icon-link, .nav-link, .social-link, .footer-links a';
        $(document).on('mouseenter', hoverTargets, function() {
            cursorDot.classList.add('hover');
            cursorRing.classList.add('hover');
        });
        $(document).on('mouseleave', hoverTargets, function() {
            cursorDot.classList.remove('hover');
            cursorRing.classList.remove('hover');
        });
        document.addEventListener('mouseleave', function() {
            cursorDot.style.opacity = '0'; cursorRing.style.opacity = '0';
        });
        document.addEventListener('mouseenter', function() {
            cursorDot.style.opacity = '1'; cursorRing.style.opacity = '1';
        });
    } else {
        cursorDot.style.display = 'none'; cursorRing.style.display = 'none';
    }

    // ===== Toast =====
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast-noir';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(function() { toast.classList.add('show'); }, 10);
        setTimeout(function() {
            toast.classList.remove('show');
            setTimeout(function() { toast.remove(); }, 400);
        }, 3000);
    }

    // ===== Sidebar Navigation =====
    $(document).on('click', '.sidebar-link[data-panel]', function(e) {
        e.preventDefault();
        const panel = $(this).data('panel');

        $('.sidebar-link').removeClass('active');
        $(this).addClass('active');

        $('.account-panel').removeClass('active');
        $('#panel-' + panel).addClass('active');
    });

    // ===== Save Profile =====
    $(document).on('click', '#saveProfileBtn', function() {
        showToast('Профиль сохранён');
    });

    // ===== Change Password =====
    $(document).on('click', '#changePassBtn', function() {
        showToast('Пароль успешно изменён');
    });

    // ===== Toggle Switches =====
    $(document).on('click', '.toggle-switch', function() {
        $(this).toggleClass('active');
        const setting = $(this).data('setting');
        const state = $(this).hasClass('active') ? 'включено' : 'отключено';
        const names = {
            newsletter: 'Рассылка',
            orders: 'Уведомления о заказах',
            promo: 'Скидки и акции',
            newarrivals: 'Новые поступления',
            '2fa': 'Двухфакторная аутентификация'
        };
        showToast((names[setting] || setting) + ' ' + state);
    });

    // ===== Wishlist Remove =====
    $(document).on('click', '.wishlist-remove', function(e) {
        e.stopPropagation();
        const card = $(this).closest('.wishlist-card');
        card.css({ opacity: 0, transform: 'scale(0.9)', transition: 'all 0.3s ease' });
        setTimeout(function() { card.remove(); }, 300);
        showToast('Удалено из избранного');
    });

    // ===== Wishlist Add to Cart =====
    $(document).on('click', '.wishlist-add-cart', function() {
        const name = $(this).siblings('.wishlist-name').text();
        showToast(name + ' добавлен в корзину');
    });

    // ===== Address Delete =====
    $(document).on('click', '.address-action-btn.delete', function() {
        const card = $(this).closest('.address-card');
        card.css({ opacity: 0, transform: 'scale(0.95)', transition: 'all 0.3s ease' });
        setTimeout(function() { card.remove(); }, 300);
        showToast('Адрес удалён');
    });

    // ===== Address Set Default =====
    $(document).on('click', '.address-action-btn:not(.delete)', function() {
        if ($(this).text() === 'По умолчанию') {
            $('.address-card').removeClass('default');
            $('.address-default-badge').remove();
            const card = $(this).closest('.address-card');
            card.addClass('default');
            card.find('.address-name').before('<span class="address-default-badge">По умолчанию</span>');
            showToast('Адрес установлен по умолчанию');
        }
    });

    // ===== Delete Account =====
    $(document).on('click', '#deleteAccountBtn', function() {
        if (confirm('Вы уверены? Все данные будут удалены безвозвратно.')) {
            showToast('Аккаунт удалён');
        }
    });

    // ===== Logout =====
    $(document).on('click', '#logoutBtn', function(e) {
        e.preventDefault();
        showToast('Вы вышли из аккаунта');
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1500);
    });
});
