import fs from 'fs';

function write(filename, data) {
    try {
        fs.writeFileSync(filename, JSON.stringify(data));
        return true;
    } catch (err) {
        return false;
    }
}

export { write };