"use strict";

$(document).ready(function () {
    var units = 'units';
    var displayNone = 'displayNone';

   Number.prototype.round = function(places){
       return +(Math.round(this+"e+"+places)+"e-"+places);
   };
    function roundUpTo(result, upto) {
        return Number(result.toFixed(upto));
    }

    function checkIfSiIsNaN(quantityIndex, result) {
        var roundedResult = result.round(4);
        if (isNaN(result)) {
            $('.SI__id_'+quantityIndex+'--result').val(0);
        } else {
            $('.SI__id_'+quantityIndex+'--result').val(result);
        }
    }

    function getObjectsAndCompute(quantitiesIndex, fromInputValue, fromPrefixValue, toPrefixValue, fromTypeValue, toTypeValue, optionsIndex){
        var fromSelectPrefixValue = converter_quantities.data[0].properties[units][fromPrefixValue];
        var toSelectPrefixValue = converter_quantities.data[0].properties[units][toPrefixValue];

        var fromSelectTypeValue = converter_quantities.data[quantitiesIndex].properties[optionsIndex][units][fromTypeValue];
        var toSelectTypeValue = converter_quantities.data[quantitiesIndex].properties[optionsIndex][units][toTypeValue];

        var result = fromInputValue * fromSelectPrefixValue * fromSelectTypeValue * toSelectPrefixValue * toSelectTypeValue;
        return checkIfSiIsNaN(quantitiesIndex, result);
    }

    function getElements(selector){
        var $inputs = $('.from'+selector+'Input, select[name=from'+selector+'Prefix], select[name=to'+selector+'Prefix], select[name=from'+selector+'Type], select[name=to'+selector+'Type]');
        return $inputs;
    }

    function getValues(quantityIndex, selector){
        var fromInputValue = $('.from'+selector+'Input').val();
        var fromPrefixValue = $('select[name=from'+selector+'Prefix] option:selected').val();   //upper  prefix value
        var toPrefixValue = $('select[name=to'+selector+'Prefix] option:selected').val();       //bottom prefix value
        var fromTypeValue = $('select[name=from'+selector+'Type] option:selected').val();       //upper  type value
        var toTypeValue = $('select[name=to'+selector+'Type] option:selected').val();           //bottom type value
        var optionsIndex = $('select[name=from'+selector+'Type] option:selected').index();      //upper  type index

        getObjectsAndCompute(quantityIndex, fromInputValue, fromPrefixValue, toPrefixValue, fromTypeValue, toTypeValue, optionsIndex);
    }

    function fromKelvin(parsedValue){
        var KtoK = parsedValue;
        var KtoC = parsedValue - 273.15;
        var KtoF = parsedValue * 9/5 - 459.67;
        var K = [KtoK, KtoC, KtoF];

        return K;
    }

    function fromCelsius(parsedValue){
        var CtoC = parsedValue;
        var CtoK = parsedValue + 273.15;
        var CtoF = parsedValue * 9/5 + 32;
        var C = [CtoK, CtoC, CtoF];

        return C;
    }

    function fromFahrenheit(parsedValue){
        var FtoF = parsedValue;
        var FtoC = (parsedValue - 32) * 5/9;
        var FtoK = (parsedValue + 459.67) * 5/9;
        var F = [FtoK, FtoC, FtoF];

        return F;
    }

    function convertTemperature(quantityIndex, selector){
        var inputValue = $('.from'+selector+'Input').val();
        var selectFromIndex = $('select[name=from'+selector+'Type] option:selected').index();      //upper  type index
        var selectToIndex = $('select[name=to'+selector+'Type] option:selected').index();          //bottom type index
        var parsedValue = parseFloat(inputValue);

        var K = fromKelvin(parsedValue);
        var C = fromCelsius(parsedValue);
        var F = fromFahrenheit(parsedValue);

        var temperatureArray = [K, C, F];
        var result = temperatureArray[selectFromIndex][selectToIndex];
        return checkIfSiIsNaN(quantityIndex, result);

    }

    function computeTemperature(quantityIndex, selector){
        var $inputs = getElements(selector);

        $inputs.on('keyup change', function () {
            convertTemperature(quantityIndex, selector);
        });
    }

    function compute(quantityIndex, selector) {
        var $inputs = getElements(selector);

        $inputs.on('keyup change', function () {
            getValues(quantityIndex, selector);
        });
    }

    function SIlist() {
        compute(1, 'Pressure');
        compute(2, 'Time');
        compute(3, 'Length');
        compute(4, 'Energy');
        compute(5, 'Mass');
        compute(6, 'Volume');
        compute(7, 'Area');
        compute(8, 'Speed');
        compute(9, 'Force');
        computeTemperature(10, 'Temperature');
    }

   function slider() {
      function nextSlide(id) {
         $('.SI__arrow--next, .button-menu ul li').click(function () {
             var currentSlide = $('.active-slide');
             var nextSlide = currentSlide.next();

             var currentDot = $('.active-dot');
             var nextDot = currentDot.next();

             if (nextSlide.length === 0) {
                 nextSlide = $('.SI__container--slide').first();
                 nextDot = $('.dot').first();
             }

             currentSlide.addClass('displayNone').removeClass('active-slide');
             nextSlide.removeClass('displayNone').addClass('active-slide');

             currentDot.removeClass('active-dot');
             nextDot.addClass('active-dot');
         });
      }

      function previousSlide(id) {
         $('.SI__arrow--prev').click(function () {
             var currentSlide = $('.active-slide');
             var prevSlide = currentSlide.prev();

             var currentDot = $('.active-dot');
             var prevDot = currentDot.prev();

             if (prevSlide.length === 0) {
                 prevSlide = $('.SI__container--slide').last();
                 prevDot = $('.dot').last();
             }

             currentSlide.addClass('displayNone').removeClass('active-slide');
             prevSlide.removeClass('displayNone').addClass('active-slide');

             currentDot.removeClass('active-dot');
             prevDot.addClass('active-dot');
         });
      }

      function bottomMenu(id) {
         $('.bottom-menu ul li').on('click', function () {

             var SIoptionsId = $('#SI__id_' + id);
             $(this).siblings().removeClass('active-dot');
             $(this).addClass('active-dot');
             var bottomId = $(this).data('id');
             var bottomMenuTable = $('#SI__id_' + bottomId);

             SIoptionsId.removeClass('active-slide');
             bottomMenuTable.siblings().removeClass('active-slide');
             bottomMenuTable.addClass('active-slide');
         });
      }

     function connect() {
         var SIoptions = $('.SI__section');

         SIoptions.on('click', function () {
             var id = $(this).data('id');
             var tableId = $('#SI__id_' + id);
             $('.SI__options--row').css('display', 'none');
             $('.SI__container--outer').css('display', 'table-row');
             $('.hidden').css('display', 'table-cell');

             tableId.addClass('active-slide');
             $('.SI__icon_' + id).addClass('active-dot');

             nextSlide(id);
             previousSlide(id);
             bottomMenu(id);
         });
      }
      connect();
   }
   slider();
   SIlist();
});
