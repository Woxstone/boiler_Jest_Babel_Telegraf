import fs from 'fs';

const filepath = './a.json';
const data = [24];

function write(filename, data) {
    // return 'cosas'
    try {
        fs.writeFileSync(filename, JSON.stringify(data));
        return true;
    } catch (err) {
        // console.log(err);
        return false;
    }
}

export { write };