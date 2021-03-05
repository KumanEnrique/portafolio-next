import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Nprogress from "nprogress";

const Layout = ({children,title,footer=true})=> {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url)=>{
            // console.log(url)
            Nprogress.start()
        }

        router.events.on('routeChangeStart',handleRouteChange)
        router.events.on('routeChangeComplete',()=>Nprogress.done())

        return ()=>{
            router.events.off('routeChangeStart',handleRouteChange)
        }
    }, [])
    
    return (
        <>
            <Navbar/>
            <main className="container py-4">
                {
                    title && (
                        <h1 className="text-center">{title}</h1>
                    )
                }
                {children}
            </main>

            {
                footer &&(
                    <footer className="text-center bg-dark">
                        <div className="container m-2">
                            <h1>&copy; Jonathan Harrison</h1>
                            <p>2000-{new Date().getFullYear()}</p>
                            <p>All rights Reserved.</p>
                        </div>
                    </footer>
                )
            }
            
        </>
    )
}

export default Layout