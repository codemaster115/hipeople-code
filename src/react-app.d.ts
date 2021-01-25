declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_UNSPLASH_CLIENT_ID: string;
  }
}

declare module 'react-responsive-masonry';
