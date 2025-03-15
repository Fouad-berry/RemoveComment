# Remove Comments from JavaScript or typescript Files

## Description
This script is a simple Node.js utility that removes both single-line (`//`) and multi-line (`/* */`) comments from JavaScript (or TypeScript) files. It reads the file, processes it to remove valid comments, and writes the cleaned code back to the file.

## Features
- Removes **single-line comments** (`//` but not `///` for documentation comments).
- Removes **multi-line comments** (`/* */`).
- Preserves the original formatting of the code.
- Works on JavaScript and TypeScript files.

## Usage
### 1. Install Node.js
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### 2. Create a JavaScript file (e.g., `example.js`)
Add some comments to it:
```js
// This is a single-line comment
const message = "Hello, World!"; /* This is a multi-line comment */
console.log(message);
```

### 3. Run the script
Save the script as `removeComments.js` and run it using Node.js:
```sh
node removeComments.js
```

Alternatively, specify a file to clean:
```sh
node removeComments.js ./example.js
```

## Code Explanation
```js
const fs = require('fs');

function removeCommentsFromJS(filePath) {
    let code = fs.readFileSync(filePath, 'utf-8');

    code = code.replace(/(^|\s)\/\/(?!\/).*|\/\*[\s\S]*?\*\//g, '').trim();

    fs.writeFileSync(filePath, code, 'utf-8');
    console.log(`✅ Nettoyage terminé : ${filePath}`);
}

removeCommentsFromJS('./example.js');
```

## Notes
- This script modifies the original file. Make sure to **create a backup** before running it.
- Does not remove documentation-style comments (`///` or JSDoc `/** */`).
- Ensure your file paths are correct before execution.

## License
This script is open-source and available under the MIT License.

