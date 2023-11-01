import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from  './logo.svg'
import test from './test.jpg'
import HorizontalGallery from '../components/HorizontalGallery';
import Team from "../components/Team"
import Link from 'next/link';
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className='flex flex-row justify-center'>
        <Image src={logo} className='w-[40rem] ml-[15rem]'></Image>
      <div className=" w-screen h-screen bg-white flex items-center justify-center  text-[#407bbf] font-bungee text-7xl flex-col gap-y-7 ">
        <h1 className="animate-bounce font-extrabold text-9xl">Hire Tech</h1>
        <p className='text-2xl'>Hiretech refines your interview skills using cutting-edge sentiment analysis. Dive deep into feedback, understand your impact,<br /> and shine in every interview. Elevate your prep with Hiretech.</p>
        <Link
                href="/"
              
                className="group rounded-full pl-[8px] min-w-[300px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                  <svg
                    className="w-[16px] h-[16px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.5 6.5L12 12.25L18.5 6.5"
                    ></path>
                  </svg>
                </span>
                Visit Our Main Page
              </Link>
      </div>

      </div>
      
      <HorizontalGallery />
      <div className="w-screen h-screen bg-white flex items-center justify-center text-[#407bbf] font-bungee text-7xl gap-x-5">
      <h1>Meet Our Team</h1>
      
      <div className="flex justify-center">
      <Image src={test}></Image>
      </div>
      </div>{' '}
    </div>
  );
}
