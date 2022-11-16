import { NextPage } from 'next'
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../states/darkMode';

interface Props {
  title: string;
  description: string;
}

const SEO: NextPage<Props> = ({title, description}) => {
  const darkmode = useRecoilValue(darkModeState);

    return <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name="theme-color" content={darkmode ? "#151B28" : "#F2F9FB"} />
        <link rel="icon" href={darkmode ? "/images/dark/fine-logo-light.svg" : "/images/finefish-ico.png"} />
    </Head>
}

export default SEO;