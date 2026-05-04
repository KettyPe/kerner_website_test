
document.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.querySelector('.burder-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });


    const catalogFilterMob = document.querySelector('.catalog-filter-mob');

    if (catalogFilterMob) {
        const catalogFilterMobButton = catalogFilterMob.querySelector('.catalog-filter-mob__button');
        const catalogFilterMobBody = catalogFilterMob.querySelector('.catalog-filter-mob__inner');
        const catalogFilterMobClose = catalogFilterMob.querySelector('.catalog-filter-mob__close');

        catalogFilterMobButton.addEventListener('click', () => {
            catalogFilterMobBody.classList.add('open-filter-mob');
            // body.classList.add('no-scroll');
            disableScroll();
        });

        catalogFilterMobClose.addEventListener('click', () => {
            catalogFilterMobBody.classList.remove('open-filter-mob');
            // body.classList.remove('no-scroll');
            enableScroll();
        });
    }


    function disableScroll() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.style.paddingRight = paddingOffset;

        let pagePosition = window.scrollY;
        document.body.classList.add('no-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    }

    function enableScroll() {
        document.body.style.paddingRight = '0px';

        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('no-scroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-position');
    }


    const desc = document.querySelector('.category-hero__description');
    const btn = document.querySelector('.category-hero__more');

    if (!desc || !btn) return;

    const limitHeight = 150; // 8 строк

    // Показываем кнопку только если текст реально длинный
    if (desc.scrollHeight > limitHeight + 10) {
        btn.classList.add('category-hero__more--visible');
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const isExpanded = desc.classList.contains('category-hero__description--expanded');

        if (!isExpanded) {
            // Раскрываем
            desc.classList.add('category-hero__description--expanded');
            btn.classList.add('category-hero__more--active');
            btn.childNodes[0].textContent = "Скрыть ";
        } else {
            // Сворачиваем
            desc.classList.remove('category-hero__description--expanded');
            btn.classList.remove('category-hero__more--active');
            btn.childNodes[0].textContent = "Читать весь текст ";

            // Опционально: скролл к началу текста, чтобы не потеряться при закрытии
            // desc.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    // FAQ Accordion
    const accordionTriggers = document.querySelectorAll('.js-accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.closest('.accordion__item');
            const isActive = parent.classList.contains('active');

            // Закрываем все остальные (опционально, если нужен режим "один открыт")
            // document.querySelectorAll('.accordion__item').forEach(item => item.classList.remove('active'));

            if (isActive) {
                parent.classList.remove('active');
            } else {
                parent.classList.add('active');
            }
        });
    });

    // SEO Toggle
    const toggleBtn = document.querySelector('.js-seo-toggle');
    const contentBlock = document.querySelector('.seo-content');
    const btnText = document.querySelector('.js-toggle-text');

    if (toggleBtn && contentBlock) {
        toggleBtn.addEventListener('click', function () {
            contentBlock.classList.toggle('is-opened');

            // Опционально: меняем текст на кнопке
            if (contentBlock.classList.contains('is-opened')) {
                btnText.textContent = 'Свернуть текст';
            } else {
                btnText.textContent = 'Читать весь текст';
            }
        });
    }

    const lettersSlider = new Swiper('.letters-slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,

        navigation: {
            nextEl: '.js-letters-next',
            prevEl: '.js-letters-prev',
        },

        pagination: {
            el: '.letters-dotts',
            clickable: true,
            type: 'bullets'
        }
    });

    const videoSlider = new Swiper('.video-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.js-video-next',
            prevEl: '.js-video-prev',
        },

        pagination: {
            el: '.video-reviews-dotts',
            clickable: true,
            type: 'bullets'
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1280: {
                spaceBetween: 30
            }
        }
    });

    const expertSlider = new Swiper('.expert-slider', {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.js-expert-next',
            prevEl: '.js-expert-prev',
        },

        pagination: {
            el: '.expert-content-dotts',
            clickable: true,
            type: 'bullets'
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1280: {
                spaceBetween: 30,
                slidesPerView: 3,
            }
        }
    });

    const categoriesSwiper = new Swiper('.categories-slider', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.categories-next',
            prevEl: '.categories-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5
            },
            380: {
                slidesPerView: 2.5
            },
            640: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            1024: {
                slidesPerView: 5
            },
            1280: {
                slidesPerView: 6
            }
        }
    });

    const relatedSwiper = new Swiper('.related-products-slider', {
        slidesPerView: 1,
        spaceBetween: 0,


        navigation: {
            nextEl: '.related-products-arrow-next',
            prevEl: '.related-products-arrow-prev',
        },

        pagination: {
            el: '.related-products-dotts',
            clickable: true,
            type: 'bullets'
        },

        breakpoints: {
            320: {
                slidesPerView: 1
            },
            370: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1100: {
                slidesPerView: 4
            }
        }
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });




    /* ============================================================
       ПЕРЕКЛЮЧЕНИЕ ВИДА: сетка / список
       ============================================================ */
    const btnGrid = document.getElementById('btnGrid');
    const btnList = document.getElementById('btnList');
    const grid = document.getElementById('productsGrid');

    btnGrid.addEventListener('click', () => {
        grid.classList.remove('products-grid--list');
        btnGrid.classList.add('view-toggle__btn--active');
        btnList.classList.remove('view-toggle__btn--active');
    });

    btnList.addEventListener('click', () => {
        grid.classList.add('products-grid--list');
        btnList.classList.add('view-toggle__btn--active');
        btnGrid.classList.remove('view-toggle__btn--active');
    });

    /* ============================================================
       СЧЁТЧИК КОЛИЧЕСТВА
       ============================================================ */
    document.querySelectorAll('.qty-ctrl').forEach(ctrl => {
        const minus = ctrl.querySelector('.qty-ctrl__btn--minus');
        const plus = ctrl.querySelector('.qty-ctrl__btn--plus');
        const val = ctrl.querySelector('.qty-ctrl__val');

        minus.addEventListener('click', () => {
            const current = parseInt(val.textContent);
            if (current > 1) val.textContent = current - 1;
        });

        plus.addEventListener('click', () => {
            val.textContent = parseInt(val.textContent) + 1;
        });
    });


    /* ============================================================
   РАСКРЫТИЕ «ЕЩЁ N» — Производитель
   ============================================================ */
    const filterGroups = document.querySelectorAll('.filter-group.filter-group--more');
    filterGroups.forEach(filterGroup => {
        const manufacturerToggle = filterGroup.querySelector('.filter-show-more');
        const manufacturerExtra = filterGroup.querySelector('.filter-extra');
        const toggleText = filterGroup.querySelector('.filter-show-more__text');
        const toggleIcon = filterGroup.querySelector('.filter-show-more__icon');

        // Оборачиваем дочерние элементы в один div (нужно для grid-трюка)
        const innerWrap = document.createElement('div');
        while (manufacturerExtra.firstChild) {
            innerWrap.appendChild(manufacturerExtra.firstChild);
        }
        manufacturerExtra.appendChild(innerWrap);

        let isOpen = false;

        manufacturerToggle.addEventListener('click', () => {
            isOpen = !isOpen;

            if (isOpen) {
                manufacturerExtra.classList.add('filter-extra--open');
                toggleText.textContent = 'Свернуть';
                toggleIcon.style.transform = 'rotate(180deg)';
            } else {
                manufacturerExtra.classList.remove('filter-extra--open');
                toggleText.textContent = 'Еще 4';
                toggleIcon.style.transform = 'rotate(0deg)';
            }
        });
    })

    /* ============================================================
   SORT DROPDOWN
   ============================================================ */
    const sortBtn = document.getElementById('sortBtn');
    const sortDropdown = document.getElementById('sortDropdown');
    const sortLabel = document.getElementById('sortLabel');
    const sortWrapper = document.getElementById('sortWrapper');

    // Открыть / закрыть
    sortBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = sortDropdown.classList.contains('sort-dropdown--open');

        if (isOpen) {
            sortDropdown.classList.remove('sort-dropdown--open');
            sortBtn.classList.remove('sort-btn--open');
        } else {
            sortDropdown.classList.add('sort-dropdown--open');
            sortBtn.classList.add('sort-btn--open');
        }
    });

    // Выбор пункта
    sortDropdown.querySelectorAll('.sort-dropdown__item').forEach(item => {
        item.addEventListener('click', () => {
            // Снимаем активный со всех
            sortDropdown.querySelectorAll('.sort-dropdown__item').forEach(i => {
                i.classList.remove('sort-dropdown__item--active');
            });

            // Ставим активный на выбранный
            item.classList.add('sort-dropdown__item--active');

            // Обновляем лейбл и иконку в кнопке
            const icon = item.querySelector('svg').cloneNode(true);
            sortLabel.textContent = item.dataset.value;

            // Удаляем старую иконку из кнопки если есть
            const oldIcon = sortBtn.querySelector('.sort-btn__icon');
            if (oldIcon) oldIcon.remove();

            // Вставляем новую иконку перед стрелкой
            icon.classList.add('sort-btn__icon');
            const arrow = sortBtn.querySelector('svg:last-child');
            sortBtn.insertBefore(icon, arrow);

            // Закрываем
            sortDropdown.classList.remove('sort-dropdown--open');
            sortBtn.classList.remove('sort-btn--open');
        });
    });

    // Клик вне — закрыть
    document.addEventListener('click', (e) => {
        if (!sortWrapper.contains(e.target)) {
            sortDropdown.classList.remove('sort-dropdown--open');
            sortBtn.classList.remove('sort-btn--open');
        }
    });

    /* ============================================================
   ВСЕ ФИЛЬТРЫ — раскрытие/скрытие
   ============================================================ */

    const buttons = document.querySelectorAll('.all-filters-btn');

    buttons.forEach((btn) => {
        const target = btn.dataset.target;
        const filter = document.querySelector(`.extra-filters[data-id="${target}"]`);
        const icon = btn.querySelector('.all-filters-btn__icon');

        btn.addEventListener('click', () => {
            const isOpen = filter.classList.toggle('extra-filters--open');
            icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });

});

// all-filters-btn