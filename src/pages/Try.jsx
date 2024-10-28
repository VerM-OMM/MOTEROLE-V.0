import React, { useEffect, useState } from 'react'
import { LuArrowBigLeft } from 'react-icons/lu'

const ModalProfile = ({ onClose }) => {
    useEffect(() => {
        document.title = 'Profile'
    }, [])

    const [activeTab, setActiveTab] = useState('category')

    return (
        <>
            <div className="absolute inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 font-bubbles font-normal">
                <div className="text-shadow relative flex h-[80%] w-[60%] flex-col items-center gap-4 rounded-3xl border-8 border-modalbrowndark bg-cheese p-4 px-6 text-5xl text-white mobile:h-[80%] mobile:w-1/2 mobile:gap-0 mobile:p-4 ipad:w-1/2">
                    <div className="absolute -left-6 -top-6 z-50 mobile:-right-5 mobile:top-3 ipad:-right-7">
                        <button className="action-btn flex cursor-pointer items-center justify-center rounded-xl bg-[#F40000] text-center">
                            <LuArrowBigLeft
                                onClick={onClose}
                                className="size-12 mobile:size-10 ipad:size-14"
                            />
                        </button>
                    </div>

                    <div className="text-outline tracking-wide">My Profile</div>
                    <div className="flex w-full items-center gap-3 text-3xl">
                        <div className="h-[110px] w-[120px] rounded-full border-4 border-bluesky bg-white"></div>
                        <div className="flex w-full justify-between">
                            <div className="text-outline flex flex-col justify-between">
                                <div className="flex gap-3">
                                    Username:<span>Juan123</span>
                                </div>
                                <div className="flex gap-3">
                                    Pangalan:<span>Juan Dela cruz</span>
                                </div>
                                <div className="flex gap-3">
                                    Email:<span>Juan123gmail.com</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                                <button className="bg-back inner-shadow-deactive rounded-xl px-3 py-1">
                                    <span className="text-outline flex items-center justify-center text-xl">
                                        Logout
                                    </span>
                                </button>
                                <div className="text-outline flex gap-3">
                                    Gender: <span>lalaki</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab */}
                    <div className="text-moldcheese flex h-full w-full flex-col space-y-2 overflow-hidden p-1 text-3xl mobile:text-xl">
                        <div className="text-outline flex w-full space-x-4">
                            {/* Tab 1 */}
                            <div
                                onClick={() => setActiveTab('category')}
                                className={`cursor-pointer select-none rounded-lg bg-white px-3 py-1 ${
                                    activeTab === 'category'
                                        ? 'inner-shadow-active'
                                        : 'inner-shadow-deactive'
                                }`}
                            >
                                <span
                                    className={`drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]`}
                                >
                                    Kategory
                                </span>
                            </div>
                            {/* Tab 2 */}
                            <div
                                onClick={() => setActiveTab('level')}
                                className={`cursor-pointer select-none rounded-lg bg-white px-3 py-1 ${
                                    activeTab === 'level'
                                        ? 'inner-shadow-active'
                                        : 'inner-shadow-deactive'
                                }`}
                            >
                                <span
                                    className={`drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]`}
                                >
                                    Lebel
                                </span>
                            </div>
                        </div>

                        {activeTab === 'category' ? (
                            <div className="inner-shadow flex w-full flex-col overflow-auto rounded-lg bg-white px-4 py-3">
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    asda
                                </div>
                            </div>
                        ) : (
                            <div className="inner-shadow flex w-full flex-col overflow-auto rounded-lg bg-white px-4 py-3">
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123 asda
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                                <div className="h-20 flex-shrink-0 rounded-lg border-4 border-green-700 px-2 py-1">
                                    123
                                </div>
                            </div>
                        )}
                    </div>

                    {/* <div className="h-full rounded-b-xl border-2 border-t-0 border-black bg-white p-10 text-5xl text-black mobile:p-4 mobile:text-2xl ipad:p-6 ipad:text-4xl">
                       
                            {activeTab === 'category' ? (
                                <div className="flex">
                                    <div className="flex w-1/3 flex-col items-center space-y-4 text-limblue">
                                        <div className="">Linya</div>
                                        <div className="flex size-56 items-center justify-center rounded-full bg-limblue p-4 text-limblue mobile:size-28 mobile:p-2 ipad:size-44">
                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                                80%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-1/3 flex-col items-center space-y-4 text-grape">
                                        <div className="">Hugis</div>
                                        <div className="flex size-56 items-center justify-center rounded-full bg-grape p-4 mobile:size-28 mobile:p-2 ipad:size-44">
                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                                73%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-1/3 flex-col items-center space-y-4 text-lava">
                                        <div className="">Alpabeto</div>
                                        <div className="flex size-56 items-center justify-center rounded-full bg-lava p-4 mobile:size-28 mobile:p-2 ipad:size-44">
                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                                30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex">
                                    <div className="flex w-1/3 flex-col items-center space-y-4 text-limblue">
                                        <div className="">Madali</div>
                                        <div className="flex size-56 items-center justify-center rounded-full bg-limblue p-4 text-limblue mobile:size-28 mobile:p-2 ipad:size-44">
                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                                100%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-1/3 flex-col items-center space-y-4 text-grape">
                                        <div className="">Karaniwan</div>
                                        <div className="flex size-56 items-center justify-center rounded-full bg-grape p-4 mobile:size-28 mobile:p-2 ipad:size-44">
                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                                60%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-1/3 flex-col items-center space-y-4 text-lava">
                                        <div className="">Mahirap</div>
                                        <div className="flex size-56 items-center justify-center rounded-full bg-lava p-4 mobile:size-28 mobile:p-2 ipad:size-44">
                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                                10%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> */}
                </div>
            </div>
        </>
    )
}

export default ModalProfile
