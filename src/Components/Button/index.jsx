/* eslint-disable react/prop-types */
export default function Button({
  text,
  type = "button",
  className,
  variant = "primary",
  disabled = false,
}) {
  const colors = {
    primary:
      "bg-skyblue text-white font-semibold hover:bg-skyblue-select hover:shadow-lg hover:shadow-cyan-200/50",
    secondary:
      "text-black bg-white font-semibold hover:bg-white hover:text-skyblue hover:shadow-lg hover:shadow-cyan-200/50",
    block: "bg-gray-500 text-white font-semibold",
  };

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`w-11/12 py-2 mb-4 px-4 rounded-lg md:w-7/12 ${colors[variant]} ${className}`}
      >
        {text}
      </button>
    </>
  );
}
