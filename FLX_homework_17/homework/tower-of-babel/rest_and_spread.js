let rawArgs = process.argv.slice(2);
let args = [];
rawArgs.forEach(val => {
	let commaSep = val.split(',');
	commaSep.forEach(val => {
		if(val !== '') args.push(+val);
	});
});
function avg(...args) {
	let ave = args.reduce((a,b) => a+b)/args.length;
	return ave;
}
console.log(avg(...args));