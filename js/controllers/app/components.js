/**
 * Created by PC on 9/19/2016.
 */
"use strict";
var components = {
    prefix : '#id__',
    postfix_input : '--input',
    postfix_round : '--roundTo',
    postfix_select: '--select',
    inputs : '.section__content .section__content--body input',
    selects : '.section__content .section__content--body select',
    events : 'keyup change',
    countPreviousId : function (id, type, selector){
        var previousNodeLength = $('.'+type+'__'+selector).prevAll().find('ul li').length;
        var nodeLength = $('.'+type+'__'+selector+' ul li').length;
        var sum = previousNodeLength + nodeLength;
        for (var i = previousNodeLength; i <= sum; i++) {
            if (id == i) {
                id = Math.abs(previousNodeLength - id);
                return id;
            }
        }
        return previousNodeLength;
    }
};

var setElement = {
    selector : function(id){
        return components.prefix + id;
    },
    input : function(id){
        return this.selector(id) + components.postfix_input;
    },
    select : function(id){
        return this.selector(id) + components.postfix_select;
    },
    roundInput : function(id){
        return this.selector(id) + components.postfix_round;
    },
    parts : function(id){
        var input_length = $(components.inputs).length;
        var select_length = $(components.selects).length;
        var str = '';
        for(var i=0; i<input_length; i++){
            str += this.input(id) + i + ", ";
        }
        if(select_length > 0) {
            for (var j = 0; j < select_length+1; j++) {
                str += this.select(id) + j + ", ";
            }
        }
        return $(str + this.roundInput(id));
    }
};

var getElement = {
    input0 : function(id){
        return $(setElement.input(id)+'0').val();
    },
    input1 : function(id){
        return $(setElement.input(id)+'1').val();
    },
    input2 : function(id){
        return $(setElement.input(id)+'2').val();
    },
    input3 : function(id){
        return $(setElement.input(id)+'3').val();
    },
    input4 : function(id){
        return $(setElement.input(id)+'4').val();
    },
    input5 : function(id){
        return $(setElement.input(id)+'5').val();
    },
    input6 : function(id){
        return $(setElement.input(id)+'6').val();
    },
    input7 : function(id){
        return $(setElement.input(id)+'7').val();
    },
    select0 : function(id){
        return $(setElement.select(id)+'0').val();
    },
    select1 : function(id){
        return $(setElement.select(id)+'1').val();
    },
    select2 : function(id){
        return $(setElement.select(id)+'2').val();
    },
    roundInput : function(id){
        return $(setElement.roundInput(id)).val();
    }
};