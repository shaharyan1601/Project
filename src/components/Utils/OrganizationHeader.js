import { BsClipboardCheck } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

/**
 * @typedef {Object} Props
 * @property {string} heading
 * @property {boolean} enableArrow
 * @property {string} description
 */

/**
 * Showing header details
 * @param {Props} Props
 */
const OrganizationHeader = ({ heading, enableArrow, description }) => (
  <div
    className="people_organization_chart_header"
    style={{ display: "flex", gap: 10 }}
  >
    <BsClipboardCheck style={{ position: "relative", top: 25 }} size={25}  />
    <div>
      <div style={{ position: "relative", display: "inline-flex" }}>
        <h1 style={{ textTransform: "uppercase" }}>{heading}</h1>
        {enableArrow && (
          <span style={{ cursor: "pointer" }}>
            <FaLongArrowAltRight
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                transform: "scaleX(3) scaleY(2.5)",
                height: "1vh",
                color:"#552D59"
              }}
              size={20}
            />
          </span>
        )}
      </div>
      <div className="people_organization_chart_header_content">
        <p style={{ color: "#969191", fontSize: 15 }}>{description}</p>
      </div>
    </div>
  </div>
);

export default OrganizationHeader;
