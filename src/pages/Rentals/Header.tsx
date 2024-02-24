import React from 'react'

const Header = (props:any) => {
    const {title, subTitle, para} = props
    return (
        <>
            <div className="w-full bg-[#F4F4F4] flex flex-col justify-center items-center h-[16rem] sm:mb-16 mb-0">
                <div className="text-[#807D7E] font-500 text-[0.7rem] items-center tracking-[2px]">{subTitle}</div>
                <div className="text-[#000] font-700 text-[1.8rem] sm:text-[2rem] items-center mt-2 font-bold mb-2">
                   {title}
                </div>
                <div className="text-[#6D6E76] font-500 text-sm items-center w-[90%] sm:w-[40%] my-0 mx-auto mt-2 justify-center text-center leading-6">
                    {para}
                </div>
            </div>
        </>
    )
}

export default Header