import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between border-t border-gray-200 px-24 max-lg:px-8 py-10">
        <p>© 2024 Alphine. All Rights Reserved.</p>
        <div className="flex flex-wrap text-gray-600 gap-4 max-md:mt-6">
            <Link className="hover:underline" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:underline" href="/terms-of-service">Terms of Service</Link>
            <Link className="hover:underline" href="/terms-of-service">FAQs</Link>
        </div>
    </footer>
  )
}

export default Footer