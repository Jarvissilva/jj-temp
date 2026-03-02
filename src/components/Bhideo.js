import Video from 'next-video';
// import getStarted from "@videos/getting-started"
import getStarted from "@/videos/rick.mp4"
import gift from "@/photos/gift.png"

const Bhideo = () => {
  return (
    <>
    <div className="w-[100vw] h-[100vh] lg:w-[95vw] lg:h-[95vw] xl:h-[90vh] 2xl:h-[95vh] 2xl:w-[70vw] flex items-center justify-center  bg-black rounded-2xl">

     <Video  autoplay src={getStarted} poster={gift} />
    </div>
    </>
  );
}

export default Bhideo