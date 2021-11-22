import Link from 'next/link'
import styles from './social-links.module.css'

export default function SocialLinks({github, linkedin, twitter, email, strava}) {
    return (
        <div className={styles.social}>
            {github && (
                <Link href={github}>
                    <a target="_blank"><img src="assets/icons/github.svg" alt="github"/></a>
                </Link>
            )}
            {linkedin && (
                <Link href={linkedin}>
                    <a target="_blank"><img src="assets/icons/linkedin.svg" alt="linkedin"/></a>
                </Link>
            )}
            {twitter && (
                <Link href={twitter}>
                    <a target="_blank"><img src="assets/icons/twitter.svg" alt="twitter"/></a>
                </Link>
            )}
            {strava && (
                <Link href={strava}>
                    <a target="_blank"><img src="assets/icons/strava.svg" alt="strava"/></a>
                </Link>
            )}
            {email && (
                <Link href={email}>
                    <a target="_blank"><img src="assets/icons/email.svg" alt="email"/></a>
                </Link>
            )}
           <Link href={'/cv'}>
               <a target="_blank"><img src="assets/icons/cv.svg" alt="cv"/></a>
           </Link>
      </div>
    );
}
