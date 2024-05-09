import ContentLoader from "react-content-loader";
import "./skeleton.scss";

const Skeleton = () => (
    <ContentLoader
        className="skeleton"
        speed={2}
        width={280}
        height={300}
        viewBox="0 0 300 318.66"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="8" y="1" rx="5" ry="5" width="280" height="124" />
        <rect x="9" y="140" rx="5" ry="5" width="164" height="23" />
        <rect x="8" y="179" rx="2" ry="2" width="120" height="18" />
        <rect x="10" y="214" rx="4" ry="4" width="82" height="23" />
    </ContentLoader>
);

export default Skeleton;
