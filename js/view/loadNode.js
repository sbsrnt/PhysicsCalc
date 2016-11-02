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

   function loadNode(type, selector, id){
       $('.content__default').addClass(displayNone);
       $('.section__content--body td').removeClass(displayNone);

       generateNode(type, selector, id);
       compute(type, selector, id);
       var bottomSection = $('.converter');
       bottomSection.css('display', 'block');
   }

   function load(type, selector){
      // var home = $('.title p a');
      var sidebarLinks = $('.sidebar__sublist__category ul li');

      var element = $('.'+type+'__'+selector+' ul li');

      function getContents(sidebarLink){
         sidebarLink.click(function () {
            var id = $(this).data('id');
            sidebarLinks.siblings().removeClass(active);
            $(this).addClass(active);


            loadNode(type, selector, id);
         });
      }


      getContents(element);
   }



   function loaders(type) {
       load(type, 'Astrodynamika');
       load(type, 'Dynamika');
       load(type, 'Elektromagnetyzm');

       function showSublistInDefaultView() {
           var homeElement = $('.content__default .section__content--body td');
           homeElement.on('click', function () {
               $('.section__content--body td').addClass(displayNone);
               var selector = $(this).text();

               function listCalculatorHeaders(){
                   var quantitiesLength = quantities[type][selector].length;
                   var text = "";
                   for(var i=0; i<quantitiesLength; i++){
                       text += "<li data-id='"+[i]+"' class='quantitiesItem'>"+ quantities[type][selector][i].calculator.header + "</li>";
                   }
                   return text;
               }

               function generateNodeFromSublistInDefaultView(){
                   $('.section__content .section__content--default ul li').on('click', function(){
                       var id = $(this).data('id');
                       loadNode(type, selector, id);
                   });
               }

               $('.section__content--default').parent().removeClass(displayNone).children().children().append(listCalculatorHeaders());
               $('.section__content--header').children().append(" | " + selector);
               generateNodeFromSublistInDefaultView();
           });
       }
       showSublistInDefaultView(type);


   }

   loaders('Fizyka');
});
