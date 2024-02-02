import { Link } from "react-router-dom"

const links = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/cookies-policy", label: "Cookies Policy" },
]
const Signin = () => {
  return (
    <section className="bg-signupBg bg-center min-h-screen text-white font-futuraMd font-normal">
      {/* nav */}
      <nav className="w-full flex flex-col gap-y-4 xs:flex-row justify-between items-center px-10 xs:px-20 pt-10 xs:pt-20 absolute top-0 left-0 h-36 z-10 text-center">
        <Link
          to="/"
          className="h-fit rounded-lg p-2 dark:border-2 dark:border-cyan-500"
        >
          <img src="/images/podfi.png" width={100} />
        </Link>
        <Link
          to="/signup"
          className="font-montserrat font-semibold h-fit p-2 rounded-lg border-2 border-cyan-500 hover:text-cyan-500"
        >
          Sign up for PodFi
        </Link>
      </nav>
      {/* content */}
      <div className="px-6 w-full flex justify-center items-center pt-52 xs:pt-40 xl:pt-20">
        <form
          action=""
          className="border-2 border-cyan-500 rounded-lg px-3 xs:px-12 py-6 w-full max-w-xl flex flex-col gap-y-8"
        >
          <h1 className="text-3xl text-center -mb-4">Sign in</h1>
          <h3 className="text-xl text-center mb-4">Sign In To Your Account</h3>

          
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-lg p-4 mt-2 bg-zinc-100 text-black outline-cyan-500 text-sm font-montserrat dark:bg-neutral-800 dark:text-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              className="w-full rounded-lg p-4 mt-2 bg-zinc-100 text-black outline-cyan-500 text-sm font-montserrat dark:bg-neutral-800 dark:text-cyan-500"
            />
          </div>
          <Link to='#' className="font-montserrat font-semibold text-sm self-end text-cyan-500 hover:text-cyan-600">Forgot Password</Link>
          

          <button
            type="submit"
            className="self-center px-8 xs:px-12 py-4 text-lg bg-cyan-600 hover:bg-cyan-700 rounded-xl"
          >
            Sign in
          </button>
          <div className="self-center flex gap-x-4">
            <img
              src="/images/signup_vector.svg"
              width={100}
              className="w-16 xs:w-[100px]"
            />
            <span className="font-montserrat">OR</span>
            <img
              src="/images/signup_vector.svg"
              width={100}
              className="w-16 xs:w-[100px]"
            />
          </div>
          <button
            type="submit"
            className="self-center py-3 px-4 text-lg bg-zinc-50 hover:bg-zinc-300 rounded-xl text-sky-900"
          >
            <img
              src="/images/particle.svg"
              alt="particle logo"
              width={35}
              height={35}
              className="inline mr-2"
            />
            Continue with Particle
          </button>
        </form>
      </div>
      {/* footer */}
      <ul className="w-full flex flex-col xs:flex-row justify-center items-center gap-y-4 gap-x-8 py-16">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="hover:text-cyan-500">
              {link.label}
            </Link>
          </li>
        ))}
        <li>Copyright 2024</li>
      </ul>
    </section>
  )
}
export default Signin
