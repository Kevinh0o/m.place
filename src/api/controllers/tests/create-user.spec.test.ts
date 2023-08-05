import { User } from "@/api/entities/user";
import createUser from "../create-user";

describe('Create user.', ()=>{
    const wrongPassword = '';
    const wronUsername = '';

    const username = 'user';
    const password = 'pass';

    it('Should not accept invalid fields', async()=>{
        try{
            const user = await createUser(wronUsername, wrongPassword);
            expect(user).toBeFalsy();
        }
        catch(err){
            expect(err).not.toBeFalsy();
        }
    })

    it('Should accept valid fields', async()=>{
        try{
            const user = await createUser(username, password);
            expect(user).not.toBeFalsy();
        }
        catch(err){
            expect(err).toBeFalsy();
        }
    })
});