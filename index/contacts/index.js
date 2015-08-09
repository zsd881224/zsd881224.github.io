(function () {
    var img = $('#J_Background');
    var width = img.width();
    var height = img.height();

    var x1 = width * 0.08;
    var y1 = height * 0.07;
    var x2 = width * 0.16;
    var y2 = height * 0.11;

    var menuArea = $('#J_MenuArea');
    menuArea.attr('coords', [x1,y1,x2,y2].join(','));

    var menuImg = $('#J_Menu');
    var menuWidth = menuImg.width();
    var menuHeight = menuImg.height();

    var menuX1 = menuWidth * 0;
    var menuY1 = menuHeight * 0;
    var menuX2 = menuWidth * 1;
    var menuY2 = menuHeight * 0.25;

    var homePage = $('#J_HomePage');
    homePage.attr('coords', [menuX1,menuY1,menuX2,menuY2].join(','));

    menuX1 = menuWidth * 0;
    menuY1 = menuHeight * 0.25;
    menuX2 = menuWidth * 1;
    menuY2 = menuHeight * 0.5;

    var eStore = $('#J_EStore');
    eStore.attr('coords', [menuX1,menuY1,menuX2,menuY2].join(','));

    menuX1 = menuWidth * 0;
    menuY1 = menuHeight * 0.5;
    menuX2 = menuWidth * 1;
    menuY2 = menuHeight * 0.75;

    var community = $('#J_Community');
    community.attr('coords', [menuX1,menuY1,menuX2,menuY2].join(','));

    menuX1 = menuWidth * 0;
    menuY1 = menuHeight * 0.75;
    menuX2 = menuWidth * 1;
    menuY2 = menuHeight * 1;

    var contacts = $('#J_Contacts');
    contacts.attr('coords', [menuX1,menuY1,menuX2,menuY2].join(','));

    menuArea.bind('click', function () {
        menuImg.show();
    });
})();