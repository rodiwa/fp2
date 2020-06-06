export const INIT_DB_LOAD = 'INIT_DB_LOAD'

export const initDBAction = (payload) => {
  return {
    type: INIT_DB_LOAD,
    payload
  }
}
