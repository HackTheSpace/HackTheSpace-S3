import React from 'react'

type Props = {
    content: string;
    className?: string;
}

const GradiantButton = ({content,className}: Props) => {
    return (
        <div className="p-px rounded-lg bg-gradient-brand inline-block h-fit">
            <button className={`bg-[#FFF9F3] rounded-lg py-2 px-6 text-black font-poppins font-medium cursor-pointer ${className}`}>
                {content}
            </button>
        </div>
    )
}

export default GradiantButton
