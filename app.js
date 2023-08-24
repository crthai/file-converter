var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

var reader = new Reader();
var writer = new Writer();

async function main() {
  var data = await reader.Read("./users.csv");
  var processedData = Processor.Process(data);
  var usersTable = new Table(processedData);

  var html = await HtmlParser.Parse(usersTable);

  writer.Write(Date.now() + ".html", html);
  PDFWriter.WritePDF(Date.now() + ".pdf", html);

  console.log(html);
}

main();
