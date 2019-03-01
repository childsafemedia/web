import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700"
                        rel="stylesheet"
                    />
                    <style>{`body { margin: 0; padding: 0; font-family: Ubuntu; }`}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
