"use strict";
$(document).ready(function() {
   var active = 'active';
   var displayNone = 'displayNone';

   function compute(type, selector, id){

       function setId(id) {
           var previousNodeLength = $('.' + type + '__' + selector).prevAll().find('ul li').length;
           var nodeLength = $('.' + type + '__' + selector + ' ul li').length;
           var sum = previousNodeLength + nodeLength;
           for (var i = previousNodeLength; i <= sum; i++) {
               if (id == i) {
                   id = Math.abs(previousNodeLength - id);
                   return id;
               }
           }
           console.log(previousNodeLength, nodeLength);
           return previousNodeLength;
       }
      switch (selector) {
         case 'Astrodynamika':
            physics_advanced_functions(id);
            break;
         case 'Dynamika':
            physics_dynamics_functions(id, setId(type, id));
            break;
         case 'Elektromagnetyzm':
            physics_electromagnetism_functions(id, setId(type, id));
            break;
      }
   }

   function load(type, selector){
      // var home = $('.title p a');
      var sidebarLinks = $('.sidebar__sublist__category ul li');

      var element = $('.'+type+'__'+selector+' ul li');
       var homeElement = $('.content__default td');
      function getContents(sidebarLink){
         sidebarLink.click(function () {
            var id = $(this).data('id');
            sidebarLinks.siblings().removeClass(active);
            $(this).addClass(active);
            $('.content__default').addClass(displayNone);

            generateNode(type, selector, id);
            compute(type, selector, id);
            var bottomSection = $('.converter');
            bottomSection.css('display', 'block');
         });
      }

      function showSublist(type, selector){
        homeElement.on('click', function(){
            // $('.section__content--body td').addClass(displayNone);
            // var z = $(this).parent().append(quantities[type][selector]);
            // console.log(z);
        });

      }
      showSublist(type, selector);
      getContents(element);
   }

   load('Fizyka', 'Astrodynamika');
   load('Fizyka', 'Dynamika');
   load('Fizyka', 'Elektromagnetyzm');
});
