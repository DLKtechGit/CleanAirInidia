// FumeHoodPage.js
import React from "react";
import styled from "styled-components";

const FumeHoodPage = () => {
  return (
    <PageSection>
      <div className="container">
        <h1>Recommended Practices for Fume Exhaust Hoods</h1>

        <p>
          Safe removal of toxic fumes, vapors, and gases from laboratories is critical to protect personnel, equipment, and the working environment. The most effective method is to restrict hazardous operations within an enclosed hood and exhaust contaminants directly at their source. Properly designed fume hoods, combined with well-engineered exhaust systems, ensure compliance with safety standards and minimize occupational risks.
        </p>

        <h2>Factors Affecting Fume Hood Performance</h2>
        <p>
          <strong>Airflow and Exhaust Volume:</strong> Efficiency depends on the rate of air exhausted and the design of the hood. Adequate airflow must be maintained to ensure complete containment of contaminants.
        </p>

        <h2>Capture Velocity Guidelines</h2>
        <table>
          <thead>
            <tr>
              <th>Condition</th>
              <th>Recommended Hood Face Velocity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Low toxicity materials, odors, nuisance dusts</td>
              <td>80 FPM</td>
            </tr>
            <tr>
              <td>General lab use, corrosive/moderately toxic materials, tracer radioisotopes (TLV 10–1000 PPM)</td>
              <td>100 FPM</td>
            </tr>
            <tr>
              <td>Higher toxicity materials (TLV  10 PPM)</td>
              <td>125–150 FPM</td>
            </tr>
            <tr>
              <td>Very high toxicity, pathogenic organisms (TLV  0.01 PPM)</td>
              <td>Use enclosed glove box</td>
            </tr>
          </tbody>
        </table>

        <h2>Fume Hood Design – Key Considerations</h2>
        <h3>Mechanical Shield (Sash Design)</h3>
        <ul>
          <li>The sash acts as a barrier against splashes and reactions.</li>
          <li>Keep it raised only as much as needed for airflow intake.</li>
          <li>Use tempered safety glass to reduce accident risks.</li>
        </ul>

        <h3>Airflow Direction</h3>
        <ul>
          <li>Air should flow across the operator and directly into the hood.</li>
          <li>Prevents contaminated air from entering the breathing zone.</li>
        </ul>

        <h3>Dilution of Contaminants</h3>
        <ul>
          <li>Large volumes of airflow dilute hazardous vapors.</li>
          <li>Exhaust air should never be re-circulated into the lab.</li>
          <li>Makeup air must be supplied to balance exhausted air and maintain safe working pressure inside the lab.</li>
        </ul>

        <h2>Materials of Construction – Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Advantages</th>
              <th>Limitations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wood</td>
              <td>Low cost, easy to modify</td>
              <td>Poor chemical resistance, fire hazard, poor reflectivity</td>
            </tr>
            <tr>
              <td>CRCA Steel</td>
              <td>Durable, strong</td>
              <td>Needs coating, corrosion risk if damaged, noisy, heavy</td>
            </tr>
            <tr>
              <td>Fiberglass</td>
              <td>Excellent chemical resistance, lightweight, good reflectivity</td>
              <td>Some grades flammable, not chemically inert</td>
            </tr>
            <tr>
              <td>Stainless Steel (316)</td>
              <td>Fire-resistant, good for specific acids (e.g., perchloric)</td>
              <td>Heavy, expensive, limited chemical compatibility</td>
            </tr>
            <tr>
              <td>PVC</td>
              <td>Excellent chemical resistance, good for acid digestion</td>
              <td>Limited heat resistance, not moldable, expensive</td>
            </tr>
            <tr>
              <td>Polypropylene</td>
              <td>Excellent chemical resistance, fire-retardant, easy modification</td>
              <td>Not suitable for heat applications, expensive</td>
            </tr>
          </tbody>
        </table>

        <h2>Exhaust System Guidelines</h2>
        <ul>
          <li>Roof-mounted exhaust fans are preferred to keep ducts under negative pressure and minimize leaks.</li>
          <li>Use non-corrosive duct materials like stainless steel, PVC, FRP, or GI depending on chemical exposure.</li>
          <li>Fan wheels should be non-ferrous, and internal surfaces protected with coatings for corrosion resistance.</li>
        </ul>

        <h2>Types of Fume Hood Designs</h2>
        <ul>
          <li>Conventional Hood</li>
          <li>Conventional Hood with Reduced Face Velocity</li>
          <li>Conventional Hood with Use Factor</li>
          <li>Internally Supplied Hood</li>
          <li>Externally Supplied Hood</li>
          <li>Perforated Ceiling Supply Hood</li>
          <li>Horizontal Sliding Sash Hood</li>
        </ul>

        <h2>Laboratory Safety Guidelines</h2>
        <ul>
          <li>Hood Usage: Only active equipment should be inside hoods. Do not use as storage.</li>
          <li>Emergency Equipment: Ensure eyewash, safety showers, fire blankets, and extinguishers are functional and accessible.</li>
          <li>Personal Protection: Use aprons, gloves, goggles, and respirators. Laminated sash glass adds an extra safety barrier.</li>
          <li>Health Monitoring: Monitor workers exposed to biological, carcinogenic, or radioactive agents.</li>
          <li>Chemical Labeling: Clearly mark containers with hazards like “flammable” or “toxic.” Never leave chemicals in open containers.</li>
          <li>Prohibited Practices: No eating, drinking, or mouth pipetting in the laboratory.</li>
          <li>Glassware Handling: Discard damaged glassware, polish sharp ends, and handle carefully with protective cloths.</li>
          <li>Waste Disposal: Segregate glass, corrosives, flammables, and hazardous waste into dedicated containers.</li>
          <li>Storage: Store solvents, gases, and chemicals in ventilated, noncombustible storage rooms or cabinets. Separate incompatible materials.</li>
          <li>Housekeeping: Keep passages, exits, and safety equipment unobstructed. Clean spills immediately.</li>
        </ul>

        <p>
          <strong>Closing Note:</strong> Fume exhaust hoods are only as effective as the practices followed by laboratory personnel. Correct hood design, airflow management, material selection, and strict adherence to safety protocols together ensure long-term protection for both people and processes.
        </p>
      </div>
    </PageSection>
  );
};

export default FumeHoodPage;

// Styled Components
const PageSection = styled.section`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  text-align: center;

  .container {
    max-width: 900px;

    h1 {
      font-size: 36px;
      margin-bottom: 20px;
      color: #0061a6;
    }

    h2 {
      font-size: 24px;
      margin: 25px 0 10px;
      color: #0061a6;
    }

    h3 {
      font-size: 20px;
      margin: 15px 0 8px;
      color: #333;
    }

    p, li {
      font-size: 16px;
      color: #555;
      line-height: 1.6;
      text-align:justify;
    }

    ul {
      text-align: left;
      margin: 10px 0 20px 20px;
    }

    table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;          /* smaller text for compactness */
}

table th, table td {
  border: 1px solid #ddd;
  padding: 6px 8px;         /* reduce padding for mobile */
  text-align: left;
  vertical-align: top;
  word-break: break-word;   /* prevent overflow */
}

table th {
  background: #105eadff;
  font-weight: 600;
  color:white;
}

.table-container {
  width: 100%;
  overflow-x: auto;         /* enables horizontal scroll if needed */
  -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
}

@media (max-width: 600px) {
  table {
    font-size: 12px;        /* even smaller text on tiny devices */
  }
  table th, table td {
    padding: 4px 6px;
  }
}  }
`;
