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
         case 'electromagnetism':
            physics_electromagnetism_functions(id);
            break;
      }
   }
   function load(type, selector){
      var home = $('.title p a');
      var sidebarLinks = $('.sidebar__sublist__category ul li');

      var element = $('.'+type+'__'+selector+' ul li');

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
      getContents(element);
   }

   load('physics', 'Astrodynamika');
   load('physics', 'Dynamika');
   load('physics', 'electromagnetism');
});
