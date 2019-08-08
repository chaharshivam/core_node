var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
fs.readFile('./theory.md', (err, content) => {
	console.log(content);
});

// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.
fs.readFile('./theory.md', 'utf-8' ,(err, content) => {
	console.log(content.toString());
});
// 3. Write script to read file Synchronously and console the output.
console.log( fs.readFileSync('./theory.md') );
// 4. Write script to create a file 'write.js' and write content of read.js in there.
fs.writeFile("write.js", fs.readFileSync(__filename), err => {
	if (err) {
		console.error(err);
	} else {
		console.log("File saved successfully");
	}
});
// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
fs.open("./write.js", (err, fd) => {
	if (err) throw err;
	//   - remove earlier content using fs.ftruncate
	fs.ftruncate(fd, err => {
		//   - add new content using fs.writeFile
		fs.writeFile("write.js", fs.readFileSync("./theory.md"), err => {
			throw err;
		});
	});
	//   - close the file at last using fs.close
	fs.closeSync(fd, err => {
		throw err;
	});
});

// 6. Delete the content of write.js using fs.unlink or unlinkSync method
fs.unlink("./write.js", err => {
	if (err) throw err;

	console.log("File Deleted!!");
});