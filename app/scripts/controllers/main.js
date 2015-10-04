'use strict';

/**
 * @ngdoc function
 * @name trackingboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackingboardApp
 */
angular.module('trackingboardApp')
  .controller('MainCtrl', function($scope) {
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     var recipeData = "[{\"title\":\"Jambalaya\",\"instructions\":\"Heat a large pot over medium-high heat. Add bacon, and cook until crisp. Remove bacon pieces with a slotted spoon, and set aside. Add celery, bell pepper, and onion to the bacon drippings, and cook until tender.\",\"time\":\"25 minutes\",\"rating\":\"5\",\"image\":\"http://freeguitarmentor.com/wp-content/uploads/2011/07/jambalaya_dish.jpg\"},{\"title\":\"Shrimp Scampi\",\"instructions\":\"Bring a large pot of salted water to a boil. Stir in pasta and return pot to boil. Cook until al dente. Drain well. Melt butter in a large saucepan over medium heat. Stir in garlic and shrimp. Cook, stirring constantly, for 3 to 5 minutes.\",\"time\":\"35 minutes\",\"rating\":\"3\",\"image\":\"http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2013/2/8/0/IL0507ZH_shrimp-scampi-recipe_s4x3.jpg\"},{\"title\":\"Omelette\",\"instructions\":\"Crack the eggs into a large resealable freezer bag. Press out most of the air, and seal. Shake or squeeze to beat the eggs. Open the bag, and add the ham, cheese, onion, green pepper, tomato, salsa, and mushrooms. Squeeze out as much of the air as you can, and seal the bag.\",\"time\":\"15 minutes\",\"rating\":\"4\",\"image\":\"http://amybsherman.com/images/springomelette.JPG\"}]";
  	 $scope.recipes = angular.fromJson(recipeData)
  	 console.log($scope.recipes.length)

  });
