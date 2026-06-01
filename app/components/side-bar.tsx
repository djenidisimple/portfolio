import { Award, House, Info, Phone } from "lucide-react";

export function SideBar() {
    return (
        <div className="w-16 h-screen bg-[#222222] text-white fixed top-0 left-0">
            <div className="flex flex-col justify-center align-center w-full h-full gap-4 px-2">
                <a href="#" className="flex justify-center align-center bg-[#E9E9E9] text-[#222222] rounded-full p-2 w-10 h-10">
                    <House />
                </a>
                <a href="#" className="flex justify-center align-center hover:bg-[#E9E9E9] hover:text-[#222222] rounded-full p-2 w-10 h-10">
                    <Info />
                </a>
                <a href="#" className="flex justify-center align-center hover:bg-[#E9E9E9] hover:text-[#222222] rounded-full p-2 w-10 h-10">
                    <Award />
                </a>
                <a href="#" className="flex justify-center align-center hover:bg-[#E9E9E9] hover:text-[#222222] rounded-full p-2 w-10 h-10">
                    <Phone />
                </a>
            </div>
        </div>
    )
}