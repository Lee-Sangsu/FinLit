import { NextPage } from 'next'
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
}

const SEO: NextPage<Props> = ({title, description}) => {
    return <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name="theme-color" content="var(--light-bg)" />
        <link rel="icon" href="/images/finefish-ico.png" />
    </Head>
}

export default SEO;