var marked = require('marked'),
    webapp = require('../services/webapp.service'),
    logger = require('../lib/logger'),
    contentModels = {};

//since content is coming from contentful api instead of from db, departing from traditional model structure
contentModels.getPageModel = function(data){
    if (webapp.simpleNullCheck(data,'fields')){
        var fields = data.fields;
        return {
            id: data.sys.id,
            title: webapp.getValueFromKey(fields,'title'),
            body: webapp.getHTMLValueFromKey(fields,'body')
        };
    }
    else {
        return {};
    }
};

module.exports = contentModels;