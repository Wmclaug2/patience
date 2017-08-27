var Alexa = require('alexa-sdk')
var SSML = require('ssml-builer')

var data = {
    quotes: [

    ],
    helpMessage: '',
    repromptMessage: '',
    startMessage: '',

}


var handlers = {
    'LaunchRequest': function(){
        this.emit('StartNewSession')
    },
    "StartNewSession" : function() {
        this.emit(':tell', "Hello, World!")
    }
}


exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback)
    alexa.registerHandlers(handlers)
    alexa.execute()
}

