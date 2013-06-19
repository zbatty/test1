/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_red}", "click", function(sym, e) {
         sym.stop();
         
         sym.play();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_orange_car}", "click", function(sym, e) {
         sym.play();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yellow}", "click", function(sym, e) {
         sym.play();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_green}", "click", function(sym, e) {
         sym.play();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'orange_car'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Orange_Car}", "click", function(sym, e) {
         sym.play();
         
         

      });
         //Edge binding end

   })("orange_car");
   //Edge symbol end:'orange_car'

   //=========================================================
   
   //Edge symbol: 'rec'
   (function(symbolName) {   
   
   })("rec");
   //Edge symbol end:'rec'

   //=========================================================
   
   //Edge symbol: 'green'
   (function(symbolName) {   
   
   })("green");
   //Edge symbol end:'green'

   //=========================================================
   
   //Edge symbol: 'yellow'
   (function(symbolName) {   
   
   })("yellow");
   //Edge symbol end:'yellow'

})(jQuery, AdobeEdge, "EDGE-101573222");