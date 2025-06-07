// we used zod validation for create dto , here just show how can use interfaces.

export interface SignUpInterface {
  email: string,
  first_name: string,
  last_name: string,
  password: string
}

export interface LoginInterface {
  email: string,
  password: string
}

