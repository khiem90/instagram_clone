import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserfollowers,
} from "../../services/firebase";

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    // update the "following" array of the logged in user
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    // update the "followers" array of the user who has been setFollowed
    await updateFollowedUserfollowers(profileDocId, userId, false);
  }

  return !followed ? (
    <div className="grid grid-cols-4 gap-4 items-center">
      <Link to={`/p/${username}`} className="col-span-3">
        <div className="flex items-center cols-span-1">
          <img
            className="rounded-full w-8 h-8 flex"
            src={`/images/avatars/${username}.jpg`}
            alt={`${username} avatar`}
          />
          <div className="grid mx-4">
            <p className="font-bold text-sm">{username}</p>
            <p className="text-sm text-gray-light">{`followed by`}</p>
          </div>
        </div>
      </Link>
      <button
        type="button"
        className="text-xs font-semibold text-blue-light p-0 ml-3"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
