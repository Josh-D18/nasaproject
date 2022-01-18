import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Animated } from "react-animated-css";
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
        <Animated
          animationIn="rotateInUpRight"
          animationOut="bounce"
          isVisible={true}
        >
          <FontAwesomeIcon
            icon={faHeart}
            onClick={toggleLike}
            className="pictureOfTheDay__btn liked"
          />
        </Animated>
      ) : (
        <Animated animationIn="lightSpeedIn" isVisible={true}>
          <FontAwesomeIcon
            icon={faHeartBroken}
            onClick={toggleLike}
            className="pictureOfTheDay__btn unliked"
          />
        </Animated>
      )}
    </>
  );
}
