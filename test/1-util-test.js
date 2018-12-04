import { assert } from 'chai';
import { Buffer } from 'buffer';
import naclUtil from 'tweetnacl-util';
import Stow from '../src';

const DEFAULT_PADDING_LENGTH = (2 ** 11);

describe('Encryption Scheme', () => {
  const privKey1 = 'wFGgG/Bv/36liIhdOGqH0TY5QpUVYkQP+Sdcbr1NgOI=';
  const pubKey1 = 'hQYhHJpzZH/tGhz1wtqSjkL17tJSnEEC4yVGyNTHNQY=';
  describe('roundtrip', () => {
    it('should encrypt and decrypt a string', () => {
      const data = '1';
      const ct = Stow.util.encrypt(pubKey1, data);
      const pt = Stow.util.decrypt(privKey1, ct);
      assert.equal(pt.toString(), data);
    });
    it('should encrypt so that the ciphertext aligns with filesystem blocks after decodeBase64', () => {
      const longString = 'O coz, coz, coz, my' +
        ' pretty little coz, that thou didst know how many fathom deep I am in love!' +
        ' But it cannot be sounded; my affection hath an unknown bottom, like the bay of Portugal.\n';
      const shortString = 'f';
      const ctLong = Stow.util.encrypt(pubKey1, longString.repeat(111));
      const lenInBytes = Buffer.byteLength(naclUtil.decodeBase64(ctLong.ciphertext));
      assert.equal(lenInBytes % (2 ** 11), 0, 'output should be divisable by 2k');

      const ctShort = Stow.util.encrypt(pubKey1, shortString);
      const ctShortLenInBytes = Buffer.byteLength(naclUtil.decodeBase64(ctShort.ciphertext));
      assert.equal(ctShortLenInBytes % (2 ** 11), 0, 'output should be divisable by 2k');
    });
    it('should encrypt padding is only added when neccessary', () => {
      // adjust for envelope an NACL extra bytes
      const ENVELOPE_BYTE_LEN = 40;
      const plainTextString = 'f'.repeat(DEFAULT_PADDING_LENGTH - ENVELOPE_BYTE_LEN);
      const plainTextLen = Buffer.byteLength(plainTextString);
      assert.equal(plainTextLen + ENVELOPE_BYTE_LEN, DEFAULT_PADDING_LENGTH, 'input envelope size is 2048');
      const cipherText = Stow.util.encrypt(pubKey1, plainTextString);
      const lenInBytes = Buffer.byteLength(naclUtil.decodeBase64(cipherText.ciphertext));
      assert.equal((lenInBytes % DEFAULT_PADDING_LENGTH), 0, 'output should be divisable by 2k');
    });
    it('should encrypt so that the string len that does not reveal input len', () => {
      const longString = 'O coz, coz, coz, my pretty little coz, that thou didst know how many fathom deep I am in love!' +
        ' But it cannot be sounded; my affection hath an unknown bottom, like the bay of Portugal.\n';
      const shortString = 'f';

      const ctShort = Stow.util.encrypt(pubKey1, shortString);
      const ctLong = Stow.util.encrypt(pubKey1, longString);
      assert.equal(ctShort.ciphertext.length, ctLong.ciphertext.length);
    });
  });

  describe('failure', () => {
    it('should fail when encrypt with empty key', () => {
      const data = 'foo';
      assert.throws(() => Stow.util.encrypt('', data), Error, 'bad public key size');
    });
    it('should fail when encrypt with bad key', () => {
      const data = 'foo';
      const pubKey2 = 'hQYhHJSjkL17VGyNTHNQY=';
      assert.throws(() => Stow.util.encrypt(pubKey2, data), Error, 'Bad public key');
    });
    it('should fail when decrypt with wrong key', () => {
      const data = 'foo';
      const privWrongKey = '5VdzPXk23HBA+S1tcSsSFGxjPpsHgQ5PMx3tbfsxSIU=';
      const ct = Stow.util.encrypt(pubKey1, data);
      assert.throws(() => Stow.util.decrypt(privWrongKey, ct), Error, 'Decryption failed.');
    });
    it('should fail when decrypt with empty key', () => {
      const data = 'foo';
      const ct = Stow.util.encrypt(pubKey1, data);
      assert.throws(() => Stow.util.decrypt('', ct), Error, 'bad secret key size');
    });
    it('should fail when encrypt object with toJSON', () => {
      const data = { toJSON: console.log };
      assert.throws(() => Stow.util.encrypt(pubKey1, data), Error, 'Cannot encrypt with toJSON property.  Please remove toJSON property');
    });
    it('should fail to decrypt when version is not supported', () => {
      const data = 'foo';
      const ct = Stow.util.encrypt(pubKey1, data);
      ct.version = 'foobar';
      assert.throws(() => Stow.util.decrypt(privKey1, ct), Error, 'Encryption type/version not supported.');
    });
  });
});
