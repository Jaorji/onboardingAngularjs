angular.module('onboarding.directive',['ngAnimate', 'ngTouch'])
.directive('onboardingSlider', [function() {
  return{
    restrict: 'AEC',
    scope: {},
    templateUrl: 'directive.html',
    controller: function($scope,$element,$attrs){
      $scope.direction = 'left';
      $scope.currentIndex = 0;

      $scope.setCurrentSlideIndex = function (index) {
          $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
          $scope.currentIndex = index;
      };

      $scope.isCurrentSlideIndex = function (index) {
          return $scope.currentIndex === index;
      };

      $scope.onboardingComplete = function () {

             alert('Get into APP');
      };

      $scope.prevSlide = function () {
          $scope.direction = 'left';
          document.getElementById("prev").style.opacity=1;
          if($scope.currentIndex == $element.children.length){
            $scope.onboardingComplete();
        }
        else{
          $scope.currentIndex ++ ;
        }
      };

      $scope.nextSlide = function () {
          $scope.direction = 'right';
          if($scope.currentIndex == 0) {

        }
        else{
          $scope.currentIndex -- ;
        }
    };
  }
  };
}])

.animation('.slide-animation', function () {
    return {
        addClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                var finishPoint = element.parent().width();
                if(scope.direction !== 'right') {
                    finishPoint = -finishPoint;
                }
                TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                var startPoint = element.parent().width();
                if(scope.direction === 'right') {
                    startPoint = -startPoint;
                }

                TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
});
