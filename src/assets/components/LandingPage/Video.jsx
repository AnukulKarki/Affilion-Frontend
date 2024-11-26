const Video = () => {
  return (
    <section className="w-full">
      <video
        className="max-w-5xl lg:max-h-[80vh] mx-auto px-4 sm:px-6 lg:px-8 w-full h-auto"
        autoPlay
        controls
        muted
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Video;
