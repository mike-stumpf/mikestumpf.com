var /* models */
    contentModel = require('../models/content.model'),
/* services */
    webapp = require('./webapp.service'),
    logger = require('../lib/logger'),
    contentService = {};

contentService.pageDigest = function (data) {
    if (data.length){
        data = webapp.getFirstResult(data);
    }
    if (data){
        return contentModel.getPageModel(data);
    }
    else {
        return {};
    }
};

contentService.contentBlocksDigest = function(data){
    var result = {},
        i = 1;
    if(data) {
        data.forEach(function (entry) {
            result['block' + i] = contentModel.getContentBlockModel(entry);
            i++;
        });
    }
    return result;
};

module.exports = contentService;