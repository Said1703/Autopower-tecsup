/* eslint-disable react/prop-types */
export default function Paragraph({valueParagraph}) {
    return (
        <>
            <p
                className="text-left font-Roboto text-3xl"
                style={{ fontSize: "14px", color: "red" }}
            >
                {valueParagraph}
            </p>
        </>
    )
}