"use client"
type Props = {
    content: string;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
}

const GradiantButton = ({content,className,onClick,href,target}: Props) => {
    return (
        <a href={href || "#"} target={target || "_self"} className="p-px rounded-lg bg-gradient-brand inline-block h-fit">
            <button type="button" onClick={onClick} className={`bg-[#FFF9F3] rounded-lg py-2 px-6 text-black font-poppins font-medium cursor-pointer ${className}`}>
                {content}
            </button>
        </a>
    )
}

export default GradiantButton
