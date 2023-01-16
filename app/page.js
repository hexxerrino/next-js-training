import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

// Using this async function just for training to simulate fetching data
async function getData() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default async function Home() {
    const data = await getData();
    const allPostsData = data.props.allPostsData;

    return (
        <Layout home>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                    </small>
                    </li>
                ))}
                </ul>
            </section>
        </Layout>
    );
}