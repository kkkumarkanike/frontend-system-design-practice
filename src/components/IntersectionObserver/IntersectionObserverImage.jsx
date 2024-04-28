import React, { useEffect, useRef, useState } from "react";

function IntersectionObserverImage({ imageDetails }) {
  const [isOnViewport, setIsOnViewport] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersectionCb, {
      root: null,
      threshold: 0.5,
    });
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef.current]);
  const onIntersectionCb = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsOnViewport(true);
    }
  };
  return (
    <div ref={imageRef}>
      {!isOnViewport ? (
        <div
          style={{
            margin: "10px 0px",
            width: "300px",
            height: "300px",
            background: "#aaa",
          }}
        ></div>
      ) : (
        <img
          src={imageDetails.src.large2x}
          alt={imageDetails?.alt}
          width={300}
          height={300}
          style={{ margin: "10px 0px" }}
        />
      )}
    </div>
  );
}

export default IntersectionObserverImage;
