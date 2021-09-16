import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
/*import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'*/

const name = 'Hermod'
export const siteTitle = 'About'

export default function About({ children, home }){
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="About Hermod"
                />
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className="header">
                {home ? (
                <>
                    <Image
                    priority
                    src="/images/download.jpg"
                    className="borderCircle"
                    height={144}
                    width={144}
                    alt={name}
                    />
                    <h1 className="heading">{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/images/download.jpg"
                        className="borderCircle"
                        height={108}
                        width={108}
                        alt={name}
                        />
                    </a>
                    </Link>
                    <h2 className="headingLG">
                    <Link href="/">
                        <a className="colorInherit">{name}</a>
                    </Link>
                    </h2>
                </>
                )}
            </header>

            <footer>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel" className="logo" />
                </a>
            </footer>

            <style jsx>{`
                .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                }

                main {
                padding: 1rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                }

                footer {
                width: 100%;
                height: 50px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                footer img {
                margin-left: 0.5rem;
                }

                footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                }

                a {
                color: inherit;
                text-decoration: none;
                }

                .title a {
                color: #000000;
                text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                text-decoration: underline;
                }

                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 2rem;
                }

                .title,
                .description {
                text-align: center;
                }

                .description {
                line-height: 1.5;
                font-size: 1.5rem;
                }

                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }

                .logo {
                height: 1em;
                }

                @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}