import Head from "next/head";
import styles from "./layout.module.css";
import Header from "../components/header";
import Link from "next/link";

export const siteTitle = "CS Essentials by IEEE-IST CS";

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Header />

			<div className={styles.mainContent}>
				{!home ? (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>
								<img src="/icons/chevron--left.svg" alt="back-icon" />
								<span>Back to Home</span>
							</a>
						</Link>
					</div>
				) : (
					""
				)}

				<main>{children}</main>
			</div>
			<footer className={styles.footer}>
				<span className={styles.footerTitle}>{siteTitle}</span>
			</footer>
		</div>
	);
}
