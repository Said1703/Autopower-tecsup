import arrow from "../../assets/icons/arrow.svg";

export default function CircleButton({
  type = "button",
  className,
  variant = "right",
}) {
  const direction = {
    right:
      "bg-white md:w-12 md:h-12 w-16 h-12 flex justify-center items-center click md:me-4 me-1  hover:bg-skyblue-select  hover:shadow-cyan-200/50",
    left: "bg-white md:w-12 md:h-12 w-16 h-12 flex justify-center items-center click md:ms-4 ms-1 rotate-180 hover:bg-skyblue-select  hover:shadow-cyan-200/50",
  };

  return (
    <>
      <button
        type={type}
        className={`rounded-full ${direction[variant]} ${className}`}
      >
        <img className="w-4" src={arrow} />
      </button>
    </>
  );
}
