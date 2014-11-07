'use strict';

kiwiWeb.controller('AppCtrl', ['$scope', '$state', '$window', '$templateCache', '$timeout', 'MediaQuery', 'Transition', 'Menu', function ($scope, $state, $window, $templateCache, $timeout, MediaQuery, Transition, Menu) {

  $scope.screen = MediaQuery.screenSize();
  $scope.title = 'Kiwi Networks';
  $scope.styles = {};
  $scope.langKey = 'es';
  $scope.menu = Menu;
  $scope.menu.active = true;
  $scope.menu.current = $scope.menu.sections[0];

  $scope.language = $templateCache.get('language_default');

  $scope.changeTitle = function (title) {
    $scope.title = title;
  };

  $scope.menuToggle = function () {
    $scope.menu.active = !$scope.menu.active;
  };

  $scope.menuSectionToggle = function (section) {

    section.visible = !section.visible;

    if($scope.menu.current === null) {
      $scope.menu.current = section;
    } else if($scope.menu.current === section) {
      $scope.menu.current = null;
    } else {
      $scope.menu.current.visible = !$scope.menu.current.visible;
      $scope.menu.current = section;
    }
  };

  $scope.sectionStyle = function (visible, length) {
    return visible ? {'margin-top': '0'} : {'margin-top': '-' + length * (44 / 16) + 'rem'};
  };

  $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    event.preventDefault();
    $scope.styles.transition = Transition.getTransition(fromState.name, toState.name);
    $timeout(function () {
      $state.go(toState.name, null, {notify: false})
        .then(function (state) {
          $scope.$broadcast('$stateChangeSuccess', state, null);
        });
    }, 1)
  });

  $(window).resize(function () {
    $scope.screen = MediaQuery.screenSize();
    $scope.$apply();
  });

  $scope.changeLanguage = function (langKey) {
    if($scope.langKey !== langKey) {
      $scope.langKey = langKey;
    }
  };

}]);
