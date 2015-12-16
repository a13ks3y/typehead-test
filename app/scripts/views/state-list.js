/*global TypeheadTest, Backbone, JST*/

TypeheadTest.Views = TypeheadTest.Views || {};

(function () {
    'use strict';

    TypeheadTest.Views.StateList = Backbone.View.extend({

        template: JST['app/scripts/templates/state-list.ejs'],

        isASC: true,

        events: {
            "click #toggleSort": "toggleSort"
        },

        toggleSort : function () {
            this.isASC = !this.isASC;
            this.render();
        },

        render: function () {
            var states = this.collection.sortBy('name');

            this.$el.html(this.template({
                states: this.isASC ? states : states.reverse()
            }));
        }

    });

})();
