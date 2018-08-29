import { assert } from 'chai';
import Linnia from '../src';

describe('Encryption Scheme', () => {
  const privKey1 = 'wFGgG/Bv/36liIhdOGqH0TY5QpUVYkQP+Sdcbr1NgOI=';
  const pubKey1 = 'hQYhHJpzZH/tGhz1wtqSjkL17tJSnEEC4yVGyNTHNQY=';
  describe('roundtrip', () => {
    it('should encrypt and decrypt a string', () => {
      const data = 'foo';
      const ct = Linnia.util.encrypt(pubKey1, data);
      const pt = Linnia.util.decrypt(privKey1, ct);
      assert.equal(pt.toString(), data);
    });
  });

  describe('failure', () => {
    it('should fail when encrypt with empty key', () => {
      const data = 'foo';
      assert.throws( () => Linnia.util.encrypt('', data), Error, "bad public key size");
    });
    it('should fail when encrypt with bad key', () => {
      const data = 'foo';
      const pubKey2 = 'hQYhHJSjkL17VGyNTHNQY=';
      assert.throws( () => Linnia.util.encrypt(pubKey2, data), Error, "invalid encoding");
    });
    it('should fail when decrypt with wrong key', () => {
      const data = 'foo';
      const privWrongKey = '5VdzPXk23HBA+S1tcSsSFGxjPpsHgQ5PMx3tbfsxSIU=';
      const ct = Linnia.util.encrypt(pubKey1, data);
      assert.throws( () => Linnia.util.decrypt(privWrongKey, ct), Error, "Decryption failed");
    });
    it('should fail when decrypt with empty key', () => {
      const data = 'foo';
      const ct = Linnia.util.encrypt(pubKey1, data);
      assert.throws( () => Linnia.util.decrypt('', ct), Error, "bad secret key size");
    });
  });
});
