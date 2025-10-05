import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'megawiz.io',
    href: 'https://megawiz.io',
  },
  {
    social: 'email',
    link: 'adamsadiq05@gmail.com',
    href: 'mailto:adamsadiq05@gmail.com',
  },
  {
    social: 'github',
    link: 'Limboo05',
    href: 'https://github.com/Limboo05',
  },
  {
    social: 'linkedin',
    link: 'Adam-Sadiq',
    href: 'https://www.linkedin.com/in/Adam-Sadiq',
  },
  {
    social: 'twitter',
    link: 'Khalifahsadiq',
    href: 'https://twitter.com/Khalifahsadiq',
  },
  {
    social: 'telegram',
    link: 'Limboooo05',
    href: 'https://t.me/Limboooo05',
  },
  {
    social: 'peerlist',
    link: 'Adam Sadiq',
    href: 'https://peerlist.io/Adam-Sadiq',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
