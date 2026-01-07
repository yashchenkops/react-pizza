import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <div className="pizza-block">
    {/* IMAGE */}
    <ContentLoader
      className="pizza-skeleton__image"
      speed={2}
      viewBox="0 0 100 65"
      preserveAspectRatio="xMidYMid meet"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="100" height="65" />
    </ContentLoader>

    {/* CONTENT */}
    <ContentLoader
      className="pizza-skeleton__content"
      speed={2}
      viewBox="0 0 100 60"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="1" rx="4" ry="4" width="100" height="8" />
      <rect x="0" y="14" rx="3" ry="3" width="100" height="26" />
      <rect x="0" y="46" rx="3" ry="3" width="30" height="6" />
      <rect x="60" y="44" rx="5" ry="5" width="40" height="10" />
    </ContentLoader>
  </div>
);

export default Skeleton;
