export default function GeneratedLink({ year, page, position, genres }) {
  let mappedGenres = genres.map((genre) => `-${genre}`);

  return (
    <div className="container">
      <h2>Hello</h2>
      <p>
        this is a link:{" "}
        <a
          href={`https://rateyourmusic.com/charts/top/album/${year}/ge:${mappedGenres}/${page}/#pos${position}`}
          target="_blank"
          rel="noreferrer">
          {`https://rateyourmusic.com/charts/top/album/${year}/ge:${mappedGenres}/${page}/#pos${position}`}
        </a>
      </p>
    </div>
  );
}
