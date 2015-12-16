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
            this.stateSearch = new this.Views.StateSearch(result);
            this.stateSearch.setElement('#stateSearch').render();
            this.stateList = new this.Views.StateList({ collection: this.states});
            this.stateList.setElement('#stateList').render();
            this.stateSearch.on('selected', function (state) {
                this.stateList.highlightState(state);
            }.bind(this));
        }.bind(this));
    }
};

$(document).ready(function () {
    'use strict';
    TypeheadTest.init();
});
