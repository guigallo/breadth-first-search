module.exports = {
  json: function() {
    return {
      "id": "090b5d19-73aa-45a7-b95d-0d2b480d9bbb",
      "offsetX": 48.01944509627987,
      "offsetY": 102.11131657647991,
      "zoom": 84.98333333333322,
      "gridSize": 0,
      "links": [
        {
        "id": "link01",
        "type": "link",
        "selected": false,
        "source": "node01",
        "sourcePort": "node01-port01",
        "target": "node02",
        "targetPort": "node02-port01",
        "points": [{
          "id": "9abc21c4-4163-4abf-9086-bc8741d73c8c",
          "selected": false,
          "x": 173.703125,
          "y": 48.296875
        }, {
          "id": "3181672b-3057-4f57-921d-42048e6daaaa",
          "selected": false,
          "x": 149,
          "y": 215.4476367915278
        }],
        "extras": {},
        "labels": [],
        "width": 2,
        "color": "#01a3ce",
        "curvyness": 150
      }, {
        "id": "link02",
        "type": "link",
        "selected": false,
        "source": "node02",
        "sourcePort": "node02-port02",
        "target": "node04",
        "targetPort": "node04-port01",
        "points": [{
          "id": "30db9ab6-180a-45b3-ade2-7b10a038191c",
          "selected": false,
          "x": 350.70312740781117,
          "y": 261.7445091112514
        }, {
          "id": "5009da24-0b7b-408b-8005-e3e49f3cfa10",
          "selected": false,
          "x": 425.8222093424822,
          "y": 26.329776281914974
        }],
        "extras": {},
        "labels": [],
        "width": 2,
        "color": "#4a821c",
        "curvyness": 150
      }, {
        "id": "link03",
        "type": "link",
        "selected": false,
        "source": "node02",
        "sourcePort": "node02-port03",
        "target": "node03",
        "targetPort": "node03-port01",
        "points": [{
          "id": "aa1ffb08-223c-4c1a-ab8d-a6af26b41503",
          "selected": false,
          "x": 350.70312740781117,
          "y": 307.7445170975937
        }, {
          "id": "d0ee013c-20f4-4e59-ae97-e0fa6cab8248",
          "selected": false,
          "x": 448.50298019909366,
          "y": 424.0475129915275
        }],
        "extras": {},
        "labels": [],
        "width": 2,
        "color": "#ff3750",
        "curvyness": 150
      }, {
        "id": "link04",
        "type": "link",
        "selected": false,
        "source": "node04",
        "sourcePort": "node04-port02",
        "target": "node05",
        "targetPort": "node05-port01",
        "points": [{
          "id": "8d3704be-d0d1-4a1f-9255-6e3af60bbcbc",
          "selected": false,
          "x": 627.5253042544024,
          "y": 67.37665597156948
        }, {
          "id": "3b838009-94c4-429d-a1c1-4ea2bb20d880",
          "selected": false,
          "x": 745.5006773465954,
          "y": -43.766274109675905
        }],
        "extras": {},
        "labels": [],
        "width": 2,
        "color": "#362a18",
        "curvyness": 150
      }, {
        "id": "link05",
        "type": "link",
        "selected": false,
        "source": "node04",
        "sourcePort": "node04-port03",
        "target": "node06",
        "targetPort": "node06-port01",
        "points": [{
          "id": "a711477c-4855-4df5-b041-6e6e094a534e",
          "selected": false,
          "x": 627.5253042544024,
          "y": 102.87665532151837
        }, {
          "id": "e6be6920-0413-4db9-9a12-2f89a2657559",
          "selected": false,
          "x": 758.0767983318797,
          "y": 214.00410606064517
        }],
        "extras": {},
        "labels": [],
        "width": 2,
        "color": "#90875B",
        "curvyness": 150
      }, {
        "id": "link06",
        "type": "link",
        "selected": false,
        "source": "node03",
        "sourcePort": "node03-port02",
        "target": "node07",
        "targetPort": "node07-port01",
        "points": [{
          "id": "5c463587-6e04-4ebe-8ccd-3e09746aa5ab",
          "selected": false,
          "x": 650.2187511077093,
          "y": 465.0937484340972
        }, {
          "id": "55dc78bc-ad93-46e2-aa0d-f472f350b45a",
          "selected": true,
          "x": 774.3125213521583,
          "y": 389.8750108779327
        }],
        "extras": {},
        "labels": [],
        "width": 2,
        "color": "#362a18",
        "curvyness": 150
      }, {
        "id": "link07",
        "type": "link",
        "selected": false,
        "source": "node03",
        "sourcePort": "node03-port03",
        "target": "node08",
        "targetPort": "node08-port01",
        "points": [{
          "id": "569b056e-3222-4c35-9f2a-2f926a749c48",
          "selected": false,
          "x": 650.2187511077093,
          "y": 500.59378260821285
        }, {
          "id": "c2d6e89b-4528-49a5-b63e-7b01de841e7b",
          "selected": true,
          "x": 777.7343439766115,
          "y": 558.7500017772173
        }],
        "extras": {},
        "labels": [],
        "width": 2,
        "color": "#90875B",
        "curvyness": 150
      }],
      "nodes": [
        {
        "id": "node01",
        "type": "start",
        "selected": false,
        "x": 0,
        "y": 0,
        "extras": {
          "title": "Start"
        },
        "ports": [{
          "id": "node01-port01",
          "type": "start",
          "selected": false,
          "name": "out",
          "parentNode": "node01",
          "links": ["link01"],
          "maximumLinks": 1,
          "position": "out",
          "color": "#01a3ce"
        }]
      }, {
        "id": "node02",
        "type": "request",
        "selected": false,
        "x": 149,
        "y": 197.9476367915278,
        "extras": {
          "title": "Request",
          "request": {
            "port": "",
            "url": "",
            "method": "",
            "headers": "",
            "body": ""
          },
          "url": "http://www.zup.com.br/",
          "port": "80",
          "method": "GET"
        },
        "ports": [{
          "id": "node02-port01",
          "type": "request",
          "selected": false,
          "name": "in",
          "parentNode": "node02",
          "links": ["link01"],
          "position": "in",
          "color": "#246fc5"
        }, {
          "id": "node02-port02",
          "type": "request",
          "selected": false,
          "name": "yes",
          "parentNode": "node02",
          "links": ["link02"],
          "maximumLinks": 1,
          "position": "yes",
          "color": "#4a821c"
        }, {
          "id": "node02-port03",
          "type": "request",
          "selected": false,
          "name": "no",
          "parentNode": "node02",
          "links": ["link03"],
          "maximumLinks": 1,
          "position": "no",
          "color": "#ff3750"
        }]
      }, {
        "id": "node03",
        "type": "conditional",
        "selected": false,
        "x": 448.51608786336857,
        "y": 406.56180083985294,
        "extras": {
          "title": "Conditional",
          "description": "Does the user match all of the following conditions?",
          "conditions": [{
            "id": 1,
            "left": "3",
            "compare": "equal",
            "right": "3"
          }],
          "default": {
            "color": "#90875B"
          }
        },
        "ports": [{
          "id": "node03-port01",
          "type": "conditional",
          "selected": false,
          "name": "in",
          "parentNode": "node03",
          "links": ["link03"],
          "position": "in",
          "color": "#246fc5"
        }, {
          "id": "node03-port02",
          "type": "conditional",
          "selected": false,
          "name": "out-1",
          "parentNode": "node03",
          "links": ["link06"],
          "maximumLinks": 1,
          "position": "out-1",
          "color": "#362a18"
        }, {
          "id": "node03-port03",
          "type": "conditional",
          "selected": false,
          "name": "out-default",
          "parentNode": "node03",
          "links": ["link07"],
          "maximumLinks": 1,
          "position": "out-default",
          "color": "#90875B"
        }]
      }, {
        "id": "node04",
        "type": "conditional",
        "selected": false,
        "x": 425.82387819229535,
        "y": 8.830912661259731,
        "extras": {
          "title": "Conditional",
          "description": "Does the user match all of the following conditions?",
          "conditions": [{
            "id": 1,
            "left": "1",
            "compare": "equal",
            "right": "2"
          }],
          "default": {
            "color": "#90875B"
          }
        },
        "ports": [{
          "id": "node04-port01",
          "type": "conditional",
          "selected": false,
          "name": "in",
          "parentNode": "node04",
          "links": ["link02"],
          "position": "in",
          "color": "#246fc5"
        }, {
          "id": "node04-port02",
          "type": "conditional",
          "selected": false,
          "name": "out-1",
          "parentNode": "node04",
          "links": ["link04"],
          "maximumLinks": 1,
          "position": "out-1",
          "color": "#362a18"
        }, {
          "id": "node04-port03",
          "type": "conditional",
          "selected": false,
          "name": "out-default",
          "parentNode": "node04",
          "links": ["link05"],
          "maximumLinks": 1,
          "position": "out-default",
          "color": "#90875B"
        }]
      }, {
        "id": "node05",
        "type": "createJSON",
        "selected": false,
        "x": 745.5031753813028,
        "y": -61.27664496903435,
        "extras": {
          "title": "Create JSON",
          "type": "createJSON",
          "values": ""
        },
        "ports": [{
          "id": "node05-port01",
          "type": "createJSON",
          "selected": false,
          "name": "in",
          "parentNode": "node05",
          "links": ["link04"],
          "position": "in",
          "color": "green"
        }]
      }, {
        "id": "node06",
        "type": "createJSON",
        "selected": false,
        "x": 758.0902668284818,
        "y": 196.50844496429417,
        "extras": {
          "title": "Create JSON",
          "type": "createJSON",
          "values": ""
        },
        "ports": [{
          "id": "node06-port01",
          "type": "createJSON",
          "selected": false,
          "name": "in",
          "parentNode": "node06",
          "links": ["link05"],
          "position": "in",
          "color": "green"
        }]
      }, {
        "id": "node07",
        "type": "createJSON",
        "selected": false,
        "x": 774.3166306038344,
        "y": 372.3753210451779,
        "extras": {
          "title": "Create JSON",
          "type": "createJSON",
          "values": ""
        },
        "ports": [{
          "id": "node07-port01",
          "type": "createJSON",
          "selected": false,
          "name": "in",
          "parentNode": "node07",
          "links": ["link06"],
          "position": "in",
          "color": "green"
        }]
      }, {
        "id": "node08",
        "type": "createJSON",
        "selected": false,
        "x": 777.7399854916243,
        "y": 541.2608288428197,
        "extras": {
          "title": "Create JSON",
          "type": "createJSON",
          "values": ""
        },
        "ports": [{
          "id": "node08-port01",
          "type": "createJSON",
          "selected": false,
          "name": "in",
          "parentNode": "node08",
          "links": ["link07"],
          "position": "in",
          "color": "green"
        }]
      }],
      "isCanvasMoving": false
    };
  }
}