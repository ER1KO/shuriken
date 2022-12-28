import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/imv2myq.css"></link>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" async />
      </Head>
      <body className='bg-[#010102]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
