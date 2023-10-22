import closeIcon from "../../assets/icons/close.svg";
export default function CloseButton({
  text,
  type = "button",
  className,
  variant = "primary",
  disabled = false,
}) {
  const colors = {
    closeWhite: "bg-white hover:shadow-lg",
    closeBlack: "bg-black hover:shadow-lg",
  };

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`rounded-full w-12 ${colors[variant]} ${className}`}
      >
        <img src={closeIcon} />
      </button>
    </>
  );
}
