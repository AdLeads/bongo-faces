import axios from 'axios';
import CardList from './CardList.vue'
jest.mock('axios');

describe('CardList.vue', () => {
    test('should fetch users', () => {
        const users = [{
            title: "Pre-fab homes",
            description: "Fulano",
            key: 1,
            flex: 12
        }];
        const resp = { data: users };
        axios.get.mockResolvedValue(resp);

        // or you could use the following depending on your use case:
        // axios.get.mockImplementation(() => Promise.resolve(resp))
        const data =CardList.methods.fetchItems();
        return data => expect(data).toEqual(users);
    });
})



// ========================= GENERIC TEST =====================================
// test('there is no I in team', () => {
//     expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
// });

// test('adding floating point numbers', () => {
//     const value = 0.1 + 0.2;
//     // expect(value).toBe(0.3); //          This won't work because of rounding error
//     expect(value).toBeCloseTo(0.3); // This works.
// });