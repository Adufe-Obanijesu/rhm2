const Member = ({name, image}) => {
    return (
        <div className="flex justify-center mb-8 md:mb-0">
            <div className="inline">
                <img src={image} className="rounded-full w-36 h-36 lg:h-56 lg:w-56" style={{objectFit: "cover"}} />
                <h3 className="text-center mt-4 font-semibold tracking-wider lg:text-base text-sm w-36 lg:w-56">{name}</h3>
            </div>
        </div>
    )
}

export default Member;