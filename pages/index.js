import Head from 'next/head';
import Layout from '../modules/layout';
import Image from 'next/image';
import Banner from '../src/images/pexels-alex-green-5699456.jpg';
import Img1 from '../src/images/img1.png';
import Img2 from '../src/images/img2.png';
import Img3 from '../src/images/img3.jpg';
import Phone from '../src/images/phone.png';
import Pad from '../src/images/pad.png';
import Laptop from '../src/images/laptop.png';
import Job from '../src/images/job.jpg';
import Own from '../src/images/own.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeSwiper from '../components/homeSwiper';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>邦尼約克Bonnie York</title>
        <meta
          name="description"
          content="個人專屬線上預約頁面，客人可以透過您的專屬頁面預約您的時間。 讓您在百忙之中，不必再抽空回覆客人訊息， 以達到快速有效預約。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className=" relative h-screen mb-16">
          <Image
            className=" absolute -z-10 h-screen object-cover"
            src={Banner}
          />
          <div className="my-auto items-center flex  h-screen px-16">
            <div>
              <h1 className="text-7xl py-2 text-white drop-shadow-md">
                邦尼約克
              </h1>
              <h2 className="text-7xl py-2 text-white drop-shadow-md">
                預約交給Bonner York
              </h2>
              <p className="text-white drop-shadow-md mb-6">
                快速預約/ 建立系統/專屬網址/商家/個人工作室
              </p>
              <button className="bg-gray-400 text-2xl text-white w-60 h-12">
                立即預約
              </button>
            </div>
          </div>
        </div>
        <div className="container m-auto">
          <div>
            <div id="feature" className="flex w-full justify-around mb-20">
              <div data-aos="fade-up-right" className="w-5/12 my-auto ">
                <h2 className="text-2xl mb-8 font-bold">快速建立/更改/取消</h2>
                <p className="text-lg leading-10">
                  快速建立預約，包含時間/服務項目/金額/照片/標籤/備註
                  擁有自己的專屬行事曆
                </p>
              </div>
              <div data-aos="fade-up-left" className="w-5/12">
                <Image src={Img1} />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row-reverse justify-around mb-20">
            <div data-aos="fade-up-left" className="w-5/12 my-auto">
              <h2 className="text-2xl mb-8 font-bold">統一管理預約項目/時間</h2>
              <p className="text-lg leading-10">
                店家統一管理客人/服務項目/預約時間/店家資訊，
                讓團隊間的溝通更有效率。
              </p>
            </div>
            <div data-aos="fade-up-right" className="w-5/12">
              <Image src={Img2} />
            </div>
          </div>
          <div className="flex w-full justify-around mb-20">
            <div data-aos="fade-up-right" className="w-5/12 my-auto ">
              <h2 className="text-2xl mb-8 font-bold">個人專屬線上預約頁面</h2>
              <p className="text-lg leading-10">
                客人可以透過您的專屬頁面預約您的時間。
                讓您在百忙之中，不必再抽空回覆客人訊息， 以達到快速有效預約。
              </p>
            </div>
            <div data-aos="fade-up-left" className="w-5/12">
              <Image src={Img3} />
            </div>
          </div>
          <div className=" w-full ">
            <h2 className="text-2xl text-center font-bold mb-8">其他功能</h2>
            <ul className="mx-auto flex justify-between mb-16">
              <li
                data-aos="zoom-in-right"
                className="w-3/12 mx-auto text-center"
              >
                <Image className="mb-3" src={Phone} />
                <h3 className="text-xl mb-2">金額統計及服務營收占比</h3>
                <p>
                  自動加總每月訂單，可查看已完成與未完成訂單營業額，根據不同服務分類，方便調整及備料
                </p>
              </li>
              <li data-aos="zoom-in" className="w-3/12 mx-auto text-center">
                <Image className="" src={Laptop} />
                <h3 className="text-xl mb-2">完整客人消費紀錄</h3>
                <p>
                  記錄每位消費者訂單，可查看消費紀錄/金額/備註，拉近與小費者之間的距離
                </p>
              </li>
              <li
                data-aos="zoom-in-left"
                className="w-3/12 mx-auto text-center"
              >
                <Image src={Pad} />
                <h3 className="text-xl mb-2">可設定服務項目及金額</h3>
                <p>
                  記錄每位消費者訂單，可查看消費紀錄/金額/備註，拉近與小費者之間的距離
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="text-4xl text-center font-bold mb-16">誰適合使用</h2>
            <div className=" relative mb-16">
              <Image className=" absolute -z-10" src={Job} />
              <ul className="flex justify-between w-full pt-20">
                <li
                  data-aos="fade-right"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>美髮沙龍</p>
                </li>
                <li
                  data-aos="fade-left"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>美容美妝</p>
                </li>
              </ul>
              <ul className="flex justify-between w-full pt-20 px-20">
                <li
                  data-aos="fade-right"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>美甲美睫</p>
                </li>
                <li
                  data-aos="fade-left"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>健身瑜伽</p>
                </li>
              </ul>
              <ul className="flex justify-between w-full pt-20">
                <li
                  data-aos="fade-right"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>推拿按摩</p>
                </li>
                <li
                  data-aos="fade-left"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>手工製作</p>
                </li>
              </ul>
              <ul className="flex justify-between w-full pt-20 px-20">
                <li
                  data-aos="fade-right"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>家教老師</p>
                </li>
                <li
                  data-aos="fade-left"
                  className="bg-gray-400 items-center flex justify-center text-white w-40 h-16 text-xl"
                >
                  <p>個人工作室</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="store" className=" bg-gray-300 mb-16">
          <div className="container mx-auto pt-8 pb-2">
            <h2 className="text-4xl text-center font-bold mb-4 ">合作店家</h2>
            <p className="text-center mb-4">來看看我們合作店家的預約頁面吧！</p>

            <HomeSwiper />
          </div>
        </div>
        <div className="container w-full mx-auto">
          <h2 className="text-4xl text-center font-bold">
            趕快加入我們，擁有自己的預約平台
          </h2>
          <Image className="w-8/12 mx-auto" src={Own} />
          <Link
            className="bg-gray-400 mx-auto flex text-white w-52 h-12 text-3xl font-bold items-center justify-center"
            href="/login"
          >
            立即註冊
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
