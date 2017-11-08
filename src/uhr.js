get_current_timezone_offset_in_hours =  function(flag){
  if (flag === undefined) {
    throw "missing flag value"
  }
  if (flag !== 1 && flag !== -1) {
    throw "invalid flag value"
  }

  return flag * new Date().getTimezoneOffset() / 60;
}
get_offset_minute = function (current_timezone_offset_in_hours) {
  return ((current_timezone_offset_in_hours * 100) - ( (current_timezone_offset_in_hours | 0) *100)) * 0.60;
}
get_offset_hour = function (current_timezone_offset_in_hours) {
  return current_timezone_offset_in_hours | 0;
}

get_new_minute = function(minute, offset_minute){
  let result = offset_minute + Number(minute);
  if (result >=60) {
    return result - 60
  }
  else if (result < 0) {
    return  result + 60
  }
  return result
}
get_carry_hour = function(minute, offset_minute){
  let result = offset_minute + Number(minute);
  if (result >=60) {
    return 1
  }
  else if (result < 0) {
    return  -1
  }
  return 0
}

get_new_hour = function(hour, offset_hour, carry_hour) {

  let result = hour + offset_hour +carry_hour;
  if (result >=24) {
    return result - 24
  }
  else if (result < 0) {
    return  result + 24
  }
  return result
}

get_carry_day = function(hour, offset_hour, carry_hour) {
  let result = hour + offset_hour + carry_hour;
  if (result >=24) {
    return 1
  }
  else if (result < 0) {
    return  -1
  }
  return 0
}

get_new_day = function(day, carry_day) {
  let result = day + carry_day
  if (result >=7) {
    return result - 7
  }
  else if (result <0) {
    return  result + 7
  }
  return result
}


module.exports = {
  get_current_timezone_offset_in_hours,
  get_offset_minute,
  get_offset_hour,
  get_new_minute,
  get_carry_hour,
  get_new_hour,
  get_carry_day,
  get_new_day
}
