'use strict';
var assert = require('assert');

var fn = require('./');

describe('twentyfour-to-twelve', function(){

    it('should expect a string', function(){
        assert.throws(function(){
            fn({});
        });
    });

    it('should convert 24-hour time to 12-hour time ', function(){

        // AM
        assert.equal(fn('01:00'), '01:00 AM');
        assert.equal(fn('02:59'), '02:59 AM');
        assert.equal(fn('03:12'), '03:12 AM');
        assert.equal(fn('04:00'), '04:00 AM');
        assert.equal(fn('05:00'), '05:00 AM');
        assert.equal(fn('06:00'), '06:00 AM');
        assert.equal(fn('07:00'), '07:00 AM');
        assert.equal(fn('08:00'), '08:00 AM');
        assert.equal(fn('09:00'), '09:00 AM');
        assert.equal(fn('10:00'), '10:00 AM');
        assert.equal(fn('11:00'), '11:00 AM');
        assert.equal(fn('12:01'), '12:01 PM');

        // PM
        assert.equal(fn('13:00'), '01:00 PM');
        assert.equal(fn('14:59'), '02:59 PM');
        assert.equal(fn('15:12'), '03:12 PM');
        assert.equal(fn('16:04'), '04:04 PM');
        assert.equal(fn('17:00'), '05:00 PM');
        assert.equal(fn('18:12'), '06:12 PM');
        assert.equal(fn('19:22'), '07:22 PM');
        assert.equal(fn('20:59'), '08:59 PM');
        assert.equal(fn('21:59'), '09:59 PM');
        assert.equal(fn('22:59'), '10:59 PM');
        assert.equal(fn('23:04'), '11:04 PM');
        assert.equal(fn('00:13'), '12:13 AM');
    });

    it('should allow seconds ', function(){

        // AM
        assert.equal(fn('01:02:03'), '01:02:03 AM');
        assert.equal(fn('12:01:02'), '12:01:02 PM');

        // PM
        assert.equal(fn('13:01:02'), '01:01:02 PM');
        assert.equal(fn('00:13:14'), '12:13:14 AM');
    });

    it('should reject invalid times ', function(){

        assert.throws(function(){
          fn('99:99:99')
        }, 'Invalid time: 99:99:99');

        assert.throws(function(){
          fn('24:60:60')
        }, 'Invalid time: 24:60:60');

    });

});
