import { HashUtils } from "../hash-utils";

describe('Hash utils', ()=>{
    const password = 'pedro alvares cabral';
    const hashPassword = HashUtils.hash(password);

    it('it should create a hashed string upon given value.', ()=>{
        expect(password).not.toBe(hashPassword);
    })

    it('should be comparable to its hashed string.', async()=>{
        const CheckString = await HashUtils.compareHash(password, await hashPassword);

        expect(CheckString).toBe(true);
    })
});