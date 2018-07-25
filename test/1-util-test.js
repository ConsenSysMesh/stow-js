import { assert } from 'chai';
import Linnia from '../src';

describe('ECIES', () => {
  const privKey1 = '5230a384e9d271d59a05a9d9f94b79cd98fcdcee488d1047c59057046e128d2b';
  const pubKey1 = 'b1f26f98d374540eac3d31208f13a3935318e228207084c9ee32d741ff1ad2341af4ac9658aba4a254bf1dc6451b3c08524febba5273bec227c73e25cd376387';
  describe('roundtrip', async () => {
    it('should encrypt and decrypt a string, using hex-encoded keys', async () => {
      const data = 'foo';
      const ct = await Linnia.util.encrypt(`0x${pubKey1}`, data);
      const pt = await Linnia.util.decrypt(`0x${privKey1}`, ct);
      assert.equal(pt.toString(), data);
    });
    it('should encrypt and decrypt a buffer, using keys in buffers', async () => {
      const data = 'foo';
      const ct = await Linnia.util.encrypt(Buffer.from(pubKey1, 'hex'), data);
      const pt = await Linnia.util.decrypt(Buffer.from(privKey1, 'hex'), ct);
      assert.deepEqual(pt.toString(), data);
    });
  });

  describe('failure', async () => {
    it('should fail when encrypt with empty key', async () => {
      const data = 'foo';
      return Linnia.util.encrypt('', data).then(() => {throw RangeError('public key length is invalid')}, () => {});
    });
    it('should fail when encrypt with bad key', async () => {
      const data = 'foo';
      const privKey2 = '5230a384e9d271d59a05a9d9f94b79cd9';
      return Linnia.util.encrypt(`0x${privKey2}`, data).then(() => {throw RangeError('public key length is invalid')}, () => {});
    });
    it('should fail when decrypt with wrong key', async () => {
      const data = 'foo';
      const privWrongKey = '5230a384e9d271d59a05a9d9f94b79cd98fcdcee488d1047c59057046e128d2c';
      const ct = await Linnia.util.encrypt(Buffer.from(pubKey1, 'hex'), data);
      return Linnia.util.decrypt(Buffer.from(privWrongKey, 'hex'), ct).then(() => {throw Error('Bad MAC')}, () => {});
    });
    it('should fail when decrypt with empty key', async () => {
      const data = 'foo';
      const ct = await Linnia.util.encrypt(Buffer.from(pubKey1, 'hex'), data);
      return Linnia.util.decrypt('', ct).then(() => {throw Error('Bad input')}, () => {});
    });
  });
});
