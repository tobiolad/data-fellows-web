"use client"

type PropType = {
    className?: string,
    steps: number,
    current: number,
    list?: Array<{
        title: string,
        description: string
    }>,
    clickable?: boolean,
    setCurrent: (number: number) => void
}


const HowItWorks = (props: PropType) => {
    const {
        className = '',
        steps = 1,
        list = [],
        current = 1,
        clickable = true,
        setCurrent = number => {}
    } = props


    const colorLeft = (index) => {
        if(current >= index - 1){
            return 'bg-primary'
        }else{
            return 'bg-gray-400 dark:bg-gray-600'
        }
    }

    const colorRight = (index) => {
       if(current >= index){
            return 'bg-primary'
        }else{
            return 'bg-gray-400 dark:bg-gray-600'
        }
    }

    const isClickable = (index) => {

        return clickable && current > index;

    }

    return (
        <div className={`flex flex-row md:flex-col items-center gap-12 ${className}`}>

            <div className="hidden md:flex flex-col md:flex-row w-full items-center justify-center">
                {
                    Array.from(Array(steps)).map((step, index)=>(

                        <div key={index} className="flex w-fit grow flex-row justify-center ">

                            {
                                index !== 0 ? (
                                    <div className={`w-[50%] my-4 h-[2px] ${colorLeft(index + 2)}`}></div>
                                ) : (
                                    <div className={`w-[50%] my-4 h-[2px] bg-transparent`}></div>
                                )
                            }

                            <div onClick={() => {
                                isClickable(index) && setCurrent(index + 1)
                            }} key={index}
                                 className={`w-8 h-8 p-2 cursor-pointer text-primary-dark dark:text-white flex items-center justify-center font-outfit ${colorRight(index + 1)} rounded-full`}>
                                {index + 1}
                            </div>


                            {
                                index !== steps - 1 ? (
                                    <div className={`w-[50%] my-4 h-[2px] ${colorRight(index + 2)}`}></div>
                                ) : (
                                    <div className={`w-[50%] my-4 h-[2px] bg-transparent`}></div>
                                )
                            }

                        </div>


                    ))
                }
            </div>


            <div className="flex flex-col w-full md:flex-row">
                {
                    Array.from(Array(steps)).map((step, index)=>(

                        <div key={index} className="flex w-full flex-row justify-center ">

                            <div className="flex w-full flex-col items-center ">


                                <div className="mt-6 w-full md:w-full md:items-center flex flex-col gap-2">
                                    <p className="text-primary font-bold font-outfit">
                                        {list[index]?.title}
                                    </p>

                                    <p className="dark:text-primary-dark dark:text-white w-[90%] md:text-center">
                                        {list[index]?.description}
                                    </p>
                                </div>
                            </div>


                        </div>


                    ))
                }
            </div>

        </div>
    );
}


export default HowItWorks;
