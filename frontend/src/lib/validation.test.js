import { validateForm } from './validation'

describe('Form Validation', () => {
  test('valid form should pass', () => {
    const form = {
      name: 'Vennila',
      email: 'ven123@gmail.com',
      phone: '9876543210',
      message: 'Hello'
    }
    expect(validateForm(form)).toBe('SUCCESS')
  })

  test('invalid name should fail', () => {
    const form = { name: 'Vennila123', email: 'ven123@gmail.com', phone: '9876543210', message: 'Hello' }
    expect(validateForm(form)).toBe('Invalid full name')
  })

  test('invalid email should fail', () => {
    const form = { name: 'Vennila', email: 'ven123@', phone: '9876543210', message: 'Hello' }
    expect(validateForm(form)).toBe('Invalid email')
  })

  test('invalid phone should fail', () => {
    const form = { name: 'Vennila', email: 'ven123@gmail.com', phone: '123abc', message: 'Hello' }
    expect(validateForm(form)).toBe('Invalid phone number')
  })

  test('empty message should fail', () => {
    const form = { name: 'Vennila', email: 'ven123@gmail.com', phone: '9876543210', message: '' }
    expect(validateForm(form)).toBe('Message cannot be empty')
  })
})
