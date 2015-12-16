/*global TypeheadTest, Backbone, JST*/

TypeheadTest.Views = TypeheadTest.Views || {};

(function () {
    'use strict';

    TypeheadTest.Views.StateSearch = Backbone.Typeahead.extend({

        template: JST['app/scripts/templates/state-search.ejs'],

        events: {
        },

        initialize : function () {
          this.on('selected', this.selected);
        },

        selected: function (state) {
            window.document.location.hash = state.get('abbreviation');
        }

    });

})();
