const sampleCovidResponse = {
  "patientName": 'Bob Smith',
  "patientID": "12478",
  body:[
  {
    "minCard": 0,
    "maxCard": 1,
    "type": "Section",
    "ID": "35835.100004300",
    "title": "REVISED CASE REPORT FORM FOR CONFIRMED NOVEL CORONAVIRUS COVID-19",
    "childItems": [
      {
        "type": "DisplayedItem",
        "ID": "35955.100004300",
        "title": "Report to WHO within 48 hours of case identification"
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "35843.100004300",
        "title": "Date of Reporting to National Health Authority (DD / MM / YYYY)",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string",
          "value": "Some data /asdf"
        },
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "35872.100004300",
        "title": "Reporting Country",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string",
          "value": "Canada"
        },
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "maxSelection": 0,
        "minSelection": 1,
        "type": "QM",
        "ID": "35849.100004300",
        "title": "Why Tested for COVID-19",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35895.100004300",
            "title": "Contact of a case",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35898.100004300",
            "title": "Ill seeking healthcare due to suspicion of COVID-19",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35906.100004300",
            "title": "Detected at point of entry",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35852.100004300",
            "title": "Repatriation",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35912.100004300",
            "title": "Routine respiratory disease surveillance systems (e.g. influenza)",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": true,
            "type": "Option",
            "ID": "35857.100004300",
            "title": "Unknown",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": true,
            "type": "Option",
            "ID": "35963.100004300",
            "title": "None of the above (explain)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "",
              "dType": "string"
            },
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      }
    ],
    "repeatKey": 0
  },
  {
    "minCard": 0,
    "maxCard": 1,
    "type": "Section",
    "ID": "35866.100004300",
    "title": "Section 1: Patient Information",
    "childItems": [
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "37326.100004300",
        "title": "Unique Case Identifier (used in country)",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string"
        },
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "35972.100004300",
        "title": "Age",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35869.100004300",
            "title": "Greater than 1 year old (specify years)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "years",
              "dType": "integer",
              "maxInclusive": 120,
              "minInclusive": 1
            },
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35875.100004300",
            "title": "Less than 1 year old (specify months)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "months",
              "dType": "integer",
              "maxInclusive": 11,
              "minInclusive": 1
            },
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35883.100004300",
            "title": "Less than 1 month old (specify days)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "days",
              "dType": "integer",
              "maxInclusive": 30,
              "minInclusive": 1
            },
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "35978.100004300",
        "title": "Sex at Birth",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35892.100004300",
            "title": "Male",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35918.100004300",
            "title": "Female",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "35932.100004300",
        "title": "Place Where the Case Was Diagnosed (Country)",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string"
        },
        "childItems": [
          {
            "minCard": 0,
            "maxCard": 1,
            "type": "QR",
            "ID": "35935.100004300",
            "title": "Admin Level 1 (Province)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "",
              "dType": "string"
            },
            "childItems": []
          }
        ],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "35981.100004300",
        "title": "Case Usual Place of Residency (Country)",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string"
        },
        "childItems": [],
        "repeatKey": 0
      }
    ],
    "repeatKey": 0
  },
  {
    "minCard": 0,
    "maxCard": 1,
    "type": "Section",
    "ID": "35989.100004300",
    "title": "Section 2: Clinical Status",
    "childItems": [
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "35943.100004300",
        "title": "Date of First Laboratory Confirmation Test (DD / MM / YYYY)",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string"
        },
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "35995.100004300",
        "title": "Symptoms or Signs at Time of Specimen Collection that Resulted in First Laboratory Confirmation",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35949.100004300",
            "title": "None (i.e., asymptomatic)",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35952.100004300",
            "title": "Present",
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "37429.100004300",
                "title": "Specify Date of Onset of Symptoms (DD / MM / YYYY)",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              }
            ]
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35958.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "38610.100004300",
        "title": "Underlying Conditions and Comorbidity",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "35998.100004300",
            "title": "None",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36003.100004300",
            "title": "Present",
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "maxSelection": 0,
                "minSelection": 1,
                "type": "QM",
                "ID": "35960.100004300",
                "title": "",
                "list": [
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36006.100004300",
                    "title": "Pregnancy (trimester)",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "35966.100004300",
                    "title": "Post-partum (less than 6 weeks)",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "35969.100004300",
                    "title": "Cardiovascular disease, including hypertension",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "35975.100004300",
                    "title": "Immunodeficiency, including HIV",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "35983.100004300",
                    "title": "Diabetes",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "37332.100004300",
                    "title": "Renal disease",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "35992.100004300",
                    "title": "Liver disease",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36000.100004300",
                    "title": "Chronic lung disease",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36001.100004300",
                    "title": "Chronic neurological or neuromuscular disease",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36009.100004300",
                    "title": "Malignancy",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36012.100004300",
                    "title": "Other(s) (specify)",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  }
                ],
                "childItems": []
              }
            ]
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36018.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "36035.100004300",
        "title": "Specify Health Status at Time of Reporting",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string"
        },
        "childItems": [
          {
            "minCard": 0,
            "maxCard": 1,
            "type": "QS",
            "ID": "36015.100004300",
            "title": "Admission to Hospital",
            "list": [
              {
                "selectionDeselectsSiblings": false,
                "type": "Option",
                "ID": "36021.100004300",
                "title": "No",
                "childItems": []
              },
              {
                "selectionDeselectsSiblings": false,
                "type": "Option",
                "ID": "36519.100004300",
                "title": "Yes",
                "childItems": [
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "39750.100004300",
                    "title": "Specify Date of First Admission (DD / MM / YYYY)",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QS",
                    "ID": "36845.100004300",
                    "title": "Did the Case Receive Care in an Intensive Care Unit (ICU)?",
                    "list": [
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36023.100004300",
                        "title": "No",
                        "childItems": []
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "37343.100004300",
                        "title": "Yes",
                        "childItems": []
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36854.100004300",
                        "title": "Unknown",
                        "childItems": []
                      }
                    ],
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QS",
                    "ID": "36862.100004300",
                    "title": "Did the Case Receive Ventilation?",
                    "list": [
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36871.100004300",
                        "title": "No",
                        "childItems": []
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36029.100004300",
                        "title": "Yes",
                        "childItems": []
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36879.100004300",
                        "title": "Unknown",
                        "childItems": []
                      }
                    ],
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QS",
                    "ID": "36032.100004300",
                    "title": "Did the Case Receive Extracorporeal Membrane Oxygenation?",
                    "list": [
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36885.100004300",
                        "title": "No",
                        "childItems": []
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36038.100004300",
                        "title": "Yes",
                        "childItems": []
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36888.100004300",
                        "title": "Unknown",
                        "childItems": []
                      }
                    ],
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QS",
                    "ID": "36839.100004300",
                    "title": "Is Case in Isolation with Infection Control Practice in Place?",
                    "list": [
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36848.100004300",
                        "title": "No",
                        "childItems": []
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36894.100004300",
                        "title": "Yes",
                        "childItems": [
                          {
                            "minCard": 0,
                            "maxCard": 1,
                            "type": "QR",
                            "ID": "41854.100004300",
                            "title": "Specify Date of Isolation (DD / MM / YYYY)",
                            "responseField": {
                              "responseRequired": true,
                              "textAfterResponse": "",
                              "dType": "string"
                            },
                            "childItems": []
                          }
                        ]
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "36905.100004300",
                        "title": "Unknown",
                        "childItems": []
                      }
                    ],
                    "childItems": []
                  }
                ]
              },
              {
                "selectionDeselectsSiblings": false,
                "type": "Option",
                "ID": "37289.100004300",
                "title": "Unknown",
                "childItems": []
              }
            ],
            "childItems": []
          }
        ],
        "repeatKey": 0
      }
    ],
    "repeatKey": 0
  },
  {
    "minCard": 0,
    "maxCard": 1,
    "type": "Section",
    "ID": "36911.100004300",
    "title": "Section 3: Exposure Risk in the 14 Days Prior to Symptom Onset#",
    "childItems": [
      {
        "type": "DisplayedItem",
        "ID": "36865.100004300",
        "title": "# Prior to testing if asymptomatic"
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "36919.100004300",
        "title": "Is Case a Health Care Worker (any job in a health care setting)?",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36874.100004300",
            "title": "No",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36882.100004300",
            "title": "Yes",
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "37294.100004300",
                "title": "Country",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              },
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "36891.100004300",
                "title": "City",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              },
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "36928.100004300",
                "title": "Name of Facility",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              }
            ]
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36922.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "36945.100004300",
        "title": "Has the Case Travelled in the 14 Days Prior to Symptom Onset?",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36908.100004300",
            "title": "No",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36954.100004300",
            "title": "Yes",
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 10,
                "type": "Section",
                "ID": "36914.100004300",
                "title": "Prior Travel History (for multiple destinations, repeat this section up to 10 times)",
                "childItems": [
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "36968.100004300",
                    "title": "Country",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "36971.100004300",
                    "title": "City",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "36977.100004300",
                    "title": "Date of Departure (DD / MM / YYYY)",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  }
                ]
              }
            ]
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36980.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "36916.100004300",
        "title": "Has Case Visited Any Health Care Facility in the 14 Days Prior to Symptom Onset?",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36988.100004300",
            "title": "No",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36994.100004300",
            "title": "Yes",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37352.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "36997.100004300",
        "title": "Has Case Had Contact With a Confirmed Case in the 14 Days Prior to Symptom Onset?",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37005.100004300",
            "title": "No",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37020.100004300",
            "title": "Yes",
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "36917.100004300",
                "title": "Please List Unique Identifiers of All Probable or Confirmed Cases",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              },
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "37375.100004300",
                "title": "Please Explain Contact Setting",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              },
              {
                "minCard": 0,
                "maxCard": 10,
                "type": "Section",
                "ID": "37037.100004300",
                "title": "Prior Confirmed Contact Information (for multiple contacts, repeat this section up to 100 times)",
                "childItems": [
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "36925.100004300",
                    "title": "Contact ID",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "37063.100004300",
                    "title": "First Date of Contact (DD / MM / YYYY)",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "37077.100004300",
                    "title": "Last Date of Contact (DD / MM / YYYY)",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  },
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QR",
                    "ID": "36931.100004300",
                    "title": "Most Likely Country of Exposure",
                    "responseField": {
                      "responseRequired": true,
                      "textAfterResponse": "",
                      "dType": "string"
                    },
                    "childItems": []
                  }
                ]
              }
            ]
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37028.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      }
    ],
    "repeatKey": 0
  },
  {
    "minCard": 0,
    "maxCard": 1,
    "type": "Section",
    "ID": "37080.100004300",
    "title": "Section 4: Outcome",
    "childItems": [
      {
        "type": "DisplayedItem",
        "ID": "37329.100004300",
        "title": "Complete and re-send the full form as soon as outcome of disease is known or after 30 days after initial report"
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "37114.100004300",
        "title": "Date of Resubmission of This Report (DD / MM / YYYY)",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string"
        },
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "36934.100004300",
        "title": "If Case was Asymptomatic at Time of Specimen Collection Resulting in First Laboratory Confirmation, Did the Case Develop Any Symptoms or Signs at Any Time Prior to Discharge or Death?",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36942.100004300",
            "title": "No (ie, case remains asymptomatic)",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "36948.100004300",
            "title": "Yes, asymptomatic case (as previously reported) developed symptoms and / or signs of illness",
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "37128.100004300",
                "title": "Specify Date of Onset of Symptoms / Signs of Illness (DD / MM / YYYY)",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              }
            ]
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37120.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QR",
        "ID": "36951.100004300",
        "title": "Clinical Course",
        "responseField": {
          "responseRequired": true,
          "textAfterResponse": "",
          "dType": "string"
        },
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "36957.100004300",
        "title": "Admission to Hospital (may have been previously reported)",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37197.100004300",
            "title": "No",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37363.100004300",
            "title": "Yes",
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "37403.100004300",
                "title": "Specify Date of First Admission (DD / MM / YYYY)",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string"
                },
                "childItems": []
              },
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QS",
                "ID": "37229.100004300",
                "title": "Did the Case Receive Care in an Intensive Care Unit (ICU)?",
                "list": [
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36959.100004300",
                    "title": "No",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36965.100004300",
                    "title": "Yes",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "37383.100004300",
                    "title": "Unknown",
                    "childItems": []
                  }
                ],
                "childItems": []
              },
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QS",
                "ID": "37372.100004300",
                "title": "Did the Case Receive Ventilation?",
                "list": [
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36991.100004300",
                    "title": "No",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "36999.100004300",
                    "title": "Yes",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "37000.100004300",
                    "title": "Unknown",
                    "childItems": []
                  }
                ],
                "childItems": []
              },
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QS",
                "ID": "37389.100004300",
                "title": "Did the Case Receive Extracorporeal Membrane Oxygenation?",
                "list": [
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "37395.100004300",
                    "title": "No",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "37014.100004300",
                    "title": "Yes",
                    "childItems": []
                  },
                  {
                    "selectionDeselectsSiblings": false,
                    "type": "Option",
                    "ID": "37017.100004300",
                    "title": "Unknown",
                    "childItems": []
                  }
                ],
                "childItems": []
              }
            ]
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37397.100004300",
            "title": "Unknown",
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "37025.100004300",
        "title": "Health Outcome",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37034.100004300",
            "title": "Recovered / Healthy",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37417.100004300",
            "title": "Not recovered",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37040.100004300",
            "title": "Death",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37042.100004300",
            "title": "Unknown",
            "childItems": []
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37406.100004300",
            "title": "Other (specify)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "",
              "dType": "string"
            },
            "childItems": []
          }
        ],
        "childItems": [],
        "repeatKey": 0
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "37412.100004300",
        "title": "Date of Release or Death",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37764.100004300",
            "title": "Specify Date of Release from Isolation / Hospital (DD / MM / YYYY)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "",
              "dType": "string",
              "value": "some date"
            },
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "37420.100004300",
                "title": "Specify Date of Last Laboratory Test (DD / MM/ YYYY)",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string",
                  "value": "date"
                },
                "childItems": [
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QS",
                    "ID": "39438.100004300",
                    "title": "Results of Last Test",
                    "list": [
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "37787.100004300",
                        "title": "Positive",
                        "childItems": [],
                        "value": true
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "37790.100004300",
                        "title": "Negative",
                        "childItems": [],
                        "value": false
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "37423.100004300",
                        "title": "Unknown",
                        "childItems": [],
                        "value": false
                      }
                    ],
                    "childItems": [],
                    "repeatKey": 0
                  }
                ],
                "repeatKey": 0
              }
            ],
            "value": true
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37415.100004300",
            "title": "Specify Date of Death (DD / MM / YYYY)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "",
              "dType": "string"
            },
            "childItems": [],
            "value": false
          }
        ],
        "childItems": [
          {
            "minCard": 0,
            "maxCard": 1,
            "type": "QS",
            "ID": "39564.100004300",
            "title": "Total Number of Contacts Followed for this Case",
            "list": [
              {
                "selectionDeselectsSiblings": false,
                "type": "Option",
                "ID": "39449.100004300",
                "title": "Specify Number",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "integer"
                },
                "childItems": []
              },
              {
                "selectionDeselectsSiblings": false,
                "type": "Option",
                "ID": "39581.100004300",
                "title": "Unknown",
                "childItems": []
              }
            ],
            "childItems": []
          }
        ],
        "repeatKey": 0,
        "isLast": false
      },
      {
        "minCard": 0,
        "maxCard": 1,
        "type": "QS",
        "ID": "37412.100004300",
        "title": "Date of Release or Death",
        "list": [
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37764.100004300",
            "title": "Specify Date of Release from Isolation / Hospital (DD / MM / YYYY)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "",
              "dType": "string",
              "value": "second date"
            },
            "childItems": [
              {
                "minCard": 0,
                "maxCard": 1,
                "type": "QR",
                "ID": "37420.100004300",
                "title": "Specify Date of Last Laboratory Test (DD / MM/ YYYY)",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "string",
                  "value": "second lab date"
                },
                "childItems": [
                  {
                    "minCard": 0,
                    "maxCard": 1,
                    "type": "QS",
                    "ID": "39438.100004300",
                    "title": "Results of Last Test",
                    "list": [
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "37787.100004300",
                        "title": "Positive",
                        "childItems": [],
                        "value": false
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "37790.100004300",
                        "title": "Negative",
                        "childItems": [],
                        "value": false
                      },
                      {
                        "selectionDeselectsSiblings": false,
                        "type": "Option",
                        "ID": "37423.100004300",
                        "title": "Unknown",
                        "childItems": [],
                        "value": true
                      }
                    ],
                    "childItems": [],
                    "repeatKey": 0
                  }
                ],
                "repeatKey": 0
              }
            ],
            "value": true
          },
          {
            "selectionDeselectsSiblings": false,
            "type": "Option",
            "ID": "37415.100004300",
            "title": "Specify Date of Death (DD / MM / YYYY)",
            "responseField": {
              "responseRequired": true,
              "textAfterResponse": "",
              "dType": "string"
            },
            "childItems": [],
            "value": false
          }
        ],
        "childItems": [
          {
            "minCard": 0,
            "maxCard": 1,
            "type": "QS",
            "ID": "39564.100004300",
            "title": "Total Number of Contacts Followed for this Case",
            "list": [
              {
                "selectionDeselectsSiblings": false,
                "type": "Option",
                "ID": "39449.100004300",
                "title": "Specify Number",
                "responseField": {
                  "responseRequired": true,
                  "textAfterResponse": "",
                  "dType": "integer"
                },
                "childItems": []
              },
              {
                "selectionDeselectsSiblings": false,
                "type": "Option",
                "ID": "39581.100004300",
                "title": "Unknown",
                "childItems": []
              }
            ],
            "childItems": []
          }
        ],
        "isLast": true,
        "repeatKey": 1
      }
    ],
    "repeatKey": 0
  },
  {
    "minCard": 0,
    "maxCard": 1,
    "type": "QR",
    "ID": "37798.100004300",
    "title": "?Comment(s)",
    "responseField": {
      "responseRequired": true,
      "textAfterResponse": "",
      "dType": "string"
    },
    "childItems": [],
    "repeatKey": 0
  }
],
  "procedureID": "1616527716677",
  "name": "WORLD HEALTH ORGANIZATION (WHO) COVID-19 CASE REPORT",
  "timestamp": "2021-03-23T19:28:36.743Z",
  "update_timestamp": "2021-03-23T19:28:36.743Z"
}
export {
  sampleCovidResponse
}
