import styles from "./layout.module.css";
import Link from "next/link";

export default function ContentSidebar({
  topicPages,
  activePage,
}: {
  topicPages: {
    id: string;
    title: string;
  }[];
  activePage: string;
}) {
  return (
    <div className={` ${styles.contentSidebar}`}>
      <ul className={styles.sidebarList}>
        {topicPages.map((page) => {
          return (
            <li
              key={page.title}
              className={`${styles.sidebarItem} ${
                isSamePage(page.id, activePage) ? styles.active : ""
              }`}
            >
              <Link href={page.id}>
                <a>{page.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const isSamePage = (page: string, activePage: string) => {
  return activePage === page.split("/")[page.split("/").length-1];
};
