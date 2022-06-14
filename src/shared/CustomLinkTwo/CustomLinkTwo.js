import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinkTwo({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ fontSize: match ? "25px" : "12px" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default CustomLinkTwo;
