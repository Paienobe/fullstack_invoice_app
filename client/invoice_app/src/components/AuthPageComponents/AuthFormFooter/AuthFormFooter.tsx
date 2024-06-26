import { Link } from "react-router-dom";
import { AuthFormFooterProps } from "./types";

const AuthFormFooter = ({
  question,
  link_text,
  route,
}: AuthFormFooterProps) => {
  return (
    <div className="mt-4">
      <p className="text-center">
        {question}{" "}
        <Link to={route} className="text-purple">
          {link_text}
        </Link>
      </p>
    </div>
  );
};

export default AuthFormFooter;
