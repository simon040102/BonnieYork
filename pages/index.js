import Head from 'next/head';
import Layout from '../modules/layout';
import Image from 'next/image';
import Banner from '../src/images/banner.jpg';
import Img1 from '../src/images/img1.png';
import Img2 from '../src/images/img2.png';
import Img3 from '../src/images/img3.png';
import Phone from '../src/images/phone.png';
import Pad from '../src/images/pad.png';
import Laptop from '../src/images/laptop.png';
import Own from '../src/images/own.jpg';
import Who1 from '../src/images/who01.jpg';
import Who2 from '../src/images/who02.jpg';
import Who3 from '../src/images/who03.jpg';
import Who4 from '../src/images/who04.jpg';
import Who5 from '../src/images/who05.jpg';
import Who6 from '../src/images/who06.jpg';
import Who7 from '../src/images/who07.jpg';
import Who8 from '../src/images/who08.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import HomeSwiper from '../components/homeSwiper';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

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
        <div className=" relative  h-screen lg:pl-[10%] overflow-hidden z-10">
          <Image
            className=" absolute -z-10 h-screen object-cover rounded-tl-block"
            src={Banner}
          />
          <div className="my-auto items-center flex  h-screen px-16">
            <div>
              <h1 className="text-5xl py-2 text-white font-bold drop-shadow-md">
                邦尼約克
              </h1>
              <h2 className="text-5xl py-2 text-white font-bold drop-shadow-md mb-4">
                預約交給Bonner York
              </h2>
              <div>
                <p className="text-white drop-shadow-md mb-6 px-3 py-2 bg-secondary inline-block">
                  快速預約/ 建立系統/專屬網址/商家/個人工作室
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" m-auto relative ">
          <div className="bg-danger w-11/12 rounded-br-block -mt-40 pt-72  ">
            <div className="container ml-auto">
              <button
                data-aos="fade-right"
                className="tryIt absolute right-44 z-10 top-32 bg-secondary w-48 py-3 rounded-tl-sm rounded-tr-full text-lg  text-white flex justify-center gap-8"
              >
                <p>立即試用</p>{' '}
                <ArrowCircleRightOutlinedIcon sx={{ fontSize: '28px' }} />
              </button>
              <div>
                <div
                  id="feature"
                  className="flex w-full justify-center gap-4 mb-20"
                >
                  <div data-aos="fade-up-right" className="w-5/12 my-auto ">
                    <h2 className="text-2xl mb-8 font-bold text-secondary">
                      快速建立/更改/取消
                    </h2>
                    <p className="text-lg leading-10">
                      快速建立預約，包含時間/服務項目/金額/照片/標籤/備註
                      <br />
                      擁有自己的專屬行事曆
                    </p>
                  </div>
                  <div data-aos="fade-up-left" className="w-5/12">
                    <Image src={Img1} />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-row-reverse justify-center gap-8 mb-20">
                <div data-aos="fade-up-left" className="w-5/12 my-auto">
                  <h2 className="text-2xl mb-8 font-bold text-secondary">
                    個人專屬線上預約頁面
                  </h2>
                  <p className="text-lg leading-10">
                    客人可以透過您的專屬頁面預約您的時間。
                    讓您在百忙之中，不必再抽空回覆客人訊息，
                    以達到快速有效預約。
                  </p>
                </div>
                <div data-aos="fade-up-right" className="w-5/12">
                  <Image src={Img2} />
                </div>
              </div>
              <div className="flex w-full justify-center gap-8 mb-20">
                <div data-aos="fade-up-right" className="w-5/12 my-auto ">
                  <h2 className="text-2xl mb-8 font-bold text-secondary">
                    統一管理預約項目/時間
                  </h2>
                  <p className="text-lg leading-10">
                    店家統一管理客人/服務項目/預約時間/店家資訊，
                    讓團隊間的溝通更有效率。
                  </p>
                </div>
                <div data-aos="fade-up-left" className="w-5/12">
                  <Image src={Img3} />
                </div>
              </div>
              <div className=" w-full pb-24 mb-20">
                <div className="w-8/12 lg:w-5/12 mx-auto relative:">
                  <h2
                    data-aos="zoom-in"
                    className="text-7xl text-start font-bold text-secondary  "
                  >
                    OTHER
                  </h2>
                </div>
                <div
                  data-aos="fade-left"
                  className="mx-auto w-8/12 lg:w-5/12 text-end relative"
                >
                  <p>其他功能</p>
                  <div className=" mx-auto after:absolute after:left-0 after:bottom-2.5 after:h-0.5 after:w-10/12 after:bg-warning after:content-['']"></div>
                </div>
                <ul className="mx-auto flex justify-center gap-8 mb-32 px-8">
                  <li
                    data-aos="zoom-in-right"
                    className="w-4/12 mx-auto text-center"
                  >
                    <Image className="mb-3" src={Phone} />
                    <h3 className="text-xl mb-2 text-secondary">
                      每月金額統計及服務營收占比
                    </h3>
                    <p>
                      自動加總每月訂單，可查看已完成與未完成訂單營業額，根據不同服務分類，方便調整及備料
                    </p>
                  </li>
                  <li data-aos="zoom-in" className="w-4/12 mx-auto text-center">
                    <Image className="" src={Laptop} />
                    <h3 className="text-xl mb-2 text-secondary">
                      完整客人消費紀錄
                    </h3>
                    <p>
                      記錄每位消費者訂單，可查看消費紀錄/金額/備註，拉近與小費者之間的距離
                    </p>
                  </li>
                  <li
                    data-aos="zoom-in-left"
                    className="w-4/12 mx-auto text-center"
                  >
                    <Image src={Pad} />
                    <h3 className="text-xl mb-2 text-secondary">
                      可設定服務項目及金額
                    </h3>
                    <p>
                      記錄每位消費者訂單，可查看消費紀錄/金額/備註，拉近與小費者之間的距離
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-7/12 lg:w-5/12 mx-auto relative:">
              <h2
                data-aos="zoom-in"
                className="text-7xl text-start font-bold text-secondary  "
              >
                WHO
              </h2>
            </div>
            <div
              data-aos="fade-left"
              className="mx-auto w-8/12 lg:w-5/12 text-end relative mb-16"
            >
              <p>誰適合使用</p>
              <div className=" mx-auto after:absolute after:left-0 after:bottom-2.5 after:h-0.5 after:w-10/12 after:bg-warning after:content-['']"></div>
            </div>
            <div className="mb-24">
              <div className="mb-6">
                <Marquee gradient={false} speed={40}>
                  <div className=" relative mx-3">
                    <Image
                      src={Who1}
                      className="lg:h-60 h-48 md:w-80  lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      美髮沙龍
                    </div>
                  </div>
                  <div className=" relative mx-3">
                    <Image
                      src={Who2}
                      className="lg:h-60 h-48 md:w-80 lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      美甲美睫
                    </div>
                  </div>
                  <div className=" relative mx-3">
                    <Image
                      src={Who3}
                      className="lg:h-60 h-48 md:w-80 lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      推拿按摩
                    </div>
                  </div>
                  <div className=" relative mx-3">
                    <Image
                      src={Who4}
                      className="lg:h-60 h-48 md:w-80 lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      家教老師
                    </div>
                  </div>
                </Marquee>
              </div>
              <div className="mb-6">
                <Marquee gradient={false} speed={40} direction={'right'}>
                  <div className=" relative mx-3">
                    <Image
                      src={Who5}
                      className="lg:h-60 h-48 md:w-80 lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      美妝美容
                    </div>
                  </div>
                  <div className=" relative mx-3">
                    <Image
                      src={Who6}
                      className="lg:h-60 h-48 md:w-80 lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      健身瑜伽
                    </div>
                  </div>
                  <div className=" relative mx-3">
                    <Image
                      src={Who7}
                      className="lg:h-60 h-48 md:w-80 lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      手工製作
                    </div>
                  </div>
                  <div className=" relative mx-3">
                    <Image
                      src={Who8}
                      className="lg:h-60 h-48 md:w-80 lg:w-500 object-cover rounded-large"
                    />
                    <div className=" absolute bg-secondary/80 w-32 leading-9  right-6 bottom-4  text-center text-white rounded-large">
                      個人工作室
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className=" pl-0 lg:pl-[8%] ">
          <div className=" bg-danger pl-[4%] pr-[4%] pt-24 pb-24 mb-24 rounded-l-block">
            <div className="container">
              <div className="w-7/12 lg:w-5/12  relative:">
                <h2
                  data-aos="zoom-in"
                  className="text-7xl text-start font-bold text-secondary  "
                >
                  PARTNERS
                </h2>
              </div>
              <div
                data-aos="fade-left"
                className="w-8/12 lg:w-5/12 text-end relative mb-16"
              >
                <p>合作店家</p>
                <div className=" after:absolute after:left-0 after:bottom-2.5 after:h-0.5 after:w-10/12 after:bg-warning after:content-['']"></div>
              </div>
              <HomeSwiper />
            </div>
          </div>
        </div>
       
      </Layout>
    </>
  );
};

export default Home;
