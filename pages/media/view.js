import Layout from "../../components/Layout";
import { withRouter } from 'next/router';

function View(props) {
    return (
        <Layout>
            <h1>{props.url.query.slug}</h1>
        </Layout>
    )
}

export default View;