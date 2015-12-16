/*global TypeheadTest, $*/


window.TypeheadTest = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.states = new this.Collections.States();
        this.states.fetch().done(function (result) {
            this.searchField = new Backbone.Typeahead(result);
            this.searchField.setElement('#searchField').render();
        });
    }
};

$(document).ready(function () {
    'use strict';
    TypeheadTest.init();
});
