import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <>
      <div className="grid grid-cols-4 gap-4 mb-6 items-center">
        <Link to={`/p/${username}`} className="col-span-3">
          <div className="flex items-center cols-span-1">
            <img
              className="rounded-full w-14 h-14 object-cover flex"
              src={`/images/avatars/${username}.jpg`}
              alt={username}
            />
            <div className="grid mx-4">
              <p className="font-bold text-sm">{username}</p>
              <p className="text-sm text-gray-light">{fullName}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
