import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sadiq Adam Ismail</h1>
        <div className={styles.subtitle}>Full Stack Web Developer & Trainer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hi there! I&apos;m a Full Stack Web Developer and Instructor from Abuja, Nigeria.
              I specialize in creating modern, responsive, and interactive web applications using
              <strong> H JavaScript, React, Node.js, Express, and MongoDB</strong>.
            </p>
            <p className={styles.paragraph}>
              I&apos;m passionate about building web solutions that are both functional and visually appealing — 
              from dynamic frontends to powerful backend APIs. My approach combines clean design, efficient logic, 
              and real-world performance optimization.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Full-Stack Development & Training</h2>
            <p className={styles.paragraph}>
              At <span className={styles.highlight}>Passionview Solutions</span>, I lead and train aspiring developers 
              in our Full-Stack Web Development Course. The training covers everything from frontend development with React 
              to backend implementation using Node.js and Express, and database management with MongoDB.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve guided numerous students through hands-on projects — including dynamic dashboards, 
              authentication systems, e-commerce platforms, and RESTful APIs — helping them build job-ready skills 
              and real project experience.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects & Collaboration</h2>
            <p className={styles.paragraph}>
              I collaborate on innovative full-stack projects that integrate design, logic, and performance. 
              My GitHub showcases projects ranging from web-based code editors to ride-booking systems and 
              cybersecurity awareness tools — all built with modern technologies and best practices.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I&apos;m not coding or training, I enjoy mentoring young tech enthusiasts, 
              creating digital learning content, and exploring the latest in web technologies and cybersecurity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
