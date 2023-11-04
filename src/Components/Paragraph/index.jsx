/* eslint-disable react/prop-types */
export default function Paragraph({valueParagraph}) {
    return (
        <>
            <p
                className="text-left font-Roboto text-xs"
                style={{ fontSize: "14px", color: "red" }}
            >
                {valueParagraph}
            </p>
        </>
    )
}