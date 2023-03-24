function timeConversion(s) {
	//"12:01:00PM"
	let timeArr = s.split(':');
	// timeArr -> "12" "01" "00PM"
	let timeFormat = s.slice(-2); // PM / AM

	let hour = timeArr[0];
	let min = timeArr[1];
	let sec = timeArr[2][0] + timeArr[2][1];

	//hour, if PM, hour+12, except 12
	if (timeFormat === 'PM' && hour != 12) {
		hour = parseInt(hour) + 12;
	} else if (timeFormat === 'AM' && hour == 12) {
		hour = '00';
	}

	return hour + ':' + min + ':' + sec;
}
