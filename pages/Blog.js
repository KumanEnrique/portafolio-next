import Layout from '../components/Layout'
import { posts } from "../profile";
import Link from 'next/link'

const Postcard = ({post})=>(
    <div className="col-md-4 my-4">
        <div className="card">
            <img src={post.img} className="img-fluid"/>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
                    <a className="btn btn-primary">Read</a>
                </Link>
            </div>
        </div>
    </div>
)

const Blog = ()=>(
    <Layout footer={false} title="my blog">
        <div className="row">
            {
                posts.map((post,index)=>(
                    <Postcard post={post} key={index}></Postcard>
                ))
            }
        </div>
    </Layout>
)

export default Blog;