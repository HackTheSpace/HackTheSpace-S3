"use client"
type Props = {
    content?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
}

const GlassButton = ({content,children,className,onClick,href,target}: Props) => {
    return (
        <a href={href || "#"} target={target || "_self"} className="relative inline-flex h-fit w-fit rounded-lg group">
            <button 
                type="button" 
                onClick={onClick} 
                className={`relative bg-black/10 dark:bg-white/10 backdrop-blur-[1.5px] rounded-lg py-5 px-10 text-black font-poppins cursor-pointer transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] ${className || ''}`}
            >
                {content || children}
            </button>
            {/* Gradient border wrapper */}
            <span 
                className="absolute inset-0 rounded-lg p-[1.5px] bg-gradient-brand pointer-events-none transition-opacity duration-300 group-hover:opacity-80" 
                style={{ 
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", 
                    maskComposite: "exclude", 
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", 
                    WebkitMaskComposite: "xor" 
                }} 
            />
        </a>
    )
}

export default GlassButton
