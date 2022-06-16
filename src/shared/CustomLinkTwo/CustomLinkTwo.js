import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinkTwo({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          background: match ? "#fff" : "#ED6949",
          color: match ? "#65509c" : "#fff",
          padding: "3px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLinkTwo;
