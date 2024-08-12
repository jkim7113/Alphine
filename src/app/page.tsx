import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex pt-24 pb-32 max-lg:pb-24">
        <div className="w-1/2 max-md:w-full">
          <h2 className="text-4xl mb-3">Enhance your reading experience</h2>
          <p className="desc">From online blogs, news, and magazines to complex academic papers 
            and research articles, Alphine helps you understand and enjoy your reading by simplifying 
            complex words that may overwhelm you.</p>
          <Link className="text-blue-600 hover:underline" href="/features">Learn More</Link>
        </div>
      </section>
      <section className="py-24 flex flex-row-reverse flex-wrap justify-around">
        <div className="w-[48%] max-md:w-full my-auto text-right max-md:text-left">
          <h2 className="text-4xl mb-3">Improve your vocabulary</h2>
          <p className="desc">Keep track of the words that you're unfamiliar with. Alphine will save up to 300 words that you most recently encountered. 
            Learn from your mistakes and ultimately build a strong vocabulary with Alphine.</p>
        </div>
        <Image className="max-xl:w-[360px] max-md:w-[450px] max-sm:w-full max-md:mt-8" src="/icon/quizcards.jpg" width={450} height={350} alt="quizcards" />
      </section>
      <section className="py-24">
        <div className="w-[48%] max-md:w-full">
          <h2 className="text-4xl mb-3">Read without hindrance</h2>
          <p className="desc">Ever had a moment where you&apos;re unable to focus on reading because there are just so many words that you've never seen before?
            Don&apos;t bother wasting your time on looking up those words—Alphine will keep an eye on whatever text you&apos;re reading and 
            annotate unfamiliar words with their corresponding context-aware definitions.
          </p>
          <Link className="text-blue-600 hover:underline" href="/demo">Get a Demo</Link>
        </div>
      </section>
      <section className="py-24">
        <div className="w-[48%] max-md:w-full text-right">
          <h2 className="text-4xl mb-3">Personal privacy ensured</h2>
          <p className="desc">We neither record your browsing history nor sell your data to third parties. All word level inferences are made on
            the client side to protect your privacy.</p>
          <Link className="text-blue-600 hover:underline" href="/privacy-policy">Learn More</Link>
        </div>
      </section>
    </>
  );
}
