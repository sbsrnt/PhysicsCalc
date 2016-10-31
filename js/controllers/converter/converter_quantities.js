var converter_quantities = {
    "data": [
        {
            'name': 'Prefix',
            'properties': {
                'name': 'Values',
                'units': {
                    'Y': 10e24,
                    'Z': 10e21,
                    'E': 10e18,
                    'P': 10e15,
                    'T': 10e12,
                    'G': 10e9,
                    'M': 10e6,
                    'k': 10e3,
                    'h': 10e2,
                    'da': 10e1,
                    'none': 1,
                    'd': 10e-1,
                    'c': 10e-2,
                    'm': 10e-3,
                    'u': 10e-6,
                    'n': 10e-9,
                    'p': 10e-12,
                    'f': 10e-15,
                    'a': 10e-18,
                    'z': 10e-21,
                    'y': 10e-24
                }
            }
        },
        {
            'name': 'Pressure',
            'properties': [
                {
                    'name': 'Pascal',
                    'symbol': 'Pa',
                    'units': {
                        'Pa': 1,
                        'bar': 1e-5,
                        'at': 1.0197e-5,
                        'atm': 9.8692e-6,
                        'Tr': 7.5006e-3,
                        'psi': 1.450377e-4
                    }
                },
                {
                    'name': 'Bar',
                    'symbol': 'bar',
                    'units': {
                        'Pa': 1e5,
                        'bar': 1,
                        'at': 1.0197,
                        'atm': 0.98692,
                        'Tr': 750.06,
                        'psi': 14.50377
                    }
                },
                {
                    'name': 'Technical atmosphere',
                    'symbol': 'at',
                    'units': {
                        'Pa': 9.80665e4,
                        'bar': 0.980665,
                        'at': 1,
                        'atm': 0.9678411,
                        'Tr': 735.5592,
                        'psi': 14.22334
                    }
                },
                {
                    'name': 'Standard atmosphere',
                    'symbol': 'atm',
                    'units': {
                        'Pa': 1.01325e5,
                        'bar': 1.01325,
                        'at': 1.0332,
                        'atm': 1,
                        'Tr': 760,
                        'psi': 14.69595
                    }
                },
                {
                    'name': 'Torr',
                    'symbol': 'Tr',
                    'units': {
                        'Pa': 133.3224,
                        'bar': 1.333224e-3,
                        'at': 1.359551e-3,
                        'atm': 1.315789e-3,
                        'Tr': 1,
                        'psi': 1.933678e-2
                    }
                },
                {
                    'name': 'Pounds per square inch',
                    'symbol': 'psi',
                    'units': {
                        'Pa': 6.8948e3,
                        'bar': 6.8948e-2,
                        'at': 7.03069e-2,
                        'atm': 6.8046e-2,
                        'Tr': 51.71493,
                        'psi': 1
                    }
                }
            ]
        },
        {
            'name': 'Time',
            'properties': [
                {
                    'name': 'Second',
                    'symbol': 's',
                    'units': {
                        's': 1,
                        'min': 0.0166666667,
                        'h': 0.000277777778
                    }
                },
                {
                    'name': 'Minute',
                    'symbol': 'min',
                    'units': {
                        's': 60,
                        'min': 1,
                        'h': 0.0166666667
                    }
                },
                {
                    'name': 'Hour',
                    'symbol': 'h',
                    'units': {
                        's': 3600,
                        'min': 60,
                        'h': 1
                    }
                }
            ]
        },
        {
            'name': 'Length',
            'properties': [
                {
                    'name': 'Meter',
                    'symbol': 'm',
                    'units': {
                        'm': 1,
                        'au': 6.6844919786096E-12,
                        'A': 1.0e9,
                        'in': 39.370078740157,
                        'ft': 3.2808398950131,
                        'yd': 1.0936132983377,
                        'mi': 0.00062137119223733,
                        'nm': 0.00053995680345572,
                        'ly': 1.0570265842186E-16
                    }
                },
                {
                    'name': 'Astronomical unit',
                    'symbol': 'au',
                    'units': {
                        'm': 149597870700,
                        'au': 1,
                        'A': 0.00027777777777778,
                        'in': 5.88967995e12,
                        'ft': 4.90806662e11,
                        'yd': 1.63602221e11,
                        'mi': 92955807.3,
                        'nm': 80776388.1,
                        'ly': 1.58128451e-5
                    }
                },
                {
                    'name': 'Angstrom',
                    'symbol': 'Å',
                    'units': {
                        'm': 1.0e-10,
                        'au': 6.6844919786096e-22,
                        'A': 1,
                        'in': 3.9370078740157e-9,
                        'ft': 3.2808398950131e-10,
                        'yd': 1.0936132983377e-10,
                        'mi': 6.2137119223733e-14,
                        'nm': 5.3995680345572e-14,
                        'ly': 1.0570265842186e-26
                    }
                },
                {
                    'name': 'Inch',
                    'symbol': 'in',
                    'units': {
                        'm': 0.0254,
                        'au': 1.69788513e-13,
                        'A': 254000000,
                        'in': 1,
                        'ft': 0.0833333333,
                        'yd': 0.0277777778,
                        'mi': 1.57828283e-5,
                        'nm': 1.37149028e-5,
                        'ly': 2.68483946e-18
                    }
                },
                {
                    'name': 'Foot',
                    'symbol': 'ft',
                    'units': {
                        'm': 0.3048,
                        'au': 2.03746215e-12,
                        'A': 3048000000,
                        'in': 12,
                        'ft': 1,
                        'yd': 0.333333333,
                        'mi': 0.000189393939,
                        'nm': 0.000164578834,
                        'ly': 3.22180736-17
                    }
                },
                {
                    'name': 'Yard',
                    'symbol': 'yd',
                    'units': {
                        'm': 0.9144,
                        'au': 6.11238646e-12,
                        'A': 9144000000,
                        'in': 36,
                        'ft': 3,
                        'yd': 1,
                        'mi': 0.000568181818,
                        'nm': 0.000493736501,
                        'ly': 9.66542207e-17
                    }
                },
                {
                    'name': 'Mile',
                    'symbol': 'mi',
                    'units': {
                        'm': 1609.344,
                        'au': 1.07578002e-8,
                        'A': 16093440000000,
                        'in': 63360,
                        'ft': 5280,
                        'yd': 1760,
                        'mi': 1,
                        'nm': 0.868976242,
                        'ly': 1.70111428e-13
                    }
                },
                {
                    'name': 'Nautical mile',
                    'symbol': 'nm',
                    'units': {
                        'm': 1852,
                        'au': 1.23798554e-8,
                        'A': 18520000000000,
                        'in': 72913.3858,
                        'ft': 6076.11549,
                        'yd': 2025.37183,
                        'mi': 1.15077945,
                        'nm': 1,
                        'ly': 1.95760736e-13
                    }
                },
                {
                    'name': 'Light-year',
                    'symbol': 'ly',
                    'units': {
                        'm': 9.4605284e15,
                        'au': 63239.7263,
                        'A': 9.4605e+25,
                        'in': 3.72461748e17,
                        'ft': 3.1038479e16,
                        'yd': 1.03461597e16,
                        'mi': 5.87849981e12,
                        'nm': 5.10827668e12,
                        'ly': 1
                    }
                }
            ]
        },
        {
            'name': 'Energy',
            'properties': [
                {
                    'name': 'Joule',
                    'symbol': 'J',
                    'units': {
                        'J': 1,
                        'cal': 0.239005736,
                        'eV': 6.24150913e18,
                        'erg': 1.0e7,
                        'Wh': 0.000277777778
                    }
                },
                {
                    'name': 'Calorie',
                    'symbol': 'cal',
                    'units': {
                        'J': 4.18400,
                        'cal': 1,
                        'eV': 2.61144742e19,
                        'erg': 41840000,
                        'Wh': 0.00116222222
                    }
                },
                {
                    'name': 'Electron volt',
                    'symbol': 'eV',
                    'units': {
                        'J': 1.60217662e-19,
                        'cal': 3.82929403e-20,
                        'eV': 1,
                        'erg': 1.60217662e-12,
                        'Wh': 4.45049061e-23
                    }
                },
                {
                    'name': 'Ergon',
                    'symbol': 'erg',
                    'units': {
                        'J': 1e-7,
                        'cal': 2.39005736e-8,
                        'eV': 6.24150913e11,
                        'erg': 1,
                        'Wh': 2.77777778e-11
                    }
                },
                {
                    'name': 'Watt hour',
                    'symbol': 'Wh',
                    'units': {
                        'J': 3600,
                        'cal': 860.42065,
                        'eV': 2.24694329e22,
                        'erg': 36000000000,
                        'Wh': 1
                    }
                }
            ]
        },
        {
            'name': 'Mass',
            'properties': [
                {
                    'name': 'Gram',
                    'symbol': 'g',
                    'units': {
                        'g': 1,
                        't': 1.10231131e-6,
                        'lb': 0.00220462262,
                        'oz': 0.0352739619,
                        'ct': 5,
                        'u': 6.02214086e23
                    }
                },
                {
                    'name': 'Ton',
                    'symbol': 't',
                    'units': {
                        'g': 907184.74,
                        't': 1,
                        'lb': 2000,
                        'oz': 32000,
                        'ct': 4535923.7,
                        'u': 5.46319429e29
                    }
                },
                {
                    'name': 'Pound',
                    'symbol': 'lb',
                    'units': {
                        'g': 453.59237,
                        't': 0.0005,
                        'lb': 1,
                        'oz': 16,
                        'ct': 2267.96185,
                        'u': 2.73159714e26
                    }
                },
                {
                    'name': 'Ounce',
                    'symbol': 'oz',
                    'units': {
                        'g': 28.3495231,
                        't': 3.12500e-5,
                        'lb': 0.0625,
                        'oz': 1,
                        'ct': 141.747616,
                        'u': 1.70724821e25
                    }
                },
                {
                    'name': 'Carat',
                    'symbol': 'ct',
                    'units': {
                        'g': 0.2,
                        't': 2.20462262e-7,
                        'lb': 0.000440924524,
                        'oz': 0.00705479239,
                        'ct': 1,
                        'u': 1.20442817e23
                    }
                },
                {
                    'name': 'Atomic mass unit',
                    'symbol': 'u',
                    'units': {
                        'g': 1.66053904e-24,
                        't': 1.83043097e-30,
                        'lb': 3.66086193e-27,
                        'oz': 5.85737909e-26,
                        'ct': 8.3026952e-24,
                        'u': 1
                    }
                }
            ]
        },
        {
            'name': 'Volume',
            'properties': [
                {
                    'name': 'Cubic metre',
                    'symbol': 'cu m',
                    'units': {
                        'm3': 1,
                        'L': 1000,
                        'in3': 61023.7441,
                        'ft3': 35.3146667,
                        'yd3': 1.30795062
                    }
                },
                {
                    'name': 'Litre',
                    'symbol': 'L',
                    'units': {
                        'm3': 0.001,
                        'L': 1,
                        'in3': 61.0237441,
                        'ft3': 0.0353146667,
                        'yd3': 0.00130795062
                    }
                },
                {
                    'name': 'Cubic inch',
                    'symbol': 'cu in',
                    'units': {
                        'm3': 1.6387064e-5,
                        'L': 0.016387064,
                        'in3': 1,
                        'ft3': 0.000578703704,
                        'yd3': 2.14334705e-5
                    }
                },
                {
                    'name': 'Cubic foot',
                    'symbol': 'cu ft',
                    'units': {
                        'm3': 0.0283168466,
                        'L': 28.3168466,
                        'in3': 1728 ,
                        'ft3': 1,
                        'yd3': 0.037037037
                    }
                },
                {
                    'name': 'Cubic yard',
                    'symbol': 'cu yd',
                    'units': {
                        'm3': 0.764554858,
                        'L': 764.554858,
                        'in3': 46656,
                        'ft3': 27,
                        'yd3': 1
                    }
                }
            ]
        },
        {
            'name': 'Area',
            'properties': [
                {
                    'name': 'Square meter',
                    'symbol': 'sq m',
                    'units': {
                        'm2': 1,
                        'a': 0.01,
                        'ha': 0.0001,
                        'in2': 1550.0031,
                        'ft2': 10.7639104,
                        'yd2': 1.19599005
                    }
                },
                {
                    'name': 'Are',
                    'symbol': 'a',
                    'units': {
                        'm2': 100,
                        'a': 1,
                        'ha': 0.01,
                        'in2': 155000.31,
                        'ft2': 1076.39104,
                        'yd2': 119.599005
                    }
                },
                {
                    'name': 'Hectare',
                    'symbol': 'ha',
                    'units': {
                        'm2': 10000,
                        'a': 100,
                        'ha': 1,
                        'in2': 15500031,
                        'ft2': 107639.104,
                        'yd2': 11959.9005
                    }
                },
                {
                    'name': 'Square inch',
                    'symbol': 'sq in',
                    'units': {
                        'm2': 0.00064516,
                        'a': 6.4516e-6,
                        'ha': 6.4516e-8,
                        'in2': 1,
                        'ft2': 0.00694444444,
                        'yd2': 0.000771604938
                    }
                },
                {
                    'name': 'Square foot',
                    'symbol': 'sq ft',
                    'units': {
                        'm2': 0.09290304 ,
                        'a': 0.0009290304,
                        'ha': 9.290304e-6,
                        'in2': 144,
                        'ft2': 1,
                        'yd2': 0.111111111
                    }
                },
                {
                    'name': 'Square yard',
                    'symbol': 'sq yd',
                    'units': {
                        'm2': 0.83612736,
                        'a': 0.0083612736,
                        'ha': 8.3612736e-5,
                        'in2': 1296,
                        'ft2': 9,
                        'yd2': 1
                    }
                }
            ]
        },
        {
            'name': 'Speed',
            'properties': [
                {
                    'name': 'Meter per second',
                    'symbol': 'm/s',
                    'units': {
                        'ms': 1,
                        'mmin': 60,
                        'mh': 3600 ,
                        'mph': 2.23693629,
                        'kn': 0.0323974082,
                        'M': 0.0029411764705882,
                        'c': 3.3356409519815e-9
                    }
                },
                {
                    'name': 'Meter per minute',
                    'symbol': 'm/min',
                    'units': {
                        'ms': 0.0166666667,
                        'mmin': 1,
                        'mh': 60,
                        'mph': 0.0372822715,
                        'kn': 0.0323974082,
                        'M': 4.9019607843137e-5,
                        'c': 5.5594015866359e-11
                    }
                },
                {
                    'name': 'Meter per hour',
                    'symbol': 'm/h',
                    'units': {
                        'ms': 0.000277777778,
                        'mmin': 0.0166666667,
                        'mh': 1,
                        'mph': 1.03561865e-5,
                        'kn': 0.000539956803,
                        'M': 8.1699346405229e-7,
                        'c': 9.2656693110598e-13
                    }
                },
                {
                    'name': 'Miles per hour',
                    'symbol': 'm/s',
                    'units': {
                        'ms': 0.44704,
                        'mmin': 26.8224,
                        'mh': 1609.344,
                        'mph': 1,
                        'kn': 0.868976242,
                        'M': 0.0013148235294118,
                        'c': 1.4911649311738E-9
                    }
                },
                {
                    'name': 'Knot',
                    'symbol': 'kn',
                    'units': {
                        'ms': 0.514444444,
                        'mmin': 30.8666667,
                        'mh': 1852,
                        'mph': 1.15077945,
                        'kn': 1,
                        'M': 0.0015130718954248,
                        'c': 1.7160019564083e-9
                    }
                },
                {
                    'name': 'Mach number',
                    'symbol': 'M',
                    'units': {
                        'ms': 340.29,
                        'mmin': 20417.4,
                        'mh': 1225044,
                        'mph': 761.207051,
                        'kn': 661.470842,
                        'M': 1,
                        'c': 1.1341179236737e-6
                    }
                },
                {
                    'name': 'Speed of light',
                    'symbol': 'c',
                    'units': {
                        'ms': 299792458,
                        'mmin': 17987547480,
                        'mh': 1079252848800,
                        'mph': 67016629,
                        'kn': 582749918,
                        'M': 881742.52352941,
                        'c': 1
                    }
                }
            ]
        },
        {
            'name': 'Force',
            'properties': [
                {
                    'name': 'Niuton',
                    'symbol': 'N',
                    'units': {
                        'N': 1,
                        'dyn': 10e5,
                        'kgf': 0.10197
                    }
                },
                {
                    'name': 'Dyne',
                    'symbol': 'dyn',
                    'units': {
                        'N': 10e-5,
                        'dyn': 1,
                        'kgf': 1.0197e-6
                    }
                },
                {
                    'name': 'Kilogram-force',
                    'symbol': 'kgf',
                    'units': {
                        'N': 9.80665,
                        'dyn': 980665,
                        'kgf': 1
                    }
                }
            ]
        },
        {
            'name': 'Temperature',
            'properties': [
                {
                    'name': 'Kelwin',
                    'symbol': 'K',
                    'units': {
                        'K': 1,
                        'C': 'Kelvin value' - 273.15,
                        'F': 'Kelvin value' * 9/5 - 459.67
                    }
                },
                {
                    'name': 'Celsius',
                    'symbol': 'C',
                    'units': {
                        'K': 'Celsius value' + 273.15,
                        'C': 1,
                        'F': 'Celsius value' * 9/5 + 32
                    }
                },
                {
                    'name': 'Fahrenheit',
                    'symbol': 'F',
                    'units': {
                        'K': ('Fahrenheit value' + 459.67) * 5/9,
                        'C': ('Fahrenheit value' - 32) * 5/9,
                        'F': 1
                    }
                }
            ]
        }
    ]
};