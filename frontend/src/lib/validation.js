export function validateForm(form) {
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!nameRegex.test(form.name)) return 'Invalid full name';
  if (!emailRegex.test(form.email)) return 'Invalid email';
  if (!phoneRegex.test(form.phone)) return 'Invalid phone number';
  if (!form.message.trim()) return 'Message cannot be empty';

  return 'SUCCESS';
}
