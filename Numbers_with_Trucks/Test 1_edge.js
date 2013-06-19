/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'green',
            type:'rect',
            rect:['487','492','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'orange_car',
            type:'rect',
            rect:['85','477','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'red',
            type:'rect',
            rect:['295','452','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'yellow',
            type:'rect',
            rect:['681','516','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Text2',
            type:'text',
            rect:['19px','18px','552px','39px','auto','auto'],
            text:"Click on the Red, Orange, Yellow Green cars.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'orange_car',
            symbolName:'orange_car'
         },
         {
            id:'yellow',
            symbolName:'yellow'
         },
         {
            id:'red',
            symbolName:'rec'
         },
         {
            id:'green',
            symbolName:'green'
         }
         ]
      },
   states: {
      "Base State": {
         "${_red}": [
            ["style", "top", '452px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '295px'],
            ["style", "cursor", 'pointer']
         ],
         "${_green}": [
            ["style", "top", '492px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '487px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '640px'],
            ["style", "width", '960px']
         ],
         "${_yellow}": [
            ["style", "top", '516px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '681px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '18px'],
            ["style", "left", '19px'],
            ["style", "width", '552px']
         ],
         "${_orange_car}": [
            ["style", "top", '477px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '85px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid27", tween: [ "style", "${_green}", "left", '641px', { fromValue: '487px'}], position: 1500, duration: 500, easing: "easeOutElastic" },
            { id: "eid15", tween: [ "style", "${_red}", "left", '91px', { fromValue: '295px'}], position: 0, duration: 500, easing: "easeOutElastic" },
            { id: "eid25", tween: [ "transform", "${_yellow}", "scaleX", '1.6404', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeOutElastic" },
            { id: "eid16", tween: [ "style", "${_red}", "top", '134px', { fromValue: '452px'}], position: 0, duration: 500, easing: "easeOutElastic" },
            { id: "eid22", tween: [ "transform", "${_orange_car}", "scaleY", '1.49495', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutElastic" },
            { id: "eid19", tween: [ "style", "${_orange_car}", "left", '267px', { fromValue: '85px'}], position: 500, duration: 500, easing: "easeOutElastic" },
            { id: "eid20", tween: [ "style", "${_orange_car}", "top", '254px', { fromValue: '477px'}], position: 500, duration: 500, easing: "easeOutElastic" },
            { id: "eid18", tween: [ "transform", "${_red}", "scaleY", '1.5102', { fromValue: '1'}], position: 0, duration: 500, easing: "easeOutElastic" },
            { id: "eid24", tween: [ "style", "${_yellow}", "top", '141px', { fromValue: '516px'}], position: 1000, duration: 500, easing: "easeOutElastic" },
            { id: "eid23", tween: [ "style", "${_yellow}", "left", '479px', { fromValue: '681px'}], position: 1000, duration: 500, easing: "easeOutElastic" },
            { id: "eid30", tween: [ "transform", "${_green}", "scaleY", '2.20414', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeOutElastic" },
            { id: "eid28", tween: [ "style", "${_green}", "top", '387px', { fromValue: '492px'}], position: 1500, duration: 500, easing: "easeOutElastic" },
            { id: "eid21", tween: [ "transform", "${_orange_car}", "scaleX", '1.49495', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutElastic" },
            { id: "eid17", tween: [ "transform", "${_red}", "scaleX", '1.5102', { fromValue: '1'}], position: 0, duration: 500, easing: "easeOutElastic" },
            { id: "eid29", tween: [ "transform", "${_green}", "scaleX", '2.20414', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeOutElastic" },
            { id: "eid26", tween: [ "transform", "${_yellow}", "scaleY", '1.6404', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeOutElastic" }         ]
      }
   }
},
"orange_car": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Orange_Car',
      type: 'image',
      rect: ['0px','0px','148px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Assets/Orange%20Car.jpeg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Orange_Car}": [
            ["style", "top", '0px'],
            ["style", "height", '99px'],
            ["style", "left", '0px'],
            ["style", "width", '148px']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '148px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"rec": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Red_Car',
      type: 'image',
      rect: ['0px','0px','148px','98px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Assets/Red%20Car.jpeg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '148px']
         ],
         "${_Red_Car}": [
            ["style", "top", '0px'],
            ["style", "height", '98px'],
            ["style", "left", '0px'],
            ["style", "width", '148px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"green": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Green_Car',
      type: 'image',
      rect: ['0px','0px','148px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Assets/Green%20Car.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '148px']
         ],
         "${_Green_Car}": [
            ["style", "top", '0px'],
            ["style", "height", '148px'],
            ["style", "left", '0px'],
            ["style", "width", '148px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"yellow": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Yellow_Car',
      type: 'image',
      rect: ['0px','0px','159px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Assets/Yellow%20Car.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Yellow_Car}": [
            ["style", "top", '0px'],
            ["style", "height", '99px'],
            ["style", "left", '0px'],
            ["style", "width", '159px']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '159px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-101573222");
