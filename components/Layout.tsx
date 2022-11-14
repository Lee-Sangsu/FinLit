import { Navigation } from "./Layouts/Navigation";
import SEO from "./SEO";


export default function Layout({children}:any) {
    return <>
        <SEO title="fine.fish" description="Access to financial freedom and security" />
        <Navigation />
        <main>{children}</main>
    </> 
}