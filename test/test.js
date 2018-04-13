'use strict';

var isAbbrOf = require('../lib');
var assert = require('assert');

describe('isAbbrOf', function () {
    it('US == United States', function () {
        assert.equal(true, isAbbrOf('US', 'United States'));
    });
    it('Us == United states', function () {
        assert.equal(true, isAbbrOf('Us', 'United states'));
    });
    it('US == United states', function () {
        assert.equal(true, isAbbrOf('US', 'United states'));
    });

    it('US == U. States', function () {
        assert.equal(true, isAbbrOf('US', 'U. States'));
    });

    it('U.S. == United States', function () {
        assert.equal(true, isAbbrOf('U.S.', 'U. States'));
    });

    it('U. S. == United States', function () {
        assert.equal(true, isAbbrOf('U. S.', 'U. States'));
    });

    it('MEC == Mountain Equipment Co-Op', function () {
        assert.equal(true, isAbbrOf('MEC', 'Mountain Equipment Co-Op'));
    });

    it('SUA == Statele Unite ale Americii', function () {
        assert.equal(true, isAbbrOf('SUA', 'Statele Unite ale Americii'));
    });

    it('UT != United States', function () {
        assert.equal(false, isAbbrOf('UT', 'United States'));
    });
    it('Us != United States', function () {
        assert.equal(false, isAbbrOf('Us', 'United States'));
    });
    it('USF != United States', function () {
        assert.equal(false, isAbbrOf('Us', 'United States'));
    });
    it('UF != United States-', function () {
        assert.equal(false, isAbbrOf('UF', 'United States-'));
    });
});
