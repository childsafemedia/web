import Layout from "../components/Layout";

export default function Index() {
    return (
        <Layout>
            <div>
                <h1>Coming Soon</h1>
            </div>
            <style jsx global>
            {`
                main {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}
            </style>
        </Layout> 
    );
}