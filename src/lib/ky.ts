import ky from 'ky';

import { API_URL } from '@/config';
import storage from '@/utils/storage';

export const baseRequest = ky.extend({
  prefixUrl: API_URL,
});

export const requestWithCookie = baseRequest.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        const token = storage.getToken();
        if (token) {
          request.headers.set('Authorization', `${token}`);
        }
      },
    ],
  },
});
