import { Navigation } from "./Layouts/Navigation";
import SEO from "./SEO";


export default function Layout({children}:any) {
    return <>
        <SEO title="it's fine" description="Youth accessing financial freedom and security" />
        <Navigation />
        <main>{children}</main>
    </> 
}