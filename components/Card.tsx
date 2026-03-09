export function Card({ title, description, img } : { title: string, description: string, img: string }) {
    return (
        <div className="cursor-pointer w-[210px] bg-neutral-200 rounded-lg flex justify-center items-center flex-col p-5">
            <img src={img} alt={title} className="w-14 h-14 object-cover rounded my-4" />
            <h3 className="text-[15px] font-bold text-blue-900 mb-2 text-center leading-4.5 hover:underline">{title.toUpperCase()}</h3>
            <p className=" text-[10px] text-gray-600 mb-2 text-center">{description}</p>
        </div>
    )
}