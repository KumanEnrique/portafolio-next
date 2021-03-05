import Layout from '../components/Layout'
import Error from "./_error";

const Github = ({user,statusCode})=>{
    if(statusCode){
        return <Error statusCode={statusCode}></Error>
    }

    return(
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url}/>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-light my-2">Go tsasao my Github profile</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/KumanEnrique')
    const data = await res.json()

    const statusCode = res.status > 200 ? res.status : false
    return{
        props:{
            user:data,
            statusCode
        }
    }
}

export default Github