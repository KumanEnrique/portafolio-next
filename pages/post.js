import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import { posts } from "../profile";

const post = ()=>{
    const router = useRouter()
    // console.log(router.query.title)
    const currentPost = posts.filter((post)=>post.title == router.query.title)[0]

    return(
        <Layout title={currentPost.title}>
            <div className="text-center">
                <img src={currentPost.img} className="img-fluid" alt={currentPost.title}/>
                <p>{currentPost.description}</p>
            </div>
        </Layout>
    )
}

export default post