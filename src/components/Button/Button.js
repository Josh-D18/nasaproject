import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Button() {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    let liked = like;
    liked = !like;
    setLike(liked);
  };

  return (
    <>
      {like ? (
        <FontAwesomeIcon
          icon={faHeartBroken}
          onClick={toggleLike}
          value={like}
          className="pictureOfTheDay__btn liked"
        />
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          onClick={toggleLike}
          value={like}
          className="pictureOfTheDay__btn unliked"
        />
      )}
    </>
  );
}
