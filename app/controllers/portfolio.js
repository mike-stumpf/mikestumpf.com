const //packages
    promise = require('bluebird');

var portfolio = {};

/**
 * Main Routes
 */
portfolio.getDefaultPortfolioPage = function(req, res, next) {
    // var params = {
    //     content_type: contentfulService.contentTypes.portfolio,
    //     'fields.url[in]': req.originalUrl.replace('/portfolio', '').replace(/^\/|\/$/g, ''),
    //     limit: 1
    // };
    // return promise
    //     .all([contentfulService.getEntries(params)])
    //     .then(function (response) {
    //         var page = contentService.portfolioDigest(response[0]);
    //         res.locals.page = page;
    //         if (webapp.simpleNullCheck(page, 'layout')) {
    //             switch (page.layout) {
    //                 case 'Bubbles':
    //                     res.render('portfolio-bubbles');
    //                     break;
    //                 case 'Reading List':
    //                     res.render('portfolio-reading-list');
    //                     break;
    //                 default:
    //                     res.render('single-portfolio');
    //             }
    //         } else {
                res.render('single-portfolio');
        //     }
        // })
        // .catch(function (err) {
        //     next(err);
        // });
};

module.exports = portfolio;