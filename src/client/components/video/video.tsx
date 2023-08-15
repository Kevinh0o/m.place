
type Props = {
    src: string;
}
export default function Video({ src }: Props) {
    return (
        <video
        loop
        autoPlay
        muted
        className="h-full w-full object-cover"
        >
            <source src={src} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
  }
  