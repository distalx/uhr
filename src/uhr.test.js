var expect = require ('chai').expect;
const uhr = require('./uhr');


describe('uhr',function(){
  describe('get_timezone_offset_in_hours',function(){
    const flag = 1;
    const result = flag * new Date().getTimezoneOffset() / 60;

    it('return current timezone offset in hour',function(){
      expect(uhr.get_timezone_offset_in_hours(flag)).to.equal(result);
    });

    it('throws an err missing flag value',function(){
      expect(function(){
          uhr.get_timezone_offset_in_hours()
      }).to.throw('missing flag value');
    });

    it('throws an err invalid flag value',function(){
      expect(function(){
          uhr.get_timezone_offset_in_hours(4)
      }).to.throw('invalid flag value');
    });

  });

  describe('get_offset_minute',function(){

    it('return offset minute',function(){
      expect(uhr.get_offset_minute(5.5)).to.equal(30);
    });

  });

  describe('get_offset_hour',function(){

    it('return offset hour',function(){
      expect(uhr.get_offset_hour(5.5)).to.equal(5);
    });

  });

  describe('get_new_minute',function(){

    it('return new minute',function(){
      expect(uhr.get_new_minute(30, 10)).to.equal(40);
    });
    it('return new minute',function(){
      expect(uhr.get_new_minute(30, 40)).to.equal(10);
    });
    it('return new minute',function(){
      expect(uhr.get_new_minute(30, -40)).to.equal(50);
    });

  });

  describe('get_carry_hour',function(){

    it('return 0 carry hour',function(){
      expect(uhr.get_carry_hour(30, 10)).to.equal(0);
    });

    it('return 1 carry hour',function(){
      expect(uhr.get_carry_hour(30, 40)).to.equal(1);
    });

    it('return -1 carry hour',function(){
      expect(uhr.get_carry_hour(30, - 40)).to.equal(-1);
    });

  });

  describe('get_new_hour',function(){

    it('return new hour',function(){
      expect(uhr.get_new_hour(5, 1, 0)).to.equal(6);
    });

    it('return new hour plus a day',function(){
      expect(uhr.get_new_hour(5, -6, 0)).to.equal(23);
    });

    it('return new hour minues a day',function(){
      expect(uhr.get_new_hour(22, 1, 1)).to.equal(0);
    });

  });

  describe('get_carry_day',function(){

    it('return zero carry day',function(){
      expect(uhr.get_carry_day(5, 1, 0)).to.equal(0);
    });

    it('return -1 carry day',function(){
      expect(uhr.get_carry_day(5, -6, 0)).to.equal(-1);
    });

    it('return 1 carry day',function(){
      expect(uhr.get_carry_day(22, 1, 1)).to.equal(1);
    });

  });

  describe('get_new_day',function(){

    it('return a new day',function(){
      expect(uhr.get_new_day(1, 0)).to.equal(1);
    });

    it('return a new day minues a week',function(){
      expect(uhr.get_new_day(1, 6)).to.equal(0);
    });

    it('return a new day plus a week',function(){
      expect(uhr.get_new_day(1, -2)).to.equal(6);
    });

  });

});
