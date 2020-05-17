import authReducer from '../../reducers/auth';
import expenses from '../fixtures/expenses';

test('should login user authReducer', () => {
    const state = authReducer(undefined, { type: 'LOGIN', uid: expenses[0].id })
    expect(state).toEqual({
        uid: expenses[0].id
    })
})

test('should logout user authReducer', () => {
    const user = {
        uid: expenses[1].id
    }
    const state = authReducer(user, { type: 'LOGOUT' })
    expect(state).toEqual({})
})