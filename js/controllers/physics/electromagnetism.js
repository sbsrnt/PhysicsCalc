"use strict";
$(document).ready(function() {
    var events = components.events;

    function compute0(id) {
        /*
         * ANTENA DIPOLOWA - NATĘŻENIE PRĄDU
         */
        setElement.parts(id).on(events, function () {
            var L = getElement.input0(id);
            var A = getElement.input1(id);
            var z = getElement.input2(id);
            var B = 2 * Math.PI / A;
            var roundVal = getElement.roundInput(id);
            var formula = Math.sin(B * (L - Math.abs(z)));
            result(roundVal, formula);
        });
    } //todo w quantity.js usunąć 1 inputa
    function compute1(id) {
        /*
         * ANTENA DIPOLOWA - FALA ELEKTRYCZNA
         */
        setElement.parts(id).on(events, function () {
            var Im = getElement.input0(id);
            var L = getElement.input1(id);
            var A = getElement.input2(id);
            var r = getElement.input3(id);
            var O = getElement.input4(id);
            var B = 2 * Math.PI / A;
            var roundVal = getElement.roundInput(id);
            var formula = (60 * Im / r) * ((Math.cos(toRadians(B * L * Math.cos(toRadians(O)))) - Math.cos(toRadians(B * L))) / Math.sin(toRadians(O)));
            result(roundVal, formula);
        });
    } //todo wynik?
    function compute2(id) {
        /*
         * ANTENA DIPOLOWA - FALA MAGNETYCZNA
         */
        setElement.parts(id).on(events, function () {
            var Im = getElement.input0(id);
            var L = getElement.input1(id);
            var A = getElement.input2(id);
            var r = getElement.input3(id);
            var O = getElement.input4(id);
            var B = 2 * Math.PI / A;
            var roundVal = getElement.roundInput(id);
            var formula = (Im / 2 * Math.PI * r) * ((Math.cos(toRadians(B * L * Math.cos(toRadians(O)))) - Math.cos(toRadians(B * L))) / Math.sin(toRadians(O)));
            result(roundVal, formula);
        });
    } //todo wynik?
    function compute3(id) {
        /*
         * ANTENA DIPOLOWA - ŚREDNIA GĘSTOŚĆ EMITOWANEJ MOCY
         */
        setElement.parts(id).on(events, function () {
            var Im = getElement.input0(id);
            var L = getElement.input1(id);
            var A = getElement.input2(id);
            var r = getElement.input3(id);
            var O = getElement.input4(id);
            var B = 2 * Math.PI / A;
            var roundVal = getElement.roundInput(id);
            var formula = (15 * Math.pow(Im, 2) / Math.PI * Math.pow(r, 2)) * Math.pow(((Math.cos(toRadians(B * L * Math.cos(toRadians(O)))) - Math.cos(toRadians(B * L))) / Math.sin(toRadians(O))), 2);
            result(roundVal, formula);
        });
    } //todo wynik?
    function compute4(id) {
        /*
         * APERTURA ANTENY DLA PIERWSZEGO KĄTA WSPÓŁRZĘDNYCH
         */
        setElement.parts(id).on(events, function () {
            var Eo = getElement.input0(id);
            var j = getElement.input1(id);
            var J1 = getElement.input2(id);
            var A = getElement.input3(id);
            var a = getElement.input4(id);
            var r = getElement.input5(id);
            var O = getElement.input6(id);
            var u = getElement.input7(id);
            var k = 2 * Math.PI / A;
            var roundVal = getElement.roundInput(id);

            var formula = ((j * k * Math.pow(a, 2) * Eo * Math.pow(Math.E, -j * k * r)) / r) * Math.sin(u) * (J1 * k * a * Math.sin(O) / k * a * Math.sin(O));
            result(roundVal, formula);
        });
    } //todo wynik?
    function compute5(id) {
        /*
         * APERTURA ANTENY DLA DRUGIEGO  KĄTA WSPÓŁRZĘDNYCH
         */
        setElement.parts(id).on(events, function () {
            var Eo = getElement.input0(id);
            var j = getElement.input1(id);
            var J1 = getElement.input2(id);
            var A = getElement.input3(id);
            var a = getElement.input4(id);
            var r = getElement.input5(id);
            var O = getElement.input6(id);
            var u = getElement.input7(id);
            var k = 2 * Math.PI / A;
            var roundVal = getElement.roundInput(id);

            var formula = ((j * k * Math.pow(a, 2) * Eo * Math.pow(Math.E, -j * k * r)) / r) * (Math.cos(toRadians(O)) * Math.cos(toRadians(u))) * (J1 * k * a * Math.sin(toRadians(O)) / k * a * Math.sin(toRadians(O)));
            result(roundVal, formula);
        });
    }
    function compute6(id) {
        /*
         * CAŁKOWITA MOC PROMIENIOWANIA Z OSCYLUJĄCEGO DIPOLA
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var c = getElement.input1(id);
            var w = getElement.input2(id);
            var po = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Math.pow(w, 4) * (Math.pow(po, 2) / 2)) / (6 * Math.PI * eo * Math.pow(c, 3));
            result(roundVal, formula);
        });
    }
    function compute7(id) {
        /*
         * CZAS RELAKSACJI ELEKTRONU W PLAŹMIE
         */
        setElement.parts(id).on(events, function () {
            var Te = getElement.input0(id);
            var ne = getElement.input1(id);
            var A = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = 3.44 * Math.pow(10, 5) * (Math.pow(Te, 3/2)) / (ne * Math.log(A));
            result(roundVal, formula);
        });
    } //todo wywalic ln ze zmiennej (usunać kolor) w formule,  "Logarytm" w last row
    function compute8(id) {
        /*
         * CZĘSTOTLIWOŚĆ FALOWA OBWODU PROSTOWNIKA
         */
        setElement.parts(id).on(events, function () {
            var Vmax = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 0.637 * Vmax;
            result(roundVal, formula);
        });
    }
    function compute9(id) {
        /*
         * CZĘSTOTLIWOŚĆ KĄTOWA CYKLOTRONU
         */
        setElement.parts(id).on(events, function () {
            var q = getElement.input0(id);
            var B = getElement.input1(id);
            var m = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = (q * B) / m;
            result(roundVal, formula);
        });
    }
    function compute10(id) {
        /*
         * CZĘSTOTLIWOŚĆ PLAZMY
         */
        setElement.parts(id).on(events, function () {
            var e = getElement.input0(id);
            var eo = getElement.input1(id);
            var me = getElement.input2(id);
            var ne = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(ne * Math.pow(e, 2) / (eo * me));
            result(roundVal, formula);
        });
    } //todo wynik, "czestotliwosc katowa cyklotronu -> plazmy i dodac Hz zamiast rad/s"
    function compute11(id) {
        /*
         * DŁUGOŚĆ ELEKTRONU DEBYE'A W PLAŹMIE
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var kB = getElement.input1(id);
            var e = getElement.input2(id);
            var Te = getElement.input3(id);
            var ne = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt((eo * kB * Te) / (ne * Math.pow(e, 2)));
            result(roundVal, formula);
        });
    }
    function compute12(id) {
        /*
         * DŁUGOŚĆ LANDAU'A W CIEPŁEJ PLAŹMIE
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var kB = getElement.input1(id);
            var e = getElement.input2(id);
            var Te = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.pow(e, 2) / (4 * Math.PI * eo * kB * Te);
            result(roundVal, formula);
        });
    } //todo domknąć <span>/<i> po kB
    function compute13(id) {
        /*
         * GĘSTOŚĆ ENERGII POLA ELEKTROMAGNETYCZNEGO
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var uo = getElement.input1(id);
            var E = getElement.input2(id);
            var B = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (1/2 * eo * Math.pow(E, 2)) + (1/2 * (Math.pow(B, 2) / uo));
            result(roundVal, formula);
        });
    }
    function compute14(id) {
        /*
         * GĘSTOŚĆ ENERGII W MEDIUM
         */
        setElement.parts(id).on(events, function () {
            var D = getElement.input0(id);
            var E = getElement.input1(id);
            var B = getElement.input2(id);
            var H = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = 1/2 * ((D * E) + (B * H));
            result(roundVal, formula);
        });
    }
    function compute15(id) {
        /*
         * GĘSTOŚĆ STRUMIENIA MAGNETYCZNEGO
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var H = getElement.input1(id);
            var M = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = uo * (H + M);
            result(roundVal, formula);
        });
    }
    function compute16(id) {
        /*
         * GŁĘBOKOŚĆ EFEKTU NASKÓRKOWOŚCI
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var f = getElement.input1(id);
            var p = getElement.input2(id);
            var ur = getElement.input3(id);
            var w = 2*Math.PI * f;
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt((2 * p) / (w * ur * uo));
            result(roundVal, formula);
        });
    } //todo dodać Hz do częstotliwości
    function compute17(id) {
        /*
         * IMPEDANCJA AKUSTYCZNA
         */
        setElement.parts(id).on(events, function () {
            var p = getElement.input0(id);
            var v = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = p * v;
            result(roundVal, formula);
        });
    }
    function compute18(id) {
        /*
         * IMPEDANCJA SERII AC
         */
        setElement.parts(id).on(events, function () {
            var R = getElement.input0(id);
            var XL = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(Math.pow(R, 2) + Math.pow(XL, 2));
            result(roundVal, formula);
        });
    }
    function compute19(id) {
        /*
         * INDUKCYJNOŚĆ
         */
        setElement.parts(id).on(events, function () {
            var N = getElement.input0(id);
            var u = getElement.input1(id);
            var A = getElement.input2(id);
            var I = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Math.pow(N, 2) * u * A) / I;
            result(roundVal, formula);
        });
    }
    function compute20(id) {
        /*
         * INDUKCYJNOŚĆ CAŁKOWITA RÓWNOLEGŁEGO OBWODU ELEKTRYCZNEGO
         */
        setElement.parts(id).on(events, function () {
            var L1 = getElement.input0(id);
            var L2 = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (L1 * L2) / (L1 + L2);
            result(roundVal, formula);
        });
    }
    function compute21(id) {
        /*
         * INDUKCYJNOŚĆ DRUTU
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var a = getElement.input1(id);
            var b = getElement.input2(id);
            var a_select = getElement.select0(id);
            var b_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = uo * (b * b_select) * (Math.log(8 * (b * b_select) / (a * a_select)) - 2);
            result(roundVal, formula);
        });
    }
    function compute22(id) {
        /*
         * INDUKCYJNOŚĆ DWÓCH RÓWNOLEGŁYCH PRZEWODÓW
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var a = getElement.input1(id);
            var b = getElement.input2(id);
            var a_select = getElement.select0(id);
            var b_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = uo * (b * b_select) * (Math.log(8 * (b * b_select) / (a * a_select)) - 2);
            result(roundVal, formula);
        });
    }
    function compute23(id) {
        /*
         * INDUKCYJNOŚĆ RUR KONCENTRYCZNYCH CYLINDRYCZNYCH
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var a = getElement.input1(id);
            var b = getElement.input2(id);
            var a_select = getElement.select0(id);
            var b_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = uo / 2 * Math.PI * (Math.log((b * b_select) / (a * a_select)));
            result(roundVal, formula);
        });
    } //todo wynik?
    function compute24(id) {
        /*
         * INDUKCYJNOŚĆ SOLENOIDU (CEWKI) SKIEROWANEGO NA PÓŁNOC
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var N = getElement.input1(id);
            var A = getElement.input2(id);
            var I = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Math.pow(N, 2) * uo * A) / I;
            result(roundVal, formula);
        });
    }
    function compute25(id) {
        /*
         * INDUKCYJNOŚĆ SPIRALNEJ CEWKI
         */
        setElement.parts(id).on(events, function () {
            var N = getElement.input0(id);
            var r = getElement.input1(id);
            var d = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Math.pow(r, 2) * Math.pow(N, 2)) / ((2 * r + 2.8 * d) * Math.pow(10, 5));
            result(roundVal, formula);
        });
    }
    function compute26(id) {
        /*
         * KĄT AKCEPTACJI ŚWIATŁOWODU
         */
        setElement.parts(id).on(events, function () {
            var no = getElement.input0(id);
            var nf = getElement.input1(id);
            var np = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = 1 / Math.sin((1 / no) * Math.sqrt(Math.pow(nf, 2) - Math.pow(np, 2)));
            result(roundVal, formula);
        });
    }
    function compute27(id) {
        /*
         * KĄT STOŻKA CHERENKOVA
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var n = getElement.input1(id);
            var v = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = 1 / Math.sin(c / n * v);
            result(roundVal, formula);
        });
    } //todo quantitie.js dodac c w formule
    function compute28(id) {
        /*
         * KONDENSATOR CYLINDRYCZNY - POJEMNOŚĆ
         */
        setElement.parts(id).on(events, function () {
            var e = getElement.input0(id);
            var L = getElement.input1(id);
            var b = getElement.input2(id);
            var a = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (2 * Math.PI * e * L) / Math.log(b / a);
            result(roundVal, formula);
        });
    }
    function compute29(id) {
        /*
         * KĄT STOŻKA CHERENKOVA
         */
        setElement.parts(id).on(events, function () {
            var ro = getElement.input0(id);
            var h1 = getElement.input1(id);
            var h2 = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(2 * h1 * ro + Math.pow(h1, 2)) + Math.sqrt(2 * h2  * ro + Math.pow(h2, 2));
            result(roundVal, formula);
        });
    }
    function compute30(id) {
        /*
         * MAGAZYNOWANIE ENERGII
         */
        setElement.parts(id).on(events, function () {
            var Q = getElement.input0(id);
            var V = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Q * V) / 2;
            result(roundVal, formula);
        });
    }
    function compute31(id) {
        /*
         * MIERZENIE EFEKTYWNEJ APERTURY
         */
        setElement.parts(id).on(events, function () {
            var A = getElement.input0(id);
            var Gr = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Gr * Math.pow(A, 2)) / (4 * Math.PI);
            result(roundVal, formula);
        });
    }
    function compute32(id) {
        /*
         * MOMENT DIAMAGNETYCZNY ATOMU
         */
        setElement.parts(id).on(events, function () {
            var e = getElement.input0(id);
            var me = getElement.input1(id);
            var z = getElement.input2(id);
            var r = getElement.input3(id);
            var B = getElement.input4(id);

            var roundVal = getElement.roundInput(id);
            var formula = Math.pow(e, 2) / (6 * me) * (z * Math.pow(r, 2)) * B;
            result(roundVal, formula);
        });
    }
    function compute33(id) {
        /*
         * OBSZAR CEWKI CYLINDRYCZNEJ
         */
        setElement.parts(id).on(events, function () {
            var N = getElement.input0(id);
            var u = getElement.input1(id);
            var o = getElement.input2(id);
            var A = getElement.input3(id);
            var A_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = ((A * A_select) * o) / (Math.pow(N, 2) * u);
            result(roundVal, formula);
        });
    }
    function compute34(id) {
        /*
         * PARAMETR PLAZMOWY SFERY DEBYE'A
         */
        setElement.parts(id).on(events, function () {
            var ne = getElement.input0(id);
            var ADe = getElement.input1(id);
            var ADe_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula =(4/3) * Math.PI * ne * Math.pow((ADe * ADe_select), 3);
            result(roundVal, formula);
        });
    }
    function compute35(id) {
        /*
         * PERYCENTRUM RUCHU ORBITY W POLU GRAWITACYJNYM
         */
        setElement.parts(id).on(events, function () {
            var a = getElement.input0(id);
            var e = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = a * (1 - e);
            result(roundVal, formula);
        });
    }
    function compute36(id) {
        /*
         * PODATNOŚĆ MAGNETYCZNA
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var k = getElement.input1(id);
            var n = getElement.input2(id);
            var mo = getElement.input3(id);
            var T = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = uo * n * Math.pow(mo, 2) / 3 * k * T;
            result(roundVal, formula);
        });
    }
    function compute37(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA
         */
        setElement.parts(id).on(events, function () {
            var Q = getElement.input0(id);
            var V = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Q / V;
            result(roundVal, formula);
        });
    }
    function compute38(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA DWÓCH KUL
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var er = getElement.input1(id);
            var a = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = 8 * Math.PI * eo * er * a * Math.log(2);
            result(roundVal, formula);
        });
    }
    function compute39(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA OKRĄGŁEGO CYLINDRA
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var er = getElement.input1(id);
            var a = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = 4 * Math.PI * eo * er * a;
            result(roundVal, formula);
        });
    }
    function compute40(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA POMIĘDZY DWOMA KONCENTRYCZNYMI CYLINDRAMI
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var er = getElement.input1(id);
            var a = getElement.input2(id);
            var b = getElement.input3(id);
            var a_select = getElement.select0(id);
            var b_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (2 * Math.PI * eo * er) / Math.log((b * b_select) / (a * a_select));
            result(roundVal, formula);
        });
    }
    function compute41(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA POMIĘDZY DWOMA KONCENTRYCZNYMI KULAMI
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var er = getElement.input1(id);
            var a = getElement.input2(id);
            var b = getElement.input3(id);
            var a_select = getElement.select0(id);
            var b_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = 4 * Math.PI * eo * er * (a * a_select) * (b * b_select) * (1 / ((b * b_select) - (a * a_select)));
            result(roundVal, formula);
        });
    }
    function compute42(id) {
        /*
         *         POJEMNOŚĆ ELEKTRYCZNA POMIĘDZY
         * RÓWNOLEGŁYMI I KONCENTRYCZNYMI DYSKAMI TARCZOWYMI
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var er = getElement.input1(id);
            var a = getElement.input2(id);
            var d = getElement.input3(id);
            var a_select = getElement.select0(id);
            var d_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula =(eo * er * Math.PI * Math.pow((a * a_select), 2) / (d - d_select)) + eo * er * (a * a_select) * (Math.log((16 * Math.PI * (a * a_select)) / (d * d_select)) - 1);
            result(roundVal, formula);
        });
    } //todo wynik
    function compute43(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA POMIĘDZY DWOMA RÓWNOLEGŁYMI CYLINDRAMI
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var l = getElement.input1(id);
            var r = getElement.input2(id);
            var d = getElement.input3(id);
            var l_select = getElement.select0(id);
            var r_select = getElement.select1(id);
            var d_select = getElement.select2(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.PI * eo * (l * l_select) / (1 / Math.cosh((d * d_select) / 2 * (r * r_select)));
            result(roundVal, formula);
        });
    } //todo F na C/V w rezultacie
    function compute44(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA POWIERZCHNI PRAWIE SFERYCZNEJ
         */
        setElement.parts(id).on(events, function () {
            var er = getElement.input0(id);
            var S = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = 3.139 * 10e-11 * er * Math.sqrt(S) * 0.1;
            result(roundVal, formula);
        });
    }
    function compute45(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA SFERYCZNEGO KONDENSATORA
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var er = getElement.input1(id);
            var a = getElement.input2(id);
            var a_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 8 * eo * er * (a * a_select);
            result(roundVal, formula);
        });
    }
    function compute46(id) {
        /*
         * POJEMNOŚĆ ELEKTRYCZNA SZEŚCIANU
         */
        setElement.parts(id).on(events, function () {
            var er = getElement.input0(id);
            var a = getElement.input1(id);
            var a_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 7.283 * 10e-11 * er * (a * a_select);
            result(roundVal, formula);
        });
    }
    function compute47(id) {
        /*
         * POJEMNOŚĆ RÓWNOLEGŁYCH PŁYT KONDENSATORA
         */
        setElement.parts(id).on(events, function () {
            var e = getElement.input0(id);
            var A = getElement.input1(id);
            var s = getElement.input2(id);
            var A_select = getElement.select0(id);
            var s_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (e * (A * A_select)) / (s * s_select);
            result(roundVal, formula);
        });
    }
    function compute48(id) {
        /*
         * POLE DEPOLARYZACJI
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var Nd = getElement.input1(id);
            var P = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = -((Nd * P ) / eo);
            result(roundVal, formula);
        });
    }
    function compute49(id) {
        /*
         * POLE ELEKTRYCZNE NA PUNKT ŁADOWANIA
         */
        setElement.parts(id).on(events, function () {
            var P = getElement.input0(id);
            var F = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = P * F;
            result(roundVal, formula);
        });
    }
    function compute50(id) {
        /*
         * POLE ELEKTRYCZNE DIPOLA W OKREŚLONYM PUNKCIE
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var p = getElement.input1(id);
            var o = getElement.input2(id);
            var r = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (p * Math.cos(toRadians(o))) / (2 * Math.PI * eo * Math.pow(r, 3));
            result(roundVal, formula);
        });
    }
    function compute51(id) {
        /*
         * POLE ELEKTRYCZNE DIPOLA WE WSPÓŁRZĘDNYCH BIEGUNOWYCH
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var p = getElement.input1(id);
            var o = getElement.input2(id);
            var r = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (p * Math.sin(toRadians(o))) / (4 * Math.PI * eo * Math.pow(r, 3));
            result(roundVal, formula);
        });
    }
    function compute52(id) {
        /*
         * POLE ELEKTRYCZNE NAŁADOWANEJ LINII
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var p = getElement.input1(id);
            var r = getElement.input2(id);
            var r_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (p * (2 * Math.PI * eo * Math.pow((r * r_select), 2))) * (r * r_select);
            result(roundVal, formula);
        });
    }
    function compute53(id) {
        /*
         * PPOLE ELEKTRYCZNE NAŁADOWANEJ POWIERZCHNI
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var p = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = p / (2 * eo);
            result(roundVal, formula);
        });
    }
    function compute54(id) {
        /*
         * POLE ELEKTRYCZNE NAŁADOWANEJ RÓWNOMIERNIE KULI
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var q = getElement.input1(id);
            var a = getElement.input2(id);
            var r = getElement.input3(id);
            var a_select = getElement.select0(id);
            var r_select = getElement.select1(id);
            var roundVal = getElement.roundInput(id);

            var formula = (q / (4 * Math.PI * eo * Math.pow((a * a_select), 3))) * (r * r_select);
            result(roundVal, formula);
        });
    }
    function compute55(id) {
        /*
         * POLE ELEKTRYCZNE NAŁADOWANEJ RÓWNOMIERNIE KULI GAUSSA
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var q = getElement.input1(id);
            var r = getElement.input2(id);
            var r_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = q / (4 * Math.PI * eo * Math.pow((r * r_select), 2));
            result(roundVal, formula);
        });
    }
    function compute56(id) {
        /*
         * POLE ELEKTRYCZNE NAŁADOWANEJ RÓWNOMIERNIE OSI DYSKU
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var q = getElement.input1(id);
            var r = getElement.input2(id);
            var z = getElement.input3(id);
            var r_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (q / (2 * Math.PI * eo * Math.pow((r * r_select), 2))) * z * ((1 / Math.abs(z)) - (1 / Math.sqrt(Math.pow(z, 2) + +(Math.pow((r * r_select), 2)))));
            result(roundVal, formula);
        });
    } //todo wynik
    function compute57(id) {
        /*
         * POLE MAGNETYCZNE DIPOLA MAGNETYCZNEGO BAZOWANEGO NA KĄCIE
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var m = getElement.input1(id);
            var O = getElement.input2(id);
            var r = getElement.input3(id);
            var r_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (uo * m * Math.sin(toRadians(O))) / (4 * Math.PI * Math.pow((r * r_select), 3));
            result(roundVal, formula);
        });
    }
    function compute58(id) {
        /*
         * POLE MAGNETYCZNE DIPOLA MAGNETYCZNEGO BAZOWANEGO NA PROMIENIU
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var m = getElement.input1(id);
            var O = getElement.input2(id);
            var r = getElement.input3(id);
            var r_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = uo * (m * Math.cos(toRadians(O))) / (2 * Math.PI * Math.pow((r * r_select), 3));
            result(roundVal, formula);
        });
    }
    function compute59(id) {
        /*
         * POLE MAGNETYCZNE SOLENOIDU (CEWKI) BAZOWANEGO NA OSI
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var n = getElement.input1(id);
            var I = getElement.input2(id);
            var x = getElement.input3(id);
            var y = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = ((uo * n * I) / 2) * (Math.cos(toRadians(x)) - Math.cos(toRadians(y)));
            result(roundVal, formula);
        });
    }
    function compute60(id) {
        /*
         *      POTENCJAŁ ELEKTRYCZNY RUCHOMEGO PUNKTU
         * LICZONEGO PRZY POMOCY POTENCJAŁU LIENARDA-WIECHERTA
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var c = getElement.input1(id);
            var r = getElement.input2(id);
            var q = getElement.input3(id);
            var v = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = q / ((4 * Math.PI * eo) * (Math.abs(r) - (v * r / c)));
            result(roundVal, formula);
        });
    }
    function compute61(id) {
        /*
         * POTENCJAŁ SKUTECZNOŚCI EKRANOWANIA DEBYE'A
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var q = getElement.input1(id);
            var r = getElement.input2(id);
            var ADe = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (q * Math.exp(-Math.sqrt(2) * (r / ADe))) / (4 * Math.PI * eo * r);
            result(roundVal, formula);
        });
    }
    function compute62(id) {
        /*
         * PRĘDKOŚĆ ALFVENA
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var B = getElement.input1(id);
            var p = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = B / Math.sqrt(eo * p);
            result(roundVal, formula);
        });
    }
    function compute63(id) {
        /*
         * PRĘDKOŚĆ FAZOWA/GRUPOWA W PLAŹMIE
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var n = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula =c / n;
            result(roundVal, formula);
        });
    }
    function compute64(id) {
        /*
         * PRĘDKOŚĆ TERMICZNA ELEKTRONU W PLAŹMIE
         */
        setElement.parts(id).on(events, function () {
            var kB = getElement.input0(id);
            var me = getElement.input1(id);
            var Te = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt((2 * kB * Te) / me);
            result(roundVal, formula);
        });
    }
    function compute65(id) {
        /*
         * PROMIEŃ CYKLOTRONU LICZONY PRZY POMOCY PROCESJI LARMORA
         */
        setElement.parts(id).on(events, function () {
            var v = getElement.input0(id);
            var w = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = v / w;
            result(roundVal, formula);
        });
    }
    function compute66(id) {
        /*
         * PRYZMAT MINIMALNEGO KĄTA ODCHYLENIA
         */
        setElement.parts(id).on(events, function () {
            var Oi = getElement.input0(id);
            var Ot = getElement.input1(id);
            var a = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = Oi + +(Ot) - a;
            result(roundVal, formula);
        });
    }
    function compute67(id) {
        /*
         * PRZEWODNICTWO ELEKTRYCZNE W PRZESTRZENI PLAZMY
         */
        setElement.parts(id).on(events, function () {
            var e = getElement.input0(id);
            var B = getElement.input1(id);
            var ne = getElement.input2(id);
            var o = getElement.input3(id);
            var od = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = ((o * B) / (ne * e)) * od;
            result(roundVal, formula);
        });
    }
    function compute68(id) {
        /*
         * REAKTANCJA INDUKCYJNA
         */
        setElement.parts(id).on(events, function () {
            var f = getElement.input0(id);
            var L = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = 2 * Math.PI * f * L;
            result(roundVal, formula);
        });
    }
    function compute69(id) {
        /*
         * REAKTANCJA POJEMNOŚCIOWA
         */
        setElement.parts(id).on(events, function () {
            var f = getElement.input0(id);
            var L = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = 1 / (2 * Math.PI * f * L);
            result(roundVal, formula);
        });
    } //todo poprawić w formule XC na XL i c na L
    function compute70(id) {
        /*
         * REZONANS RÓWNOLEGŁY W OBWODZIE LC
         */
        setElement.parts(id).on(events, function () {
            var C = getElement.input0(id);
            var L = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = 1 / (2 * Math.PI * Math.sqrt(L * C));
            result(roundVal, formula);
        });
    } //todo poprawić w formule XC na f
    function compute71(id) {
        /*
         * SIŁA ELEKTROMAGNETYCZNA LICZONA PRZY POMOCY PRAWA LORENTZA
         */
        setElement.parts(id).on(events, function () {
            var E = getElement.input0(id);
            var B = getElement.input1(id);
            var v = getElement.input2(id);
            var q = getElement.input3(id);
            var roundVal = getElement.roundInput(id);


            var formula = q * (+(E) + (v * B));
            console.log(+formula);
            result(roundVal, formula);
        });
    }
    function compute72(id) {
        /*
         * SIŁA POLA MAGNETYCZNEGO
         */
        setElement.parts(id).on(events, function () {
            var B = getElement.input0(id);
            var v = getElement.input1(id);
            var q = getElement.input2(id);
            var O = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = q * v * B * Math.sin(toRadians(O));
            result(roundVal, formula);
        });
    }
    function compute73(id) {
        /*
         *      STRATY PRZESYŁOWE POMIĘDZY DWOMA ANTENAMI
         * LICZONE PRZY POMOCY RÓWNANIA STRAT PRZESYŁOWYCH FRIISA
         */
        setElement.parts(id).on(events, function () {
            var GT = getElement.input0(id);
            var GR = getElement.input1(id);
            var d = getElement.input2(id);
            var A = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = 10 * Math.pow(Math.log(4 * Math.PI * d / A), 2) - GT - GR ;
            result(roundVal, formula);
        });
    }
    function compute74(id) {
        /*
         * SZEROKOŚĆ WIĄZKI ANTENY
         */
        setElement.parts(id).on(events, function () {
            var D = getElement.input0(id);
            var A = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = 70 * A / D;
            result(roundVal, formula);
        });
    }
    function compute75(id) {
        /*
         * SZYK ANTENOWY
         */
        setElement.parts(id).on(events, function () {
            var O = getElement.input0(id);
            var A = getElement.input1(id);
            var B = getElement.input2(id);
            var d = getElement.input3(id);
            var N = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var k = 2 * Math.PI / A;
            var u = k * d * Math.cos(toRadians(O)) + +(B);
            var formula = Math.sin(toRadians(N * u / 2)) / Math.sin(toRadians(u / 2));
            result(roundVal, formula);
        });
    } //todo wynik
    function compute76(id) {
        /*
         * ŚREDNIA GĘSTOŚĆ STRUMIENIA OSCYLACYJNEGO DIPOLA ELEKTRYCZNEGO
         */
        setElement.parts(id).on(events, function () {
            var eo = getElement.input0(id);
            var c = getElement.input1(id);
            var w = getElement.input2(id);
            var po = getElement.input3(id);
            var O = getElement.input4(id);
            var r = getElement.input5(id);
            var v = getElement.input6(id);
            var roundVal = getElement.roundInput(id);

            var formula = ((Math.pow(w, 4) * Math.pow(po, 2) * Math.pow(Math.sin(toRadians(O)), 2)) / (32 * Math.pow(Math.PI, 2) * eo * Math.pow(c, 3) * Math.pow(r, 3))) * v;
            result(roundVal, formula);
        });
    }
    function compute77(id) {
        /*
         * WARTOŚĆ FINESSE LICZONA PRZY POMOCY WSPÓŁCZYNNIKA
         *     FINESSE INTERFEROMETRU FABRY'EGO-PEROTA
         */
        setElement.parts(id).on(events, function () {
            var F = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Math.PI / 2) * Math.sqrt(F);
            result(roundVal, formula);
        });
    }
    function compute78(id) {
        /*
         *   WARTOŚĆ FINESSE LICZONA PRZY POMOCY WSPÓŁCZYNNIKA
         * JAKOŚCI PROMIENIOWANIA INTERFEROMETRU FABRY'EGO-PEROTA
         */
        setElement.parts(id).on(events, function () {
            var Ao = getElement.input0(id);
            var n = getElement.input1(id);
            var h = getElement.input2(id);
            var Q = getElement.input3(id);
            var roundVal = getElement.roundInput(id);

            var formula = (Ao / n * h) * Q;
            result(roundVal, formula);
        });
    }
    function compute79(id) {
        /*
         * WARTOŚĆ INDUKCJI POLA MAGNETYCZNEGO LICZONA PRZY POMOCY PRAWA BIOTA-SAVARTA
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var O = getElement.input1(id);
            var v = getElement.input2(id);
            var r = getElement.input3(id);
            var Q = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = (uo / 4 * Math.PI) * (Q * v * Math.sin(toRadians(O)) / Math.pow(r, 2));
            result(roundVal, formula);
        });
    }
    function compute80(id) {
        /*
         *      WEKTOR MAGNETYCZNY  RUCHOMEGO PUNKTU
         * LICZONEGO PRZY POMOCY POTENCJAŁU LIENARDA-WIECHERTA
         */
        setElement.parts(id).on(events, function () {
            var uo = getElement.input0(id);
            var c = getElement.input1(id);
            var r = getElement.input2(id);
            var q = getElement.input3(id);
            var v = getElement.input4(id);
            var roundVal = getElement.roundInput(id);

            var formula = (q * uo * v) / ((4 * Math.PI) * (Math.abs(r) - (v * r / c)));
            result(roundVal, formula);
        });
    }
    function compute81(id) {
        /*
         * WIELOMODOWA DYSPERSJA WŁÓKNA OPTYCZNEGO
         */
        setElement.parts(id).on(events, function () {
            var c = getElement.input0(id);
            var L = getElement.input1(id);
            var nf = getElement.input2(id);
            var nc = getElement.input3(id);
            var L_select = getElement.select0(id);
            var roundVal = getElement.roundInput(id);

            var formula = (L * L_select) * ((nf / c) * (nf / nc - 1));
            result(roundVal, formula);
        });
    }
    function compute82(id) {
        /*
         * WSPÓŁCZYNNIK FINESSE INTERFEROMETRA FABRY'EGO-PEROTA
         */
        setElement.parts(id).on(events, function () {
            var R = getElement.input0(id);
            var roundVal = getElement.roundInput(id);

            var formula = 4 * R / Math.pow((1 - R), 2);
            result(roundVal, formula);
        });
    }
    function compute83(id) {
        /*
         * WSPOŁCZYNNIK JAKOŚCI INDUKTORA
         */
        setElement.parts(id).on(events, function () {
            var f = getElement.input0(id);
            var L = getElement.input1(id);
            var R = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var w = 2 * Math.PI * f;
            var formula = w * L / R;
            result(roundVal, formula);
        });
    }
    function compute84(id) {
        /*
         * WSPÓŁCZYNNIK ZAŁAMANIA ŚWIATŁA W PLAŹMIE
         */
        setElement.parts(id).on(events, function () {
            var fp = getElement.input0(id);
            var f = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.sqrt(1 - (fp / Math.pow(f, 2)));
            result(roundVal, formula);
        });
    }
    function compute85(id) {
        /*
         * ZMAGAZYNOWANA ENERGIA POPRZEZ ŁADUNEK ELEKTRYCZNY
         */
        setElement.parts(id).on(events, function () {
            var C = getElement.input0(id);
            var Q = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = Math.pow(Q, 2) / 2 * C;
            result(roundVal, formula);
        });
    }
    function compute86(id) {
        /*
         * ZMAGAZYNOWANA ENERGIA POPRZEZ POPRZEZ RÓŻNICĘ POTENCJAŁÓW
         */
        setElement.parts(id).on(events, function () {
            var C = getElement.input0(id);
            var V = getElement.input1(id);
            var roundVal = getElement.roundInput(id);

            var formula = C * Math.pow(V, 2) / 2;
            result(roundVal, formula);
        });
    }
    function compute87(id) {
        /*
         * ZYSK ANTENY DBI
         */
        setElement.parts(id).on(events, function () {
            var n = getElement.input0(id);
            var A = getElement.input1(id);
            var a = getElement.input2(id);
            var roundVal = getElement.roundInput(id);

            var formula = 10 * log10(n * 4 * Math.PI * a / Math.pow(A, 2));
            result(roundVal, formula);
        });
    }

    function setId(id) {
        var previousNodeLength = $('.physics__electromagnetism').prevAll().find('ul li').length;
        var nodeLength = $('.physics__electromagnetism ul li').length;
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
    window.physics_electromagnetism_functions = function(id){
        var physics_physics_electromagnetism_functions_array = [compute0, compute1, compute2, compute3, compute4, compute5, compute6, compute7,
        compute8, compute9, compute10, compute11, compute12, compute13, compute14, compute15, compute16, compute17, compute18, compute19,
        compute20, compute21, compute22, compute23, compute24, compute25, compute26, compute27, compute28, compute29, compute30, compute31,
        compute32, compute33, compute34, compute35, compute36, compute37, compute38, compute39, compute40, compute41, compute42, compute43,
        compute44, compute45, compute46, compute47, compute48, compute49, compute50, compute51, compute52, compute53, compute54, compute55,
        compute56, compute57, compute58, compute59, compute60, compute61, compute62, compute63, compute64, compute65, compute66, compute67,
        compute68, compute69, compute70, compute71, compute72, compute73, compute74, compute75, compute76, compute77, compute78, compute79,
        compute80, compute81, compute82, compute83, compute84, compute85, compute86, compute87];
        return physics_physics_electromagnetism_functions_array[id-setId()](id);
    }
});