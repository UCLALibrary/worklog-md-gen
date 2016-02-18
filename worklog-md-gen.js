var generateWorklogArgs = process.argv.slice(2);
(function generateWorklog(month, year) {
    var padWithLeadingZeros = function (n) {
        return (n < 10) ? ('0' + n) : ('' + n);
    };
    var monthZeroIndexed = (month + 11) % 12;
    var nDaysInMonth = new Date(year, month, 0).getDate();
    var str = ''
    var entry;
    for (var i = 1; i <= nDaysInMonth; i++) {
        // if the day is friday and is not the last day of the month
        // prepend a --
        var dayOfWeek = new Date(year, monthZeroIndexed, i).getDay();

        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            if (dayOfWeek === 5 && i !== nDaysInMonth) {
                entry = '--\n\n';
            }
            else {
                entry = ''
            }
            entry += padWithLeadingZeros(month) + '/' + padWithLeadingZeros(i) + '\n\n';
            entry += '- 0\n\n';
            str = entry + str;
        }
    }
    console.log(str);
})(generateWorklogArgs[0], generateWorklogArgs[1]);
