import { login, logout } from '../../actions/auth';
import expenses from '../fixtures/expenses';

test('should login with user uid', () => {
    const uid = expenses[1].id;
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should logout user', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})