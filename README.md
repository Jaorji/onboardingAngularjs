# onboardingAngularjs
Using Angular.js to build a user onborading.

# Start
In order to start ,you need reach to your file path and put in:
```
 onboarding username$ http-server
```
# Usage
1)Using `ngAnimation` and `ngTouch` to achieve the slide and mobile touch
2)Using `angular directive` to store main functions and `angular controller`to store main data in a separate file
```
angular.module('onboarding',  ['onboarding.controllers','onboarding.directive']);
```
# Advantage
1)Easily to change date without changing directive files,just change the data in `onboarding.js`
```
angular.module('onboarding.controllers',[])
.controller('MainCtrl', function ($scope) {
    $scope.slides = [
        { index: 0, name: 'first',url:'html/slide1.html'},
        { index: 1, name: 'second',url:'html/slide2.html'},
        { index: 2, name: 'third', url:'html/slide3.html'}
    ];
});
```
2）Mobile firendly
