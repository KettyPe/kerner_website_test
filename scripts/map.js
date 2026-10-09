const initWarehouseMaps = () => {
     if (typeof ymaps === 'undefined') return;

     const ICON = {
          href: 'img/contacts-page/map-icon/loc.svg',
          size: [44, 56],
     };

     const MAPS = [
          { id: 'warehouse-map-car', center: [59.899601, 30.4014], zoom: 17 },
          { id: 'warehouse-map-foot', center: [59.899601, 30.4014], zoom: 17 },
     ];

     ymaps.ready(() => {
          MAPS.forEach(({ id, center, zoom }) => {
               const el = document.getElementById(id);
               if (!el) return;

               let map = null;

               const create = () => {
                    map = new ymaps.Map(
                         el,
                         { center, zoom, controls: ['zoomControl'] },
                         { suppressMapOpenBlock: true }
                    );
                    map.behaviors.disable('scrollZoom');

                    map.geoObjects.add(
                         new ymaps.Placemark(center, {}, {
                              iconLayout: 'default#image',
                              iconImageHref: ICON.href,
                              iconImageSize: ICON.size,
                              iconImageOffset: [-ICON.size[0] / 2, -ICON.size[1] / 2],
                         })
                    );
               };

               new ResizeObserver(() => {
                    if (!el.offsetWidth) return;
                    if (map) map.container.fitToViewport();
                    else create();
               }).observe(el);
          });
     });
};

initWarehouseMaps();