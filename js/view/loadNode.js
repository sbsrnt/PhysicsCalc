"use strict";
$(document).ready(function() {
   var active = 'active';
   var displayNone = 'displayNone';

   function compute(selector, id){
      switch (selector) {
         case 'Astrodynamika':
            physics_advanced_functions(id);
            break;
         case 'Dynamika':
            physics_dynamics_functions(id);
            break;
         case 'Elektromagnetyzm':
            physics_electromagnetism_functions(id);
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
            compute(selector, id);
            var bottomSection = $('.converter');
            bottomSection.css('display', 'block');
         });
      }

      function showSublist(type, selector){
        homeElement.on('click', function(){
            // $('.section__content--body td').addClass(displayNone);
            var z = $(this).append(quantities[type][selector]);
            console.log(z);
        });

      }
      showSublist(type, selector);
      getContents(element);
   }

   load('Fizyka', 'Astrodynamika');
   load('Fizyka', 'Dynamika');
   load('Fizyka', 'Elektromagnetyzm');
});
