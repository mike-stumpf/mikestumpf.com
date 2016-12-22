var webapp = {};

webapp.metaTitlePrefix = 'Mike Stumpf | ';

webapp.status = {
    ok: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    movedPermanently: 301,
    temporaryRedirect: 307,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalServerError: 500,
    serviceUnavailable: 503
};

webapp.hbsHelpers = {
    compare: function(lvalue, rvalue, options) {
        //https://gist.github.com/doginthehat/1890659
        if (arguments.length !== 3) {
            throw new Error('Handlebars Helper "compare" needs 3 parameters');
        }
        var operator = options.hash.operator || '==';
        var operators = {
            '==':		function(l,r) { return l == r; },
            '===':	function(l,r) { return l === r; },
            '===/i':	function(l,r) { return l.toLowerCase() === r.toLowerCase(); },
            '!==':	function(l,r) { return l !== r; },
            '!=':		function(l,r) { return l != r; },
            '<':		function(l,r) { return l < r; },
            '>':		function(l,r) { return l > r; },
            '<=':		function(l,r) { return l <= r; },
            '>=':		function(l,r) { return l >= r; },
            'typeof':	function(l,r) { return typeof l == r; }
        };
        if (!operators[operator]) {
            throw new Error('Handlebars Helper "compare" doesn\'t know the operator ' + operator);
        }
        var result = operators[operator](lvalue,rvalue);
        if(result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },
    debug: function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    }
};

/**
 * Helper Functions ----------------------------------------------------------
 */

webapp.simpleNullCheck = function(object,key){
    return object && object.hasOwnProperty(key) && (object[key] || object[key] === 0)?true:false;
};

webapp.getValueFromKey = function(object,key){
    return webapp.simpleNullCheck(object,key)?object[key]:'';
};

webapp.isLocalConfig = function(){
    return process.env.NODE_ENV === 'local';
};

module.exports = webapp;