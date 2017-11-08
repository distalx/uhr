const uhr = require('./uhr');


function UHR(day, hour, minute, flag) {
  if (day > 6 || day < 0) {
    return console.log("invalid input");
  }
  if (hour > 23 || hour < 0) {
    return console.log("invalid input");
  }

  if (minute > 60 || minute < 0) {
    return console.log("invalid input");
  }

  if (flag !== 1 && flag !== -1) {
    return console.log("invalid input");
  }

  // console.log(`${day}, ${hour}, ${minute}`);
  const current_timezone_offset_in_hours = uhr.get_current_timezone_offset_in_hours(flag);
  const offset_minute = uhr.get_offset_minute(current_timezone_offset_in_hours);
  const offset_hour = uhr.get_offset_hour(current_timezone_offset_in_hours);
  const new_minute = uhr.get_new_minute(minute, offset_minute);
  const carry_hour = uhr.get_carry_hour(minute, offset_minute);
  const new_hour = uhr.get_new_hour(hour, offset_hour, carry_hour);
  const carry_day = uhr.get_carry_day(hour, offset_hour, carry_hour);
  const new_day = uhr.get_new_day(day, carry_day);


  // console.log(`${new_day}, ${new_hour}, ${new_minute}`);
  return { 'day':new_day, 'hour':new_hour, 'minute':new_minute};

}

module.exports = UHR;
