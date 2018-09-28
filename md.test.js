const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// Test Url in a Markdown File
const testUrlInMarkdown = (file) => {
  let markdown = fs.readFileSync(file).toString();
  let urls = [];
  let regExp = /\[([^\]]+)\]\(([^)]+)\)/g;
  let result = null;
  while (result = regExp.exec(markdown)) urls.push(result[2]);
  return [urls.length, async () => {
    for (let url of urls) {
      if (url.includes("://") && !url.split("://")[0].includes("/")) {
        // An External url
        let res = await fetch(url);
        if (![200, 301, 302].includes(res.status)) throw new Error(`External Link Test: ${url} with bad response code ${res.status}`);
      } else {
        // A Local File
        if (!fs.existsSync(path.join(path.dirname(file), url))) throw new Error(`Internal Link Test: ${url} with not found error`);
      }
    }
  }];
}

// Test All *.md File Recurrsively
const exploreFolder = (folder, exclude=[]) => {

  fs.readdirSync(folder).forEach(file => {

    if (exclude.includes(file)) return;
    let fullPath = path.join(folder, file);
    if (fs.lstatSync(fullPath).isDirectory()) {

      // Explore Sub Folder
      exploreFolder(fullPath, exclude);

    } else if (file.toLocaleLowerCase().endsWith(".md")) {

      // Test Markdown File
      it(`tests url avaliability in ${fullPath}`, async () => {
        let [testCount, testFunc] = testUrlInMarkdown(fullPath);
        console.info(`Validating: '${fullPath}'`);
        jest.setTimeout(testCount * 5000);
        return await testFunc();
      });

    }

  });

}

exploreFolder(".", ["node_modules"]);