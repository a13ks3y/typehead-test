/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('State Model', function () {

    beforeEach(function () {
        this.StateModel = new TypeheadTest.Models.State();
    });

    it('should be a model', function () {
       assert.instanceOf(this.StateModel, Backbone.Model);
    });
});
