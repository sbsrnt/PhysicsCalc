"use strict";
$(document).ready(function() {
    var events = components.events;

    function compute0(id) {
        /*
         ABSOLUTNA WIELKOŚĆ I PASMA SŁONECZNEGO
         */
        setElement.parts(id).on(events, function () {
            var vrot = getElement.input0(id);
            var i = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = -7.68 * log10(2 * vrot / sin(i)) - 2.58;
            result(roundVal, formula);
        });
    } //2 inputy
    function compute1(id) {
        /*
         CAŁKOWITY ROZMIAR WIZUALNY ZMIENNYCH CEFEIDALNYCH
         */
        setElement.parts(id).on(events, function () {
            var Pd = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = -2.76 * log10(Pd) - 1.40;
            result(roundVal, formula);
        });
    } //1 input
    function compute2(id) {
        /*
         CIŚNIENIE RELATYWISTYCZNE
         */
        setElement.parts(id).on(events, function () {
            var h = getElement.input0(id);
            var c = getElement.input1(id);
            var p = getElement.input2(id);
            var mn = getElement.input3(id);
            var mnSelect = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (((h / (2 * Math.PI)) * c * (Math.pow(3 * Math.pow(Math.PI, 2), (1 / 3)))) / 4) * Math.pow(p / (mn * mnSelect), 4 / 3);
            result(roundVal, formula);
        });
    } //4 inputy
    function compute3(id) {
        /*
         CZAS KOSMICZNY W PRZESUNIĘCIU KU CZERWIENI
         */
        setElement.parts(id).on(events, function () {
            var Hz = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 2 / (3 * Hz);
            result(roundVal, formula);
        });
    }
    function compute4(id) {
        /*
         CZAS PAROWANIA CZARNEJ DZIURY
         */
        setElement.parts(id).on(events, function () {
            var M = getElement.input0(id);
            var Mo = getElement.input1(id);
            var M_select = getElement.select0(id);
            var Mo_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Math.pow(M, 3) * M_select / Math.pow(Mo, 3) * Mo_select) * 10e66;
            result(roundVal, formula);
        });
    }
    function compute5(id) {
        /*
         DEGENERACJA CIŚNIENIOWA GWIAZDY NEUTRONOWEJ
         PRZEZ NIERELATYWISTYCZNE NEUTRONY
         */
        setElement.parts(id).on(events, function () {
            var h = getElement.input0(id);
            var mn = getElement.input1(id);
            var p = getElement.input2(id);
            var mn_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Math.pow(3 * Math.pow(Math.PI, 2), 2/3) / 5) * (Math.pow(h /2 * Math.PI, 2) / mn * mn_select) * (Math.pow(p / mn * mn_select, 5/3));
            result(roundVal, formula);
        });
    }
    function compute6(id) {
        /*
         JASNOŚĆ FAL GRAWITACYJNYCH
         */
        setElement.parts(id).on(events, function () {
            var G = getElement.input0(id);
            var c = getElement.input1(id);
            var a = getElement.input2(id);
            var m1 = getElement.input3(id);
            var m2 = getElement.input4(id);
            var a_select = getElement.select0(id);
            var m1_select = getElement.select1(id);
            var m2_select = getElement.select2(id);
            var roundVal = getElement.roundInput(id);

            var formula = (32 / 5) * (Math.pow(G, 4) / Math.pow(c, 5)) * (Math.pow(m1 * m1_select, 2) * Math.pow(m2 * m2_select, 2) * (m1 * m1_select + m2 * m2_select)) / Math.pow(a * a_select, 5);
            result(roundVal, formula);
        });
    } //5 inputow
    function compute7(id) {
        /*
         GĘSTOŚĆ MATERII
         */
        setElement.parts(id).on(events, function () {
            var G = getElement.input0(id);
            var p = getElement.input1(id);
            var Ho = getElement.input2(id);
            var roundVal = getElement.roundInput(id);
            var formula = (8 * Math.PI * G * p) / (3 * Math.pow(Ho, 2));
            result(roundVal, formula);
        });
    } //3 inputy
    function compute8(id) {
        /*
         GĘSTOŚĆ KRYTYCZNA
         */
        setElement.parts(id).on(events, function () {
            var G = getElement.input0(id);
            var Ho = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (3 * Math.pow(Ho, 2)) / (8 * Math.PI * G);
            result(roundVal, formula);
        });
    }
    function compute9(id) {
        /*
         GĘSTOŚĆ KRZYWIZNY
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var k = getElement.input1(id);
            var R = getElement.input2(id);
            var Ho = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula =  -(k * Math.pow(c, 2)) / (Math.pow(R,2 ) * Math.pow(Ho, 2));
            result(roundVal, formula);
        });
    }
    function compute10(id) {
        /*
         GĘSTOŚĆ LAMBDY
         */
        setElement.parts(id).on(events, function () {
            var A = getElement.input0(id);
            var Ho = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = A / (3 * Math.pow(Ho, 2));
            result(roundVal, formula);
        });
    }
    function compute11(id) {
        /*
         GRANICA JASNOŚCI EDDINGTONA
         */
        setElement.parts(id).on(events, function () {
            var G = getElement.input0(id);
            var c = getElement.input1(id);
            var mp = getElement.input2(id);
            var oT = getElement.input3(id);
            var M = getElement.input4(id);
            var M_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (4 * Math.PI * G * (M * M_select) * mp * c) / oT;
            result(roundVal, formula);
        });
    }
    function compute12(id) {
        /*
         GRANICA JASNOŚCI EDDINGTONA OPARTA O MASĘ SŁOŃCA
         */
        setElement.parts(id).on(events, function () {
            var M = getElement.input0(id);
            var Mo = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (1.26 * 10e31) * (M / Mo);
            result(roundVal, formula);
        });
    }
    function compute13(id) {
        /*
         GRANICA ROCHE'A
         */
        setElement.parts(id).on(events, function () {
            var M = getElement.input0(id);
            var p = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.pow((100 * M) / (9 * Math.PI * p) , 1/3);
            result(roundVal, formula);
        });
    }
    function compute14(id) {
        /*
         GRAWITACYJNE PRZESUNIĘCIE KU CZERWIENI CZARNEJ DZIURY
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var G = getElement.input1(id);
            var M = getElement.input2(id);
            var r = getElement.input3(id);
            var M_select = getElement.select0(id);
            var r_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var compute = Math.abs(1 - ((2 * G * (M * M_select)) / ((r * r_select) * Math.pow(c, 2))));
            var formula = Math.sqrt(compute);
            result(roundVal, formula);
        });
    } //todo (sprawdzi w console.logu zaokraglanie)
    function compute15(id) {
        /*
         JASNOŚĆ ZMIENNEJ CEFEIDANEJ
         */
        setElement.parts(id).on(events, function () {
            var Pd = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 1.15 * log10(Pd) +2.46;
            result(roundVal, formula);
        });
    }
    function compute16(id) {
        /*
         MASA CHANDRASEKHARA
         */
        setElement.parts(id).on(events, function () {
            var Mo = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 1.46 * Mo;
            result(roundVal, formula);
        });
    }
    function compute17(id) {
        /*
         MASA JEANSA
         */
        setElement.parts(id).on(events, function () {
            var p = getElement.input0(id);
            var Aj = getElement.input1(id);
            var roundVal = getElement.select0(id);

            var formula = (Math.PI / 6) * p * Math.pow(Aj, 3);
            result(roundVal, formula);
        });
    }
    function compute18(id) {
        /*
         PARAMETR HUBBLE'A W PRZESUNIĘCIU KU CZERWIENI
         */
        setElement.parts(id).on(events, function () {
            var Ho = getElement.input0(id);
            var z = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Ho * Math.pow((1 + z), 3/2);
            result(roundVal, formula);
        });
    } //todo (wynik prawie dobry, tofixed sie pierdoli)
    function compute19(id) {
        /*
         PRAWO TITIUSA-BODE'A
         */
        setElement.parts(id).on(events, function () {
            var n = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (4 + 3 * Math.pow(2, n)) / 10;
            result(roundVal, formula);
        });
    }
    function compute20(id) {
        /*
         RĘDKOŚĆ RADIALNA/RECESYJNA
         LICZONA PRZY POMOCY PRAWA HUBBLE'A
         */
        setElement.parts(id).on(events, function () {
            var Ho = getElement.input0(id);
            var d = getElement.input1(id);
            var d_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = Ho * (d * d_select);
            result(roundVal, formula);
        });
    } //todo coś select się jebie
    function compute21(id) {
        /*
         PROMIEŃ KĄTOWY PIERŚCIENIA EINSTEINA
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var G = getElement.input1(id);
            var M = getElement.input2(id);
            var ds = getElement.input3(id);
            var d = getElement.input4(id);
            var M_select = getElement.select0(id);
            var ds_select = getElement.select1(id);
            var d_select = getElement.select2(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt((4 * G * (M * M_select) / Math.pow(c, 2)) * ((ds * ds_select) - (d * d_select)) / ((ds * ds_select) * (d * d_select)));
            result(roundVal, formula);
        });
    }
    function compute22(id) {
        /*
         PROMIEŃ SCHWARZSCHILDA CZARNEJ DZIURY
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var G = getElement.input1(id);
            var M = getElement.input2(id);
            var M_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);
            var formula = 2 * G * (M * M_select) / Math.pow(c, 2);
            result(roundVal, formula);
        });
    }
    function compute23(id) {
        /*
         PRZESUNIĘCIE KU CZERWIENI
         */
        setElement.parts(id).on(events, function () {
            var Aobs = getElement.input0(id);
            var Aem = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Aobs - Aem) / Aem;
            result(roundVal, formula);
        });
    }
    function compute24(id) {
        /*
         RÓWNANIE FRIEDMANNA
         */
        setElement.parts(id).on(events, function () {
            var G = getElement.input0(id);
            var c = getElement.input1(id);
            var A = getElement.input2(id);
            var R = getElement.input3(id);
            var k = getElement.input4(id);
            var p = getElement.input5(id);
            var roundVal = getElement.roundInput(id);

            var formula = ((8 * Math.PI / 3) * G * p * Math.pow(R, 2)) - (k * Math.pow(c, 2)) + ((A * Math.pow(R, 2)) / 3);
            result(roundVal, formula);
        });
    } //6 inputow
    function compute25(id) {
        /*
         RÓWNANIE FRIEDMANNA BAZOWANE NA CIŚNIENIU
         */
        setElement.parts(id).on(events, function () {
            var G = getElement.input0(id);
            var c = getElement.input1(id);
            var A = getElement.input2(id);
            var R = getElement.input3(id);
            var P = getElement.input4(id);
            var p = getElement.input5(id);
            var roundVal = getElement.roundInput(id);

            var formula = ((-4) * Math.PI / 3) * (G * R) * (p + (3 * P / Math.pow(c, 2))) + (A * Math.pow(R, 2) / 3);
            result(roundVal, formula);
        });
    } //todo (wynik cos sie pierdoli ~1.0 mniej)
    function compute26(id) {
        /*
         SKALA CZASOWA KELVIN'A HELMHOLTZ'A
         LICZONA PRZY POMOCY MASY CIAŁA
         */
        setElement.parts(id).on(events, function () {
            var G  = getElement.input0(id);
            var M  = getElement.input1(id);
            var Ro = getElement.input2(id);
            var L  = getElement.input3(id);
            var M_select = getElement.select0(id);
            var Ro_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (G * Math.pow((M * M_select), 2)) / ((Ro * Ro_select) * L);
            result(roundVal, formula)
        });
    }
    function compute27(id) {
        /*
         SKALA CZASOWA KELVIN'A HELMHOLTZ'A
         LICZONA PRZY POMOCY ENERGII POTENCJALNEJ GRAWITACJI
         */
        setElement.parts(id).on(events, function () {
            var Ug = getElement.input0(id);
            var L = getElement.input1(id);
            var roundVal = getElement.roundInput(id);
console.log('??');
            var formula = -Ug / L;
            result(roundVal, formula);
        });
    }
    function compute28(id) {
        /*
         TEMPERATURA CZARNEJ DZIURY
         */
        setElement.parts(id).on(events, function () {
            var h = getElement.input0(id);
            var k = getElement.input1(id);
            var c = getElement.input2(id);
            var G = getElement.input3(id);
            var M = getElement.input4(id);
            var M_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);
                console.log(id);
            var formula = (h / 2 * Math.PI) * Math.pow(c, 3) / (8 * Math.PI * G * (M * M_select)* k);
            result(roundVal, formula);
        });
    } //todo niedziala ostatnia funkcja

    window.physics_advanced_functions = function(id){
        var physics_advanced_functions_array = [compute0, compute1, compute2, compute3, compute4, compute5, compute6, compute7, compute8, compute9, compute10,
            compute11, compute12, compute13, compute14, compute15, compute16, compute17, compute18, compute19, compute20, compute21, compute22, compute23,
            compute24, compute25, compute26, compute27, compute28];
        return physics_advanced_functions_array[id](id);
    }
});