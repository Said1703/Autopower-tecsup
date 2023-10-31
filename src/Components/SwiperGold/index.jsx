/* eslint-disable react/prop-types */
import Button from "../Button"
import auto from "../../assets/img/auto.png";
import star from "../../assets/icons/star.png";
import { useNavigate } from "react-router-dom";

export default function SwiperGold({ pryceForm }) {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Gold', precio: 20 }))
        navigate("/BuyService")
    }

    return (
        <div className="flex flex-nowrap">
            <div className="min-w-[60%] mt-16 md:mt-8 border border-white w-[90%] md:w-[70%] m-auto  rounded-2xl  bg-gradient-to-r from-green-400 to-blue-500 md:flex">
                <div className="flex flex-col w-full md:w-[60%]  my-4 md:my-4  ">
                    <h2 className="mb-4 py-0.5 md:py-1.5 w-[80%] md:w-[85%] text-center text-[20px] md:text-[30px] tracking-wider font-bold  bg-gradient-to-r from-blue-600 rounded-r-md text-[#FFF8E1] italic   ">
                        Del 24 al 31 de Octubre
                    </h2>

                    <img
                        className="w-[75%] md:w-[90%] mx-auto md:pl-8 my-1  "
                        src={auto}
                        alt=""
                    />

                    <h2 className="w-[90%] mx-auto text-center text-[24px] md:text-[30px] font-bold text-blue-900 bg-gradient-to-r from-transparent from-5%  via-yellow-300 via-50%  to-transparent to-95% italic  ">
                        Plan Gold
                    </h2>
                </div>

                <div className="mt-4 text-center md:text-left md:my-4 lg:my-8 ">
                    <h3 className="text-gold font-semibold text-sm md:text-base lg:text-lg md:pl-10">
                        ¡Promociones a tu alcance!
                    </h3>
                    <h2 className="mt-1 lg:mt-4 font-bold text-white tracking-wider md:pl-10 md:text-lg lg:text-2xl">
                        Seguro vehicular al 100%
                    </h2>

                    <div className="w-[90%] md:pl-10 flex flex-col  my-1 md:mt-6 md:mb-6 text-white mt-3 ">
                        <p className=" flex items-start text-xs pl-14 md:pl-0 md:text-base lg:text-xl">
                            Desde
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:md:text-7xl font-bold text-gold lg:my-4">
                            ${pryceForm.Gold}
                        </h2>
                        <h2 className="flex items-start text-xs pl-14 md:pl-0 md:text-base lg:text-xl">
                            Por mes
                        </h2>
                    </div>

                    <div className="flex gap-4 pl-4 pr-5 mt-4 lg:mt-8 text-white items-center text-sm md:text-base lg:text-xl text-left ">
                        <img className="w-3 h-3" src={star} alt="" />
                        <p>Protege ahora tu vehiculo electrico con los mejores.</p>
                    </div>

                    <div className="flex gap-4 pl-4 pr-5 mt-2 lg:mt-6 md:mt-5 text-white items-center text-sm md:text-base lg:text-xl text-left ">
                        <img className="w-3 h-3" src={star} alt="" />
                        <p>Contamos con todos los complementos para tu auto.</p>
                    </div>

                    <div className=" flex justify-center mt-5">
                        <Button type="submit" text="Cotizar" variant="secondary" handleButtonClick={handleButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}