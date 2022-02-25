import fs from 'fs';
// import 'dotenv/config';


// const filepath = './a.json';
// const data = [24];

function read(filename) {
    try {
        const info = JSON.parse(fs.readFileSync(filename));
        console.log(info)
        return info;
    } catch (err) {
        // console.log(err);
        return false;
    }
};

// function write(filename, data) {
//     return 'cosas'
//     try {
//         fs.writeFileSync(filename, JSON.stringify(data));
//         return true;
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

// console.log('write', write(filepath));
// console.log('read' ,read(filepath));

export { read };