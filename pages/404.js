import Layout from "../components/Layout"
import Link from 'next/link'

const custom404 = ()=>(
    <Layout>
        <div className="box">
            <h2>4<span className="zero"></span>4</h2>
            <p>This page does not exists. Please return to <Link href="/">
                <a >Home</a>
                </Link>
            </p>
        </div>
    </Layout>
)
export default custom404