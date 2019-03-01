import contentful from '../../lib/contentful';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Index(props) {
    const { items } = props;

    return (
        <Layout>
            <h1>Media Reviews</h1>
            <ul>
                {items && items.length
                    ? items.map(item => (
                          <li key={item.slug}>
                              <Link
                                  as={`/media/${item.slug}`}
                                  href={`/media/view?slug=${item.slug}`}
                              >
                                  <a>{item.title}</a>
                              </Link>
                          </li>
                      ))
                    : null}
            </ul>
        </Layout>
    );
}

Index.getInitialProps = async () => {
    const response = await contentful.getEntries({
        content_type: 'media'
    });
    const items = response.items.map(item => {
        const result = item.fields;
        result.createdAt = new Date(item.sys.createdAt);
        result.slug =
            result.title.toLowerCase().replace(' ', '-') + '-' + item.sys.id;
        return result;
    });
    return { items };
};
