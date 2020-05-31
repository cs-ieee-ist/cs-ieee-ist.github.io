import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const TOPICS_DIR_PATH = 'content/topics';
const contentDirectory = path.join(process.cwd(), TOPICS_DIR_PATH)
const aboutPagePath = path.join(process.cwd(), 'content/about.md')

export function getContentTopics() {
  // Get topics names under /content
  return fs.readdirSync(contentDirectory)
}

export function getSortedContentData() {
  // Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory)
  const allContentData = fileNames.map(fileName => {

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })
  // Sort posts by date
  return allContentData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getTopicPages(topic: string) {
  const topicPagesArr: { id: string, title: string }[] = [];
  const topicDir = path.join(contentDirectory, topic);
  const names = fs.readdirSync(topicDir);
  for (let name of names) {
    name = name.replace(/\.md$/, '');
    const title = name.charAt(0).toUpperCase() + name.slice(1);
    const pageId = `/content/${topic}/${name}`;
    topicPagesArr.push({ id: pageId, title });
  }

  return topicPagesArr.sort((a, b) => {
    const aId = a.id.split("/")[a.id.split("/").length-1];
    const bId = b.id.split("/")[b.id.split("/").length-1];
    if (aId == "introduction") return -1;
    if (bId == "introduction") return 1;
    if (aId < bId) {
      return -1;
    }
    if (aId > bId) {
      return 1;
    }
    return 0;
  });
}

export function getAllContentIds() {
  const topicsNames = fs.readdirSync(contentDirectory)
  let ids: { params: { topic: string, id: string } }[] = [];
  for (const topicName of topicsNames) {
    const topicPath = path.join(contentDirectory, topicName)
    const filesNames = fs.readdirSync(topicPath)
    const topicIds = filesNames.map(fileName => {
      return {
        params: {
          topic: topicName,
          id: `${fileName.replace(/\.md$/, '')}`
        }
      }
    })
    ids = ids.concat(topicIds);
  }

  return ids;
}

function isTopicRoot(id: string) {
  return !id.includes("/");
}

export async function getContentData(topic: string, id: string) {
  // Load introduction if is topic root path

  const fullPath = path.join(contentDirectory, `${topic}/${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    topic,
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}


export async function getAboutContent() {
  // Read markdown file as string
  const fileContents = fs.readFileSync(aboutPagePath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Return data
  return contentHtml
}


export async function getPages() {
  let pages = [];
  const topics = fs.readdirSync(contentDirectory, 'utf8');
  for (const topic of topics) {
    const topicPath = path.join(contentDirectory, topic);
    const topicPages = fs.readdirSync(topicPath, 'utf-8');
    const nTopicPages = topicPages.map(value => `${topic}-${value.replace(/\.md$/, '')}`);
    pages = pages.concat(nTopicPages);
  }

  return pages;
}