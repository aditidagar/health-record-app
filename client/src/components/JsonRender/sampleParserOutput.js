const sample = {"body": [
    {
      "ID": "39617.100004300",
      "order": 17,
      "title": "# This checklist applies principally to adrenal carcinomas in adults. Pediatric adrenal cortical tumors have different criteria for malignancy and are, in general, treated under protocols that may differ significantly from the recommendations for adult- type tumors.",
      "type": "DisplayedItem"
    },
    {
      "ID": "4257.100004300",
      "order": 19,
      "title": "",
      "minCard": "0",
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "2118.100004300",
          "order": 21,
          "title": "",
          "minCard": "0",
          "maxCard": 1,
          "list": [
            {
              "ID": "2119.100004300",
              "order": 25,
              "title": "Adrenal gland",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            }
          ],
          "type": "QS"
        }
      ]
    },
    {
      "ID": "17537.100004300",
      "order": 27,
      "title": "CLINICAL",
      "minCard": "0",
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "4156.100004300",
          "order": 29,
          "title": "Clinical History (specify)",
          "minCard": "0",
          "maxCard": 1,
          "responseField": {
            "dType": "string",
            "maxLength": "4000",
            "responseRequired": true,
            "textAfterResponse": ""
          },
          "type": "QR"
        },
        {
          "ID": "53772.100004300",
          "order": 34,
          "title": "Functional Status (Notes J and K)",
          "minCard": "0",
          "maxCard": 1,
          "maxSelections": "0",
          "minSelections": 1,
          "list": [
            {
              "ID": "20900.100004300",
              "order": 38,
              "title": "Urinary 17-ketosteroids increased (10 mg / g creatinine / 24 hours)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20902.100004300",
              "order": 39,
              "title": "Cushing syndrome",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20904.100004300",
              "order": 40,
              "title": "Conn syndrome",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "43052.100004300",
              "order": 41,
              "title": "Virilization",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "44618.100004300",
              "order": 42,
              "title": "Feminization",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20906.100004300",
              "order": 43,
              "title": "Weight loss",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20907.100004300",
              "order": 44,
              "title": "Other (specify)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QM"
        }
      ]
    },
    {
      "ID": "17875.100004300",
      "order": 49,
      "title": "SPECIMEN",
      "minCard": 1,
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "42554.100004300",
          "order": 51,
          "title": "Procedure",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "50809.100004300",
              "order": 54,
              "title": "Percutaneous needle biopsy",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "46633.100004300",
              "order": 55,
              "title": "Endoscopic directed biopsy (specify radiographic technique)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            },
            {
              "ID": "2122.100004300",
              "order": 60,
              "title": "Adrenalectomy, total",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2121.100004300",
              "order": 61,
              "title": "Adrenalectomy, partial",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2123.100004300",
              "order": 62,
              "title": "Other (specify)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            },
            {
              "ID": "2124.100004300",
              "order": 67,
              "title": "Not specified",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            }
          ],
          "type": "QS"
        },
        {
          "ID": "52756.100004300",
          "order": 68,
          "title": "Specimen Laterality",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "2126.100004300",
              "order": 71,
              "title": "Right",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2127.100004300",
              "order": 72,
              "title": "Left",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "56812.100004300",
              "order": 73,
              "title": "Bilateral",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2128.100004300",
              "order": 74,
              "title": "Not specified",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20866.100004300",
              "order": 75,
              "title": "Other (specify)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QS"
        }
      ]
    },
    {
      "ID": "17876.100004300",
      "order": 80,
      "title": "TUMOR",
      "minCard": 1,
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "59852.100004300",
          "order": 82,
          "title": "Histologic Type (Notes C through E)",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "46925.100004300",
              "order": 86,
              "title": "Adrenal cortical carcinoma, oncocytic type",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2117.100004300",
              "order": 87,
              "title": "Adrenal cortical carcinoma",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "44449.100004300",
              "order": 88,
              "title": "Adrenal cortical carcinoma, myxoid type",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "59162.100004300",
              "order": 89,
              "title": "Adrenal cortical carcinoma, sarcomatoid type",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            }
          ],
          "childItems": [
            {
              "ID": "43670.100004300",
              "order": 91,
              "title": "Histologic Type Comments",
              "minCard": "0",
              "maxCard": 1,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": true,
                "textAfterResponse": ""
              },
              "type": "QR"
            }
          ],
          "type": "QS"
        },
        {
          "ID": "49275.100004300",
          "order": 95,
          "title": "Histologic Grade (Notes C through E)",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "53603.100004300",
              "order": 99,
              "title": "Low grade (&lt;= 20 mitoses / 50 high-power fields)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "48634.100004300",
              "order": 101,
              "title": "High grade (&gt; 20 mitoses / 50 high-power fields)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "57980.100004300",
              "order": 103,
              "title": "#Note: Generally due to core needle biopsy, with insufficient viable tumor to count 50 HPFs.",
              "type": "DisplayedItem"
            },
            {
              "ID": "54648.100004300",
              "order": 105,
              "title": "Cannot be assessed (explain)#",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QS"
        },
        {
          "ID": "2129.100004300",
          "order": 110,
          "title": "Tumor Size (Note A)",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "2131.100004300",
              "order": 114,
              "title": "Greatest dimension in Centimeters (cm)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "decimal",
                "maxInclusive": "100.000000000",
                "minInclusive": "0.001000000",
                "fractionDigits": "3",
                "totalDigits": "5",
                "responseRequired": "true",
                "textAfterResponse": "Centimeters (cm)"
              },
              "childItems": [
                {
                  "ID": "2133.100004300",
                  "order": 121,
                  "title": "Additional Dimension in Centimeters (cm)",
                  "minCard": "0",
                  "maxCard": 1,
                  "responseField": {
                    "dType": "decimal",
                    "maxInclusive": "100.000000000",
                    "minInclusive": "0.001000000",
                    "fractionDigits": "3",
                    "totalDigits": "5",
                    "responseRequired": true,
                    "textAfterResponse": "Centimeters (cm)"
                  },
                  "type": "QR"
                },
                {
                  "ID": "2132.100004300",
                  "order": 127,
                  "title": "Additional Dimension in Centimeters (cm)",
                  "minCard": "0",
                  "maxCard": 1,
                  "responseField": {
                    "dType": "decimal",
                    "maxInclusive": "100.000000000",
                    "minInclusive": "0.001000000",
                    "fractionDigits": "3",
                    "totalDigits": "5",
                    "responseRequired": true,
                    "textAfterResponse": "Centimeters (cm)"
                  },
                  "type": "QR"
                }
              ],
              "type": "Option"
            },
            {
              "ID": "2130.100004300",
              "order": 133,
              "title": "Cannot be determined (explain)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QS"
        },
        {
          "ID": "40496.100004300",
          "order": 138,
          "title": "Tumor Weight (Note B)",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "44761.100004300",
              "order": 142,
              "title": "Specify weight (g)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "decimal",
                "maxInclusive": "50000.000000000",
                "minInclusive": "0.000000000",
                "fractionDigits": "2",
                "totalDigits": "7",
                "responseRequired": "true",
                "textAfterResponse": "g"
              },
              "type": "Option"
            },
            {
              "ID": "57476.100004300",
              "order": 149,
              "title": "Cannot be determined",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": true,
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QS"
        },
        {
          "ID": "17877.100004300",
          "order": 153,
          "title": "Tumor Extent",
          "minCard": 1,
          "maxCard": 1,
          "type": "Section",
          "childItems": [
            {
              "ID": "51265.100004300",
              "order": 156,
              "title": "Tumor Extension",
              "minCard": 1,
              "maxCard": 1,
              "maxSelections": "0",
              "minSelections": 1,
              "list": [
                {
                  "ID": "44186.100004300",
                  "order": 159,
                  "title": "No evidence of primary tumor",
                  "selectionDeselectsSiblings": "true",
                  "type": "Option"
                },
                {
                  "ID": "50695.100004300",
                  "order": 160,
                  "title": "Tumor confined to adrenal cortex without invasion through tumor capsule (if present)",
                  "selectionDeselectsSiblings": "true",
                  "type": "Option"
                },
                {
                  "ID": "39537.100004300",
                  "order": 162,
                  "title": "Tumor invades into or through the adrenal capsule",
                  "selectionDeselectsSiblings": false,
                  "type": "Option"
                },
                {
                  "ID": "52315.100004300",
                  "order": 163,
                  "title": "Tumor invades into extra-adrenal structures (specify)",
                  "selectionDeselectsSiblings": false,
                  "responseField": {
                    "dType": "string",
                    "maxLength": "4000",
                    "responseRequired": "true",
                    "textAfterResponse": ""
                  },
                  "type": "Option"
                },
                {
                  "ID": "56271.100004300",
                  "order": 168,
                  "title": "Tumor invades into other adjacent organ(s)",
                  "selectionDeselectsSiblings": false,
                  "childItems": [
                    {
                      "ID": "53526.100004300",
                      "order": 170,
                      "title": "",
                      "minCard": 1,
                      "maxCard": 1,
                      "maxSelections": "0",
                      "minSelections": 1,
                      "list": [
                        {
                          "ID": "56752.100004300",
                          "order": 173,
                          "title": "Kidney",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "57748.100004300",
                          "order": 174,
                          "title": "Pancreas",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "41409.100004300",
                          "order": 175,
                          "title": "Liver",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "42305.100004300",
                          "order": 176,
                          "title": "Spleen",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "58229.100004300",
                          "order": 177,
                          "title": "Diaphragm",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "46218.100004300",
                          "order": 178,
                          "title": "Stomach",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "45594.100004300",
                          "order": 179,
                          "title": "Other (specify)",
                          "selectionDeselectsSiblings": false,
                          "responseField": {
                            "dType": "string",
                            "maxLength": "4000",
                            "responseRequired": "true",
                            "textAfterResponse": ""
                          },
                          "type": "Option"
                        }
                      ],
                      "type": "QM"
                    }
                  ],
                  "type": "Option"
                },
                {
                  "ID": "51911.100004300",
                  "order": 184,
                  "title": "Cannot be assessed",
                  "selectionDeselectsSiblings": "true",
                  "responseField": {
                    "dType": "string",
                    "maxLength": "4000",
                    "responseRequired": true,
                    "textAfterResponse": ""
                  },
                  "type": "Option"
                }
              ],
              "type": "QM"
            }
          ]
        },
        {
          "ID": "17879.100004300",
          "order": 188,
          "title": "Accessory Findings",
          "minCard": 1,
          "maxCard": 1,
          "type": "Section",
          "childItems": [
            {
              "ID": "42474.100004300",
              "order": 190,
              "title": "Lymphovascular Invasion (Note F)",
              "minCard": 1,
              "maxCard": 1,
              "maxSelections": "0",
              "minSelections": 1,
              "list": [
                {
                  "ID": "2159.100004300",
                  "order": 194,
                  "title": "Not identified",
                  "selectionDeselectsSiblings": "true",
                  "type": "Option"
                },
                {
                  "ID": "52962.100004300",
                  "order": 195,
                  "title": "Large vessel, renal vein (including when identified clinically)",
                  "selectionDeselectsSiblings": false,
                  "type": "Option"
                },
                {
                  "ID": "59454.100004300",
                  "order": 197,
                  "title": "Large vessel, vena cava (including when identified clinically)",
                  "selectionDeselectsSiblings": false,
                  "type": "Option"
                },
                {
                  "ID": "20881.100004300",
                  "order": 199,
                  "title": "Small vessel (capillary lymphatic)",
                  "selectionDeselectsSiblings": false,
                  "type": "Option"
                },
                {
                  "ID": "2161.100004300",
                  "order": 200,
                  "title": "Cannot be determined",
                  "selectionDeselectsSiblings": "true",
                  "responseField": {
                    "dType": "string",
                    "maxLength": "4000",
                    "responseRequired": true,
                    "textAfterResponse": ""
                  },
                  "type": "Option"
                }
              ],
              "type": "QM"
            },
            {
              "ID": "48491.100004300",
              "order": 204,
              "title": "Tumor Description",
              "minCard": "0",
              "maxCard": 1,
              "maxSelections": "0",
              "minSelections": 1,
              "list": [
                {
                  "ID": "20863.100004300",
                  "order": 207,
                  "title": "Hemorrhagic",
                  "selectionDeselectsSiblings": false,
                  "type": "Option"
                },
                {
                  "ID": "20864.100004300",
                  "order": 208,
                  "title": "Necrotic",
                  "selectionDeselectsSiblings": false,
                  "type": "Option"
                },
                {
                  "ID": "20865.100004300",
                  "order": 209,
                  "title": "Other (specify)",
                  "selectionDeselectsSiblings": false,
                  "responseField": {
                    "dType": "string",
                    "maxLength": "4000",
                    "responseRequired": "true",
                    "textAfterResponse": ""
                  },
                  "type": "Option"
                }
              ],
              "type": "QM"
            }
          ]
        }
      ]
    },
    {
      "ID": "17878.100004300",
      "order": 214,
      "title": "MARGINS",
      "minCard": 1,
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "2153.100004300",
          "order": 216,
          "title": "Margins",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "2154.100004300",
              "order": 219,
              "title": "Uninvolved by tumor",
              "selectionDeselectsSiblings": false,
              "childItems": [
                {
                  "ID": "26358.100004300",
                  "order": 221,
                  "title": "Distance from Closest Margin in Millimeters (mm)",
                  "minCard": "0",
                  "maxCard": 1,
                  "list": [
                    {
                      "ID": "26359.100004300",
                      "order": 224,
                      "title": "Specify in Millimeters (mm)",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "decimal",
                        "maxInclusive": "1000.000000000",
                        "minInclusive": "0.010000000",
                        "fractionDigits": "2",
                        "totalDigits": "5",
                        "responseRequired": "true",
                        "textAfterResponse": "Millimeters (mm)"
                      },
                      "type": "Option"
                    },
                    {
                      "ID": "26361.100004300",
                      "order": 231,
                      "title": "Cannot be determined (explain)",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "string",
                        "maxLength": "4000",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    }
                  ],
                  "type": "QS"
                },
                {
                  "ID": "26362.100004300",
                  "order": 236,
                  "title": "?Specify Margin, if possible",
                  "minCard": 1,
                  "maxCard": 1,
                  "list": [
                    {
                      "ID": "26363.100004300",
                      "order": 240,
                      "title": "Specify margin",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "string",
                        "maxLength": "4000",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    },
                    {
                      "ID": "26364.100004300",
                      "order": 245,
                      "title": "?Cannot be determined",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "string",
                        "maxLength": "4000",
                        "responseRequired": true,
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    }
                  ],
                  "type": "QS"
                }
              ],
              "type": "Option"
            },
            {
              "ID": "2155.100004300",
              "order": 250,
              "title": "Involved by tumor",
              "selectionDeselectsSiblings": false,
              "childItems": [
                {
                  "ID": "26365.100004300",
                  "order": 252,
                  "title": "?Specify Margin(s), if possible",
                  "minCard": 1,
                  "maxCard": 1,
                  "list": [
                    {
                      "ID": "26366.100004300",
                      "order": 256,
                      "title": "Specify margin(s)",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "string",
                        "maxLength": "4000",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    },
                    {
                      "ID": "26367.100004300",
                      "order": 261,
                      "title": "?Cannot be determined",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "string",
                        "maxLength": "4000",
                        "responseRequired": true,
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    }
                  ],
                  "type": "QS"
                }
              ],
              "type": "Option"
            },
            {
              "ID": "2157.100004300",
              "order": 266,
              "title": "Cannot be assessed",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": true,
                "textAfterResponse": ""
              },
              "type": "Option"
            },
            {
              "ID": "20852.100004300",
              "order": 270,
              "title": "Not applicable",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": true,
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QS"
        }
      ]
    },
    {
      "ID": "17881.100004300",
      "order": 274,
      "title": "LYMPH NODES",
      "minCard": 1,
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "1867.100004300",
          "order": 276,
          "title": "Regional Lymph Nodes",
          "minCard": 1,
          "maxCard": 1,
          "maxSelections": "0",
          "minSelections": 1,
          "list": [
            {
              "ID": "1868.100004300",
              "order": 279,
              "title": "No lymph nodes submitted or found",
              "selectionDeselectsSiblings": false,
              "childItems": [
                {
                  "ID": "45098.100004300",
                  "order": 281,
                  "title": "Number of Lymph Nodes Involved",
                  "minCard": 1,
                  "maxCard": 1,
                  "list": [
                    {
                      "ID": "1873.100004300",
                      "order": 284,
                      "title": "Specify number",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "integer",
                        "maxInclusive": "100",
                        "minInclusive": "0",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    },
                    {
                      "ID": "58938.100004300",
                      "order": 289,
                      "title": "At least",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "integer",
                        "maxInclusive": "100",
                        "minInclusive": "1",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    },
                    {
                      "ID": "1874.100004300",
                      "order": 293,
                      "title": "Number cannot be determined (explain)",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "string",
                        "maxLength": "4000",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    }
                  ],
                  "childItems": [
                    {
                      "ID": "39296.100004300",
                      "order": 299,
                      "title": "Extranodal Extension",
                      "minCard": "0",
                      "maxCard": 1,
                      "list": [
                        {
                          "ID": "20886.100004300",
                          "order": 302,
                          "title": "Not identified",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "20887.100004300",
                          "order": 303,
                          "title": "Present",
                          "selectionDeselectsSiblings": false,
                          "type": "Option"
                        },
                        {
                          "ID": "20888.100004300",
                          "order": 304,
                          "title": "Cannot be determined",
                          "selectionDeselectsSiblings": false,
                          "responseField": {
                            "dType": "string",
                            "maxLength": "4000",
                            "responseRequired": true,
                            "textAfterResponse": ""
                          },
                          "type": "Option"
                        }
                      ],
                      "type": "QS"
                    }
                  ],
                  "type": "QS"
                },
                {
                  "ID": "42934.100004300",
                  "order": 308,
                  "title": "Number of Lymph Nodes Examined",
                  "minCard": 1,
                  "maxCard": 1,
                  "list": [
                    {
                      "ID": "1870.100004300",
                      "order": 311,
                      "title": "Specify number",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "integer",
                        "maxInclusive": "100",
                        "minInclusive": "1",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    },
                    {
                      "ID": "54610.100004300",
                      "order": 316,
                      "title": "At least",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "integer",
                        "maxInclusive": "100",
                        "minInclusive": "1",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    },
                    {
                      "ID": "1871.100004300",
                      "order": 320,
                      "title": "Number cannot be determined (explain)",
                      "selectionDeselectsSiblings": false,
                      "responseField": {
                        "dType": "string",
                        "maxLength": "4000",
                        "responseRequired": "true",
                        "textAfterResponse": ""
                      },
                      "type": "Option"
                    }
                  ],
                  "type": "QS"
                }
              ],
              "type": "Option"
            }
          ],
          "type": "QM"
        }
      ]
    },
    {
      "ID": "2136.100004300",
      "order": 325,
      "title": "PATHOLOGIC STAGE CLASSIFICATION  (pTNM, AJCC 8th Edition) (Note G)",
      "minCard": 1,
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "51087.100004300",
          "order": 328,
          "title": "Note: Reporting of pT, pN, and (when applicable) pM categories is based on information available to the pathologist at the time the report is issued.  As per the AJCC (Chapter 1, 8th Ed.) it is the managing physicians responsibility to establish the final pathologic stage based upon all pertinent information, including but potentially not limited to this pathology report.",
          "type": "DisplayedItem"
        },
        {
          "ID": "20880.100004300",
          "order": 330,
          "title": "?TNM Descriptors",
          "minCard": 1,
          "maxCard": 1,
          "maxSelections": "0",
          "minSelections": 1,
          "list": [
            {
              "ID": "22897.100004300",
              "order": 334,
              "title": "?Not applicable",
              "selectionDeselectsSiblings": "true",
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": true,
                "textAfterResponse": ""
              },
              "type": "Option"
            },
            {
              "ID": "20890.100004300",
              "order": 339,
              "title": "m (multiple primary tumors)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20891.100004300",
              "order": 340,
              "title": "r (recurrent)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20892.100004300",
              "order": 341,
              "title": "y (post-treatment)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            }
          ],
          "type": "QM"
        },
        {
          "ID": "2137.100004300",
          "order": 342,
          "title": "Primary Tumor (pT)",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "20894.100004300",
              "order": 345,
              "title": "Note: There is no category of carcinoma in situ (pTis) relative to carcinomas of the adrenal gland.",
              "type": "DisplayedItem"
            },
            {
              "ID": "2142.100004300",
              "order": 347,
              "title": "pTX: Primary tumor cannot be assessed",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20889.100004300",
              "order": 349,
              "title": "pT0: No evidence of primary tumor",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2138.100004300",
              "order": 351,
              "title": "pT1: Tumor &lt;= 5 cm in greatest dimension, no extra-adrenal invasion",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2139.100004300",
              "order": 353,
              "title": "pT2: Tumor &gt; 5 cm, no extra-adrenal invasion",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2140.100004300",
              "order": 355,
              "title": "pT3: Tumor of any size with local invasion, but not invading adjacent organs",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2141.100004300",
              "order": 357,
              "title": "pT4: Tumor of any size with invasion of adjacent organs (kidney, diaphragm, pancreas, spleen, or liver) or large blood vessels (renal vein or vena cava)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            }
          ],
          "type": "QS"
        },
        {
          "ID": "2143.100004300",
          "order": 359,
          "title": "Regional Lymph Nodes (pN) (Note H)",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "2144.100004300",
              "order": 363,
              "title": "pNX: Regional lymph nodes cannot be assessed",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2145.100004300",
              "order": 365,
              "title": "pN0: No regional lymph node metastasis",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2146.100004300",
              "order": 367,
              "title": "pN1: Metastasis in regional lymph node(s)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            }
          ],
          "type": "QS"
        },
        {
          "ID": "2149.100004300",
          "order": 369,
          "title": "?Distant Metastasis (pM) (Note I)",
          "minCard": 1,
          "maxCard": 1,
          "list": [
            {
              "ID": "20895.100004300",
              "order": 373,
              "title": "?Not applicable - pM cannot be determined from the submitted specimen(s)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2151.100004300",
              "order": 375,
              "title": "pM1: Distant metastasis",
              "selectionDeselectsSiblings": false,
              "childItems": [
                {
                  "ID": "2152.100004300",
                  "order": 378,
                  "title": "?Specify Site(s), if known",
                  "minCard": "0",
                  "maxCard": 1,
                  "responseField": {
                    "dType": "string",
                    "maxLength": "4000",
                    "responseRequired": true,
                    "textAfterResponse": ""
                  },
                  "type": "QR"
                }
              ],
              "type": "Option"
            }
          ],
          "type": "QS"
        }
      ]
    },
    {
      "ID": "17884.100004300",
      "order": 383,
      "title": "ADDITIONAL FINDINGS",
      "minCard": "0",
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "39188.100004300",
          "order": 385,
          "title": "Additional Pathologic Findings",
          "minCard": "0",
          "maxCard": 1,
          "maxSelections": "0",
          "minSelections": 1,
          "list": [
            {
              "ID": "2163.100004300",
              "order": 388,
              "title": "None identified",
              "selectionDeselectsSiblings": "true",
              "type": "Option"
            },
            {
              "ID": "20897.100004300",
              "order": 389,
              "title": "Hemorrhage",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20898.100004300",
              "order": 390,
              "title": "Cystic change",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20854.100004300",
              "order": 391,
              "title": "Calcifications",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "2167.100004300",
              "order": 392,
              "title": "Other (specify)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QM"
        }
      ]
    },
    {
      "ID": "17880.100004300",
      "order": 397,
      "title": "SPECIAL STUDIES",
      "minCard": "0",
      "maxCard": 1,
      "type": "Section",
      "childItems": [
        {
          "ID": "53231.100004300",
          "order": 399,
          "title": "Ancillary Studies (Note L)",
          "minCard": "0",
          "maxCard": 1,
          "maxSelections": "0",
          "minSelections": 1,
          "list": [
            {
              "ID": "41352.100004300",
              "order": 403,
              "title": "Ki-67 mitotic rate (specify)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            },
            {
              "ID": "54436.100004300",
              "order": 408,
              "title": "Reticulin stain (specify type(s) and result(s))",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            },
            {
              "ID": "52023.100004300",
              "order": 413,
              "title": "Other (specify type and result)",
              "selectionDeselectsSiblings": false,
              "responseField": {
                "dType": "string", 
                "maxLength": "80",
                "responseRequired": "true",
                "textAfterResponse": ""
              },
              "type": "Option"
            }
          ],
          "type": "QM"
        }
      ]
    },
    {
      "ID": "2168.100004300",
      "order": 418,
      "title": "?Comment(s)",
      "minCard": "0",
      "maxCard": 1,
      "responseField": {
        "dType": "string",
        "maxLength": "4000",
        "responseRequired": true,
        "textAfterResponse": ""
      },
      "type": "QR"
    }
  ],
  "procedureID": "129.100004300",
  "name": "ADRENAL GLAND"
};

export default sample;
