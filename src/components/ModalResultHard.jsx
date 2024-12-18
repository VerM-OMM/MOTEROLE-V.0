import React from 'react'
import Cloud from '../assets/cloud.png'
import Grass from '../assets/grass.png'
import { LuArrowBigLeft } from 'react-icons/lu'

const ModalResultHard = ({ onClose }) => {
    return (
        <div className="absolute inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 font-nunito font-black">
            <div className="relative flex h-[70%] w-1/2 flex-col items-center justify-between gap-6 rounded-3xl border-8 border-black bg-lavender p-8 mobile:h-[80%] mobile:gap-5 mobile:p-4">
                <img
                    src={Cloud}
                    alt="cloud.png"
                    className="absolute -left-56 -top-48 size-96 select-none mobile:-left-32 mobile:-top-28 mobile:size-56 ipad:-left-44 ipad:-top-40 ipad:size-80"
                />

                <div className="absolute -right-6 -top-5 z-50 mobile:-right-5 mobile:-top-6 ipad:-right-7 ipad:-top-7">
                    <button className="action-btn flex cursor-pointer items-center justify-center rounded-xl bg-[#F40000] text-center text-white">
                        <LuArrowBigLeft
                            onClick={onClose}
                            className="size-12 mobile:size-10 ipad:size-14"
                        />
                    </button>
                </div>
                <div className="text-shadow text-6xl font-black text-white mobile:text-3xl">
                    Resulta
                </div>
                <div className="flex w-full justify-center space-x-4">
                    <span className="pt-5">
                        <svg
                            viewBox="0 0 900 1000"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="size-28 text-sunshine mobile:size-16"
                        >
                            <path d="M510 716v66c46.667 5.333 85.333 16 116 32s46 34.667 46 56c0 24-21.667 45-65 63s-95.667 27-157 27c-60 0-112-9-156-27s-66-39-66-63c0-21.333 15.333-40 46-56s70-26.667 118-32v-66c0-33.333-11-61.333-33-84s-59.667-52-113-88c-37.333-24-66.333-44.333-87-61s-45.667-40.667-75-72-50.667-67.333-64-108C6.667 262.333 0 216.667 0 166c0-9.333 3.667-17.333 11-24 7.333-6.667 15.667-10 25-10h172c32-61.333 112.667-92 242-92 130.667 0 212 30.667 244 92h170c9.333 0 17.667 3.333 25 10 7.333 6.667 11 14.667 11 24 0 50.667-6.667 96.333-20 137s-34.667 76.667-64 108-54.333 55.333-75 72-49.667 37-87 61c-52 34.667-89 63.667-111 87s-33 51.667-33 85m138-252c53.333-37.333 95.333-75.333 126-114s48.667-88 54-148H702c-4 105.333-22 192.667-54 262M450 100c-41.333 0-77.333 5-108 15s-52 20.667-64 32c-12 11.333-18 21-18 29 0 9.333 6 19.667 18 31 12 11.333 33.333 22 64 32s66.667 15 108 15 77.333-5 108-15 52-20.667 64-32c12-11.333 18-21.667 18-31 0-8-6-17.667-18-29-12-11.333-33.333-22-64-32s-66.667-15-108-15M72 202c5.333 60 23.333 109.333 54 148s72.667 76.667 126 114c-32-69.333-50-156.667-54-262H72" />
                        </svg>
                    </span>
                    <span className="pb-5">
                        <svg
                            viewBox="0 0 900 1000"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="size-28 text-sunshine mobile:size-16"
                        >
                            <path d="M510 716v66c46.667 5.333 85.333 16 116 32s46 34.667 46 56c0 24-21.667 45-65 63s-95.667 27-157 27c-60 0-112-9-156-27s-66-39-66-63c0-21.333 15.333-40 46-56s70-26.667 118-32v-66c0-33.333-11-61.333-33-84s-59.667-52-113-88c-37.333-24-66.333-44.333-87-61s-45.667-40.667-75-72-50.667-67.333-64-108C6.667 262.333 0 216.667 0 166c0-9.333 3.667-17.333 11-24 7.333-6.667 15.667-10 25-10h172c32-61.333 112.667-92 242-92 130.667 0 212 30.667 244 92h170c9.333 0 17.667 3.333 25 10 7.333 6.667 11 14.667 11 24 0 50.667-6.667 96.333-20 137s-34.667 76.667-64 108-54.333 55.333-75 72-49.667 37-87 61c-52 34.667-89 63.667-111 87s-33 51.667-33 85m138-252c53.333-37.333 95.333-75.333 126-114s48.667-88 54-148H702c-4 105.333-22 192.667-54 262M450 100c-41.333 0-77.333 5-108 15s-52 20.667-64 32c-12 11.333-18 21-18 29 0 9.333 6 19.667 18 31 12 11.333 33.333 22 64 32s66.667 15 108 15 77.333-5 108-15 52-20.667 64-32c12-11.333 18-21.667 18-31 0-8-6-17.667-18-29-12-11.333-33.333-22-64-32s-66.667-15-108-15M72 202c5.333 60 23.333 109.333 54 148s72.667 76.667 126 114c-32-69.333-50-156.667-54-262H72" />
                        </svg>
                    </span>
                    <span className="pt-5">
                        <svg
                            viewBox="0 0 900 1000"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="size-28 text-sunshine mobile:size-16"
                        >
                            <path d="M510 716v66c46.667 5.333 85.333 16 116 32s46 34.667 46 56c0 24-21.667 45-65 63s-95.667 27-157 27c-60 0-112-9-156-27s-66-39-66-63c0-21.333 15.333-40 46-56s70-26.667 118-32v-66c0-33.333-11-61.333-33-84s-59.667-52-113-88c-37.333-24-66.333-44.333-87-61s-45.667-40.667-75-72-50.667-67.333-64-108C6.667 262.333 0 216.667 0 166c0-9.333 3.667-17.333 11-24 7.333-6.667 15.667-10 25-10h172c32-61.333 112.667-92 242-92 130.667 0 212 30.667 244 92h170c9.333 0 17.667 3.333 25 10 7.333 6.667 11 14.667 11 24 0 50.667-6.667 96.333-20 137s-34.667 76.667-64 108-54.333 55.333-75 72-49.667 37-87 61c-52 34.667-89 63.667-111 87s-33 51.667-33 85m138-252c53.333-37.333 95.333-75.333 126-114s48.667-88 54-148H702c-4 105.333-22 192.667-54 262M450 100c-41.333 0-77.333 5-108 15s-52 20.667-64 32c-12 11.333-18 21-18 29 0 9.333 6 19.667 18 31 12 11.333 33.333 22 64 32s66.667 15 108 15 77.333-5 108-15 52-20.667 64-32c12-11.333 18-21.667 18-31 0-8-6-17.667-18-29-12-11.333-33.333-22-64-32s-66.667-15-108-15M72 202c5.333 60 23.333 109.333 54 148s72.667 76.667 126 114c-32-69.333-50-156.667-54-262H72" />
                        </svg>
                    </span>
                </div>
                <div className="text-shadow text-6xl font-black text-white mobile:text-3xl">
                    Perpekto!
                </div>
                <div className="font flex w-full justify-evenly space-x-6 text-2xl mobile:text-xl">
                    <button className="text-shadow flex h-12 w-full items-center justify-center rounded-xl bg-modalbrown duration-100 active:scale-95 mobile:h-8">
                        Ulitin ang Laro
                    </button>
                    <button className="text-shadow flex h-12 w-full items-center justify-center rounded-xl bg-modalbrown duration-100 active:scale-95 mobile:h-8">
                        Sunod na Laro
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalResultHard
