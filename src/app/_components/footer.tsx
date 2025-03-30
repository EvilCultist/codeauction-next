
import Link from "next/link";
import Image from "next/image";


export async function Footer () {
  return (
<footer className="px-8 bg-[#111115]">
      <div className="container mx-auto py-14 mb-28">
        <div
          className="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-between text-white md:mx-auto space-y-5 mx-auto max-w-lg md:max-w-none"
        >
          <div className="flex flex-row gap-4 w-full min-w-fit md:w-1/4 md:mx-auto">
            <div className="flex pt-4 text-white">
              <Image src="/logowhite.png" alt="logo" width={164} height={164} />
            </div>
            <div className="flex flex-col md:justify-center">
              <h1 className="heading text-xl font-bold">IEEE</h1>
              <h1 className="heading text-xl font-bold">IIIT Delhi</h1>
              <h2 className="heading text-md font-bold text-gray-500">
                student branch
              </h2>

              <p className="text-sm text-gray-500 mt-3">
                IIIT Delhi, Okhla Industrial, <br />
                Phase-III, New Delhi-110020
              </p>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row gap-4 md:gap-16 md:justify-between w-full md:w-1/3 md:mx-auto"
          >
            <div className="flex flex-col w-full md:w-1/2 mb-5 md:mb-5">
              <h1 className="heading font-bold">Affiliations</h1>
              <div
                className="flex flex-wrap gap-1 md:flex-col space-x-5 md:space-x-0"
              >
                <Link
                  href="https://iiitd.ac.in/"
                  target="_blank"
                  className="text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >IIIT Delhi
                  </span>
                </Link>
                <Link
                  href="https://www.ieee.org/"
                  target="_blank"
                  className="text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >IEEE
                  </span>
                </Link>
                <Link
                  href="https://www.wie.ieee.org/"
                  target="_blank"
                  className="text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >WiE
                  </span>
                </Link>
                <Link
                  href="https://www.computer.org/"
                  target="_blank"
                  className="text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >CompSoc
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <h1 className="heading font-bold">Socials</h1>
              <div className="flex flex-wrap md:flex-col md:space-x-0 gap-1">
                <Link
                  href="https://www.instagram.com/ieeeiiitdelhi/"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >Instagram
                  </span>
                </Link>
                <Link
                  href="https://www.facebook.com/ieeeiiitd/"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >Facebook
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/ieee-iiitd/"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >LinkedIn
                  </span>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCKqQYeZ_yOSWL0BQ7eWUqRA"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >YouTube
                  </span>
                </Link>
                <Link
                  href="https://twitter.com/ieee_d/"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                  ><span className="link link-underline link-underline-black"
                    >Twitter
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/5">
            <h1 className="heading font-bold">Contact</h1>
            <p className="text-gray-500">
              <Link href="mailto:ieee@iiitd.ac.in">ieee@iiitd.ac.in</Link>
            </p>

            <Link
              href="https://github.com/IEEE-IIIT-Delhi/branding"
              className="heading font-bold mt-3"
              ><span className="link link-underline link-underline-black"
                >Graphic Identity
              </span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 opacity-50 rounded-full mx-auto linejoin" />
      <p className="text-center py-3 pb-5 text-gray-600 opacity-50 heading2">
        © 2022 | IEEE - IIIT Delhi
      </p>
    </footer>
  );
};

// export default Header;
