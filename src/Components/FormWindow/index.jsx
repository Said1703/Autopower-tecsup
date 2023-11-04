/* eslint-disable react/prop-types */
export default function FormWindow({children, className}) {
    return(
        <div className={`h-full flex items-center justify-center ${className}`}>
            <div className="w-11/12 md:w-[30%] bg-white my-4 p-6 rounded-3xl shadow-md">
                {children}
            </div>
        </div>
    )
}