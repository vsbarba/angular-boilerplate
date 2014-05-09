editor.directive('showConsole', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var
        editorField   = $(element).data('editor-field'),
        targetConsole = $(element).data('console');

      element.on('click', function () {

        $(editorField).toggleClass('active-show-console');
        $(targetConsole).toggleClass('active-show-console');
        setTimeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 250);

      });
    }
  }
});

editor.directive('detectPlatform', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      var OSName="Unknown OS";
      if (navigator.appVersion.indexOf("Win")!=-1) OSName="pc";
      if (navigator.appVersion.indexOf("Mac")!=-1) OSName="mac";
      if (navigator.appVersion.indexOf("X11")!=-1) OSName="pc";
      if (navigator.appVersion.indexOf("Linux")!=-1) OSName="pc";

      $(elem).addClass(OSName);
    }
  }
});

// pn6Bldr panel slide

editor.directive('pn6panelHide', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        var targetClass = $(this).data('targetClass'),
            classToggle  = $(this).data('classToggle'),
            extraTarget = $(this).data('extraTarget');

        $(this).toggleClass(classToggle);
        $(targetClass).toggleClass(classToggle);
        $(extraTarget).toggleClass(classToggle);
        $('.sbPopup').toggleClass(classToggle);
      });
    }
  }
});
