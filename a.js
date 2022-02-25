import fs from 'fs';

function read(filename) {
    try {
        const info = JSON.parse(fs.readFileSync(filename));
        console.log(info)
        return info;
    } catch (err) {
        return false;
    }
};

export { read };