import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-wrap justify-between mx-auto w-full max-w-[1280px] min-h-[70vh]">
        <div className="w-[48%] max-md:w-full my-auto">
          <h2 className="text-4xl mb-3 font-semibold">Enhance your reading experience</h2>
          <p className="desc">From online blogs, news, and magazines to complex academic papers 
            and research articles, Alphine helps you understand and enjoy your reading by simplifying 
            complex words that may overwhelm you.</p>
          <Link className="text-blue-600 hover:underline" href="/features">Learn More</Link>
        </div>
        <iframe className="max-md:w-full my-auto rounded-md" width="480" height="340"
          src="https://www.youtube.com/embed/jqf_c9Pw8gs?autoplay=1&mute=1" allowFullScreen>
        </iframe>
      </section>
      <section className="flex flex-row-reverse flex-wrap justify-between mx-auto py-24 w-full max-w-[1280px]">
        <div className="w-[48%] max-md:w-full my-auto text-right max-md:text-left">
          <h2 className="text-4xl mb-3 font-semibold">Improve your vocabulary</h2>
          <p className="desc">Keep track of the words that you&apos;re unfamiliar with. Alphine will save up to 300 unfamiliar words that you most recently encountered. 
            Learn from your mistakes and ultimately build a strong vocabulary with Alphine.</p>
        </div>
        {/* <Image className="max-xl:w-[360px] max-md:w-[450px] max-sm:w-full max-md:mt-8" src="/icon/quizcards.svg" width={450} height={350} alt="quizcards" /> */}
      </section>
      <section className="flex flex-wrap justify-between mx-auto py-24 w-full max-w-[1280px]">
        <div className="w-[48%] max-md:w-full">
          <h2 className="text-4xl mb-3 font-semibold">Read smarter, not harder</h2>
          <p className="desc">Ever had a moment where you&apos;re unable to stay focused because there are just so many words that you&apos;ve never seen before?
            Don&apos;t bother wasting your time on looking up those words—Alphine will keep an eye on whatever text you&apos;re reading and 
            annotate unfamiliar words with their corresponding context-aware definitions.
          </p>
          <Link className="text-blue-600 hover:underline" href="/demo">Get a Demo</Link>
        </div>
      </section>
      <section className="flex flex-row-reverse flex-wrap justify-between mx-auto py-24 w-full max-w-[1280px]">
        <div className="w-[48%] max-md:w-full text-right max-md:text-left">
          <h2 className="text-4xl mb-3 font-semibold">Your privacy, our priority</h2>
          <p className="desc">We neither record your browsing history nor sell your data to third parties. All word level inferences are made on
            the client side to protect your privacy. For more information, please review our privacy policy or contact us.</p>
          <Link className="text-blue-600 hover:underline" href="/privacy-policy">Learn More</Link>
        </div>
      </section>
    </>
  );
}
