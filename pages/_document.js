import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>My next blog</title>
          <meta name='description' content='blog posts on front end development' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='notification'></div>
        </body>
      </Html>
    );
  }
}
