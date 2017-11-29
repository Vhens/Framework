let host = ' ';

if (process.env.NODE_ENV === 'development') {
  host = ' ';
} else if (process.env.NODE_ENV === 'test') {
  host = ' ';
}

export const HOST = host;

export default {
  HOST
};

