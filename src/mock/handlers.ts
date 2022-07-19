import { rest } from 'msw';

import notes from './data/notes.json';

export const API_SERVER_URL = 'https://api.greenfield.dev';

export const handlers = [
  rest.post(`${API_SERVER_URL}/auth/login`, async (req, res, ctx) => {
    const { email, password } = await req.json();

    console.log(email, password);
    return res(ctx.status(200));
  }),
  rest.get(`${API_SERVER_URL}/note`, (req, res, ctx) => {
    return res(ctx.json(notes));
  }),
];
