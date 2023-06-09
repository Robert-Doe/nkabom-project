const argon2 = require('argon2');
const bcrypt = require("bcrypt");
const crypto = require("crypto");


async function hashPasswordArgon(password) {
    try {
        const hashedPassword = await argon2.hash(password);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        return null;
    }
}


async function verifyPasswordArgon(hashedPassword, enteredPassword) {
    try {
        return await argon2.verify(hashedPassword, enteredPassword);
    } catch (error) {
        console.error('Error verifying password:', error);
        return false;
    }
}


async function hashPasswordBcrypt(password) {
    console.log(`Password passed to bcrypt :${password}`)
    const saltRounds = 10;
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        console.log(hash);
        return hash;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function hashPasswordCrypto(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const iterations = 100000;
    const keyLength = 64;
    const digest = 'sha512';

    try {
        const hash = await new Promise((resolve, reject) => {
            crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(derivedKey.toString('hex'));
                }
            });
        });

        return hash;
    } catch (error) {
        console.error(error);
        return null;
    }
}


async function verifyPasswordCrypto(passKey, hashedPassword) {
    const iterations = 100000;
    const keyLength = 64;
    const digest = 'sha512';

    try {
        const [salt, derivedKey] = hashedPassword.split(':');

        const hash = await new Promise((resolve, reject) => {
            crypto.pbkdf2(passKey, salt, iterations, keyLength, digest, (err, derivedKeyVerify) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(derivedKeyVerify.toString('hex'));
                }
            });
        });

        return hash === derivedKey;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = {hashPasswordArgon, verifyPasswordArgon}