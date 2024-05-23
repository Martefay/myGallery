import React from 'react'
import { SearchForAuthors } from '../SearchForAuthors/SearchForAuthors'

export const Author = () => {
  return (
    <div className='w-full'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex justify-center mb-20">
                        <h2 className='uppercase text-6xl'>Авторы</h2>
                    </div>
                    <div className="w-full flex gap-4">
                        <div className="">
                            <SearchForAuthors />
                        </div>
                    </div>
                    <div className="w-full mt-5 flex flex-col gap-5">
                        <div className="w-full flex gap-20 p-7 card-author transition-all duration-150 rounded-2xl cursor-pointer">
                            <img src="assets/img/author/photo-author.png" alt="" />
                            <div className="flex flex-col gap-4">
                                <h4 className='text-3xl'>Иоан вазовский</h4>
                                <p className='text-2xl'>Профессиональный фотограф, люблю тематику природы. Занимаюсь фотографиями уже более 4 лет ...  </p>
                            </div>
                        </div>

                        <div className="w-full flex gap-20 p-7 card-author transition-all duration-150 rounded-2xl cursor-pointer">
                            <img src="assets/img/author/photo-author.png" alt="" />
                            <div className="flex flex-col gap-4">
                                <h4 className='text-3xl'>Иоан вазовский</h4>
                                <p className='text-2xl'>Профессиональный фотограф, люблю тематику природы. Занимаюсь фотографиями уже более 4 лет ...  </p>
                            </div>
                        </div>

                        <div className="w-full flex gap-20 p-7 card-author transition-all duration-150 rounded-2xl cursor-pointer">
                            <img src="assets/img/author/photo-author.png" alt="" />
                            <div className="flex flex-col gap-4">
                                <h4 className='text-3xl'>Иоан вазовский</h4>
                                <p className='text-2xl'>Профессиональный фотограф, люблю тематику природы. Занимаюсь фотографиями уже более 4 лет ...  </p>
                            </div>
                        </div>

                        <div className="w-full flex gap-20 p-7 card-author transition-all duration-150 rounded-2xl cursor-pointer">
                            <img src="assets/img/author/photo-author.png" alt="" />
                            <div className="flex flex-col gap-4">
                                <h4 className='text-3xl'>Иоан вазовский</h4>
                                <p className='text-2xl'>Профессиональный фотограф, люблю тематику природы. Занимаюсь фотографиями уже более 4 лет ...  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
