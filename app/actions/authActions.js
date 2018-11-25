export const LOG_IN = 'ADD_TODO'
export const LOG_OUT = 'TOGGLE_TODO'

export function login(user) {
  return { 
    type: LOG_IN, 
    payload: user,
  }
}

export function logout() {
  return { 
    type: LOG_OUT
  }
}