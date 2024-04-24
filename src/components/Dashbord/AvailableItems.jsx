import React from 'react'

import ItemCards from './AvailableItems/ItemCards'

import CarouselCardSliderSwiper from './AvailableItems/CarouselCardSliderSwiper'

export default function AvailableItems() {
    return (
        <div className="bg-white h-100 px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10">
            <div className="bg-green-449E2E  rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
                <span className="text-2xl text-white ">Available Items</span>

            </div>

            <div className="flex flex-row gap-4 w-full">
                <ItemCards />
                <ItemCards />
                <ItemCards />
                <ItemCards />
                <ItemCards />
            </div>

            {/* <CarouselCardSliderSwiper/> */}
            

        </div>
    )
}