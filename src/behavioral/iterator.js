newsFeeds = [
  { type: "top-headlines", query: "source=bbc-news" },
  { type: "everything", query: "domains=techcrunch.com&language=en" },
  { type: "everything", query: "domains=comickbookmovie.com&language=en" }
];

for (const newsFeed of newsFeeds) {
  console.log(newsFeed);
}
