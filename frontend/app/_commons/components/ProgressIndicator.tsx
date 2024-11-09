const ProgressIndicator = (props) => {
    const {
        className = '',
        steps = 1,
        current = 1,
        clickable = true,
        setCurrent = number => {}
    } = props


    const color = (index) => {
       if(current >= index){
            return 'bg-primary'
        }else{
            return 'bg-gray-300 dark:bg-gray-600'
        }
    }

    const isClickable = (index) => {

        return clickable && current > index;

    }

    return (
        <div className={`flex flex-row  ${className}`}>

            {
                Array.from(Array(steps)).map((step, index)=>(

                    <div key={index} className="flex flex-row items-center justify-center ">
                        <div onClick={()=>{isClickable(index) && setCurrent(index+1)}} key={index} className={`w-8 h-8 p-2 cursor-pointer text-primary-dark dark:text-white flex items-center justify-center font-outfit ${color(index+1)} rounded-full`}>
                            {index+1}
                        </div>

                        {
                            index !== steps-1 && (
                                <div className={`w-8 h-1 ${color(index+2)}`}></div>
                            )
                        }

                    </div>


                ))
            }

        </div>
    );
}


export default ProgressIndicator;
