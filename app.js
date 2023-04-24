const fs = require('fs');
const fsp = fs.promises;

console.log('START !!!');

const func = async () => {
    let text = await fsp.readFile(`${__dirname}/t1.txt`, 'utf-8');
    text =  text + "********" + text;
    console.log('Read file');

    await fsp.writeFile(`${__dirname}/t2.txt`, text);
    console.log('Write file');

    await fsp.copyFile(`${__dirname}/t2.txt`, `${__dirname}/t3.txt` );
    console.log('Copy file');
};

func();

console.log('FINISH !!!');