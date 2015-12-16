/*global TypeheadTest, Backbone*/

TypeheadTest.Collections = TypeheadTest.Collections || {};

(function () {
    'use strict';

    TypeheadTest.Collections.States = Backbone.Collection.extend({

        model: TypeheadTest.Models.State,
        url: 'data.json'

    });

})();
