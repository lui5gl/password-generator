export default function Background() {
  return (
    <video
      src={"/video/background.mp4"}
      className="absolute -z-10 h-full w-full object-cover"
      autoPlay
      muted
      loop
    />
  );
}
