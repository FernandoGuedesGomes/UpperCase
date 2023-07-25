const fs = require("fs");
const path = require("path");

const inputFolder = "./entrada";
const outputFolder = "./modificados";

if (!fs.existsSync(inputFolder)) {
  fs.mkdirSync(inputFolder);
  console.log(`Pasta ${inputFolder} criado.`);
  console.log("coloque seus arquivos na pasta (entrada) e execute o codigo novamente.");
}else{

  fs.readdir(inputFolder, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
      console.log(`Pasta ${outputFolder} criado.`);
    };
    files.forEach((file) => {
      if (file.endsWith(".txt")) {
        const inputFile = path.join(inputFolder, file);
        fs.readFile(inputFile, "UTF8", (error, data) => {
          if (error) throw error;
  
          const fileNameExtension = path.extname(file);
          const fileNamesemExtension = path.basename(file, fileNameExtension);
          const newFileName = `${fileNamesemExtension}_Uppercase ${fileNameExtension}`;
  
          const outputFile = path.join(outputFolder, newFileName);
          fs.writeFile(outputFile, data.toUpperCase(), (error) => {
            if (error) throw error;
            console.log(`${newFileName} gerado com sucesso.`);
          });
        });
      }
    });
  });
  

}

