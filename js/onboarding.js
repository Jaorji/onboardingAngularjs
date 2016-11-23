angular.module('onboarding.controllers',[])
.controller('MainCtrl', function ($scope) {
    $scope.slides = [
        { index: 0, name: 'first',url:'html/slide1.html'},
        { index: 1, name: 'second',url:'html/slide2.html'},
        { index: 2, name: 'third', url:'html/slide3.html'}
    ];
});
