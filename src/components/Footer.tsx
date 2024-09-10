import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-center border-t border-gray-200 px-8 py-10">
      <div className="max-w-[1280px] w-full flex flex-wrap justify-between">
        <p>© 2024 Alphine. All Rights Reserved.</p>
        <div className="flex flex-wrap text-gray-600 gap-4 max-md:mt-6">
            <Link className="hover:underline" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:underline" href="/terms-of-service">Terms of Service</Link>
            <Link className="hover:underline" href="/terms-of-service">FAQs</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer