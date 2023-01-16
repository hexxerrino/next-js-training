import Layout from "../../../components/layout";
import Date from '../../../components/date';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';

export const revalidate = 60000; // revalidate this page every 60000 seconds

export default async function Post({ params }) {
    const postData = await getPostData(params.id);

    return (
        <Layout>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={`${utilStyles.lightText} mb-2`}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function generateStaticParams() {
    const paths = getAllPostIds();
  
    return paths.map((path) => ({
        id: path.id,
    }));
}