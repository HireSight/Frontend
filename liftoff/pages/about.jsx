import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HorizontalGallery from '../components/HorizontalGallery';
import Team from "../components/Team"
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className=" w-screen h-screen bg-white flex items-center justify-center  text-[#407bbf] font-bungee text-7xl">
        <p className="animate-bounce">Scroll down</p>
      </div>
      <HorizontalGallery />
      <div className="w-screen h-screen bg-white flex items-center justify-center text-[#407bbf] font-bungee text-7xl">
          <div className='flex flex-row space-x-4'>
            <div className='flex flex-col space-y-4'>
            <Team/>
            <Team/>
            </div>
            <div className='flex flex-col space-y-4'>
            <Team/>
            <Team/>
            </div>
          </div>
      </div>{' '}
    </div>
  );
}
