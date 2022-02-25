import { read } from '../a.js';
import { write } from '../b.js';
import fs from 'fs';
const path = './data.json';
jest.mock('fs');

test('false read', () => {

    const result = read(path);
    expect(result).not.toStrictEqual([4548]);
});

// hacer un describe y los comentarios correctos

test('error for not file path', () => {
    fs.readFileSync.mockReturnValue(true);

    const result = read(path);
    expect(result).toBeTruthy();
});

test('false read', () => {
    fs.readFileSync.mockReturnValue(false);

    const result = read(path);
    expect(result).toBe(false);
});


test(' pruebas con write', () => {
    fs.writeFileSync.mockImplementation(() => {
        throw new Error();
      });

    const result = write(path, [121]);
    expect(result).toBe(false);
}) 