const CircularText = () => {
    return (
        <div className="relative w-32 h-32">
            <div className="absolute inset-0 animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                        <path
                            id="circle"
                            d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                        />
                    </defs>
                    <text className="text-[7.5px] uppercase tracking-[1.8px] fill-white">
                        <textPath href="#circle" startOffset="5">
                        minimalist • elegant • modern • luxury • •
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default CircularText; 