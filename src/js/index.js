/**
 * @license angular-slidedeck
 * (c) 2015 André Gaul <andre@gaul.io>
 * License: MIT
 */
'use strict';

angular.module('ngSlidedeck', ['ngSlidedeckTemplates', 'ngAnimate'])

  .directive('slides', ['$document', function($document) {
    return {
      restrict: 'E',
      scope: {
      },
      transclude: true,
      templateUrl: 'ngSlidedeckTemplates/slides.html',
      controller: ['$scope', '$location', function($scope, $location) {
        // watch URL search part
        $scope.$watch(function() {
          return $location.search();
        }, function(val) {
          val = Number.parseInt(val.slide);
          if (Number.isNaN(val)) {
            val = 1;
          }
          $scope.slideIndex = val - 1;
        });

        var slides = $scope.slides = [];

        var setSlideIndex = function(index, oldIndex) {
          if (oldIndex !== undefined &&
              oldIndex >= 0 && oldIndex < slides.length) {
            slides[oldIndex].selected = false;
          }
          if (index === undefined || index < 0 || index >= slides.length) {
            return;
          }
          slides[index].selected = true;
          $scope.slideIndex = index;
          $location.search({slide: index + 1});
        };
        $scope.$watch('slideIndex', setSlideIndex);

        this.addSlide = function(slide) {
          slides.push(slide);
          if (slides.length === $scope.slideIndex + 1) {
            setSlideIndex($scope.slideIndex);
          }
        };

        $document.on('keyup', function(event) {
          // right
          if (event.keyCode === 39) {
            if ($scope.slideIndex + 1 < slides.length) {
              $scope.$apply(function() {
                $scope.slideIndex++;
              });
            }
          }
          // left
          if (event.keyCode === 37) {
            if ($scope.slideIndex > 0) {
              $scope.$apply(function() {
                $scope.slideIndex--;
              });
            }
          }
        });
      }]
    };
  }])

  .directive('slide', function() {
    return {
      restrict: 'E',
      require: '^slides',
      transclude: true,
      scope: {},
      replace: true,
      templateUrl: 'ngSlidedeckTemplates/slide.html',
      link: function(scope, element, attrs, slidesCtrl) {
        slidesCtrl.addSlide(scope);
      },
    };
  })

  ;
