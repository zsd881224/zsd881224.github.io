(function () {
    var img = $('img');
    var width = img.width();
    var height = img.height();

    var x1 = width * 0.1;
    var y1 = height * 0.07;
    var x2 = width * 0.32;
    var y2 = height * 0.2;

    var iconArea = $('#J_IconArea');
    iconArea.attr('coords', [x1,y1,x2,y2].join(','));

    x1 = width * 0.41;
    y1 = height * 0.9;
    x2 = width * 0.59;
    y2 = height * 1;

    var eStoreArea = $('#J_EStoreArea');
    eStoreArea.attr('coords', [x1,y1,x2,y2].join(','));
})();