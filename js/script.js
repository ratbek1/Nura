let map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.880027, 74.585762],
        zoom: 13
    });

    DG.marker([42.880027, 74.585762]).addTo(map).bindPopup('company');
});