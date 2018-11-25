export const GET_EVENTS = 'GET_EVENTS';

export function getEvents(events) {
  return { 
    type: GET_EVENTS, 
    payload: events,
  }
}