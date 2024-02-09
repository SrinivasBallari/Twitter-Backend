const {UserService} = require('../../src/services/user-service');
const {UserRepo} = require('../../src/repositories/user-repository');

describe('user service signup test', () => {
    test('should successfully create a user', async () => {
        const data = {
            email: 'sri@mail.com',
            password: '123456'
        };
        (UserRepo.prototype.create).mockReturnValue(
            {...data,
                createdAt: '2022-12-12',
                updatedAt: '2022-12-12'
        });
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    });
});