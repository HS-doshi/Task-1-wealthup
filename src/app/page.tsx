import styles from './page.module.css'
import footerImage from './../../Images/Scroller with logos.png';
import Image from 'next/image';
import headerImage from './../../Images/13.png'
import middleImage from './../../Images/11.png'
import centerImage from './../../Images/Untitled (120 × 120 px) 1.png'
import aeroImg from './../../Images/Group 10.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.maintop}>

          <header className={styles.header}>
            <p style={{
              fontFamily: 'Poppins',
              fontSize: '60px',
              fontWeight: 600,
              lineHeight: '90px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: 'white',
              textDecorationColor: 'white',
            }}>
              Backed by the best
            </p>

            <p style={{
              fontFamily: 'Poppins',
              fontSize: '30px',
              fontWeight: 300,
              lineHeight: '45px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: 'white',
            }}>
              Wealthup is backed and supported by
            </p>
          </header>
          <Image src={headerImage} alt='header-image' className={styles.headerimg} />
        </div>
        <div className={styles.center}>
          <p style={{
            fontFamily: 'Poppins',
            fontSize: '40px',
            fontWeight: '800',
            lineHeight: '60px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'white',
          }} className={styles.transform}>Transforming Lives - Financially!</p>
          <div className={styles.cendescri}>

            <div className={styles.centsimrin}>
              <Image src={centerImage} alt='centerImaeg' className={styles.img} />
            </div>

            <p className={styles.text}>
              <p>Simrin Sirur</p>
              <p>Journalist</p>
              <p>The Print, Gurugram</p>
              I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money.</p>
            <div className={styles.imgggg}>

              <Image src={aeroImg} alt='aero' className={styles.aero} />
              <Image src={middleImage} alt='middle' className={styles.middle} />
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <p className={styles.line}></p>
          <Image src={footerImage} alt='footer image' className={styles.ftrimg} />
        </footer>
      </div>
    </main >
  )
}
