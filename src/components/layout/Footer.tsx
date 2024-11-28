import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full bg-customblack text-slate-200">
            <Newsletter />
            <Content />
        </footer>
    )
}

function Newsletter() {
    return (
        <div className="w-full mx-auto flex flex-col items-center justify-center gap-6 bg-primary py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">Subscribe to The Newsletter.</h2>
            <p className="md:text-lg sm:w-5/6 md:w-2/3 lg:w-1/2 text-primarylight">
                Subscribe is an option offered by product vendors or service providers that allows customers.
            </p>
            <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 flex bg-slate-100 p-1 rounded">
                <input
                    type="email"
                    placeholder="username@site.com"
                    className="input w-full pr-20 bg-slate-100 border-0 focus:border-0 active:border-0 focus:ring-0 text-slate-800"
                />
                <button className="btn bg-primary2 text-slate-100 hover:bg-primary hover:text-white">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

function Content() {
    return (
        <div className='py-2'>
            <div className="footer container mx-auto grid md:grid-cols-3 gap-8 px-8 py-12 md:px-12 md:py:20">
                <div>
                    <span className="footer-title text-lg md:text-xl">BeLight</span>
                    <span className="">Software Development and Digital Marketing Agency in Ethiopia.</span>
                    <div className="mt-4 text-secondary2 flex gap-3 justify-center md:justify-start">
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />
                    </div>
                </div>

                <div>
                    <span className="footer-title">Services</span>
                    <Link href="/terms" className="link link-hover">Terms of Service</Link>

                    <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
                </div>

                <div>
                    <span className="footer-title">Contact</span>
                    <Link href="/terms" className="link link-hover">Kazanchis, Addis Ababa, Ethiopia</Link>
                    <Link href="/terms" className="link link-hover">+2523423423</Link>
                    <Link href="/terms" className="link link-hover">support@belight.com</Link>
                </div>

            </div>
            <hr className="border-secondary2 mx-4 sm:mx-6 lg:mx-8" />
            <div className='container my-2 mx-auto flex flex-col items-center justify-center gap-6 py-4 px-4 sm:px-6 lg:px-8 text-center'>
                <p className="text-center text-sm md:text-base py-4">© {new Date().getFullYear()} BeLight. All rights reserved</p>
            </div>
        </div>
    )
}