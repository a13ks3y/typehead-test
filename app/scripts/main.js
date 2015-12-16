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
            this.stateList = new this.Views.StateList({ collection: this.states});
            this.stateList.setElement('#stateList').render();
        }.bind(this));
    }
};

$(document).ready(function () {
    'use strict';
    TypeheadTest.init();
});
