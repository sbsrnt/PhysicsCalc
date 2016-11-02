var quantities = {
    "Fizyka": {
        "Astrodynamika": [
            {
                "calculator": {
                    "header": "Absolutna wielkość I pasma słonecznego",
                    "body": [
                        {
                            "label": "Zaobserwowana maksymalna prędkość obrotowa",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt nachylenia galaktycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Absolutna wielkość I pasma słonecznego",
                        "unit": "M",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">M<sub>I</sub></i> ≈ -7.68 * log<sub>10</sub>(2 * <i class=\"variable\">v<sub>rot</sub></i> / sin(<i class=\"variable\">i</i>)) - 2.58"
                            },
                            {
                                "desc": "Absolutna wielkość I pasma",
                                "abbr": "M",
                                "sub": "I",
                                "sup": ""
                            },
                            {
                                "desc": "Zaobserwowana maksymalna prędkość obrotowa",
                                "abbr": "v",
                                "sub": "rot",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt nachylenia galaktycznego",
                                "abbr": "i",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Całkowity rozmiar wizualny zmiennych cefeidalnych",
                    "body": [
                        {
                            "label": "Okres pulsacji",
                            "value": "",
                            "unit": "s<sup>-1</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Zmienna cefeidalna w całkowitym rozmiarze wizualnym",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">M<sub>v</sub></i> ≈ -2.76 * log<sub>10</sub><i class=\"variable\">P<sub>d</sub></i> - 1.40"
                            },
                            {
                                "desc": "Całkowity rozmiar wizualny",
                                "abbr": "M",
                                "sub": "v",
                                "sup": ""
                            },
                            {
                                "desc": "Okres pulsacji",
                                "abbr": "P",
                                "sub": "d",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Ciśnienie relatywistyczne",
                    "body": [
                        {
                            "label": "Stała Planck'a",
                            "value": 6.62606876e-34,
                            "unit": "m<sup>2</sup>kg/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość Światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "value": "",
                            "unit": "kg/m<sup>3</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Neutronowa",
                            "value": "",
                            "unit": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        }
                    ],
                    "footer": {
                        "label": "Ciśnienie Relatywistyczne",
                        "unit": "N/m<sup>2</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">P</i> = [ ((<i class=\"variable\">h</i> / 2π) * <i class=\"variable\">c</i> * (3π<sup>2</sup>)<sup>1/3</sup>) / 4 ] * (<i class=\"variable\">ρ</i> / <i class=\"variable\">m<sub>n</sub></i>)<sup>4/3</sup>"
                            },
                            {
                                "desc": "Ciśnienie relatywistyczne",
                                "abbr": "P",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Planck'a",
                                "abbr": "h",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa neutronowa",
                                "abbr": "m<sub>n</sub>",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Czas kosmiczny w przesunięciu ku czerwieni",
                    "body": [
                        {
                            "label": "Okres pulsacji",
                            "value": "",
                            "unit": "s<sup>-1</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Czas kosmiczny w przesunięciu ku podczerwieni",
                        "unit": "sec",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">t(z)</i> = 2 / (3 * <i class=\"variable\">H(z)</i>)"
                            },
                            {
                                "desc": "Czas kosmiczny w przesunięciu ku podczerwieni",
                                "abbr": "t(z)",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr Hubble'a w przesunięciu ku podczerwieni",
                                "abbr": "H(z)",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Czas parowania czarnej dziury",
                    "body": [
                        {
                            "label": "Masa Ciała",
                            "value": "",
                            "unit": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Masa Słońca",
                            "value": "",
                            "unit": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        }
                    ],
                    "footer": {
                        "label": "Czas parowania czarnej dziury",
                        "unit": "sec",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">τ<sub>e</sub></i> ≈ (<i class=\"variable\">M</i><sup>3</sup> / <i class=\"variable\">M<sub>☉</sub></i><sup>3</sup>) * 10<sup>66</sup>"
                            },
                            {
                                "desc": "Czas parowania",
                                "abbr": "τ",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Ciała",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Słońca",
                                "abbr": "M",
                                "sub": "☉",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Degeneracja ciśnieniowa gwiazdy neutronowej <br /> przez nierelatywistyczne neutrony",
                    "body": [
                        {
                            "label": "Stała Planck'a",
                            "value": 6.62606876e-34,
                            "unit": "m<sup>2</sup>kg/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Neutronowa",
                            "value": "",
                            "unit": "m<sup>2</sup>kg/s",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Gęstość",
                            "value": "",
                            "unit": "kg/m<sup>3</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Zdegenerowane Ciśnienie",
                        "unit": "Pa",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">P</i> = [ (3π<sup>2</sup>)<sup>2/3</sup> / 5 ] * [ (<i class=\"variable\">h</i> / (2π))<sup>2</sup> / <i class=\"variable\">m<sub>n</sub></i> ] * (<i class=\"variable\">ρ</i> / <i class=\"variable\">m<sub>n</sub></i>)<sup>5/3</sup>"
                            },
                            {
                                "desc": "Zdegenerowane ciśnienie",
                                "abbr": "P",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Planck'a",
                                "abbr": "h",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Neutronowa",
                                "abbr": "m",
                                "sub": "n",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Jasność fal grawitacyjnych",
                    "body": [
                        {
                            "label": "Stała Grawitacji",
                            "value": 6.62606876e-34,
                            "unit": "m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość Światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Seperacja Masy",
                            "value": "",
                            "unit": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "m<sub>1</sub>",
                            "value": "",
                            "unit": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "m<sub>2</sub>",
                            "value": "",
                            "unit": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        }
                    ],
                    "footer": {
                        "label": "Promieniowanie fal grawitacyjnych",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L<sub>g</sub></i> = (32/5) * (<i class=\"variable\">G</i><sup>4</sup> / <i class=\"variable\">c</i><sup>5</sup>) * [ <i class=\"variable\">m<sub>1</sub></i><sup>2</sup> * <i class=\"variable\">m<sub>2</sub></i><sup>2</sup> * (<i class=\"variable\">m<sub>1</sub></i> + <i class=\"variable\">m<sub>2</sub></i>) ] / <i class=\"variable\">a</i><sup>5</sup>"
                            },
                            {
                                "desc": "Promieniowanie Fal Grawitacyjnych",
                                "abbr": "L",
                                "sub": "g",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Separacja Masy",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa orbity pierwszej",
                                "abbr": "m",
                                "sub": "1",
                                "sup": ""
                            },
                            {
                                "desc": "Masa orbity drugiej",
                                "abbr": "m",
                                "sub": "2",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Gęstość materii",
                    "body": [
                        {
                            "label": "Stała Grawitacji",
                            "value": 6.62606876e-11,
                            "unit": "m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "value": "",
                            "unit": "kg/m<sup>3</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Parametr Hubble'a",
                            "value": "",
                            "unit": "s<sup>-1</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość materii",
                        "unit": "kg/m<sup>3</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Ω<sub>m</sub></i> = (8π<i class=\"variable\">G</i> * <i class=\"variable\">ρ</i>) / (3 * <i class=\"variable\">H<sub>0</sub></i><sup>2</sup>)"
                            },
                            {
                                "desc": "Gęstość materii kosmologicznej",
                                "abbr": "Ω",
                                "sub": "m",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr Hubble'a",
                                "abbr": "H<sub>0</sub>",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Gęstość krytyczna",
                    "body": [
                        {
                            "label": "Stała Grawitacji",
                            "value": 6.62606876e-11,
                            "unit": "m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Parametr Hubble'a",
                            "value": "",
                            "unit": "s<sup>-1</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość krytyczna",
                        "unit": "kg/m<sup>3</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">ρ<sub>crit</sub></i> = (3 * <i" +
                                " class=\"variable\">H<sub>0</sub></i><sup>2</sup>) / (8π<i class=\"variable\">G</i>)"
                            },
                            {
                                "desc": "Gęstość krytyczna kosmologii",
                                "abbr": "ρ",
                                "sub": "crit",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr Hubble'a",
                                "abbr": "H<sub>0</sub>",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Gęstość krzywizny",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Parametr krzywizny",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik skali (kosmologia)",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Parametr Hubble'a",
                            "value": "",
                            "unit": "s<sup>-1</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość krzywizny",
                        "unit": "kg/m<sup>3</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Ω<sub>k</sub></i> = -(<i class=\"variable\">k</i> * <i class=\"variable\">c</i><sup>2</sup>) / (<i class=\"variable\">R</i><sup>2</sup> * <i class=\"variable\">H<sub>0</sub></i><sup>2</sup>)"
                            },
                            {
                                "desc": "Gęstość krzywizny kosmologicznej",
                                "abbr": "Ω",
                                "sub": "k",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr krzywizny",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik skali kosmologicznej",
                                "abbr": "R",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr Hubble'a",
                                "abbr": "H<sub>0</sub>",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Gęstość lambdy",
                    "body": [
                        {
                            "label": "Stała kosmologiczna",
                            "value": 2.036e-35,
                            "unit": "s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Parametr Hubble'a",
                            "value": "",
                            "unit": "s<sup>-1</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość lambdy",
                        "unit": "kg/m<sup>3</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Ω<sub>Λ</sub></i> = <i class=\"variable\">Λ</i> / (3 * <i class=\"variable\">H<sub>0</sub></i><sup>2</sup>)"
                            },
                            {
                                "desc": "Gęstość lambdy kosmologicznej",
                                "abbr": "Ω",
                                "sub": "Λ",
                                "sup": ""
                            },
                            {
                                "desc": "Stała kosmologiczna",
                                "abbr": "Λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr Hubble'a",
                                "abbr": "H<sub>0</sub>",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Granica jasności Eddingtona",
                    "body": [
                        {
                            "label": "Stała Grawitacji",
                            "value": 6.62606876e-11,
                            "unit": "m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Protonu",
                            "value": 1.67262178e-27,
                            "unit": "mg",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Sekcja Krzyżowa Thompsona",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Gwiazdy",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        }
                    ],
                    "footer": {
                        "label": "Granica jasności Eddingtona",
                        "unit": "W",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L<sub>E</sub></i> = (4π<i class=\"variable\">G</i> * <i class=\"variable\">M</i> * <i class=\"variable\">m<sub>p</sub></i> * <i class=\"variable\">c</i>) / <i class=\"variable\">σ<sub>T</sub></i>"
                            },
                            {
                                "desc": "Granica jasności Eddingtona",
                                "abbr": "L",
                                "sub": "E",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Gwiazdy",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Protonu",
                                "abbr": "m",
                                "sub": "p",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość Światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Sekcja Krzyżowa Thompsona",
                                "abbr": "σ",
                                "sub": "T",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Granica jasności Eddingtona oparta o masę Słońca",
                    "body": [
                        {
                            "label": "Masa Gwiazdy",
                            "value": "",
                            "unit": "kg",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Słońca",
                            "value": "",
                            "unit": "kg",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Granica jasności Eddingtona",
                        "unit": "W",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">L<sub>E</sub></i> = (1.26 * 10<sup>31</sup>) * (<i class="variable">M</i> / <i class="variable">M<sub>☉</sub></i>)'
                            },
                            {
                                "desc": "Granica jasności Eddingtona",
                                "abbr": "L",
                                "sub": "E",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Gwiazdy",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Słońca",
                                "abbr": "M",
                                "sub": "☉",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Granica Roche'a",
                    "body": [
                        {
                            "label": "Masa Centralna",
                            "value": "",
                            "unit": "kg",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość Satelity",
                            "value": "",
                            "unit": "kg/m<sup>3</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Promień Orbity Satelitarnej",
                        "unit": "AU",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">R</i> = [ (100 * <i class="variable">M</i>) / (9π<i class="variable">ρ</i>) ]<sup>1/3</sup>'
                            },
                            {
                                "desc": "Granica Roche'a",
                                "abbr": "R",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Centralna",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość Satelity",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Grawitacyjne przesunięcie ku czerwieni czarnej dziury",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała Grawitacji",
                            "value": "",
                            "unit": "m/s<sup>2</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Ciała",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Odległość od Masy Centralnej",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Grawitacyjne przesunięcie ku czerwieni",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">v<sub>∞</sub></i> / <i class="variable">v<sub>r</sub></i> = √<i class="sqrt-overline"> 1 - (2 * <i class="variable">G</i> * <i class="variable">M</i> / <i class="variable">r</i> * <i class="variable">c</i><sup>2</sup>)</i>'
                            },
                            {
                                "desc": "Częstotliwość w zależności od nieskończoności",
                                "abbr": "v",
                                "sub": "∞",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość w zależności od odległości od Masy Centralnej",
                                "abbr": "v",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Ciała",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość od Masy Centralnej",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość Światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Jasność zmiennej Cefeidanej",
                    "body": [
                        {
                            "label": "Okres pulsacji",
                            "value": "",
                            "unit": "rad/s",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Jasność zmiennej Cefeidalnej",
                        "unit": "lx",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": 'log<sub>10</sub>(<i class="variable">(L)</i> / <i class="variable">L<sub>☉</sub></i>) ≈ 1.15 * log<sub>10</sub><i class="variable">P<sub>d</sub></i> + 2.47'
                            },
                            {
                                "desc": "Jasność zmiennej cefeidalnej",
                                "abbr": "(L)",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Jasność Słońca",
                                "abbr": "L",
                                "sub": "☉",
                                "sup": ""
                            },
                            {
                                "desc": "Okres pulsacji",
                                "abbr": "P",
                                "sub": "d",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Masa Chandrasekhara",
                    "body": [
                        {
                            "label": "Masa Słońca",
                            "value": "",
                            "unit": "kg",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Masa Chandrasekhara",
                        "unit": "kg",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">M<sub>ch</sub></i> ≈  1.46 * <i class="variable">M<sub>☉</sub></i>'
                            },
                            {
                                "desc": "Masa Chandrasekhara",
                                "abbr": "M",
                                "sub": "ch",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Słońca",
                                "abbr": "M",
                                "sub": "☉",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Masa Jeansa",
                    "body": [
                        {
                            "label": "Gęstość obłoku gazu",
                            "value": "",
                            "unit": "kg/m<sup>3</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość Jeansa",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Masa Jeansa",
                        "unit": "mg",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">M<sub>j</sub></i> = (π/6) * <i class="variable">ρ</i> * <i class="variable">λ<sub>j</sub></i><sup>3</sup>'
                            },
                            {
                                "desc": "Masa Jeansa",
                                "abbr": "M",
                                "sub": "j",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość obłok gazu (chmur)",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość Jeansa",
                                "abbr": "λ",
                                "sub": "j",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Parametr Hubble'a w przesunięciu ku czerwieni",
                    "body": [
                        {
                            "label": "Parametr Hubble'a",
                            "value": 2.3e-18,
                            "unit": "s<sup>-1</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przesunięcie ku podczerwieni",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Parametr Hubble'a w przesunięciu ku czerwieni",
                        "unit": "s<sup>-1</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">H(z)</i> = <i class="variable">H<sub>0</sub></i> * (1 + <i class="variable">z</i>)<sup>3/2</sup>'
                            },
                            {
                                "desc": "Parametr Hubble'a w przesunięciu ku czerwieni",
                                "abbr": "H(z)",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr Hubble'a",
                                "abbr": "H",
                                "sub": "0",
                                "sup": ""
                            },
                            {
                                "desc": "Przesunięcie ku czerwieni",
                                "abbr": "z",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prawo Titiusa-Bode'a",
                    "body": [
                        {
                            "label": "Indeks planety",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Odległość planety od Słońca",
                        "unit": "AU",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">D<sub>AU</sub></i> = (4 + 3 * 2<sup><i' +
                                ' class="variable">n</i></sup> ) / 10'
                            },
                            {
                                "desc": "Odległość planety od Słońca wg. prawa Titius'a - Bode'a",
                                "abbr": "D",
                                "sub": "AU",
                                "sup": ""
                            },
                            {
                                "desc": "Indeks planety",
                                "abbr": "n",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość radialna/recesyjna<br>liczona przy pomocy prawa Hubble'a",
                    "body": [
                        {
                            "label": "Parametr Hubble'a",
                            "value": "",
                            "unit": "s<sup>-1</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość radialna",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">v<sub>r</sub></i> = <i class="variable">H<sub>0</sub></i> * <i class="variable">d</i>'
                            },
                            {
                                "desc": "Prędkość radialna/recesyjna liczona przy pomocy prawa Hubble'a",
                                "abbr": "v",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr Hubble'a",
                                "abbr": "H",
                                "sub": "0",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Promień kątowy pierścienia Einsteina",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała Grawitacji",
                            "value": "",
                            "unit": "m/s<sup>2</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa soczewki grawitacyjnej",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Odległość obserwatora do źródła",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość obserwatora do soczewki grawitacyjnej",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Promień kątowy pierścienia",
                        "unit": "m/s",
                        "value": "cm",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": '<i class="variable">θ</i> = √<i class="sqrt-overline"> (4 * <i class="variable">G</i> * <i class="variable">M</i> / <i class="variable">c</i><sup>2</sup>) * [ (<i class="variable">d<sub>s</sub></i> - <i class="variable">d</i>) / (<i class="variable">d<sub>s</sub></i> * <i class="variable">d</i>) ]</i>'
                            },
                            {
                                "desc": "Promień kątowy pierścienia Einsteina",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa soczewki grawitacyjnej",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość obserwatora do źródła",
                                "abbr": "d",
                                "sub": "s",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość obserwatora od soczewki grawitacyjnej",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Promień Schwarzschilda czarnej dziury",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała Grawitacji",
                            "value": "",
                            "unit": "m/s<sup>2</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Ciała",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        }
                    ],
                    "footer": {
                        "label": "Promień Schwarzschilda",
                        "unit": "m/s",
                        "value": "cm",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">r<sub>s</sub></i> = 2 * <i class=\"variable\">G</i> * <i class=\"variable\">M</i> / <i class=\"variable\">c</i><sup>2</sup>"
                            },
                            {
                                "desc": "Promień Schwarzschilda czarnej dziury",
                                "abbr": "r",
                                "sub": "s",
                                "sup": ""
                            },
                            {
                                "desc": "Stała grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Ciała",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Przesunięcie ku czerwieni",
                    "body": [
                        {
                            "label": "Zaobserwowana długość fal",
                            "value": "",
                            "unit": "m",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Emitowana długość fal",
                            "value": "",
                            "unit": "m",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Przesunięcie ku czerwieni",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">z</i> = (<i class=\"variable\">λ<sub>obs</sub></i> - <i class=\"variable\">λ<sub>em</sub></i>) / <i class=\"variable\">λ<sub>em</sub></i>"
                            },
                            {
                                "desc": "Przesunięcie ku czerwieni",
                                "abbr": "z",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Zaobserwowana długość fal",
                                "abbr": "λ",
                                "sub": "obs",
                                "sup": ""
                            },
                            {
                                "desc": "Emitowana długość fal",
                                "abbr": "λ",
                                "sub": "em",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Równanie Friedmanna",
                    "body": [
                        {
                            "label": "Stała Grawitacji",
                            "value": 6.673e-11,
                            "unit": "m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała kosmologiczna",
                            "value": 2.036e-35,
                            "unit": "s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik skali",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Parametr Krzywizny",
                            "value": "",
                            "unit": "Pa",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "value": "",
                            "unit": "kg/m<sup>3</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Równanie Friedmann'a",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">h</i> = [ (8π/3)* <i class=\"variable\">G</i> * <i class=\"variable\">ρ</i> * <i class=\"variable\">R</i><sup>2</sup> ] - (<i class=\"variable\">k</i> * <i class=\"variable\">c</i><sup>2</sup>) + (<i class=\"variable\">Λ</i> * <i class=\"variable\">R</i><sup>2</sup>) / 3"
                            },
                            {
                                "desc": "Równanie Friedmann'a",
                                "abbr": "h",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała kosmologiczna",
                                "abbr": "Λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parametr krzywizny",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik skali",
                                "abbr": "R",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Równanie Friedmanna bazowane na ciśnieniu",
                    "body": [
                        {
                            "label": "Stała Grawitacji",
                            "value": 6.673e-11,
                            "unit": "m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała kosmologiczna",
                            "value": 2.036e-35,
                            "unit": "s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik skali",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ciśnienie",
                            "value": "",
                            "unit": "Pa",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "value": "",
                            "unit": "kg/m<sup>3</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Równanie Friedmann'a",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">h</i> = (-4π / 3) * (<i class=\"variable\">G</i>" +
                                " * <i class=\"variable\">R</i>) * [ <i class=\"variable\">ρ</i> + (3 * <i" +
                                " class=\"variable\">P</i> / <i class=\"variable\">c</i><sup>2</sup>) ] + (<i" +
                                " class=\"variable\">Λ</i> * <i class=\"variable\">R</i><sup>2</sup> / 3)"
                            },
                            {
                                "desc": "Równanie Friedmann'a",
                                "abbr": "h",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała kosmologiczna",
                                "abbr": "Λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ciśnienie",
                                "abbr": "P",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik skali",
                                "abbr": "R",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Skala czasowa Kelvin'a Helmholtz'a <br />liczona przy pomocy masy ciała",
                    "body": [
                        {
                            "label": "Stała Grawitacji",
                            "value": 6.673e-11,
                            "unit": "m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Ciała",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Początkowy promień Ciała",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Jasność Ciała",
                            "value": "",
                            "unit": "W",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Skala czasowa Kelvina Helmholtz'a",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">τ<sub>KH</i> = (<i class=\"variable\">G</i> * <i class=\"variable\">M</i><sup>2</sup>) / (<i class=\"variable\">R<sub>o</sub></i> * <i class=\"variable\">L</i>)"
                            },
                            {
                                "desc": "Skala czasowa Kelvina Helmholtz'a",
                                "abbr": "τ",
                                "sub": "KH",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik skali",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Początkowy promień Ciała",
                                "abbr": "R",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Jasność Ciała",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Skala czasowa Kelvin'a Helmholtz'a <br />liczona przy pomocy energii potencjalnej grawitacji",
                    "body": [
                        {
                            "label": "Energia potencjalna grawitacji",
                            "value": "",
                            "unit": "J",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Jasność Ciała",
                            "value": "",
                            "unit": "W",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Skala czasowa Kelvina Helmholtz'a",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">τ<sub>KH</i> = -<i class=\"variable\">U<sub>g</sub></i> / <i class=\"variable\">L</i>"
                            },
                            {
                                "desc": "Skala czasowa Kelvina Helmholtz'a",
                                "abbr": "τ",
                                "sub": "KH",
                                "sup": ""
                            },
                            {
                                "desc": "Energia potencjalna grawitacji",
                                "abbr": "U",
                                "sub": "g",
                                "sup": ""
                            },
                            {
                                "desc": "Jasność Ciała",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Temperatura czarnej dziury",
                    "body": [
                        {
                            "label": "Stała Plancka",
                            "value": 6.62606876e-34,
                            "unit": "&nbsp;",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała Boltzmanna",
                            "value": 1.3806488e-23,
                            "unit": "J/K",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "value": 299792458,
                            "unit": "m/s",
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała grawitacji",
                            "value": "",
                            "unit": "m/s<sup>2</sup>",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa Ciała",
                            "value": "",
                            "unit": "&nbsp;",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        }
                    ],
                    "footer": {
                        "label": "Temperatura czarnej dziury",
                        "unit": "K",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">T</i> = (<i class=\"variable\">h</i> / 2π) * <i class=\"variable\">c</i><sup>3</sup> / (8π<i class=\"variable\">G</i> * <i class=\"variable\">M</i> * <i class=\"variable\">k</i>)"
                            },
                            {
                                "desc": "Temperatura czarnej dziury",
                                "abbr": "T",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Plancka",
                                "abbr": "h",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała grawitacji",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa Ciała",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Boltzmanna",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            }
        ],
        "Dynamika": [
            {
                "calculator": {
                    "header": "Apocentrum ruchu orbity w polu grawitacyjnym",
                    "body": [
                        {
                            "label": "Semi-latus rectum",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ekscentryczność",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Odległość orbity od apocentrum",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">r<sub>max</sub></i> =  <i class=\"variable\">ℓ</i> / (1 - <i class=\"variable\">e</i>)"
                            },
                            {
                                "desc": "Apocentrum ruchu orbity w polu grawitacyjnym",
                                "abbr": "r",
                                "sub": "max",
                                "sup": ""
                            },
                            {
                                "desc": "Semi-Latus Rectum",
                                "abbr": "ℓ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ekscentryczność",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Długość fali klinu Kelvina",
                    "body": [
                        {
                            "label": "Prędkość Ciała",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przyspieszenie grawitacyjne",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Charakterystyka fali",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">λ<sub>k</sub></i> = (4π * <i class=\"variable\">v<sub>b</sub></i><sup>2</sup>) / (3 * <i class=\"variable\">g</i>)"
                            },
                            {
                                "desc": "Charakterystyka fali",
                                "abbr": "λ",
                                "sub": "k",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość Ciała",
                                "abbr": "v",
                                "sub": "b",
                                "sup": ""
                            },
                            {
                                "desc": "Przyspieszenie grawitacyjne",
                                "abbr": "g",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Ekscentryczność orbity w polu siły grawitacyjnej",
                    "body": [
                        {
                            "label": "Energia",
                            "unit": "J",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Moment pędu",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa orbity",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Współczynnik prawa odwrotnych kwadratów",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Ekscentryczność orbity w polu siły grawitacyjnej",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">e</i> = √<i class=\"sqrt-overline\"> 1 + (2 * <i" +
                                " class=\"variable\">E</i> * <i class=\"variable\">J</i><sup>2</sup>) / (<i class=\"variable\">m</i> * <i class=\"variable\">α</i><sup>2</sup>)</i>"
                            },
                            {
                                "desc": "Ekscentryczność",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Energia",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Moment pędu",
                                "abbr": "J",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Orbita masy",
                                "abbr": "m",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik prawa odwrotnych kwadratów",
                                "abbr": "α",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Impedancja drgań wymuszonych",
                    "body": [
                        {
                            "label": "Współczynnik tłumienia",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Wymuszona częstotliwość kątowa",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Naturalna częstotliwość kątowa",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Impedancja drgań wymuszonych",
                        "unit": "Ω",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">z</i> = 2 * <i class=\"variable\">γ</i> + <i class=\"variable\">i</i> * (<i class=\"variable\">w<sub>f</sub></i><sup>2</sup> - <i class=\"variable\">w<sub>0</sub></i><sup>2</sup> / <i class=\"variable\">w<sub>f</sub></i>)"
                            },
                            {
                                "desc": "Impedencja drgań wymuszonych",
                                "abbr": "z",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik tłumienia",
                                "abbr": "γ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wymuszona częstotliowść kątowa",
                                "abbr": "w",
                                "sub": "f",
                                "sup": ""
                            },
                            {
                                "desc": "Naturalna częstotliowść kątowa",
                                "abbr": "w",
                                "sub": "0",
                                "sup": ""
                            },
                            {
                                "desc": "Część urojona",
                                "abbr": "i",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Izotropowa sprężystość ciał stałych modułu Younga",
                    "body": [
                        {
                            "label": "Współczynnik Lamégo",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik sprężystości objętościowej",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Moduł Younga",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E</i> = 9 * <i class=\"variable\">μ</i> * <i class=\"variable\">K</i> / (<i class=\"variable\">μ</i> + 3 * <i class=\"variable\">K</i>)"
                            },
                            {
                                "desc": "Izotropowa sprężystość ciał stałych modułu Younga",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik Lamégo",
                                "abbr": "μ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik sprężystości objętościowej",
                                "abbr": "K",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Moment zginania promienia",
                    "body": [
                        {
                            "label": "Moduł Younga",
                            "unit": "m<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Moment obszaru",
                            "unit": "m<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień krzywizny",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Moment zginania promienia",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">G<sub>b</sub></i> = <i class=\"variable\">E</i> * <i class=\"variable\">I</i> / <i class=\"variable\">R<sub>c</sub></i>"
                            },
                            {
                                "desc": "Moment zginania promienia",
                                "abbr": "G",
                                "sub": "b",
                                "sup": ""
                            },
                            {
                                "desc": "Moduł Younga",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Moment obszaru",
                                "abbr": "I",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień krzywizny",
                                "abbr": "R",
                                "sub": "c",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Kąt klina Macha dla fal uderzeniowych",
                    "body": [
                        {
                            "label": "Prędkość fali",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość ciała",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Sinus kąta klina Macha",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "sin(<i class=\"variable\">θ<sub>w</sub></i>) = <i class=\"variable\">v<sub>p</sub></i> / <i class=\"variable\">v<sub>b</sub></i>"
                            },
                            {
                                "desc": "Kąt klina Macha dla fal uderzeniowych",
                                "abbr": "θ",
                                "sub": "w",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość fali",
                                "abbr": "v",
                                "sub": "p",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość ciała",
                                "abbr": "v",
                                "sub": "b",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Okres oscylacji wahadła podwójnego",
                    "body": [
                        {
                            "label": "Przyspieszenie grawitacyjne",
                            "unit": "m/s<sup>2</sup>",
                            "value": 9.81,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość wahadła",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Okres oscylacji",
                        "unit": "sec",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">p</i> = 2π * √<i class=\"sqrt-overline\"> <i class=\"variable\">L</i> / (2 + 1.4142 * <i class=\"variable\">g</i>)</i>"
                            },
                            {
                                "desc": "Okres oscylacji wahadła podwójnego",
                                "abbr": "p",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość wahadła",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przyspieszenie grawitacyjne",
                                "abbr": "g",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Podciąganie kapilarne",
                    "body": [
                        {
                            "label": "Napięcie powierzchniowe",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt zetknięcia",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość Cieczy",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przyspieszenie grawitacyjne",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień rurki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Podciąganie kapilarne",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">h</i> = 2 * <i class=\"variable\">σ<sub>jv</sub></i> * cos(<i class=\"variable\">θ</i>) / <i" +
                                " class=\"variable\">ρ</i> * <i" +
                                " class=\"variable\">g</i> * <i class=\"variable\">a</i>"
                            },
                            {
                                "desc": "Podciąganie kapilarne",
                                "abbr": "h",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Napięcie powierzchniowe",
                                "abbr": "σ",
                                "sub": "jv",
                                "sup": ""
                            },
                            {
                                "desc": "Kosinus kąta zetknięcia",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość Cieczy",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przyspieszenie grawitacyjne",
                                "abbr": "g",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień rurki",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość fali podłużnej w cienkim okrągłym pręcie",
                    "body": [
                        {
                            "label": "Moduł Younga",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość fali podłużnej",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">v<sub>l</sub></i> = √<i" +
                                " class=\"sqrt-overline\"> <i class=\"variable\">E</i> / <i" +
                                " class=\"variable\">ρ</i></i>"
                            },
                            {
                                "desc": "Prędkość fali podłużnej w cienkim okrągłym pręcie",
                                "abbr": "v",
                                "sub": "l",
                                "sup": ""
                            },
                            {
                                "desc": "Moduł Younga",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość fali poprzecznej w cienkim okrągłym pręcie",
                    "body": [
                        {
                            "label": "Moduł Younga",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ilość fal",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień rurki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość fali poprzecznej",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">v<sub>t</sub></i> = (<i" +
                                " class=\"variable\">k</i> * <i class=\"variable\">a</i> / 2) * √<i" +
                                " class=\"sqrt-overline\"> <i class=\"variable\">E</i> / <i" +
                                " class=\"variable\">ρ</i></i>"
                            },
                            {
                                "desc": "Prędkość fali poprzecznej w cienkim okrągłym pręcie",
                                "abbr": "v",
                                "sub": "t",
                                "sup": ""
                            },
                            {
                                "desc": "Ilość fal",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień rurki",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Moduł Younga",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość fali poprzecznej na cienkiej płycie wzdłuż szerokości",
                    "body": [
                        {
                            "label": "Moduł ścinania",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość fali poprzecznej",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">v<sub>t</sub><sup>y</sup></i> = √<i" +
                                " class=\"sqrt-overline\"> <i class=\"variable\">μ</i> / <i class=\"variable\">ρ</i></i>"
                            },
                            {
                                "desc": "Prędkość fali poprzecznej na cienkiej płycie wzdłuż szerokości",
                                "abbr": "v",
                                "sub": "t",
                                "sup": "y"
                            },
                            {
                                "desc": "Moduł ścinania",
                                "abbr": "μ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość fali poprzecznej na cienkiej płycie wzdłuż wysokości",
                    "body": [
                        {
                            "label": "Ilość fal",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Moduł Younga",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Grubość płyty",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik Poissona",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość fali poprzecznej",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">v<sub>t</sub><sup>2</sup></i> = <i" +
                                " class=\"variable\"></i>k *" +
                                " √<i class=\"sqrt-overline\"> (<i class=\"variable\">E</i> * <i" +
                                " class=\"variable\">t</i><sup>2</sup>) / [ 12 * <i class=\"variable\">ρ</i> * (1" +
                                " - <i class=\"variable\">σ</i><sup>2</sup>) ]</i>"
                            },
                            {
                                "desc": "Prędkość fali poprzecznej na cienkiej płycie wzdłuż wysokości",
                                "abbr": "v",
                                "sub": "t",
                                "sup": ""
                            },
                            {
                                "desc": "Ilość fal",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Moduł Younga",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Grubość płyty",
                                "abbr": "t",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik Poissona",
                                "abbr": "σ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość graniczna",
                    "body": [
                        {
                            "label": "Przyspieszenie grawitacyjne",
                            "unit": "m/s<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa spadającego obiektu",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Gęstość Cieczy",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przewidywana powierzchnia obiektu",
                            "unit": "m<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik oporu",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość graniczna",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">v<sub>t</sub></i> = √<i" +
                                " class=\"sqrt-overline\"> (2 * <i class=\"variable\">m</i> * <i" +
                                " class=\"variable\">g</i>) / (<i class=\"variable\">ρ</i> * <i" +
                                " class=\"variable\">A</i> * <i class=\"variable\">C<sub>d</sub></i>)</i>"
                            },
                            {
                                "desc": "Prędkość graniczna (maksymalna prędkość spadania)",
                                "abbr": "v",
                                "sub": "t",
                                "sup": ""
                            },
                            {
                                "desc": "Masa spadającego obiektu",
                                "abbr": "m",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przyspieszenie grawitacyjne",
                                "abbr": "g",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość cieczy",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przewidywana powierzchnia obiektu",
                                "abbr": "A",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik oporu",
                                "abbr": "C",
                                "sub": "d",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość kątowa wahadła Foucaulta",
                    "body": [
                        {
                            "label": "Prędkość kątowa Ziemii",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Szerokość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość kątowa wahadła",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Ω<sub>f</sub></i> = -<i" +
                                " class=\"variable\">ω<sub>e</sub>sinλ</i>"
                            },
                            {
                                "desc": "Prędkość kątowa wahadła Foucaulta",
                                "abbr": "Ω",
                                "sub": "f",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość kątowa Ziemii",
                                "abbr": "ω",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Sinus szerokości",
                                "abbr": "sinλ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Promień sferycznego wstrząsu adiabatycznego",
                    "body": [
                        {
                            "label": "Uwolniona energia",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Czas",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Medium niezakłóconej gęstości",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Promień sferycznego wstrząsu adiabatycznego",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">r</i> ≈ (<i class=\"variable\">E</i> *" +
                                " <i class=\"variable\">t</i><sup>2</sup> / <i" +
                                " class=\"variable\">ρ<sub>o</sub></i>)<sup>1/5</sup>"
                            },
                            {
                                "desc": "Promień sferycznego wstrząsu adiabatycznego",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Uwolniona energia",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Czas",
                                "abbr": "t",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Medium niezakłóconej gęstości",
                                "abbr": "ρ",
                                "sub": "o",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Relatywistyczny Hamiltonian dla naładowanej cząstki",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Pęd cząstki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Naładowana cząstka",
                            "unit": "J",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Potencjał wektorowy",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Potencjał elektryczny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Relatywistyczny Hamiltonian dla naładowanej cząstki",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">H</i> = √<i class=\"sqrt-overline\"> (<i" +
                                " class=\"variable\">m<sub>o</sub></i><sup>2</sup> * <i" +
                                " class=\"variable\">c</i><sup>4</sup>) + |<i class=\"variable\">p</i> - <i class=\"variable\">e</i> *" +
                                " <i class=\"variable\">A</i>|<sup>2</sup> * <i class=\"variable\">c</i><sup>2</sup></i> + <i" +
                                " class=\"variable\">e</i> * <i class=\"variable\">Φ</i>"
                            },
                            {
                                "desc": "Hamiltonian",
                                "abbr": "H",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pęd cząstki",
                                "abbr": "p",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Naładowana cząstka",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Potencjał wektorowy",
                                "abbr": "A",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa",
                                "abbr": "m",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Potencjał elektryczny",
                                "abbr": "Φ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Siła Coriolisa",
                    "body": [
                        {
                            "label": "Masa cząstki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Prędkość kątowa",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Siła Coriolisa",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">F<sub>cor</sub></i> =  = -2 * <i" +
                                " class=\"variable\">m</i> * <i class=\"variable\">ω</i> * <i" +
                                " class=\"variable\">v</i>"
                            },
                            {
                                "desc": "Siła Coriolisa",
                                "abbr": "F",
                                "sub": "cor",
                                "sup": ""
                            },
                            {
                                "desc": "Masa cząstki",
                                "abbr": "m",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość kątowa",
                                "abbr": "ω",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość",
                                "abbr": "v",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Skoki ciśnienia liczone przy pomocy relacji Rankine'a-Hugoniota",
                    "body": [
                        {
                            "label": "Wskaźnik Ciepła",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": true
                        },
                        {
                            "label": "Liczba Macha",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Wskaźnik Ciśnienia",
                        "unit": "Pa",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">p<sub>2</sub></i> / <i" +
                                " class=\"variable\">p<sub>1</sub></i> = [ 2 * <i class=\"variable\">γ</i> *" +
                                " <i class=\"variable\">M<sub>1</sub></i><sup>2</sup> - (<i" +
                                " class=\"variable\">γ</i> - 1) ] / (<i class=\"variable\">γ</i> + 1)"
                            },
                            {
                                "desc": "Relacja Ciśnienia Rankine'a-Hugoniota",
                                "abbr": "p<sub>2</sub> / p<sub>1</sub>",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wejściowe ciśnienie",
                                "abbr": "p",
                                "sub": "1",
                                "sup": ""
                            },
                            {
                                "desc": "Wyjściowe ciśnienie",
                                "abbr": "p",
                                "sub": "2",
                                "sup": ""
                            },
                            {
                                "desc": "Wskaźnik Ciepła",
                                "abbr": "γ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba Macha",
                                "abbr": "M",
                                "sub": "1",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Skręcanie par jednorodnych prętów",
                    "body": [
                        {
                            "label": "Sztywność skrętna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt skręcenia",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość pręta",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Skręcona para jednorodnych prętów",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">G</i> = <i class=\"variable\">C</i> *" +
                                " (<i class=\"variable\">Φ</i> / <i class=\"variable\">l</i>)"
                            },
                            {
                                "desc": "Skręcona para",
                                "abbr": "G",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Sztywność skrętna",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt skręcenia",
                                "abbr": "Φ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość pręta",
                                "abbr": "l",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Sztywność skrętna długiej płaskiej taśmy",
                    "body": [
                        {
                            "label": "Moduł ścinania",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Szerokość przekroju",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Grubość ściany",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Sztywność skrętna",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = (1/3) * (<i" +
                                " class=\"variable\">μ</i> * <i class=\"variable\">w</i> * <i" +
                                " class=\"variable\">t</i><sup>3</sup>)"
                            },
                            {
                                "desc": "Sztywność skrętna",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Moduł ścinania",
                                "abbr": "μ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Szerokość przekroju",
                                "abbr": "w",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Grubość ściany",
                                "abbr": "t",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wskaźnik prędkości fali uderzeniowej używając relacji <br />Rankine'a - Hugoniota",
                    "body": [
                        {
                            "label": "Wskaźnik ciepła",
                            "unit": "<sup>o</sup>C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Liczba Macha",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">v<sub>1</sub></i> / <i" +
                                " class=\"variable\">v<sub>2</sub></i> = (<i class=\"variable\">γ</i> + 1)  / [" +
                                " (<i class=\"variable\">γ</i> - 1) + (2 / <i" +
                                " class=\"variable\">M<sub>1</sub></i><sup>2</sup>) ]"
                            },
                            {
                                "desc": "Prędkość",
                                "abbr": "v<sub>1</sub>, v<sub>2</sub>",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wskaźnik ciepła",
                                "abbr": "γ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba Macha",
                                "abbr": "M",
                                "sub": "1",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wskaźnik temperatury fali uderzeniowej używając relacji <br />Rankine'a - Hugoniota",
                    "body": [
                        {
                            "label": "Wskaźnik ciepła",
                            "unit": "<sup>o</sup>C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Liczba Macha",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Temperatura",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">T<sub>1</sub></i> / <i" +
                                " class=\"variable\">T<sub>2</sub></i> = [ ((2 * <i class=\"variable\">γ</i> *" +
                                " <i class=\"variable\">M<sub>1</sub></i><sup>2</sup>) -  (<i" +
                                " class=\"variable\">γ</i> - 1)) * (2 + (<i class=\"variable\">γ</i> - 1) * <i" +
                                " class=\"variable\">M<sub>1</sub></i>2) ] / [ (<i class=\"variable\">γ</i> + 1" +
                                " )<sup>2</sup> * <i class=\"variable\">M<sub>1</sub></i><sup>2</sup> ]"
                            },
                            {
                                "desc": "Temperatura",
                                "abbr": "T<sub>1</sub>, T<sub>2</sub>",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wskaźnik ciepła",
                                "abbr": "γ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba Macha",
                                "abbr": "M",
                                "sub": "1",
                                "sup": ""
                            }
                        ]
                    }
                }
            }
        ],
        "Elektromagnetyzm": [
            {
                "calculator": {
                    "header": "Antena dipolowa - natężenie prądu",
                    "body": [
                        {
                            "label": "Natężenie prądu magnetycznego",
                            "unit": "A",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość połowy anteny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Oś Z długości",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Natężenie prądu anteny dipolowej",
                        "unit": "A",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">I<sub>m</sub></i> = sin( β(<i class=\"variable\">L</i> - |<i class=\"variable\">z</i>|) )"
                            },
                            {
                                "desc": "2π / λ",
                                "abbr": "β",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Natężenie prądu magnetycznego anteny",
                                "abbr": "I",
                                "sub": "m",
                                "sup": ""
                            },
                            {
                                "desc": "Długość połowy anteny",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali anteny",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Oś Z długości",
                                "abbr": "z",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Antena dipolowa - fala elektryczna",
                    "body": [
                        {
                            "label": "Natężenie prądu magnetycznego",
                            "unit": "A",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość połowy anteny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt współrzędnych",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Fala elektryczna anteny dipolowej",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E<sub>θ</sub></i> = (60 * <i class=\"variable\">I<sub>m</sub></i> / <i class=\"variable\">r</i>) * [ (cos(<i" +
                                " class=\"variable\">β</i> * <i class=\"variable\">L</i> * cos(<i class=\"variable\">θ</i>)) - cos(<i class=\"variable\">β</i> * <i" +
                                " class=\"variable\">L</i>) ) / sin(<i class=\"variable\">θ</i>) ]"
                            },
                            {
                                "desc": "2π / λ",
                                "abbr": "β",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Fala elektryczna anteny dipolowej",
                                "abbr": "E",
                                "sub": "θ",
                                "sup": ""
                            },
                            {
                                "desc": "Natężenie prądu anteny dipolowej",
                                "abbr": "I",
                                "sub": "m",
                                "sup": ""
                            },
                            {
                                "desc": "Długość połowy anteny",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali anteny",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt współrzędnych",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Antena dipolowa - fala magnetyczna",
                    "body": [
                        {
                            "label": "Natężenie prądu magnetycznego",
                            "unit": "A",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość połowy anteny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt współrzędnych",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Fala elektryczna anteny dipolowej",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">H<sub>Φ</sub></i> = (<i class=\"variable\">I<sub>m</sub></i> / 2π * <i class=\"variable\">r</i>) * [ (cos(<i" +
                                " class=\"variable\">β</i> * <i class=\"variable\">L</i> * cos(<i class=\"variable\">θ</i>)) - cos(<i class=\"variable\">β</i> * <i" +
                                " class=\"variable\">L</i>) ) / sin(<i class=\"variable\">θ</i>) ]"
                            },
                            {
                                "desc": "2π / λ",
                                "abbr": "β",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Fala magnetyczna anteny dipolowej",
                                "abbr": "H",
                                "sub": "Φ",
                                "sup": ""
                            },
                            {
                                "desc": "Natężenie prądu anteny dipolowej",
                                "abbr": "I",
                                "sub": "m",
                                "sup": ""
                            },
                            {
                                "desc": "Długość połowy anteny",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali anteny",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt współrzędnych",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Antena dipolowa - średnia gęstość emitowanej mocy",
                    "body": [
                        {
                            "label": "Natężenie prądu magnetycznego",
                            "unit": "A",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość połowy anteny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt współrzędnych",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Średnia gęstość emitowanej mocy anteny dipolowej",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">P<sub>d</sub></i> = (15 * <i class=\"variable\">I<sub>m</sub></i><sup>2</sup> / π * <i" +
                                " class=\"variable\">r</i><sup>2</sup>)" +
                                " * [" +
                                " (cos(<i" +
                                " class=\"variable\">β</i> * <i class=\"variable\">L</i> * cos(<i class=\"variable\">θ</i>)) - cos(<i class=\"variable\">β</i> * <i" +
                                " class=\"variable\">L</i>) ) / sin(<i class=\"variable\">θ</i>) ]<sup>2</sup>"
                            },
                            {
                                "desc": "2π / λ",
                                "abbr": "β",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średnia gęstość emitowanej anteny dipolowej",
                                "abbr": "P",
                                "sub": "d",
                                "sup": ""
                            },
                            {
                                "desc": "Natężenie prądu anteny dipolowej",
                                "abbr": "I",
                                "sub": "m",
                                "sup": ""
                            },
                            {
                                "desc": "Długość połowy anteny",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali anteny",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt współrzędnych",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Apertura anteny dla pierwszego kąta współrzędnych",
                    "body": [
                        {
                            "label": "Stała elektryczna",
                            "unit": "m<sup>-3</sup> kg<sup>-1</sup> s<sup>4</sup> A<sup>2</sup>",
                            "value": 8.85418782e10-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość prądu elektrycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość prądu elektrycznego pierwszego elementu",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali anteny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień apertury kołowej",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość punktu obserwacji od początku",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt współrzędnych 1",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt współrzędnych 2",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Apertura anteny dla pierwszego kąta współrzędnych",
                        "unit": "M",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E<sub>θ</sub></i>= [ (<i" +
                                " class=\"variable\">j</i> * <i class=\"variable\">k</i> * <i" +
                                " class=\"variable\">a</i><sup>2</sup> * <i class=\"variable\">E<sub>0</sub></i> *" +
                                " e<sup>-<i class=\"variable\">j</i> * <i class=\"variable\">k</i> *" +
                                " <i class=\"variable\">r</i></sup>) / <i class=\"variable\">r</i> ] *" +
                                " sin(<i class=\"variable\">φ</i>) * [ (<i" +
                                " class=\"variable\">J<sub>1</sub></i> * <i class=\"variable\">k</i> * <i" +
                                " class=\"variable\">a</i> * sin(<i class=\"variable\">θ</i>) / <i" +
                                " class=\"variable\">k</i> * <i class=\"variable\">a</i> * sin(<i" +
                                " class=\"variable\">θ</i>) ]"
                            },
                            {
                                "desc": "2π / λ ",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Apertura anteny",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała elektryczna",
                                "abbr": "E",
                                "sub": "0",
                                "sup": ""
                            },
                            {
                                "desc": "Pierwszy kąt współrzędnych",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Drugi kąt współrzędnych",
                                "abbr": "φ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali anteny",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień apertury kołowej",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość punktu obserwacji od początku",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość prądu elektrycznego",
                                "abbr": "j",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość prądu elektrycznego pierwszego elementu",
                                "abbr": "J",
                                "sub": "1",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Apertura anteny dla drugiego kąta współrzędnych",
                    "body": [
                        {
                            "label": "Stała elektryczna",
                            "unit": "m<sup>-3</sup> kg<sup>-1</sup> s<sup>4</sup> A<sup>2</sup>",
                            "value": 8.85418782e10-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość prądu elektrycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość prądu elektrycznego pierwszego elementu",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali anteny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień apertury kołowej",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość punktu obserwacji od początku",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt współrzędnych 1",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt współrzędnych 2",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Apertura anteny dla pierwszego kąta współrzędnych",
                        "unit": "M",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"longPattern\"><i class=\"variable\">E<sub>θ</sub></i>= [" +
                                " (<i" +
                                " class=\"variable\">j</i> * <i class=\"variable\">k</i> * <i" +
                                " class=\"variable\">a</i><sup>2</sup> * <i class=\"variable\">E<sub>0</sub></i> *" +
                                " e<sup>-<i class=\"variable\">j</i> * <i class=\"variable\">k</i> *" +
                                " <i class=\"variable\">r</i></sup>) / <i class=\"variable\">r</i> ] *" +
                                " [cos(<i class=\"variable\">θ</i>) * cos(<i class=\"variable\">φ</i>)] * [" +
                                " (<i" +
                                " class=\"variable\">J<sub>1</sub></i> * <i class=\"variable\">k</i> * <i" +
                                " class=\"variable\">a</i> * sin(<i class=\"variable\">θ</i>) / <i" +
                                " class=\"variable\">k</i> * <i class=\"variable\">a</i> * sin(<i" +
                                " class=\"variable\">θ</i>) ]</i>"
                            },
                            {
                                "desc": "2π / λ ",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Apertura anteny",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Stała elektryczna",
                                "abbr": "E",
                                "sub": "0",
                                "sup": ""
                            },
                            {
                                "desc": "Pierwszy kąt współrzędnych",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Drugi kąt współrzędnych",
                                "abbr": "φ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali anteny",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień apertury kołowej",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość punktu obserwacji od początku",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość prądu elektrycznego",
                                "abbr": "j",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość prądu elektrycznego pierwszego elementu",
                                "abbr": "J",
                                "sub": "1",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Całkowita moc promieniowania z oscylującego dipola",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Częstotliwość oscylacji",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Amplituda momentu dipola",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Całkowita moc promieniowania z oscylującego dipola",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">W</i> = [<i" +
                                " class=\"variable\">ω</i><sup>4</sup> * (<i" +
                                " class=\"variable\">p<sub>o</sub></i><sup>2</sup> / 2)]" +
                                " / (6π * <i class=\"variable\">ε<sub>o</sub></i> * <i" +
                                " class=\"variable\">c</i><sup>3</sup>)"
                            },
                            {
                                "desc": "Całkowita moc promieniowania z oscylującego dipola",
                                "abbr": "W",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość oscylacji",
                                "abbr": "ω",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Amplituda momentu dipola",
                                "abbr": "p",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Czas relaksacji elektronu w plaźmie",
                    "body": [
                        {
                            "label": "Temperatura elektronu",
                            "unit": "<sup>o</sup>K",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość elektronowa",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Logarytm Coulomba",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Czas relaksacji elektronu w plaźmie",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">τ<sub>e</sub></i> = 3.44 *" +
                                " 10<sup>5</sup>(<i class=\"variable\">T<sub>e</sub></i><sup>3/2</sup>) /" +
                                " (<i class=\"variable\">n<sub>e</sub></i> * <i class=\"variable\">lnΛ</i>)"
                            },
                            {
                                "desc": "Czas relaksacji elektronu w plaźmie",
                                "abbr": "τ",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Temperatura elektronu",
                                "abbr": "T",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość elektronowa",
                                "abbr": "n",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Logarytm Coulomba",
                                "abbr": "lnΛ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Częstotliwość falowa obwodu prostownika",
                    "body": [
                        {
                            "label": "Szczytowe napięcie",
                            "unit": "V",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Częstotliwość falowa obwodu prostownika",
                        "unit": "V",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">V<sub>d.c.</sub></i> = 0.637 * <i" +
                                " class=\"variable\">V<sub>max</sub></i>"
                            },
                            {
                                "desc": "Częstotliwość falowa obwodu prostownika",
                                "abbr": "V",
                                "sub": "d.c.",
                                "sup": ""
                            },
                            {
                                "desc": "Szczytowe napięcie",
                                "abbr": "V",
                                "sub": "max",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Częstotliwość kątowa Cyklotronu",
                    "body": [
                        {
                            "label": "Naładowana cząstka",
                            "unit": "V",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość strumienia magnetycznego",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa cząstki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Częstotliwość kątowa Cyklotronu",
                        "unit": "rad/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">ω<sub>c</sub></i> = (<i" +
                                " class=\"variable\">q</i> * <i class=\"variable\">B</i>) / <i class=\"variable\">m</i>"
                            },
                            {
                                "desc": "Częstotliwość kątowa Cyklotronu",
                                "abbr": "ω",
                                "sub": "c",
                                "sup": ""
                            },
                            {
                                "desc": "Naładowana cząstka",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość strumienia magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa cząstki",
                                "abbr": "m",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Częstotliwość plazmy",
                    "body": [
                        {
                            "label": "Ładunek elektryczny elementarny",
                            "unit": "C",
                            "value": 1.602176462e-19,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa elektronu",
                            "unit": "kg",
                            "value": 9.10938188e-31,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość elektronowa",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Częstotliwość Plazmy",
                        "unit": "Hz",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">ω<sub>p</sub></i> = √<i" +
                                " class=\"sqrt-overline\">(<i class=\"variable\">n<sub>e</sub></i> * <i" +
                                " class=\"variable\">e</i><sup>2</sup>) / (<i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">m<sub>e</sub></i>)</i>"
                            },
                            {
                                "desc": "Częstotliwość plazmy",
                                "abbr": "ω",
                                "sub": "p",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość elektronowa",
                                "abbr": "n",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny elementarny",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Masa elektronu",
                                "abbr": "m",
                                "sub": "e",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Długość elektronu Debye'a w plaźmie",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała Boltzmanna",
                            "unit": "&nbsp;",
                            "value": 1.3806503e-23,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny elementarny",
                            "unit": "C",
                            "value": 1.60217657e-19,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Temperatura elektronu",
                            "unit": "<sup>o</sup>K",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość elektronowa",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Długość elektronu Debye'a",
                        "unit": "mm",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">λ<sub>De</sub></i> = √<i" +
                                " class=\"sqrt-overline\">(<i class=\"variable\">ε<sub>o</sub></i> * <i" +
                                " class=\"variable\">k<sub>B</sub></i> * <i" +
                                " class=\"variable\">T<sub>e</sub></i>) / (<i" +
                                " class=\"variable\">n<sub>e</sub></i> * <i" +
                                " class=\"variable\">e<sup>2</sup></i>)</i>"
                            },
                            {
                                "desc": "Długość elektronu Debye'a w plaźmie",
                                "abbr": "λ",
                                "sub": "De",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Boltzmanna",
                                "abbr": "k",
                                "sub": "B",
                                "sup": ""
                            },
                            {
                                "desc": "Temperatura elektronu",
                                "abbr": "T",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość elektronowa",
                                "abbr": "n",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny elementarny",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Długość Landau'a w ciepłej plaźmie",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała Boltzmanna",
                            "unit": "&nbsp;",
                            "value": 1.3806503e-23,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny elementarny",
                            "unit": "C",
                            "value": 1.60217657e-19,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Temperatura elektronu",
                            "unit": "<sup>o</sup>K",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Długość Landau'a w ciepłej plaźmie",
                        "unit": "mm",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">I<sub>L</sub></i> = <i" +
                                " class=\"variable\">e</i><sup>2</sup> / (4π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">k<sub>B</sub></i> * <i" +
                                " class=\"variable\">T<sub>e</sub></i>)"
                            },
                            {
                                "desc": "Długość Landau'a w ciepłej plaźmie",
                                "abbr": "I",
                                "sub": "L",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny elementarny",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Boltzmanna",
                                "abbr": "k",
                                "sub": "B",
                                "sup": ""
                            },
                            {
                                "desc": "Temperatura elektronu",
                                "abbr": "T",
                                "sub": "e",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Gęstość energii pola elektromagnetycznego",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Pole elektryczne",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość strumienia magnetycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość energii pola elektromagnetycznego",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">u</i> = [ 1/2 * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">E</i><sup>2</sup>" +
                                " ] + [ 1/2 * (<i class=\"variable\">B</i><sup>2</sup> / <i" +
                                " class=\"variable\">μ<sub>o</sub></i>) ]"
                            },
                            {
                                "desc": "Gęstość energii pola elektromagnetycznego",
                                "abbr": "u",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Pole elektryczne",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość strumienia magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Gęstość energii w medium",
                    "body": [
                        {
                            "label": "Pojemność elektryczna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Pole elektryczne",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość strumienia magnetycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Siła pola magnetycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość energii w medium",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">u</i> = 1/2 * [ (<i" +
                                " class=\"variable\">D</i> * <i class=\"variable\">E</i>) + (<i" +
                                " class=\"variable\">B</i> * <i class=\"variable\">H</i>) ]"
                            },
                            {
                                "desc": "Gęstość energii w medium",
                                "abbr": "u",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pojemność elektryczna",
                                "abbr": "D",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pole elektryczne",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość strumienia magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Siła pola magnetycznego",
                                "abbr": "H",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Gęstość strumienia magnetycznego",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Siła pola magnetycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Namagnesowanie",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość strumienia magnetycznego",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">B</i> = <i" +
                                " class=\"variable\">μ<sub>o</sub></i> * (<i class=\"variable\">H</i> + <i" +
                                " class=\"variable\">M</i>)"
                            },
                            {
                                "desc": "Gęstość strumienia magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Siła pola magnetycznego",
                                "abbr": "H",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Namagnesowanie",
                                "abbr": "M",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Głębokość efektu naskórkowości",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Częstotliwość",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Opór przewodu",
                            "unit": "Ω",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Względna przenikalność magnetyczna przewodu",
                            "unit": "H/m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Głębokość efektu naskórkowości",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">δ</i> = √<i class=\"sqrt-overline\"> (2 *" +
                                " <i class=\"variable\">ρ</i>) / (<i class=\"variable\">ω</i> * <i" +
                                " class=\"variable\">μ<sub>r</sub></i> * <i class=\"variable\">μ<sub>o</sub></i>)"
                            },
                            {
                                "desc": "2π * f",
                                "abbr": "ω",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Głębokość efektu naskórkowości",
                                "abbr": "δ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Opór przewodnika",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Względna przenikalność magnetyczna przewodu",
                                "abbr": "μ",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Impedancja akustyczna",
                    "body": [
                        {
                            "label": "Gęstość",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Impedancja akustyczna",
                        "unit": "Ns/m<sup>3</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Z</i> = <i class=\"variable\">ρ</i> * <i" +
                                " class=\"variable\">V</i>"
                            },
                            {
                                "desc": "Impedancja akustyczna",
                                "abbr": "Z",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość",
                                "abbr": "V",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Impedancja serii AC",
                    "body": [
                        {
                            "label": "Opór",
                            "unit": "Ω",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Reaktancja indukcyjna",
                            "unit": "Ω",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Impedancja serii AC",
                        "unit": "Ω",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Z</i> = √<i class=\"sqrt-overline\"> <i" +
                                " class=\"variable\">R</i><sup>2</sup> + <i class=\"variable\">X<sub>L</sub></i><sup>2</sup>"
                            },
                            {
                                "desc": "Impedancja serii AC",
                                "abbr": "Z",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Opór",
                                "abbr": "R",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Reaktancja indukcyjna",
                                "abbr": "X",
                                "sub": "L",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Indukcyjność",
                    "body": [
                        {
                            "label": "Liczba obrotów drutu cewki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przepuszczalność materiału rdzenia",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Obszar cewki",
                            "unit": "m<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Średnia długość cewki",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Indukcyjność",
                        "unit": "H",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L</i> = (<i class=\"variable\">N</i><sup>2</sup> * <i" +
                                " class=\"variable\">µ</i> * <i class=\"variable\">A</i>) / <i class=\"variable\">I</i>"
                            },
                            {
                                "desc": "Indukcyjność",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba obrotów drutu cewki",
                                "abbr": "N",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność materiału rdzenia",
                                "abbr": "µ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Obszar cewki",
                                "abbr": "A",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średnia długość cewki",
                                "abbr": "I",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Indukcyjność całkowita równoległego obwodu elektrycznego",
                    "body": [
                        {
                            "label": "L<sub>1</sub>",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "L<sub>2</sub>",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Indukcyjność całkowita równoległego obwodu elektrycznego",
                        "unit": "H",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L<sub>c</sub></i> = (<i" +
                                " class=\"variable\">L<sub>1</sub></i> *" +
                                " <i" +
                                " class=\"variable\">L<sub>2</sub></i>) / (<i class=\"variable\">L<sub>1</sub></i> + <i" +
                                " class=\"variable\">L<sub>2</sub></i>)"
                            },
                            {
                                "desc": "Indukcyjność całkowita równoległego obwodu elektrycznego",
                                "abbr": "L",
                                "sub": "c",
                                "sup": ""
                            },
                            {
                                "desc": "Pierwszy induktor",
                                "abbr": "L",
                                "sub": "1",
                                "sup": ""
                            },
                            {
                                "desc": "Drugi induktor",
                                "abbr": "L",
                                "sub": "2",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Indukcyjność drutu",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "a",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "b",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Indukcyjność drutu",
                        "unit": "H",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L</i> = <i class=\"variable\">μ<sub>o</sub></i> * <i" +
                                " class=\"variable\">b</i> * [ln(8 * <i class=\"variable\">b</i> / <i" +
                                " class=\"variable\">a</i>) - 2 ]"
                            },
                            {
                                "desc": "Indukcyjność drutu",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "a, b",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Indukcyjność dwóch równoległych przewodów",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "a",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Indukcyjność drutu",
                        "unit": "H",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L</i> = <i class=\"variable\">μ<sub>o</sub></i> / π *" +
                                " ln(2 * <i class=\"variable\">d</i> / <i class=\"variable\">a</i>)"
                            },
                            {
                                "desc": "Indukcyjność drutu",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Indukcyjność rur koncentrycznych cylindrycznych",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "a",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "b",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Indukcyjność drutu",
                        "unit": "H",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L</i> = <i class=\"variable\">μ<sub>o</sub></i> / 2π *" +
                                " ln(<i class=\"variable\">b</i> / <i class=\"variable\">a</i>)"
                            },
                            {
                                "desc": "Indukcyjność drutu",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "a, b",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Indukcyjność solenoidu (cewki) skierowanego na północ",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Liczba obrotów drutu cewki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Obszar cewki",
                            "unit": "m<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Średnia długość cewki",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Indukcyjność",
                        "unit": "H",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L</i> = (<i class=\"variable\">N</i><sup>2</sup> * <i" +
                                " class=\"variable\">µ<sub>o</sub></i> * <i class=\"variable\">A</i>) / <i" +
                                " class=\"variable\">I</i>"
                            },
                            {
                                "desc": "Indukcyjność",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba obrotów drutu cewki",
                                "abbr": "N",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "µ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Obszar cewki",
                                "abbr": "A",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średnia długość cewki",
                                "abbr": "I",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Indukcyjność spiralnej cewki",
                    "body": [
                        {
                            "label": "Liczba obrotów drutu cewki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Średni promień cewki",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Głębokość cewki",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Indukcyjność",
                        "unit": "H",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L</i> = (<i class=\"variable\">r</i><sup>2</sup> * <i" +
                                " class=\"variable\">N</i><sup>2</sup>) / [ (2 * <i class=\"variable\">r</i> + 2.8 * <i" +
                                " class=\"variable\">d</i>) * 10<sup>5</sup> ]"
                            },
                            {
                                "desc": "Indukcyjność",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średni promień cewki",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba obrotów drutu cewki",
                                "abbr": "N",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Głębokość cewki",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Kąt akceptacji światłowodu",
                    "body": [
                        {
                            "label": "Współczynnik załamania ośrodka zewnętrznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik załamania włókna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik załamania pokrycia",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Kąt akceptacji światłowodu",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">θ<sub>m</sub></i> = sin<sup>-1</sup>[ (1/<i" +
                                " class=\"variable\">η<sub>o</sub></i>) * √<i class=\"sqrt-overline\"><i" +
                                " class=\"variable\">η<sub>f</sub></i><sup>2</sup> - <i" +
                                " class=\"variable\">η<sub>p</sub></i><sup>2</sup></i> ]"
                            },
                            {
                                "desc": "Kąt akceptacji światłowodu",
                                "abbr": "θ",
                                "sub": "m",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania ośrodka zewnętrznego",
                                "abbr": "η",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania włókna",
                                "abbr": "η",
                                "sub": "f",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania pokrycia",
                                "abbr": "η",
                                "sub": "p",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Kąt stożka Cherenkova",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik załamania",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość cząstki",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Kąt stożka Cherenkova",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">θ</i> = sin<sup>-1</sup>(<i class=\"variable\">c</i> /" +
                                " <i class=\"variable\">η</i> * <i class=\"variable\">υ</i>)"
                            },
                            {
                                "desc": "Kąt stożka Cherenkova",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania",
                                "abbr": "η",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość cząstki",
                                "abbr": "υ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Kondensator cylindryczny - pojemność",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna w próżni",
                            "unit": "F/m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość przewodników",
                            "unit": "&nbsp;",
                            "value": "m",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Średnica zewnętrznego przewodnika",
                            "unit": "&nbsp;",
                            "value": "m",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Średnica wewnętrznego przewodnika",
                            "unit": "&nbsp;",
                            "value": "m",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = (2π * <i" +
                                " class=\"variable\">ε</i> * <i class=\"variable\">L</i>) / ln(<i class=\"variable\">b</i>" +
                                " / <i class=\"variable\">a</i>)"
                            },
                            {
                                "desc": "Pojemność",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność",
                                "abbr": "ε",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość przewodników",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średnica zewnętrznego przewodnika",
                                "abbr": "b",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średnica wewnętrznego przewodnika",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Linia wzroku przesyłu (odległość anteny)",
                    "body": [
                        {
                            "label": "Promień Ziemi",
                            "unit": "m",
                            "value": 6.38e6,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Wysokość pierwszej anteny",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Wysokość drugiej anteny",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }

                    ],
                    "footer": {
                        "label": "Odległość anteny",
                        "unit": "m",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">d</i> = √<i class=\"sqrt-overline\"> 2 * <i" +
                                " class=\"variable\">h<sub>1</sub></i> * <i class=\"variable\">R<sub>⊕</sub></i> + <i" +
                                " class=\"variable\">h<sub>1</sub></i><sup>2</sup></i> + √<i class=\"sqrt-overline\"> 2 *" +
                                " <i" +
                                " class=\"variable\">h<sub>2</sub></i> * <i class=\"variable\">R<sub>⊕</sub></i> + <i" +
                                " class=\"variable\">h<sub>2</sub></i><sup>2</sup></i>"
                            },
                            {
                                "desc": "Odległość anteny",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień Ziemi",
                                "abbr": "R",
                                "sub": "⊕",
                                "sup": ""
                            },
                            {
                                "desc": "Wysokość pierwszej anteny",
                                "abbr": "h",
                                "sub": "1",
                                "sup": ""
                            },
                            {
                                "desc": "Wysokość drugiej anteny",
                                "abbr": "h",
                                "sub": "2",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Magazynowanie energii",
                    "body": [
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Różnica potencjalna",
                            "unit": "F",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }

                    ],
                    "footer": {
                        "label": "Zmagazynowana energia",
                        "unit": "J",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">U</i> = (<i class=\"variable\">Q</i> * <i" +
                                " class=\"variable\">V</i>) / 2"
                            },
                            {
                                "desc": "Zmagazynowana energia",
                                "abbr": "U",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "Q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Różnica potencjalna",
                                "abbr": "V",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Mierzenie efektywnej apertury",
                    "body": [
                        {
                            "label": "Częstotliwość",
                            "unit": "MHz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Zysk anteny",
                            "unit": "dBi",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }

                    ],
                    "footer": {
                        "label": "Efektywna apertura",
                        "unit": "m<sup>2</sup>",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">A<sub>e</sub></i> = (<i" +
                                " class=\"variable\">G<sub>r</sub></i> * <i class=\"variable\">λ</i><sup>2</sup>) / (4π)"
                            },
                            {
                                "desc": "Efektywna apertura",
                                "abbr": "A",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Zysk anteny",
                                "abbr": "G",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Moment diamagnetyczny atomu",
                    "body": [
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa elektronu",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Liczba atomowa",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Średnia kwadratowa promienia orbity",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość strumienia magnetycznego",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Moment diamagnetyczny atomu",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">m</i> = <i class=\"variable\">e</i><sup>2</sup> / (6 *" +
                                " <i class=\"variable\">m<sub>e</sub></i>) * (<i class=\"variable\">z</i> * <i" +
                                " class=\"variable\">r</i><sup>2</sup>) * <i class=\"variable\">B</i>"
                            },
                            {
                                "desc": "Moment diamagnetyczny atomu",
                                "abbr": "m",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Masa elektronu",
                                "abbr": "m",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba atomowa",
                                "abbr": "z",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średnia kwadratowa promienia orbity",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość strumienia magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Obszar cewki cylindrycznej",
                    "body": [
                        {
                            "label": "Liczba obrotów drutu cewki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przepuszczalność materiału rdzenia",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Indukcyjność",
                            "unit": "H",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Średnia długość cewki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Obszar cewki cylindrycznej",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">O<sub>c</sub></i> = (<i class=\"variable\">λ</i> * <i" +
                                " class=\"variable\">Φ</i>) / (<i class=\"variable\">N</i><sup>2</sup> * <i" +
                                " class=\"variable\">μ</i>)"
                            },
                            {
                                "desc": "Obszar cewki cylindrycznej",
                                "abbr": "O",
                                "sub": "c",
                                "sup": ""
                            },
                            {
                                "desc": "Średnia długość cewki",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Indukcyjność",
                                "abbr": "Φ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba obrotów drutu cewki",
                                "abbr": "N",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność materiału rdzenia",
                                "abbr": "μ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Parametr plazmowy sfery Debye'a",
                    "body": [
                        {
                            "label": "Gęstość elektronowa",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość elektronu Debye'a",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Parametr plazmowy sfery Debye'a",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">N<sub>De</sub></i> = (4/3) * π * <i" +
                                " class=\"variable\">n<sub>e</sub></i> * <i class=\"variable\">λ<sub>De</sub></i><sup>3</sup>"
                            },
                            {
                                "desc": "Parametr plazmowy sfery Debye'a",
                                "abbr": "N",
                                "sub": "De",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość elektronowa",
                                "abbr": "n",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Długość elektronu Debye'a",
                                "abbr": "λ",
                                "sub": "De",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Perycentrum ruchu orbity w polu grawitacyjnym",
                    "body": [
                        {
                            "label": "Semi Latus Rectum",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ekscentryczność",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Perycentrum ruchu orbity w polu grawitacyjnym",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">r<sub>min</sub></i> = <i class=\"variable\">a</i> * (1" +
                                " - <i class=\"variable\">e</i>)"
                            },
                            {
                                "desc": "Perycentrum ruchu orbity w polu grawitacyjnym",
                                "abbr": "r",
                                "sub": "min",
                                "sup": ""
                            },
                            {
                                "desc": "Semi Latus Rectum",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ekscentryczność",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Elipsa",
                                "abbr": "0 < e < 1",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Okrąg",
                                "abbr": "e = 0",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Parabola",
                                "abbr": "e = 1",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Hiperbola",
                                "abbr": "e > 1",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Podatność magnetyczna",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Stała Boltzmanna",
                            "unit": "&nbsp;",
                            "value": 1.3806488e-23,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość liczby dipolowej",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Wielkość magnetyczna momentu dipola",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Temperatura",
                            "unit": "<sup>o</sup>K",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Podatność magnetyczna",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">L<sub>H</sub></i> = <i" +
                                " class=\"variable\">μ<sub>o</sub></i> * <i class=\"variable\">n</i> * <i" +
                                " class=\"variable\">m<sub>o</sub></i><sup>2</sup> / 3 * <i class=\"variable\">k</i> * <i" +
                                " class=\"variable\">T</i>"
                            },
                            {
                                "desc": "Podatność magnetyczna",
                                "abbr": "L",
                                "sub": "H",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość liczby dipolowej",
                                "abbr": "n",
                                "sub": "",
                                "sup": ""
                            },

                            {
                                "desc": "Wielkość magnetyczna momentu dipola",
                                "abbr": "m",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Boltzmanna",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Temperatura",
                                "abbr": "T",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna",
                    "body": [
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Różnica potencjałów",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = <i class=\"variable\">Q</i> / <i" +
                                " class=\"variable\">V</i>"
                            },
                            {
                                "desc": "Pojemność elektryczna",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "Q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Różnica potencjałów",
                                "abbr": "V",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna dwóch kul",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przenikalność względna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = 8π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i>" +
                                " * <i class=\"variable\">ε<sub>r</sub></i> * <i class=\"variable\">a</i> * ln2"
                            },
                            {
                                "desc": "Pojemność elektryczna dwóch kul",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna okrągłego cylindra",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przenikalność względna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = 4π * <i class=\"variable\">ε<sub>o</sub></i>" +
                                " * <i class=\"variable\">ε<sub>r</sub></i> * <i class=\"variable\">a</i>"
                            },
                            {
                                "desc": "Pojemność elektryczna okrągłego cylindra",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna pomiędzy dwoma koncentrycznymi cylindrami",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przenikalność względna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień pierwszego cylindra",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień drugiego cylindra",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = (2π * <i class=\"variable\">ε<sub>o</sub></i>" +
                                " * <i class=\"variable\">ε<sub>r</sub></i>) / ln(<i" +
                                " class=\"variable\">b</i> / <i class=\"variable\">a</i>)"
                            },
                            {
                                "desc": "Pojemność elektryczna okrągłego cylindra",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Promień pierwszego cylindra",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień drugiego cylindra",
                                "abbr": "b",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna pomiędzy dwoma koncentrycznymi kulami",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przenikalność względna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień pierwszej kuli",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień drugiej kuli",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = 4π * <i class=\"variable\">ε<sub>o</sub></i>" +
                                " * <i class=\"variable\">ε<sub>r</sub></i> * <i class=\"variable\">a</i> * <i" +
                                " class=\"variable\">b</i> * (<i class=\"variable\">b</i> - <i" +
                                " class=\"variable\">a</i>)<sup>-1</sup>"
                            },
                            {
                                "desc": "Pojemność elektryczna koncentrycznych kul",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Promień pierwszej kuli",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień drugiej kuli",
                                "abbr": "b",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna pomiędzy <br />równoległymi i koncentrycznymi dyskami tarczowymi",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> ≃ (<i class=\"variable\">ε<sub>o</sub></i> * <i" +
                                " class=\"variable\">ε<sub>r</sub></i> * π * <i class=\"variable\">a</i><sup>2</sup> / <i" +
                                " class=\"variable\">d</i>) + <i class=\"variable\">ε<sub>o</sub></i> * <i" +
                                " class=\"variable\">ε<sub>r</sub></i> * <i class=\"variable\">a</i> * [ ln((16π * <i" +
                                " class=\"variable\">a</i>) / d) - 1 ]"
                            },
                            {
                                "desc": "Pojemność elektryczna koncentrycznych kul",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Promień pierwszej kuli",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna pomiędzy dwoma równoległymi cylindrami",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "C/V",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = π * <i class=\"variable\">ε<sub>o</sub></i> *" +
                                " <i class=\"variable\">l</i> / cosh<sup>-1</sup>(<i" +
                                " class=\"variable\">d</i> / 2 * <i class=\"variable\">r </i>)"
                            },
                            {
                                "desc": "Pojemność elektryczna koncentrycznych kul",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Długość",
                                "abbr": "l",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            }

                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna powierzchni prawie sferycznej",
                    "body": [
                        {
                            "label": "Przenikalność względna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Obszar",
                            "unit": "m<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> ≃ 3.139 * 10<sup>-11</sup> * <i" +
                                " class=\"variable\">ε<sub>r</sub></i> * √<i" +
                                " class=\"variable sqrt-overline\">S</i>"
                            },
                            {
                                "desc": "Pojemność elektryczna powierzchni prawie sferycznej",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Obszar",
                                "abbr": "S",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna sferycznego kondensatora",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przenikalność względna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = 8 * <i" +
                                " class=\"variable\">ε<sub>o</sub></i>" +
                                " * <i class=\"variable\">ε<sub>r</sub></i> * <i class=\"variable\">a</i>"
                            },
                            {
                                "desc": "Pojemność elektryczna sferycznego kondensatora",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność elektryczna sześcianu",
                    "body": [
                        {
                            "label": "Przenikalność względna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> ≃ 7.283 * 10<sup>-11</sup> * <i" +
                                " class=\"variable\">ε<sub>r</sub></i> * <i" +
                                " class=\"variable\">a</i>"
                            },
                            {
                                "desc": "Pojemność elektryczna sześcianu",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność względna",
                                "abbr": "ε",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pojemność równoległych płyt kondensatora",
                    "body": [
                        {
                            "label": "Przenikalność",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Obszar",
                            "unit": "m<sup>2</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość odseparowania",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pojemność elektryczna",
                        "unit": "F",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">C</i> = (<i class=\"variable\">ε</i> * <i" +
                                " class=\"variable\">A</i>) / <i class=\"variable\">s</i>"
                            },
                            {
                                "desc": "Pojemność elektryczna sześcianu",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność",
                                "abbr": "ε",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Obszar",
                                "abbr": "A",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość odseparowania",
                                "abbr": "s",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole depolaryzacji",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik depolaryzacji",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Polaryzacja",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole depolaryzacji",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E<sub>d</sub></i> = - [ (<i" +
                                " class=\"variable\">N<sub>d</sub></i> * <i class=\"variable\">P</i>) / <i" +
                                " class=\"variable\">ε<sub>o</sub></i> ]"
                            },
                            {
                                "desc": "Pole depolaryzacji",
                                "abbr": "E",
                                "sub": "d",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik depolaryzacji",
                                "abbr": "N",
                                "sub": "d",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Polaryzacja",
                                "abbr": "P",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne na punkt ładowania",
                    "body": [
                        {
                            "label": "Moc",
                            "unit": "W",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Punkt ładowania",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E</i> = <i class=\"variable\">P</i> * <i" +
                                " class=\"variable\">F</i>"
                            },
                            {
                                "desc": "Pole elektryczne na punkt ładowania",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Moc",
                                "abbr": "P",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Punkt ładowania",
                                "abbr": "F",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne dipola w określonym punkcie",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Moment",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne dipola w określonym punkcie",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E<sub>r</sub></i> = [ <i" +
                                " class=\"variable\">p</i> * cos(<i class=\"variable\">θ</i>) ] / (2π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">r</i><sup>3</sup>)"
                            },
                            {
                                "desc": "Pole elektryczne dipola w określonym punkcie",
                                "abbr": "E",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Moment",
                                "abbr": "p",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne dipola we współrzędnych biegunowych",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Moment",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne dipola we współrzędnych biegunowych",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E<sub>r</sub></i> = [ <i" +
                                " class=\"variable\">p</i> * sin(<i class=\"variable\">θ</i>) ] / (4π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">r</i><sup>3</sup>)"
                            },
                            {
                                "desc": "Pole elektryczne dipola we współrzędnych biegunowych",
                                "abbr": "E",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Moment",
                                "abbr": "p",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne naładowanej linii",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość ładowania",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne naładowanej linii",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E</i> = [ <i class=\"variable\">ρ</i> * (2π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">r</i><sup>2</sup>) ]" +
                                " * <i class=\"variable\">r</i>"
                            },
                            {
                                "desc": "Pole elektryczne naładowanej linii",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość powierzchni",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne naładowanej powierzchni",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość powierzchni",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne naładowanej powierzchni",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E</i> = <i" +
                                " class=\"variable\">ρ</i> / (2 * <i class=\"variable\">ε<sub>o</sub></i>)"
                            },
                            {
                                "desc": "Pole elektryczne naładowanej powierzchni",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość powierzchni",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne naładowanej równomiernie kuli",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień naładowanej równomiernie kuli",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień kuli Gaussa",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne naładowanej równomiernie kuli",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E</i> = [ <i class=\"variable\">q</i> / (4π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">a</i><sup>3</sup>) ]" +
                                " * <i class=\"variable\">r</i>"
                            },
                            {
                                "desc": "Pole elektryczne naładowanej równomiernie kuli",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień naładowanej równomiernie kuli",
                                "abbr": "a",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień kuli Gaussa",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne naładowanej równomiernie kuli Gaussa",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień kuli Gaussa",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne naładowanej równomiernie kuli Gaussa",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E</i> = <i class=\"variable\">q</i> / (4π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">a</i><sup>2</sup>)"
                            },
                            {
                                "desc": "Pole elektryczne naładowanej równomiernie kuli Gaussa",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień kuli Gaussa",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole elektryczne naładowanej równomiernie osi dysku",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień dysku",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Oś",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole elektryczne naładowanej równomiernie osi dysku",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">E</i> = [ <i class=\"variable\">q</i> / (2π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">r</i><sup>2</sup>) ]" +
                                " * <i class=\"variable\">z</i> * [ (1 / |<i class=\"variable\">z</i>|) - (1 / √<i" +
                                " class=\"sqrt-overline\"> <i class=\"variable\">z</i><sup>2</sup> + <i" +
                                " class=\"variable\">r</i><sup>2</sup></i>) ]"
                            },
                            {
                                "desc": "Pole elektryczne naładowanej równomiernie osi dysku",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Promień dysku",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Oś",
                                "abbr": "z",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole magnetyczne dipola magnetycznego bazowanego na kącie",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Moment",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt pomiędzy momentem a promieniem",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole magnetyczne dipola magnetycznego bazowanego na kącie",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">B<sub>θ</sub></i> = [ <i" +
                                " class=\"variable\">μ<sub>o</sub></i> * <i class=\"variable\">m</i> * sin(<i" +
                                " class=\"variable\">θ</i>) ] / (4π * <i class=\"variable\">r</i><sup>3</sup>)"
                            },
                            {
                                "desc": "Pole magnetyczne dipola magnetycznego bazowanego na kącie",
                                "abbr": "B",
                                "sub": "θ",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Moment",
                                "abbr": "m",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt pomiędzy momentem a promieniem",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole magnetyczne dipola magnetycznego bazowanego na promieniu",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Moment",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt pomiędzy momentem a promieniem",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Promień",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole magnetyczne dipola magnetycznego bazowanego na promieniu",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">B<sub>r</sub></i> = <i" +
                                " class=\"variable\">μ<sub>o</sub></i> * [ <i class=\"variable\">m</i> * cos(<i" +
                                " class=\"variable\">θ</i>) / (2π * <i class=\"variable\">r</i><sup>3</sup>) ]"
                            },
                            {
                                "desc": "Pole magnetyczne dipola magnetycznego bazowanego na promieniu",
                                "abbr": "B",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Moment",
                                "abbr": "m",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Promień",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt pomiędzy momentem a promieniem",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pole magnetyczne solenoidu (cewki) bazowanego na osi",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Liczba obrotów drutu cewki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Natężenie",
                            "unit": "A",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt a",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt b",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Pole magnetyczne solenoidu (cewki) bazowanego na osi",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">B<sub>osi</sub></i> = [ (<i" +
                                " class=\"variable\">μ<sub>o</sub></i> * <i class=\"variable\">n</i> * <i" +
                                " class=\"variable\">I</i>) / 2 ] * [ cos(<i class=\"variable\">x</i>) - cos(<i" +
                                " class=\"variable\">y</i>) ]"
                            },
                            {
                                "desc": "Pole magnetyczne solenoidu (cewki) bazowanego na osi",
                                "abbr": "B",
                                "sub": "osi",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba obrotów drutu cewki",
                                "abbr": "n",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Natężenie",
                                "abbr": "I",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt a",
                                "abbr": "x",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt b",
                                "abbr": "y",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Potencjał elektryczny ruchomego punktu <br />liczonego przy pomocy potencjału" +
                    " Lienarda-Wiecherta",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Wektor pomiędzy ładunkiem a punktem elektrycznym",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość cząstki",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Potencjał elektryczny",
                        "unit": "V",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Φ</i> = <i class=\"variable\">q</i> / [ (4π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i>) * (|<i class=\"variable\">r</i>| - (<i" +
                                " class=\"variable\">v</i> * <i class=\"variable\">r</i> / <i" +
                                " class=\"variable\">c</i>)) ]"
                            },
                            {
                                "desc": "Potencjał elektryczny",
                                "abbr": "Φ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość cząstki",
                                "abbr": "v",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wektor pomiędzy ładunkiem a punktem elektrycznym",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Potencjał skuteczności ekranowania Debye'a",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość od ładunku elektrycznego",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość elektronu Debye'a",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Potencjał skuteczności ekranowania Debye'a",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Φ<sub>r</sub></i> = [ <i class=\"variable\">q</i>" +
                                " *" +
                                " exp(-√<i" +
                                " class=\"sqrt-overline\">2</i> * (<i class=\"variable\">r</i> / <i" +
                                " class=\"variable\">λ<sub>De</sub></i>)) ] / (4π * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">r</i>)"
                            },
                            {
                                "desc": "Potencjał skuteczności ekranowania Debye'a",
                                "abbr": "Φ",
                                "sub": "r",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość od ładunku elektrycznego",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość elektronu Debye'a",
                                "abbr": "λ",
                                "sub": "De",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            }

                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość Alfvena",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość strumienia magnetycznego",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość masy plazmy",
                            "unit": "kg/m<sup>3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość Alfvena",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">V<sub>A</sub></i> = <i class=\"variable\">B</i>" +
                                " / √<i class=\"sqrt-overline\"> <i class=\"variable\">ε<sub>o</sub></i> * <i" +
                                " class=\"variable\">ρ</i></i>"
                            },
                            {
                                "desc": "Prędkość Alfvena",
                                "abbr": "V",
                                "sub": "A",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość strumienia magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość masy plazmy",
                                "abbr": "ρ",
                                "sub": "",
                                "sup": ""
                            }

                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość fazowa/grupowa w plaźmie",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik załamania światła",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość fazowa/grupowa w plaźmie",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">V<sub>φ</sub></i> = <i class=\"variable\">c</i>" +
                                " / <i class=\"variable\">η</i>"
                            },
                            {
                                "desc": "Prędkość fazowa/grupowa w plaźmie",
                                "abbr": "V",
                                "sub": "φ",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania światła",
                                "abbr": "η",
                                "sub": "",
                                "sup": ""
                            }

                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Prędkość termiczna elektronu w plaźmie",
                    "body": [
                        {
                            "label": "Stała Boltzmanna",
                            "unit": "&nbsp;",
                            "value": 1.3806503e-23,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Masa elektronu",
                            "unit": "kg",
                            "value": 9.10938188e-31,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Temperatura elektronu",
                            "unit": "<sup>o</sup>K",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Prędkość termiczna elektronu w plaźmie",
                        "unit": "m/s",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">V<sub>Te</sub></i> = √<i" +
                                " class=\"sqrt-overline\"> (2 * <i class=\"variable\">k<sub>b</sub></i> * <i" +
                                " class=\"variable\">T<sub>e</sub></i>) / <i class=\"variable\">m<sub>e</sub></i></i>"
                            },
                            {
                                "desc": "Prędkość termiczna elektronu w plaźmie",
                                "abbr": "V",
                                "sub": "Te",
                                "sup": ""
                            },
                            {
                                "desc": "Stała Boltzmanna",
                                "abbr": "k",
                                "sub": "B",
                                "sup": ""
                            },
                            {
                                "desc": "Temperatura elektronu",
                                "abbr": "T",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Masa elektronu",
                                "abbr": "m",
                                "sub": "e",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Promień cyklotronu liczony przy pomocy procesji Larmora",
                    "body": [
                        {
                            "label": "Prędkość prostopadła do gęstości strumienia magnetycznego",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Częstotliwość kątowa cyklotronu",
                            "unit": "rad/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Promień cyklotronu liczony przy pomocy procesji Larmora",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">r<sub>L</sub></i> = <i" +
                                " class=\"variable\">v<sub>⊥</sub></i> / <i class=\"variable\">ω<sub>c</sub></i>"
                            },
                            {
                                "desc": "Promień cyklotronu liczony przy pomocy procesji Larmora",
                                "abbr": "r",
                                "sub": "L",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość prostopadła do gęstości strumienia magnetycznego",
                                "abbr": "v",
                                "sub": "⊥",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość kątowa cyklotronu",
                                "abbr": "ω",
                                "sub": "c",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Pryzmat minimalnego kąta odchylenia",
                    "body": [
                        {
                            "label": "Kąt padania",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt przesyłu",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt wierzchołkowy",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Kąt odchylenia",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">δ</i> = <i" +
                                " class=\"variable\">θ<sub>i</sub></i> + <i class=\"variable\">θ<sub>t</sub></i> - <i class=\"variable\">α</i>"
                            },
                            {
                                "desc": "Kąt odchylenia",
                                "abbr": "δ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt padania",
                                "abbr": "θ",
                                "sub": "i",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt przesyłu",
                                "abbr": "θ",
                                "sub": "t",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt wierzchołkowy",
                                "abbr": "α",
                                "sub": "",
                                "sup": ""
                            }

                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Przewodnictwo elektryczne w przestrzeni plazmy",
                    "body": [
                        {
                            "label": "Ładunek elektronu",
                            "unit": "C",
                            "value": -1.602176462e-19,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość strumienia magnetycznego",
                            "unit": "T",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Gęstość elektronowa",
                            "unit": "m<sup>-3</sup>",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Konduktywność",
                            "unit": "S/m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Przewodnictwo bezpośrednie",
                            "unit": "S/m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Przewodnictwo elektryczne w przestrzeni plazmy",
                        "unit": "S/m",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">σ<sub>H</sub></i> = [ (<i" +
                                " class=\"variable\">σ</i> * <i class=\"variable\">B</i>) / (<i" +
                                " class=\"variable\">n<sub>e</sub></i> * <i class=\"variable\">e</i>) ] * <i" +
                                " class=\"variable\">σ<sub>d</sub></i>"
                            },
                            {
                                "desc": "Przewodnictwo elektryczne w przestrzeni plazmy",
                                "abbr": "σ",
                                "sub": "H",
                                "sup": ""
                            },
                            {
                                "desc": "Konduktywność",
                                "abbr": "σ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość strumienia magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Gęstość elektronowa",
                                "abbr": "n",
                                "sub": "e",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektronu",
                                "abbr": "e",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przewodnictwo bezpośrednie",
                                "abbr": "σ",
                                "sub": "d",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Reaktancja indukcyjna",
                    "body": [
                        {
                            "label": "Częstotliwość",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Indukcyjność",
                            "unit": "H",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Reaktancja indukcyjna",
                        "unit": "Ω",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">X<sub>L</sub></i> = 2π * <i" +
                                " class=\"variable\">f</i> * <i class=\"variable\">L</i>"
                            },
                            {
                                "desc": "Reaktancja indukcyjna",
                                "abbr": "X",
                                "sub": "L",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Indukcyjność",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Reaktancja pojemnościowa",
                    "body": [
                        {
                            "label": "Częstotliwość",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Indukcyjność",
                            "unit": "H",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Reaktancja pojemnościowa",
                        "unit": "Ω",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">X<sub>C</sub></i> = 1 / (2π * <i" +
                                " class=\"variable\">f</i> * <i class=\"variable\">C</i>)"
                            },
                            {
                                "desc": "Reaktancja pojemnościowa",
                                "abbr": "X",
                                "sub": "L",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pojemność",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Rezonans równoległy w obwodzie LC",
                    "body": [
                        {
                            "label": "Wartość kondensatora",
                            "unit": "F",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Indukcyjność",
                            "unit": "H",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Częstotliwość rezonansowa",
                        "unit": "Hz",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">X<sub>C</sub></i> = 1 / 2π * √<i" +
                                " class=\"sqrt-overline\"> <i" +
                                " class=\"variable\">L</i> * <i class=\"variable\">C</i></i>"
                            },
                            {
                                "desc": "Częstotliwość rezonansowa",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Indukcyjność",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wartość kondensatora",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Siła elektromagnetyczna liczona przy pomocy prawa Lorentza",
                    "body": [
                        {
                            "label": "Pole elektryczne",
                            "unit": "V/m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Pole elektromagnetyczne",
                            "unit": "T",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Siła elektromagnetyczna",
                        "unit": "Hz",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">F</i> = <i class=\"variable\">q</i> * [ <i" +
                                " class=\"variable\">E</i> + (<i class=\"variable\">v</i> * <i" +
                                " class=\"variable\">B</i>) ]"
                            },
                            {
                                "desc": "Siła elektromagnetyczna",
                                "abbr": "F",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pole elektryczne",
                                "abbr": "E",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pole elektromagnetyczne",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość",
                                "abbr": "v",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Siła pola magnetycznego",
                    "body": [
                        {
                            "label": "Pole magnetyczne",
                            "unit": "T",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Siła elektromagnetyczna",
                        "unit": "Hz",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">F</i> = <i class=\"variable\">q</i> * <i" +
                                " class=\"variable\">v</i> * <i class=\"variable\">B</i> * sin(<i" +
                                " class=\"variable\">θ</i>)"
                            },
                            {
                                "desc": "Siła magnetyczna",
                                "abbr": "F",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość",
                                "abbr": "v",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pole magnetyczne",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Straty przesyłowe pomiędzy dwoma antenami <br />liczone przy pomocy równania strat" +
                    " przesyłowych Friisa",
                    "body": [
                        {
                            "label": "Zysk anteny nadawczej",
                            "unit": "dBi",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Zysk anteny odbiorczej",
                            "unit": "dBi",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość przesyłu dwóch anten",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Strata przesyłowa",
                        "unit": "dB",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">P<sub>L</sub></i> = 10 * log(4π * <i" +
                                " class=\"variable\">d</i> / <i class=\"variable\">λ</i>)<sup>2</sup> - <i" +
                                " class=\"variable\">G<sub>T</sub></i> - <i class=\"variable\">G<sub>R</sub></i>"
                            },
                            {
                                "desc": "Strata przesyłowa",
                                "abbr": "P",
                                "sub": "L",
                                "sup": ""
                            },
                            {
                                "desc": "Zysk anteny nadawczej",
                                "abbr": "G",
                                "sub": "T",
                                "sup": ""
                            },
                            {
                                "desc": "Zysk anteny odbiorczej",
                                "abbr": "G",
                                "sub": "R",
                                "sup": ""
                            },
                            {
                                "desc": "Długość przesyłu dwóch anten",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Szerokość wiązki anteny",
                    "body": [
                        {
                            "label": "Średnica",
                            "unit": "m",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Częstotliwość",
                            "unit": "GHz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Szerokość wiązki anteny 3 dB",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">W</i> = 70 * <i class=\"variable\">λ</i> / <i" +
                                " class=\"variable\">D</i>"
                            },
                            {
                                "desc": "Szerokość wiązki anteny 3 dB",
                                "abbr": "W",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Średnica",
                                "abbr": "D",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Szyk antenowy",
                    "body": [
                        {
                            "label": "Kąt biegunowy",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Różnica faz dwóch pierwiastków",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość pomiędzy oboma elementami",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Liczba elementów w szyku",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Szerokość wiązki anteny 3 dB",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">A<sub>F</sub></i> = sin(<i" +
                                " class=\"variable\">N</i> * <i class=\"variable\">φ</i> / 2) / sin(<i" +
                                " class=\"variable\">φ</i> / 2)"
                            },
                            {
                                "desc": "2π / λ",
                                "abbr": "k",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "k * d * Cos(θ) + β",
                                "abbr": "φ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Szyk antenowy",
                                "abbr": "A",
                                "sub": "F",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt biegunowy",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Różnica faz dwóch pierwiastków",
                                "abbr": "β",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość pomiędzy każdymi dwoma elementami",
                                "abbr": "d",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Liczba elementów w szyku",
                                "abbr": "N",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Średnia gęstość strumienia oscylacyjnego dipola elektrycznego",
                    "body": [
                        {
                            "label": "Przenikalność elektryczna próżni",
                            "unit": "F/m",
                            "value": 8.854187817e-12,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Częstotliwość oscylacji",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Amplituda momentu dipola",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Wektor od dipola",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Gęstość strumienia oscylacyjnego",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">N</i> = [ (<i" +
                                " class=\"variable\">ω</i><sup>4</sup> * <i" +
                                " class=\"variable\">p<sub>o</sub></i><sup>2</sup> * sin<sup>2</sup>(<i" +
                                " class=\"variable\">θ</i>)) / (32π<sup>2</sup> * <i" +
                                " class=\"variable\">ε<sub>o</sub></i> * <i class=\"variable\">c</i><sup>3</sup> *" +
                                " <i class=\"variable\">r</i><sup>3</sup>) ] * <i class=\"variable\">v</i>"
                            },
                            {
                                "desc": "Średnia gęstość strumienia oscylacyjnego dipola elektrycznego",
                                "abbr": "N",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość oscylacji",
                                "abbr": "ω",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Amplituda momentu dipola",
                                "abbr": "p",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "ε",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wektor od dipola",
                                "abbr": "v",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wartość Finesse liczona przy pomocy współczynnika <br />Finesse interferometru" +
                    " Fabry'ego-Perota",
                    "body": [
                        {
                            "label": "Współczynnik Finesse",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Finesse",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">f</i> = (π / 2) * √<i class=\"sqrt-overline" +
                                " variable\">F</i>"
                            },
                            {
                                "desc": "Finesse",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik Finesse",
                                "abbr": "F",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wartość Finesse liczona przy pomocy współczynnika <br />jakości promieniowania interferometru Fabry'ego-Perota",
                    "body": [
                        {
                            "label": "Pusta przestrzeń w fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik załamania ośrodka",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Szerokość wnęki",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik jakości promieniowania",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Finesse",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">f</i> = (<i class=\"variable\">λ<sub>o</sub></i>" +
                                " / <i class=\"variable\">η\'</i> * <i class=\"variable\">h</i>) * <i" +
                                " class=\"variable\">Q</i>"
                            },
                            {
                                "desc": "Finesse",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pusta przestrzeń w fali",
                                "abbr": "λ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania ośrodka",
                                "abbr": "η",
                                "sub": "",
                                "sup": "\'"
                            },
                            {
                                "desc": "Szerokość wnęki",
                                "abbr": "h",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik jakości promieniowania",
                                "abbr": "Q",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wartość indukcji pola magnetycznego liczona przy pomocy prawa Biota-Savarta",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Kąt",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Odległość",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Punkt ładowania",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Wartość indukcji pola magnetycznego",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">B</i> = (<i class=\"variable\">μ<sub>o</sub></i> /" +
                                " 4π) * (<i class=\"variable\">Q</i> * <i class=\"variable\">v</i> * sin(<i" +
                                " class=\"variable\">θ</i>) / <i class=\"variable\">r</i><sup>2</sup>)"
                            },
                            {
                                "desc": "Wartość indukcji pola magnetycznego",
                                "abbr": "B",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przepuszczalność próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Punkt ładowania",
                                "abbr": "Q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość",
                                "abbr": "v",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Kąt pomiędzy prędkością a odległością",
                                "abbr": "θ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Odległość",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wektor magnetyczny ruchomego punktu <br />liczonego przy pomocy potencjału" +
                    " Lienarda-Wiecherta",
                    "body": [
                        {
                            "label": "Przepuszczalność próżni",
                            "unit": "&nbsp;",
                            "value": 12.566370614e-7,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Wektor pomiędzy ładunkiem a punktem elektrycznym",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Prędkość cząstki",
                            "unit": "m/s",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Wektor magnetyczny",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">A</i> = (<i class=\"variable\">q</i> * <i" +
                                " class=\"variable\">μ<sub>o</sub></i> * <i class=\"variable\">v</i>) / [ (4π" +
                                " ) * (|<i class=\"variable\">r</i>| - (<i class=\"variable\">v</i> * <i class=\"variable\">r</i> / <i" +
                                " class=\"variable\">c</i>)) ]"
                            },
                            {
                                "desc": "Wektor magnetyczny",
                                "abbr": "A",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Przenikalność elektryczna próżni",
                                "abbr": "μ",
                                "sub": "o",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość cząstki",
                                "abbr": "v",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Wektor pomiędzy ładunkiem a punktem elektrycznym",
                                "abbr": "r",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wielomodowa dyspersja włókna optycznego",
                    "body": [
                        {
                            "label": "Prędkość światła",
                            "unit": "m/s",
                            "value": 299792458,
                            "class": "const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość włókna",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": true,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik załamania włókna",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Współczynnik załamania materiału",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Dyspersja włókna optycznego",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": false,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Δt</i> = <i class=\"variable\">L</i> * [ (<i" +
                                " class=\"variable\">n<sub>f</sub></i> / <i class=\"variable\">c</i>) * (<i" +
                                " class=\"variable\">n<sub>f</sub></i> / <i class=\"variable\">n<sub>c</sub></i> - 1) ]"
                            },
                            {
                                "desc": "Dyspersja włókna optycznego",
                                "abbr": "Δt",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość włókna",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania włókna",
                                "abbr": "η",
                                "sub": "f",
                                "sup": ""
                            },
                            {
                                "desc": "Prędkość światła",
                                "abbr": "c",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik załamania materiału",
                                "abbr": "η",
                                "sub": "c",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Współczynnik Finesse interferometra Fabry'ego-Perota",
                    "body": [
                        {
                            "label": "Siła odbicia od powierzchni",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Finesse",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">f</i> = 4 * <i class=\"variable\">R</i> / (1 -" +
                                " <i class=\"variable\">R</i>)<sup>2</sup>"
                            },
                            {
                                "desc": "Finesse",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Siła odbicia od powierzchni",
                                "abbr": "R",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Wspołczynnik jakości induktora",
                    "body": [
                        {
                            "label": "Częstotliwość",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Indukcyjność",
                            "unit": "H",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Rezystancja wewnętrzna",
                            "unit": "Ω",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Wspołczynnik jakości induktora",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">Q</i> = <i class=\"variable\">ω</i> * <i" +
                                " class=\"variable\">L</i> / <i class=\"variable\">R</i>"
                            },
                            {
                                "desc": "2π * f",
                                "abbr": "ω",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Współczynnik jakości induktora",
                                "abbr": "Q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Indukcyjność",
                                "abbr": "L",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Rezystancja wewnętrzna",
                                "abbr": "R",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Współczynnik załamania światła w plaźmie",
                    "body": [
                        {
                            "label": "Częstotliwość plazmy",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Częstotliwość",
                            "unit": "Hz",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Współczynnik załamania światła w plaźmie",
                        "unit": "&nbsp;",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">η</i> = √<i class=\"sqrt-overline\"> 1 - (<i" +
                                " class=\"variable\">f<sub>p</sub></i> / <i class=\"variable\">f</i><sup>2</sup>)</i>"
                            },
                            {
                                "desc": "Współczynnik załamania światła w plaźmie",
                                "abbr": "η",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość plazmy",
                                "abbr": "f",
                                "sub": "p",
                                "sup": ""
                            },
                            {
                                "desc": "Częstotliwość",
                                "abbr": "f",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Zmagazynowana energia poprzez ładunek elektryczny",
                    "body": [
                        {
                            "label": "Pojemność",
                            "unit": "F",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Ładunek elektryczny",
                            "unit": "C",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Zmagazynowana energia",
                        "unit": "J",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">U</i> = <i class=\"variable\">Q</i><sup>2</sup>" +
                                " / 2 * <i class=\"variable\">C</i>"
                            },
                            {
                                "desc": "Zmagazynowana energia",
                                "abbr": "U",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Ładunek elektryczny",
                                "abbr": "Q",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pojemność",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Zmagazynowana energia poprzez poprzez różnicę potencjałów",
                    "body": [
                        {
                            "label": "Pojemność",
                            "unit": "F",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Różnica potencjałów",
                            "unit": "V",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Zmagazynowana energia",
                        "unit": "J",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">U</i> = <i class=\"variable\">C</i> * <i" +
                                " class=\"variable\">V</i><sup>2</sup> / 2"
                            },
                            {
                                "desc": "Zmagazynowana energia",
                                "abbr": "U",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Pojemność",
                                "abbr": "C",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Różnica potencjałów",
                                "abbr": "V",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            },
            {
                "calculator": {
                    "header": "Zysk anteny dBi",
                    "body": [
                        {
                            "label": "Wydajność",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Długość fali",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        },
                        {
                            "label": "Obszar apertury",
                            "unit": "&nbsp;",
                            "value": "",
                            "class": "not-const",
                            "selectLength": false,
                            "selectWeight": false
                        }
                    ],
                    "footer": {
                        "label": "Zysk anteny dBi",
                        "unit": "dB",
                        "value": "",
                        "selectLength": true,
                        "selectWeight": false
                    }
                },
                "formula": {
                    "header": "Formuła",
                    "body": {
                        "pattern": [
                            {
                                "blueprint": "<i class=\"variable\">G<sub>dBi</sub></i> = 10 * log(<i" +
                                " class=\"variable\">η</i> * 4π * <i class=\"variable\">A</i> / <i" +
                                " class=\"variable\">λ</i><sup>2</sup>)"
                            },
                            {
                                "desc": "Zysk anteny dBi",
                                "abbr": "G",
                                "sub": "dBi",
                                "sup": ""
                            },
                            {
                                "desc": "Wydajność",
                                "abbr": "η",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Długość fali",
                                "abbr": "λ",
                                "sub": "",
                                "sup": ""
                            },
                            {
                                "desc": "Obszar apertury",
                                "abbr": "A",
                                "sub": "",
                                "sup": ""
                            }
                        ]
                    }
                }
            }
        ],
        "Fizyka Klasyczna": [],
        "Geofizyka": [],
        "Mechanika Płynów": [],
        "Termodynamika": []
    }
};