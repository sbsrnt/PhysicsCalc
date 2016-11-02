"use strict";
function generateDefaultView(type){
    var ql = Object.keys(quantities[type]).length;
    var output = '';
    output +=
        '<table class="section__content">'+
            '<tr class="section__content--header">'+
                '<td colspan='+5+'>'+type+'</td>'+
            '</tr>'+
            '<tr style="height: 100%" class="displayNone"><td colspan="5" class="section__content--default"><ul class="quantitiesList"></ul></td></tr>';
    if (ql > 5) {
        output +=
            '<tr class="section__content--body">';
        for (var i = 0; i < 5; i++) {
            output += '<td >' + Object.keys(quantities[type])[i] + '</td>';
        }
        output += '</tr>';

        output += '<tr class="section__content--body">';
        for (var j = 5; j < ql; j++) {
            output += '<td>' + Object.keys(quantities[type])[j] + '</td>';
        }
        output += '</tr>';
    }
    else{
        output +=
            '<tr class="section__content--body">';
        for (var k = 0; k < 5; k++) {
            output += '<td >' + Object.keys(quantities[type])[k] + '</td>';
        }
        output += '</tr>';
    }

    output += '</table>';
    return output;
}

$(function() {
   $('.content__default').append(generateDefaultView('Fizyka'));
});

//Generate specific rows
function generateCalculatorBody5Rows(output, nodeCalculator, id){
    if(nodeCalculator.body.length > 4 && nodeCalculator.body.length <= 5){
        for(var i=0; i<nodeCalculator.body.length; i++){
                     output += '<tr class="section__content--body">';
            if(i<4){
                    output += '<td class="merged-col">'+
                        '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
                        '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
                        '<p class="abbreviation">';
                    output = checkUnitSelect(output, nodeCalculator, id, i, 'body');
                    output += '</p></td>';
            }
            else {
                    output += '<td class="col-1">'+
                        '<label for="id__'+id+'--input'+[i-1]+'">'+ nodeCalculator.body[i-1].label + '</label>'+
                        '<input class="'+nodeCalculator.body[i-1].class+'" id="id__'+id+'--input'+[i-1]+'" placeholder="0" step="any" type="number">'+
                        '<p class="abbreviation">';
                    output = checkUnitSelect(output, nodeCalculator, id, i-1, 'body');
                    output += '</p></td>';
                    output += '<td class="col-1">'+
                        '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
                        '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
                        '<p class="abbreviation">';
                    output = checkUnitSelect(output, nodeCalculator, id, i, 'body');
                    output += '</p></td>';
            }
                    output += '</tr>';
        }
    }
    return output;
}
function generateCalculatorBody6Rows(output, nodeCalculator, id){
    if(nodeCalculator.body.length > 5 && nodeCalculator.body.length <= 6){
        for(var i=0; i<nodeCalculator.body.length; i++){
            output += '<tr class="section__content--body">';
            if(i<2){
                  output += '<td class="merged-col">'+
                     '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
                     '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
                     '<p class="abbreviation">';
                 output = checkUnitSelect(output, nodeCalculator, id, i, 'body');
                 output += '</p></td>';
            }
            else {
                output = conditionsForCalculatorBody6Rows(i, output, nodeCalculator, id);
            }
                output += '</tr>';
        }
    }
    return output;
}
function generateCalculatorBody7Rows(output, nodeCalculator, id){
    if(nodeCalculator.body.length > 6 && nodeCalculator.body.length <= 7){
        for(var i=0; i<nodeCalculator.body.length; i++){
            output += '<tr class="section__content--body">';
            output = conditionsForCalculatorBody7Rows(i, output, nodeCalculator, id);
            output += '</tr>';
        }
    }
    return output;
}
function generateCalculatorBody8Rows(output, nodeCalculator, id){
    if(nodeCalculator.body.length > 7 && nodeCalculator.body.length <= 8){
        for(var i=0; i<nodeCalculator.body.length; i++){
            output += '<tr class="section__content--body">';
            output = conditionsForCalculatorBody8Rows(i, output, nodeCalculator, id);
            output += '</tr>';
        }
    }
    return output;
}
function conditionsForCalculatorBody6Rows(i, output, nodeCalculator, id){
    if(i==2){
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
            '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i, 'body');
        output += '</p></td>';
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+1]+'">'+ nodeCalculator.body[i+1].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+1].class+'" id="id__'+id+'--input'+[i+1]+'" placeholder="0" step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+1, 'body');
        output += '</p></td>';
    }

    if(i==3){
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+1]+'">'+ nodeCalculator.body[i+1].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+1].class+'" id="id__'+id+'--input'+[i+1]+'" placeholder="0" step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+1, 'body');
        output += '</p></td>';
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+2]+'">'+ nodeCalculator.body[i+2].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+2].class+'" id="id__'+id+'--input'+[i+2]+'" placeholder="0" step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+2, 'body');
        output += '</p></td>';
    }
    return output;
}
function conditionsForCalculatorBody7Rows(i, output, nodeCalculator, id){
    if(i==0){
        output += '<td class="merged-col">'+
            '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
            '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i, 'body');
        output += '</p></td>';
    }
    if(i==1){
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
            '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i, 'body');
        output += '</p></td>';
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+1]+'">'+ nodeCalculator.body[i+1].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+1].class+'" id="id__'+id+'--input'+[i+1]+'" placeholder="0"' +
            ' step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+1, 'body');
        output += '</p></td>';
    }
    if(i==2){
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+1]+'">'+ nodeCalculator.body[i+1].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+1].class+'" id="id__'+id+'--input'+[i+1]+'" placeholder="0"' +
            ' step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+1, 'body');
        output += '</p></td>';
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+2]+'">'+ nodeCalculator.body[i+2].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+2].class+'" id="id__'+id+'--input'+[i+2]+'" placeholder="0"' +
            ' step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+2, 'body');
        output += '</p></td>';
    }
    if(i==3){
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+2]+'">'+ nodeCalculator.body[i+2].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+2].class+'" id="id__'+id+'--input'+[i+2]+'" placeholder="0"' +
            ' step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+2, 'body');
        output += '</p></td>';
        output += '<td class="col-1">'+
            '<label for="id__'+id+'--input'+[i+3]+'">'+ nodeCalculator.body[i+3].label + '</label>'+
            '<input class="'+nodeCalculator.body[i+3].class+'" id="id__'+id+'--input'+[i+3]+'" placeholder="0"' +
            ' step="any" type="number">'+
            '<p class="abbreviation">';
        output = checkUnitSelect(output, nodeCalculator, id, i+3, 'body');
        output += '</p></td>';
    }
    return output;
}
function conditionsForCalculatorBody8Rows(i, output, nodeCalculator, id){
   if(i==0){
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
          '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i, 'body');
      output += '</p></td>';
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i+1]+'">'+ nodeCalculator.body[i+1].label + '</label>'+
          '<input class="'+nodeCalculator.body[i+1].class+'" id="id__'+id+'--input'+[i+1]+'" placeholder="0" step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i+1, 'body');
      output += '</p></td>';
   }
   if(i==1){
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i+1]+'">'+ nodeCalculator.body[i+1].label + '</label>'+
          '<input class="'+nodeCalculator.body[i+1].class+'" id="id__'+id+'--input'+[i+1]+'" placeholder="0" step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i+1, 'body');
      output += '</p></td>';
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i+2]+'">'+ nodeCalculator.body[i+2].label + '</label>'+
          '<input class="'+nodeCalculator.body[i+2].class+'" id="id__'+id+'--input'+[i+2]+'" placeholder="0" step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i+2, 'body');
      output += '</p></td>';
   }
   if(i==2){
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i+2]+'">'+ nodeCalculator.body[i+2].label + '</label>'+
          '<input class="'+nodeCalculator.body[i+2].class+'" id="id__'+id+'--input'+[i+2]+'" placeholder="0"' +
          ' step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i+2, 'body');
      output += '</p></td>';
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i+3]+'">'+ nodeCalculator.body[i+3].label + '</label>'+
          '<input class="'+nodeCalculator.body[i+3].class+'" id="id__'+id+'--input'+[i+3]+'" placeholder="0" step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i+3, 'body');
      output += '</p></td>';
   }
   if(i==3){
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i+3]+'">'+ nodeCalculator.body[i+3].label + '</label>'+
          '<input class="'+nodeCalculator.body[i+3].class+'" id="id__'+id+'--input'+[i+3]+'" placeholder="0" step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i+3, 'body');
      output += '</p></td>';
      output += '<td class="col-1">'+
          '<label for="id__'+id+'--input'+[i+4]+'">'+ nodeCalculator.body[i+4].label + '</label>'+
          '<input class="'+nodeCalculator.body[i+4].class+'" id="id__'+id+'--input'+[i+4]+'" placeholder="0" step="any" type="number">'+
          '<p class="abbreviation">';
      output = checkUnitSelect(output, nodeCalculator, id, i+4, 'body');
      output += '</p></td>';
   }
   return output;
}
function generatePatternRows(output, nodePattern){
    for(var i=1; i<nodePattern.length; i++){
            output +=
             '<tr class="section__content--body abbreviation-row">'+
                '<td class="abbreviation-col">'+
                   '<span class="variable">'+nodePattern[i].abbr+
                   '<sub>'+nodePattern[i].sub+'</sub>'+
                   '<sup>'+nodePattern[i].sup+'</sup>'+
                   '</span>'+
                '</td>'+
                '<td>'+
                   nodePattern[i].desc+
                '</td>'+
             '</tr>';
        }
    return output;
}

//Calculator setElement
function generateCalculatorHeader(output, nodeCalculator){
        output +=
        '<tr class="section__content--header">'+
          '<td><h3>'+ nodeCalculator.header + '</h3></td>'+
       '</tr>';
    return output;
}
function generateCalculatorBody(output, nodeCalculator, id){
    if(nodeCalculator.body.length < 5){
        for(var i=0; i<nodeCalculator.body.length; i++){
          output +=
          '<tr class="section__content--body">'+
             '<td class="merged-col">'+
                '<label for="id__'+id+'--input'+[i]+'">'+ nodeCalculator.body[i].label + '</label>'+
                '<input class="'+nodeCalculator.body[i].class+'" id="id__'+id+'--input'+[i]+'" placeholder="0" step="any" type="number">'+
                '<p class="abbreviation">';
          output = checkUnitSelect(output, nodeCalculator, id, i,  'body');
          output += '</p></td></tr>';
        }
    }
    output = generateCalculatorBody5Rows(output, nodeCalculator, id);
    output = generateCalculatorBody6Rows(output, nodeCalculator, id);
    output = generateCalculatorBody7Rows(output, nodeCalculator, id);
    output = generateCalculatorBody8Rows(output, nodeCalculator, id);

    return output;
}
function generateCalculatorFooter(output, nodeCalculator, id){
    output +=
    '<tr class="section__content--footer">'+
      '<td>'+
         '<label for="id__'+id+'--result">'+nodeCalculator.footer.label+'</label>'+
         '<div class="result-block">'+
            '<input type="text" class="result" id="id__'+id+'--result" step="any" type="text" placeholder="Wynik" readonly="readonly">'+
            '<p class="abbreviation">'+nodeCalculator.footer.unit+'</p>'+
            '</div>'+
         '<div class="round-block">';
            output = generateRoundTo(output, id);
            output +=
         '</div>'+
      '</td>'+
   '</tr>';
    return output;
}
function generateRoundTo(output, id){
    output +=
        'Zaokrąglenie do <input type="number" min="2" max="15" value="5" class="roundTo" id="id__'+id+'--roundTo">' +
        ' miejsc po' +
        ' przecinku'+
            '<button data-clipboard-target=".result" aria-hidden="true" class="btn fa fa-files-o">'+
               '<div class="button-description">'+
                  '<span class="carret"></span>'+
                  '<span class="before-copy">Skopiuj do schowka!</span>'+
                  '<span class="after-copy">Skopiowano!</span>'+
               '</div>'+
            '</button>';
    return output;
}

//Connect calculator and formula setElement
function generateCalculatorSection(output, nodeCalculator, id){
    output += '<div class="section calculator"><table class="section__content">';
    output = generateCalculatorHeader(output, nodeCalculator);
    output = generateCalculatorBody(output, nodeCalculator, id);
    output = generateCalculatorFooter(output, nodeCalculator, id);
    output +='</table></div>';
    return output;
}
function generateFormulaSection(output, nodeFormula, nodePattern){
    output +=
     '<div class="section formula">'+
         '<table class="section__content">'+
             '<tr class="section__content--header">'+
                '<td colspan="2">'+
                   '<h3>'+nodeFormula.header+'</h3>'+
                '</td>'+
             '</tr>'+
             '<tr class="section__content--body">'+
                '<td colspan="2" class="blueprint">'+
                   nodePattern[0].blueprint;
   output += '</td>'+
             '</tr>'+
             '<tr class="section__content--body">'+
                '<td colspan="2">'+
                  'Gdzie'+
                '</td>'+
             '</tr>';
    output = generatePatternRows(output, nodePattern);
    output += '</table></div></div>';
    return output;
}
function generateOutput(id, nodeCalculator, nodeFormula, nodePattern, nodeContainer){
    var output ='<div id=id__'+id+'>';
    output = generateCalculatorSection(output, nodeCalculator, id);
    output = generateFormulaSection(output, nodeFormula, nodePattern);
    nodeContainer.innerHTML = output;
}

//Set attributes to node setElement
function setMenuIdToObjectId(type, selector, id){
  var previousNodeLength = $('.'+type+'__'+selector).prevAll().find('ul li').length;
  var nodeLength = $('.'+type+'__'+selector+' ul li').length; 
  var sum = previousNodeLength + nodeLength;
  for(var i = previousNodeLength; i <= sum; i++){
      if(id == i){
         id = Math.abs(previousNodeLength-id);
          return id;
      }
  }
}
function checkUnitSelect(output, nodeCalculator, id, i, selector){
        var selectLength = nodeCalculator[selector][i].selectLength;
        var selectWeight = nodeCalculator[selector][i].selectWeight;

        if(selectWeight === false && selectLength === false){
            output += nodeCalculator[selector][i].unit;
        }
        if(selectWeight === true && selectLength === false){
            output +=
            '<select>'+
                 '<option value="1">mg</option>'+
                 '<option value="1000">g</option>'+
                 '<option value="1000000">kg</option>'+
                 '<option value="28349.5231">oz</option>'+
                 '<option value="453592.37">lb</option>'+
                 '<option value="1.77184519531">dr</option>'+
                 '<option value="0.06479891">gr</option>'+
            '</select>';
        }
        if (selectWeight === false && selectLength === true){
            output +=
            '<select>'+
                 '<option value="10">mm</option>'+
                 '<option value="1">cm</option>'+
                 '<option value="0.1">dm</option>'+
                 '<option value="0.01">m</option>'+
                 '<option value="0.00001">km</option>'+
                 '<option value="0.000006213711922373">mi</option>'+
                 '<option value="0.3937007874016">in</option>'+
                 '<option value="0.03280839895013">ft</option>'+
                 '<option value="0.01093613298338">yd</option>'+
            '</select>';
        }
    return output;
}
function setConstAttr(nodeCalculator, id){
    var constLength = $('.const').length;
    for(var i=0; i<constLength; i++){
        $('#id__'+id+'--input'+[i]).attr({
            readonly: 'readonly',
            value: nodeCalculator.body[i].value
        });
    }
}
function setColspan(nodeCalculator){
    if(nodeCalculator.body.length > 3){
        var td = $('.calculator .section__content .section__content--header td, .calculator .section__content .section__content--footer td, .merged-col');
        td.attr('colspan', 2);
    }
}
function setSelectClass(id){
    $('.abbreviation').find('select').each(function(index){
        $(this).attr('id', 'id__'+id+'--select'+index);
    });
}
function setConstTDStyle(){
    if($('input').hasClass('const')){
        $('.const').parent().css('background', '#e38979');
    }
}
function removeAdditionalRows(nodeCalculator){
   if(nodeCalculator.body.length == 5){
      $('.calculator .section__content--body:eq(3)').remove();
   }
   if(nodeCalculator.body.length == 6){
      $('.calculator .section__content--body:eq(4), .calculator .section__content--body:eq(5)').remove();
   }
   if(nodeCalculator.body.length == 7){
      $('.calculator .section__content--body:eq(4), .calculator .section__content--body:eq(5), .calculator' +
          ' .section__content--body:eq(6)').remove();
   }
   if(nodeCalculator.body.length == 8){
      $('.calculator .section__content--body:eq(4), .calculator .section__content--body:eq(5), .calculator .section__content--body:eq(6), .calculator .section__content--body:eq(7)').remove();
   }
} //refactor

//Connect everything to create node
function generateNode(type, selector, id){
  var nodeContainer  = document.getElementById('content__load');
  var nodeCalculator = quantities[type][selector][setMenuIdToObjectId(type, selector, id)].calculator;
  var nodeFormula    = quantities[type][selector][setMenuIdToObjectId(type, selector, id)].formula;
  var nodePattern    = quantities[type][selector][setMenuIdToObjectId(type, selector, id)].formula.body.pattern;
  generateOutput(id, nodeCalculator, nodeFormula, nodePattern, nodeContainer);
  removeAdditionalRows(nodeCalculator);
  setConstAttr(nodeCalculator, id);
  setColspan(nodeCalculator);
  setSelectClass(id);
  setConstTDStyle();
}