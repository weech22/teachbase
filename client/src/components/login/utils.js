export const required = (value) => (value ? undefined : 'IS REQUIRED');
export const minLength6 = (value) =>
  value && value.length < 6 ? 'IS TOO SHORT' : undefined;
