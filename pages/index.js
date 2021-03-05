import Layout from '../components/Layout'
import { Skills,experiences,projects } from "../profile";
import Link from "next/link";

const Index = ()=> (
    <Layout>
        {/*card header*/}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="man.jpg" className="img-fluid" width="250"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Jonathan Harrison</h1>
                            <h3>FullStack Developer</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium magnam error porro, consequatur, quasi impedit corrupti blanditiis, voluptates earum quod eaque repellat ut voluptatem! Quo doloribus voluptate ut corrupti!
                            </p>
                            <a href="/hireme">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/**segunda seccion */}
        <div className="row my-4">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            Skills.map(({skill,percentage }, i) => (
                                <div className="my-3" key={i}>
                                    <h5>{skill+" "+percentage+"%"}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}
                                            aria-valuenow={percentage} 
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul className="list-group">
                            {
                                experiences.map(({title,description,from,to},index)=>(
                                    <li className="list-group-item" key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from} {to ? `- ${to}` : "- current"}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/*seccion portafolio*/}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Portfolio</h1>
                        </div>
                        {
                            projects.map(({name,location,description},index)=>(
                                <div className="col-md-4 my-3" key={index}>
                                    <div className="card bg-white text-dark">
                                        <div className="card-header">
                                            <img src={location} className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <Link href="/project">
                                                <a>go to project</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
)

export default Index;