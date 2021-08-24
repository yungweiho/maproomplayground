import Document, { Html, Head, Main, NextScript } from 'next/document';

// TODO: 112. 未來 htmlLang 須改為動態

const htmlLang = 'zh-TW';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={htmlLang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
