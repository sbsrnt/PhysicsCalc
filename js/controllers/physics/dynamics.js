"use strict";
$(document).ready(function() {
    var events = components.events;
    function compute0(id) {
        /*
         * ABSOLUTNA WIELKOŚĆ I PASMA SŁONECZNEGO
         */
        setElement.parts(id).on(events, function () {
            var l = getElement.input0(id);
            var e = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = l / (1 - e);
            result(roundVal, formula);
        });
    } //2 inputy
    function compute1(id) {
        /*
         * DŁUGOŚĆ FALI KLINU KELVINA
         */
        setElement.parts(id).on(events, function () {
            var vb = getElement.input0(id);
            var g = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (4 * Math.PI * Math.pow(vb, 2)) / (3 * g);
            result(roundVal, formula);
        });
    }
    function compute2(id) {
        /*
         * EKSCENTRYCZNOŚĆ ORBITY W POLU SIŁY GRAWITACYJNEJ
         */
        setElement.parts(id).on(events, function () {
            var E = getElement.input0(id);
            var J = getElement.input1(id);
            var m = getElement.input2(id);
            var a = getElement.input3(id);
            var m_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);
            var formula = Math.sqrt(1 + (2 * E * Math.pow(J, 2)) / ((m * m_select) * Math.pow(a, 2)));
            result(roundVal, formula);
        });
    } //4 inputy
    function compute3(id) {
        /*
         IMPEDANCJA DRGAŃ WYMUSZONYCH
         */
        setElement.parts(id).on(events, function () {
            var Y= getElement.input0(id);
            var wf = getElement.input1(id);
            var wo = getElement.input2(id);
            var roundVal = getElement.roundInput(id);
            var a = 2 * Y;
            var bi = (Math.pow(wf, 2)) - Math.pow(wo, 2) / wf;
            var operator = '';
            if(bi < 0){ operator = ''; } else operator = '+';
            if(isNaN(bi)){ bi = 0; }
            if(!isFinite(bi)){ bi = '+' + 0; }
            var formula = a + operator + bi + 'i';
            $('.result').val(formula);
        });
    } //3 inputy
    function compute4(id) {
        /*
         * IZOTROPOWA SPRĘŻYSTOŚĆ CIAŁ STAŁYCH MODUŁU YOUNGA
         */
        setElement.parts(id).on(events, function () {
            var u = getElement.input0(id);
            var K = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = 9 * u * K / (u + 3 * K);
            result(roundVal, formula);
        });
    } //todo wynik cos nie tak chyba
    function compute5(id) {
        /*
         * MOMENT ZGINANIA PROMIENIA
         */
        setElement.parts(id).on(events, function () {
            var E = getElement.input0(id);
            var I = getElement.input1(id);
            var Rc = getElement.input2(id);
            var roundVal = getElement.roundInput(id);
            var formula = (E * 10) * I/ (Rc * 0.01);
            result(roundVal, formula);
        });
    }
    function compute6(id) {
        /*
         * KĄT KLINA MACHA DLA FAL UDERZENIOWYCH
         */
        setElement.parts(id).on(events, function () {
            var vp = getElement.input0(id);
            var vb = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = vp / vb;
            result(roundVal, formula);
        });
    }
    function compute7(id) {
        /*
         * OKRES OSCYLACJI WAHADŁA PODWÓJNEGO
         */
        setElement.parts(id).on(events, function () {
            var g = getElement.input0(id);
            var L = getElement.input1(id);
            var L_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 2 * Math.PI * Math.sqrt( (L * L_select) / (2 + Math.sqrt(2) * g));
            result(roundVal, formula);
        });
    }
    function compute8(id) {
        /*
         * PODCIĄGANIE KAPILARNE
         */
        setElement.parts(id).on(events, function () {
            var ojv = getElement.input0(id);
            var o = getElement.input1(id);
            var p = getElement.input2(id);
            var g = getElement.input3(id);
            var a = getElement.input4(id);
            var a_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 2 * ojv * Math.cos(toRadians(o)) / p * g * (a * a_select);
            result(roundVal, formula);
        });
    } //5 inputow //todo: select do poprawy
    function compute9(id) {
        /*
         * PRĘDKOŚĆ FALI PODŁUŻNEJ W CIENKIM OKRĄGŁYM PRĘCIE
         */
        setElement.parts(id).on(events, function () {
            var E = getElement.input0(id);
            var p = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(E / p);
            result(roundVal, formula);
        });
    }
    function compute10(id) {
        /*
         * PRĘDKOŚĆ FALI POPRZECZNEJ W CIENKIM OKRĄGŁYM PRĘCIE
         */
        setElement.parts(id).on(events, function () {
            var E = getElement.input0(id);
            var p = getElement.input1(id);
            var k = getElement.input2(id);
            var a = getElement.input3(id);
            var a_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);
            var formula = (k * (a * a_select) / 2) * Math.sqrt(E / p);
            result(roundVal, formula);
        });
    }
    function compute11(id) {
        /*
         * PRĘDKOŚĆ FALI POPRZECZNEJ NA CIENKIEJ PŁYCIE WZDŁUŻ SZEROKOŚCI
         */
        setElement.parts(id).on(events, function () {
            var u = getElement.input0(id);
            var p = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(u / p);
            result(roundVal, formula);
        });
    }
    function compute12(id) {
        /*
         * PRĘDKOŚĆ FALI POPRZECZNEJ NA CIENKIEJ PŁYCIE WZDŁUŻ WYSOKOŚCI
         */
        setElement.parts(id).on(events, function () {
            var k = getElement.input0(id);
            var E = getElement.input1(id);
            var t = getElement.input2(id);
            var p = getElement.input3(id);
            var o = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(k * Math.sqrt( (E * Math.pow(t, 2)) / (12 * p * (1 - Math.pow(o, 2)))));
            result(roundVal, formula);
        });
    } //todo usunas ^2 przy vt, wynik poprawic
    function compute13(id) {
        /*
         * PRĘDKOŚĆ GRANICZNA
         */
        setElement.parts(id).on(events, function () {
            var g = getElement.input0(id);
            var m = getElement.input1(id);
            var p = getElement.input2(id);
            var A = getElement.input3(id);
            var Cd = getElement.input4(id);
            var m_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(2 * (m * m_select) * g / (p * A * Cd));
            result(roundVal, formula);
        });
    }
    function compute14(id) {
        /*
         * PRĘDKOŚĆ KĄTOWA WAHADŁA FOUCAULTA
         */
        setElement.parts(id).on(events, function () {
            var we = getElement.input0(id);
            var A = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = -we * Math.sin(A);
            result(roundVal, formula);
        });
    } //todo sinA rozdzielicz w converter_quantities.js
    function compute15(id) {
        /*
         * PROMIEŃ SFERYCZNEGO WSTRZĄSU ADIABATYCZNEGO
         */
        setElement.parts(id).on(events, function () {
            var E = getElement.input0(id);
            var t = getElement.input1(id);
            var po = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.pow((E * Math.pow(t, 2) / po), 1/5);
            result(roundVal, formula);
        });
    }
    function compute16(id) {
        /*
         * RELATYWISTYCZNY HAMILTONIAN DLA NAŁADOWANEJ CZĄSTKI
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var p = getElement.input1(id);
            var e = getElement.input2(id);
            var A = getElement.input3(id);
            var mo = getElement.input4(id);
            var o = getElement.input4(id);
            var mo_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(Math.pow((mo * mo_select), 2) * Math.pow(c, 4) + Math.pow(Math.abs(p-e*A), 2) * Math.pow(c, 2)) + e * o;
            result(roundVal, formula);
        });
    }
    function compute17(id) {
        /*
         * SIŁA CORIOLISA
         */
        setElement.parts(id).on(events, function () {
            var m = getElement.input0(id);
            var w = getElement.input1(id);
            var v = getElement.input2(id);
            var m_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = -2 * (m * m_select) * w * v;
            result(roundVal, formula);
        });
    }
    function compute18(id) {
        /*
         * SKOKI CIŚNIENIA LICZONE PRZY POMOCY RELACJI RANKINE'A-HUGONIOTA
         */
        setElement.parts(id).on(events, function () {
            var Y = getElement.input0(id);
            var M1 = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (2 * Y * Math.pow(M1, 2) - (Y - 1)) / (Y + 1);
            result(roundVal, formula);
        });
    } //todo wywalic select, wynik cos nie teges
    function compute19(id) {
        /*
         * SKRĘCANIE PAR JEDNORODNYCH PRĘTÓW
         */
        setElement.parts(id).on(events, function () {
            var C = getElement.input0(id);
            var o = getElement.input1(id);
            var I = getElement.input2(id);
            var I_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = C * ( o / (I * I_select));
            result(roundVal, formula);
        });
    }
    function compute20(id) {
        /*
         * SZTYWNOŚĆ SKRĘTNA DŁUGIEJ PŁASKIEJ TAŚMY
         */
        setElement.parts(id).on(events, function () {
            var u = getElement.input0(id);
            var w = getElement.input1(id);
            var t = getElement.input2(id);
            var w_select = getElement.select0(id);
            var t_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (1/3) * (u * (w * w_select) * Math.pow((t * t_select), 3));
            result(roundVal, formula);
        });
    }
    function compute21(id) {
        /*
         * WSKAŹNIK PRĘDKOŚCI FALI UDERZENIOWEJ UŻYWAJĄC RELACJI
         *                  RANKINE'A - HUGONIOTA
         */
        setElement.parts(id).on(events, function () {
            var y= getElement.input0(id);
            var M1 = getElement.input1(id);
            var M1_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (y + 1) / ((y - 1) + (2 / Math.pow((M1 * M1_select), 2)));
            result(roundVal, formula);
        });
    }
    function compute22(id) {
        /*
         * WSKAŹNIK TEMPERATURY FALI UDERZENIOWEJ UŻYWAJĄC RELACJI
         *                  RANKINE'A - HUGONIOTA
         */
        setElement.parts(id).on(events, function () {
            var y= getElement.input0(id);
            var M1 = getElement.input1(id);
            var M1_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (((2 * y * Math.pow((M1 * M1_select), 2)) - (y - 1)) * (2 + (y - 1) * Math.pow((M1 * M1_select), 2))) / (Math.pow((y+1), 2) * Math.pow((M1 * M1_select), 2));
            result(roundVal, formula);
        });
    } //todo dunno czy wynik jest dorby, dodać ^2 w środkowym M1 w converter_quantities.js

    window.physics_dynamics_functions = function(id, setId){
        var physics_dynamics_functions_array = [compute0, compute1, compute2, compute3, compute4, compute5, compute6, compute7,
        compute8, compute9, compute10, compute11, compute12, compute13, compute14, compute15, compute16, compute17, compute18,
         compute19, compute20, compute21, compute22];

        return physics_dynamics_functions_array[id-setId](id);
    }
});
