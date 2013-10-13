define(function(require, exports, module) {

var baseLanguageHandler = require('plugins/c9.ide.language/base_handler');

var handler = module.exports = Object.create(baseLanguageHandler);
    
handler.handlesLanguage = function(language) {
    return language === "javascript";
};

handler.handlesImmediate = function() {
    return this.HANDLES_IMMEDIATE;
};

handler.getCompletionRegex = function() {
    return (/\$/);
};

handler.complete = function(doc, fullAst, pos, currentNode, callback) {
    this.sender.emit("js_immediate_complete", this.immediateWindow);
    this.sender.once("js_immediate_complete_results", function(e) {
        callback(e.data);
    });
};


});
