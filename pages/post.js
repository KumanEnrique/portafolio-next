import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import { posts } from "../profile";

const post = ()=>{
    const router = useRouter()
    // console.log(router.query.title)
    const currentPost = posts.filter((post)=>post.title == router.query.title)[0]

    return(
        <Layout title={router.query.title}>
        </Layout>
    )
}

export default post