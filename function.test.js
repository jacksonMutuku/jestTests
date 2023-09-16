
const functions = require('./testFunct');

function testCapitalize() {
    assert.strictEqual(capitalize("hello"), "Hello");
    assert.strictEqual(capitalize("world"), "World");
    assert.strictEqual(capitalize("this is a test"), "This is a test");
    assert.strictEqual(capitalize(""), "");
    assert.strictEqual(capitalize("a"), "A");
}


function testReverseString() {
    assert.strictEqual(reverseString("hello"), "olleh");
    assert.strictEqual(reverseString("world"), "dlrow");
    assert.strictEqual(reverseString("12345"), "54321");
    assert.strictEqual(reverseString(""), "");
}


function testCaesarCipher() {
    assert.strictEqual(caesarCipher("Hello, World!", 3), "Khoor, Zruog!");
    assert.strictEqual(caesarCipher("This is a test.", 7), "Aopz pz h zljy.");
    assert.strictEqual(caesarCipher("xyz", 1), "yza");
    assert.strictEqual(caesarCipher("", 5), "");
}

function testAnalyzeArray() {
    const analysis = analyzeArray([1, 2, 3, 4, 5]);
    assert.strictEqual(analysis.average, 3);
    assert.strictEqual(analysis.min, 1);
    assert.strictEqual(analysis.max, 5);
    assert.strictEqual(analysis.length, 5);
}

