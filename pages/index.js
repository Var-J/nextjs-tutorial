import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilstyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilstyles.headingMd}>
        <p>Hello, my name is Jimmy</p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">Our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilstyles.headingMd} ${utilstyles.padding1px}`}>
        <h2 className={utilstyles.headingLg}>Blog</h2>
        <ul className={utilstyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilstyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}