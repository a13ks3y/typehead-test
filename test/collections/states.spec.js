/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('States Collection', function () {

    beforeEach(function () {
        this.StatesCollection = new TypeheadTest.Collections.States();
    });

    describe('check state collection properties', function() {
        it('should has correct url', function () {
            assert.equal(this.StatesCollection.url, 'data.json');
        });
    });

});
