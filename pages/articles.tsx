import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/types';
import styles from '@/styles/ArticlesPage.module.css';

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  const hasArticles = Array.isArray(articles) && articles.length > 0;

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Articles</h1>
      <p className={styles.pageSubtitle}>
        Recent posts from{' '}
        <a
          href="https://dev.to/itsnitinr"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>{' '}
        where I share insights and tutorials about web development.
      </p>

      <div className={styles.container}>
        {hasArticles ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p className={styles.paragraph}>
            ⚠️ No articles available right now. Please check back later or
            verify your <code>DEV_TO_API_KEY</code> in Vercel settings.
          </p>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const apiKey = process.env.DEV_TO_API_KEY || '';
    const res = await fetch(
      'https://dev.to/api/articles/me/published?per_page=6',
      {
        headers: {
          'api-key': apiKey,
        },
      }
    );

    // Log to Vercel build logs for debugging
    console.log('Fetching dev.to articles...');
    console.log('API Key Present:', !!apiKey);
    console.log('Response Status:', res.status);

    const data = await res.json();

    // Defensive check: Ensure data is an array
    const articles = Array.isArray(data) ? data : [];

    return {
      props: {
        title: 'Articles',
        articles,
      },
      revalidate: 60, // Rebuild every minute
    };
  } catch (error) {
    console.error('❌ Error fetching articles:', error);
    return {
      props: {
        title: 'Articles',
        articles: [],
      },
      revalidate: 60,
    };
  }
}

export default ArticlesPage;
