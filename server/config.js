import { get, post } from './api.js'

export const countLinks = (p) => get('count/links', p)
export const countClicks = (p) => get('count/clicks', p)
export const links = (p) => post('links', p)
