import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <header className='bg-[#FFFCF8] md:px-[45px] px-[20px]  border-y-[1px] border-[#000000]'>
        <nav className='flex justify-between items-center'>
          <div className='flex'>
            <div className='md:text-[25px] text-[18px] color-[#000000] pr-[65px] md:py-[24px] py-[20px] border-r-[1px] border-[#000000] lg:block hidden'>
              discussion box
            </div>
            <div className='md:text-[25px] text-[18px] color-[#000000] md:px-[38px] px-[10px] md:py-[24px] py-[20px] border-r-[1px] border-[#000000]'>
              The Spotlight Experience
            </div>
          </div>

          <div className='flex items-center'>
            <div>
              <span className='lg:flex p-[13px] border-[1px] mr-[37px] border-[#000000] text-[16px] hidden'>
                <svg width="17" height="20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-[10px]'>
                  <g clip-path="url(#clip0_222_37)">
                    <path d="M16.2857 6.75C16.2857 5.63112 15.8342 4.55806 15.0305 3.76689C14.2267 2.97572 13.1366 2.53125 12 2.53125C10.8634 2.53125 9.77327 2.97572 8.96954 3.76689C8.16582 4.55806 7.71429 5.63112 7.71429 6.75C7.71429 7.86888 8.16582 8.94194 8.96954 9.73311C9.77327 10.5243 10.8634 10.9687 12 10.9688C13.1366 10.9687 14.2267 10.5243 15.0305 9.73311C15.8342 8.94194 16.2857 7.86888 16.2857 6.75ZM5.14286 6.75C5.14286 4.95979 5.8653 3.2429 7.15127 1.97703C8.43723 0.711159 10.1814 0 12 0C13.8186 0 15.5628 0.711159 16.8487 1.97703C18.1347 3.2429 18.8571 4.95979 18.8571 6.75C18.8571 8.54021 18.1347 10.2571 16.8487 11.523C15.5628 12.7888 13.8186 13.5 12 13.5C10.1814 13.5 8.43723 12.7888 7.15127 11.523C5.8653 10.2571 5.14286 8.54021 5.14286 6.75ZM2.64107 24.4688H21.3589C20.8821 21.1307 17.9679 18.5625 14.4482 18.5625H9.55179C6.03214 18.5625 3.11786 21.1307 2.64107 24.4688ZM0 25.4338C0 20.2395 4.275 16.0312 9.55179 16.0312H14.4482C19.725 16.0312 24 20.2395 24 25.4338C24 26.2986 23.2875 27 22.4089 27H1.59107C0.7125 27 0 26.2986 0 25.4338Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_37">
                      <rect width="24" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                Lisa-Marie Carter</span>
            </div>
            <div className='md:border-l-[1px] border-l-[0px] border-[#000000] md:py-[34px]  py-[24px] pl-[45px]'>
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5C0 0.670312 0.766071 0 1.71429 0H22.2857C23.2339 0 24 0.670312 24 1.5C24 2.32969 23.2339 3 22.2857 3H1.71429C0.766071 3 0 2.32969 0 1.5ZM0 9C0 8.17031 0.766071 7.5 1.71429 7.5H22.2857C23.2339 7.5 24 8.17031 24 9C24 9.82969 23.2339 10.5 22.2857 10.5H1.71429C0.766071 10.5 0 9.82969 0 9ZM24 16.5C24 17.3297 23.2339 18 22.2857 18H1.71429C0.766071 18 0 17.3297 0 16.5C0 15.6703 0.766071 15 1.71429 15H22.2857C23.2339 15 24 15.6703 24 16.5Z" fill="black" />
              </svg>
            </div>
          </div>
        </nav>
      </header>


      <div className='container container-bg mx-auto relative'>
        <div className='md:flex block justify-between items-center'>
          <div className='md:w-1/2 w-full md:px-0 px-[10px] md:pt-[0px] pt-[140px] spotlight-before-after mobile-spotlight'>
            <h1>GIVING <span>GLOBAL BRANDS</span><br /> A SEAT AT THE TABLE</h1>

            <div className='mt-[30px] md:block hidden'>
              <div className='flex max-w-[160px] justify-between bg-[#ffffff] border-[1px] border-[#000000] p-[10px]'>


                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.47768 20H0.330357V6.64732H4.47768V20ZM2.40179 4.82589C1.07589 4.82589 0 3.72768 0 2.40179C0 1.76479 0.253045 1.15389 0.703467 0.703467C1.15389 0.253045 1.76479 0 2.40179 0C3.03878 0 3.64968 0.253045 4.1001 0.703467C4.55053 1.15389 4.80357 1.76479 4.80357 2.40179C4.80357 3.72768 3.72768 4.82589 2.40179 4.82589ZM19.9955 20H15.8571V13.5C15.8571 11.9509 15.8259 9.96429 13.7009 9.96429C11.5446 9.96429 11.2143 11.6473 11.2143 13.3884V20H7.07143V6.64732H11.0491V8.46875H11.1071C11.6607 7.41964 13.0134 6.3125 15.0313 6.3125C19.2277 6.3125 20 9.07589 20 12.6652V20H19.9955Z" fill="black" />
                </svg>

                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5344 4.98678C21.5484 5.20317 21.5484 5.42438 21.5484 5.64078C21.5484 12.3107 16.5984 20 7.55156 20C4.7625 20 2.175 19.1729 0 17.735C0.39375 17.7831 0.778125 17.7975 1.18594 17.7975C3.4875 17.7975 5.60156 16.9993 7.29375 15.6432C5.13281 15.5951 3.31875 14.1428 2.69531 12.1423C3 12.1904 3.30469 12.2193 3.62344 12.2193C4.06406 12.2193 4.50469 12.1568 4.91719 12.0462C2.6625 11.5797 0.975 9.54556 0.975 7.09305V7.03054C1.63125 7.40563 2.39062 7.64126 3.19687 7.67011C1.87031 6.76605 1.00312 5.2176 1.00312 3.46718C1.00312 2.52945 1.24688 1.66867 1.67344 0.91849C4.09688 3.98173 7.73438 5.98221 11.8172 6.19861C11.7422 5.82352 11.6953 5.434 11.6953 5.04448C11.6953 2.26497 13.8891 0 16.6125 0C18.0281 0 19.3078 0.610724 20.2078 1.59173C21.3188 1.37533 22.3875 0.952152 23.3297 0.37509C22.9641 1.54845 22.1859 2.52945 21.1688 3.1546C22.1578 3.044 23.1188 2.76509 24 2.37557C23.3297 3.37581 22.4906 4.26545 21.5344 4.98678Z" fill="black" />
                </svg>


                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 2.5C2.5875 2.5 2.25 2.875 2.25 3.33333V4.48438L10.3359 11.8594C11.3063 12.7448 12.6984 12.7448 13.6688 11.8594L21.75 4.48438V3.33333C21.75 2.875 21.4125 2.5 21 2.5H3ZM2.25 7.71875V16.6667C2.25 17.125 2.5875 17.5 3 17.5H21C21.4125 17.5 21.75 17.125 21.75 16.6667V7.71875L15.0938 13.7917C13.2937 15.4323 10.7016 15.4323 8.90625 13.7917L2.25 7.71875ZM0 3.33333C0 1.49479 1.34531 0 3 0H21C22.6547 0 24 1.49479 24 3.33333V16.6667C24 18.5052 22.6547 20 21 20H3C1.34531 20 0 18.5052 0 16.6667V3.33333Z" fill="black" />
                </svg>


              </div>
            </div>
          </div>

          <div className='md:w-1/2 w-full md:px-0 px-[10px] md:pt-[240px] pt-[80px] pb-[50px] spotlight-before-after first-spotlight relative'>
            <h3 className='text-[14px] xl:text-[33px]'>The</h3>
            <h1><span>Spotlight Experience</span></h1>

            <div className='sm:flex block text-center flex-wrap items-center justify-between'>
              <h3 className='text-[14px] xl:text-[33px] ml-[70px] flex flex-wrap items-center'>by <div className='color-[#000000] pl-[10px] py-[24px]'>
                discussion box
              </div>
              </h3>

              <button class="offset">Learn more</button></div>

          </div>
        </div>
      </div>


      <section className='border-b-[1px] border-t-[1px] border-[#000000] md:hidden block'>
        <marquee>
          <div className="flex">
            <p className='md:my-[32px] my-[20px] md:text-[30px] text-[20px] mr-[212px]' loop=""><span className='font-bold'>A BUSINESS PROUDLY RUN BY A TEAM OF</span> DIVERSE WOMEN.</p>

            <p className='md:my-[32px] my-[20px] md:text-[30px] text-[20px] mr-[212px]' loop=""><span className='font-bold'>A BUSINESS PROUDLY RUN BY A TEAM OF</span> DIVERSE WOMEN.</p>

            <p className='md:my-[32px] my-[20px] md:text-[30px] text-[20px]' loop=""><span className='font-bold'>A BUSINESS PROUDLY RUN BY A TEAM OF</span> DIVERSE WOMEN.</p>
          </div>
        </marquee>
      </section>


      <section className='border-t-[1px] border-b-[1px] border-[#000000] md:bg-[#FFFCF8] bg-transparent'>
        <div className='container md:flex block text-center justify-between mx-auto py-[65px] md:px-0 px-[20px]'>
          <div className='md:w-1/3 w-full'>
            <p className='text-[18px] xl:text-[28px] md:max-w-[386px] max-w-[100%] md:mb-0 mb-[50px] font-family-roboto'>Grow your industry presence <u>through meaningful</u> networking.</p>
          </div>

          <div className='md:w-1/3 w-full'>
            <p className='text-[18px] xl:text-[28px] md:max-w-[386px] max-w-[100%] md:mb-0 mb-[50px] font-family-roboto'>Harness <u>inspiring digital</u> <u>discussions</u> to drive reliable business growth.</p>
          </div>

          <div className='md:w-1/3 w-full'>
            <p className='text-[18px] xl:text-[28px] md:max-w-[386px] max-w-[100%] font-family-roboto'> Open the door to <u>genuine</u> <u>relationships</u> with C-Level executives and peers.</p>
          </div>
        </div>

        <div className='block md:hidden'>
          <div className='py-[90px] social-media relative'>
            <div className='flex max-w-[160px] justify-between mx-auto bg-[#ffffff] border-[1px] border-[#000000] p-[10px]'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.47768 20H0.330357V6.64732H4.47768V20ZM2.40179 4.82589C1.07589 4.82589 0 3.72768 0 2.40179C0 1.76479 0.253045 1.15389 0.703467 0.703467C1.15389 0.253045 1.76479 0 2.40179 0C3.03878 0 3.64968 0.253045 4.1001 0.703467C4.55053 1.15389 4.80357 1.76479 4.80357 2.40179C4.80357 3.72768 3.72768 4.82589 2.40179 4.82589ZM19.9955 20H15.8571V13.5C15.8571 11.9509 15.8259 9.96429 13.7009 9.96429C11.5446 9.96429 11.2143 11.6473 11.2143 13.3884V20H7.07143V6.64732H11.0491V8.46875H11.1071C11.6607 7.41964 13.0134 6.3125 15.0313 6.3125C19.2277 6.3125 20 9.07589 20 12.6652V20H19.9955Z" fill="black" />
              </svg>

              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5344 4.98678C21.5484 5.20317 21.5484 5.42438 21.5484 5.64078C21.5484 12.3107 16.5984 20 7.55156 20C4.7625 20 2.175 19.1729 0 17.735C0.39375 17.7831 0.778125 17.7975 1.18594 17.7975C3.4875 17.7975 5.60156 16.9993 7.29375 15.6432C5.13281 15.5951 3.31875 14.1428 2.69531 12.1423C3 12.1904 3.30469 12.2193 3.62344 12.2193C4.06406 12.2193 4.50469 12.1568 4.91719 12.0462C2.6625 11.5797 0.975 9.54556 0.975 7.09305V7.03054C1.63125 7.40563 2.39062 7.64126 3.19687 7.67011C1.87031 6.76605 1.00312 5.2176 1.00312 3.46718C1.00312 2.52945 1.24688 1.66867 1.67344 0.91849C4.09688 3.98173 7.73438 5.98221 11.8172 6.19861C11.7422 5.82352 11.6953 5.434 11.6953 5.04448C11.6953 2.26497 13.8891 0 16.6125 0C18.0281 0 19.3078 0.610724 20.2078 1.59173C21.3188 1.37533 22.3875 0.952152 23.3297 0.37509C22.9641 1.54845 22.1859 2.52945 21.1688 3.1546C22.1578 3.044 23.1188 2.76509 24 2.37557C23.3297 3.37581 22.4906 4.26545 21.5344 4.98678Z" fill="black" />
              </svg>


              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2.5C2.5875 2.5 2.25 2.875 2.25 3.33333V4.48438L10.3359 11.8594C11.3063 12.7448 12.6984 12.7448 13.6688 11.8594L21.75 4.48438V3.33333C21.75 2.875 21.4125 2.5 21 2.5H3ZM2.25 7.71875V16.6667C2.25 17.125 2.5875 17.5 3 17.5H21C21.4125 17.5 21.75 17.125 21.75 16.6667V7.71875L15.0938 13.7917C13.2937 15.4323 10.7016 15.4323 8.90625 13.7917L2.25 7.71875ZM0 3.33333C0 1.49479 1.34531 0 3 0H21C22.6547 0 24 1.49479 24 3.33333V16.6667C24 18.5052 22.6547 20 21 20H3C1.34531 20 0 18.5052 0 16.6667V3.33333Z" fill="black" />
              </svg>
            </div>
          </div>

          <div>
            <p className='text-[14px] text-center py-[18px] border-t-[1px] border-b-[1px] border-[#000000]'>The why, how, what</p>

            <p className='text-[14px] text-center py-[18px] border-b-[1px] border-[#000000]'>Take your seat</p>

            <p className='text-[14px] text-center py-[18px] border-b-[1px] border-[#000000]'>Upcoming Discussions</p>

            <p className='text-[14px] text-center py-[18px] border-b-[1px] border-[#000000]'>About</p>

            <p className='text-[14px] text-center py-[18px] border-b-[1px] border-[#000000]'>Privacy & Cookies</p>

            <p className='text-[14px] text-center py-[18px] border-b-[1px] border-[#000000]'>Contact us</p>
          </div>


          <div className='py-[40px] relative'>
            <div className='flex max-w-[160px] justify-between mx-auto bg-[#ffffff] p-[10px] border-0'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.47768 20H0.330357V6.64732H4.47768V20ZM2.40179 4.82589C1.07589 4.82589 0 3.72768 0 2.40179C0 1.76479 0.253045 1.15389 0.703467 0.703467C1.15389 0.253045 1.76479 0 2.40179 0C3.03878 0 3.64968 0.253045 4.1001 0.703467C4.55053 1.15389 4.80357 1.76479 4.80357 2.40179C4.80357 3.72768 3.72768 4.82589 2.40179 4.82589ZM19.9955 20H15.8571V13.5C15.8571 11.9509 15.8259 9.96429 13.7009 9.96429C11.5446 9.96429 11.2143 11.6473 11.2143 13.3884V20H7.07143V6.64732H11.0491V8.46875H11.1071C11.6607 7.41964 13.0134 6.3125 15.0313 6.3125C19.2277 6.3125 20 9.07589 20 12.6652V20H19.9955Z" fill="black" />
              </svg>

              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5344 4.98678C21.5484 5.20317 21.5484 5.42438 21.5484 5.64078C21.5484 12.3107 16.5984 20 7.55156 20C4.7625 20 2.175 19.1729 0 17.735C0.39375 17.7831 0.778125 17.7975 1.18594 17.7975C3.4875 17.7975 5.60156 16.9993 7.29375 15.6432C5.13281 15.5951 3.31875 14.1428 2.69531 12.1423C3 12.1904 3.30469 12.2193 3.62344 12.2193C4.06406 12.2193 4.50469 12.1568 4.91719 12.0462C2.6625 11.5797 0.975 9.54556 0.975 7.09305V7.03054C1.63125 7.40563 2.39062 7.64126 3.19687 7.67011C1.87031 6.76605 1.00312 5.2176 1.00312 3.46718C1.00312 2.52945 1.24688 1.66867 1.67344 0.91849C4.09688 3.98173 7.73438 5.98221 11.8172 6.19861C11.7422 5.82352 11.6953 5.434 11.6953 5.04448C11.6953 2.26497 13.8891 0 16.6125 0C18.0281 0 19.3078 0.610724 20.2078 1.59173C21.3188 1.37533 22.3875 0.952152 23.3297 0.37509C22.9641 1.54845 22.1859 2.52945 21.1688 3.1546C22.1578 3.044 23.1188 2.76509 24 2.37557C23.3297 3.37581 22.4906 4.26545 21.5344 4.98678Z" fill="black" />
              </svg>


              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2.5C2.5875 2.5 2.25 2.875 2.25 3.33333V4.48438L10.3359 11.8594C11.3063 12.7448 12.6984 12.7448 13.6688 11.8594L21.75 4.48438V3.33333C21.75 2.875 21.4125 2.5 21 2.5H3ZM2.25 7.71875V16.6667C2.25 17.125 2.5875 17.5 3 17.5H21C21.4125 17.5 21.75 17.125 21.75 16.6667V7.71875L15.0938 13.7917C13.2937 15.4323 10.7016 15.4323 8.90625 13.7917L2.25 7.71875ZM0 3.33333C0 1.49479 1.34531 0 3 0H21C22.6547 0 24 1.49479 24 3.33333V16.6667C24 18.5052 22.6547 20 21 20H3C1.34531 20 0 18.5052 0 16.6667V3.33333Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className='border-b-[1px] border-[#000000] hidden md:block'>
        <marquee>
          <div className="flex">
            <p className='md:my-[32px] my-[20px] md:text-[30px] text-[20px] mr-[212px]' loop=""><span className='font-bold'>A BUSINESS PROUDLY RUN BY A TEAM OF</span> DIVERSE WOMEN.</p>

            <p className='md:my-[32px] my-[20px] md:text-[30px] text-[20px] mr-[212px]' loop=""><span className='font-bold'>A BUSINESS PROUDLY RUN BY A TEAM OF</span> DIVERSE WOMEN.</p>

            <p className='md:my-[32px] my-[20px] md:text-[30px] text-[20px]' loop=""><span className='font-bold'>A BUSINESS PROUDLY RUN BY A TEAM OF</span> DIVERSE WOMEN.</p>
          </div>
        </marquee>
      </section>
    </>
  )
}

export default App
