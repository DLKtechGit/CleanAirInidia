// BiosafetyCabinetPage.js
import React from "react";
import styled from "styled-components";

const BiosafetyCabinetPage = () => {
  return (
    <PageSection>
      <div className="container">
        <h1>Recommended Practices – Biosafety Cabinets</h1>

        <h2>What is a Biosafety Cabinet?</h2>
        <p>
          A Biosafety Cabinet (BSC) is a ventilated enclosure designed to provide
          personnel, product, and environmental protection during work with
          infectious or hazardous biological materials. BSCs rely on HEPA
          filtration and controlled airflow to contain contaminants and maintain
          sterile conditions inside the work zone. They are a critical barrier
          system in laboratories handling microbiological agents,
          pharmaceuticals, or sterile preparations, and form part of the safety
          framework defined by global biosafety standards.
        </p>

        <h2>Key Definitions</h2>
        <p>
          <strong>Biohazard:</strong> Biological agents or components that pose
          risk to human, animal, or plant health, either directly through
          infection or indirectly by environmental disruption.
        </p>
        <p>
          <strong>Biosafety Levels (BSL):</strong> Laboratory practices,
          equipment, and facility design are classified into four levels (BSL-1
          to BSL-4) based on the infectious agent’s risk.
        </p>

        <h2>Biosafety Levels Overview</h2>
        <ul>
          <li>
            <strong>BSL-1:</strong> Basic teaching or training labs. Standard
            practices, minimal risk.
          </li>
          <li>
            <strong>BSL-2:</strong> Moderate-risk agents such as HBV, HIV,
            Salmonella. Requires PPE, controlled access, and use of BSCs for
            aerosol-prone procedures.
          </li>
          <li>
            <strong>BSL-3:</strong> Indigenous or exotic agents with respiratory
            transmission (e.g., TB, Coxiella). Requires BSCs for all open
            manipulations, plus controlled airflow and restricted access.
          </li>
          <li>
            <strong>BSL-4:</strong> Dangerous, exotic agents with high lethality
            and no treatment (e.g., Marburg virus). Requires Class III cabinets
            or full-body positive-pressure suits in maximum containment labs.
          </li>
        </ul>

        <h2>Biosafety Cabinet Classifications</h2>
        <ul>
          <li>
            <strong>Class I:</strong> Protects personnel and environment only. No
            product protection. Inward airflow, HEPA exhaust.
          </li>
          <li>
            <strong>Class II:</strong> Protects personnel, product, and
            environment. Includes:
            <ul>
              <li>
                <strong>Type A2:</strong> 100 ft/min inflow, negative pressure
                plenums, limited chemical/radionuclide use.
              </li>
              <li>
                <strong>Type B2:</strong> 100 ft/min inflow, total exhaust,
                required for work with toxic chemicals and radionuclides.
              </li>
            </ul>
          </li>
          <li>
            <strong>Class III:</strong> Totally enclosed, glove-operated cabinet
            with double HEPA or HEPA + incineration exhaust. Maximum protection
            level.
          </li>
        </ul>

        <h2>Correct Use of Biosafety Cabinets</h2>
        <h3>Preparation</h3>
        <ul>
          <li>Run the blower for 10–15 minutes before work.</li>
          <li>Wipe interior surfaces with 70% alcohol or approved disinfectant.</li>
          <li>
            Load all required materials before starting, arranged from clean
            (left) to dirty (right).
          </li>
        </ul>

        <h3>Work Practices</h3>
        <ul>
          <li>Keep front and rear grilles unobstructed to maintain airflow.</li>
          <li>Perform manipulations at least 4 inches inside the cabinet.</li>
          <li>Work from clean to contaminated areas.</li>
          <li>
            Minimize arm and body movements in and out of the cabinet to prevent
            turbulence.
          </li>
          <li>Avoid using open flames; use electric alternatives.</li>
        </ul>

        <h3>Personal Protection</h3>
        <ul>
          <li>Always wear gloves, lab coat, and face protection as required.</li>
          <li>Disinfect gloves frequently during work.</li>
          <li>
            Handle sharps with extreme caution to prevent punctures inside the
            BSC.
          </li>
        </ul>

        <h3>Post-Use</h3>
        <ul>
          <li>Decontaminate all surfaces with appropriate disinfectant.</li>
          <li>Remove waste in sealed, disinfected containers.</li>
          <li>Allow blower to run for a few minutes before shutting down.</li>
        </ul>

        <h3>Maintenance</h3>
        <ul>
          <li>Cabinets must be certified annually or after relocation.</li>
          <li>HEPA filters should be replaced by qualified service personnel.</li>
          <li>
            Maintain detailed records of certification and servicing.
          </li>
        </ul>

        <h2>Summary</h2>
        <p>
          Biosafety Cabinets form a cornerstone of laboratory safety, combining
          airflow engineering, HEPA filtration, and correct user practices. The
          effectiveness of a BSC is as much about proper usage as it is about
          design and certification. Every lab working with biological materials
          should establish clear SOPs and ensure personnel are trained in
          correct techniques to maintain both safety and compliance.
        </p>
      </div>
    </PageSection>
  );
};

export default BiosafetyCabinetPage;

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
      text-align: justify;
    }

    ul {
      text-align: left;
      margin: 10px 0 20px 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }

    table th, table td {
      border: 1px solid #ddd;
      padding: 6px 8px;
      text-align: left;
      vertical-align: top;
      word-break: break-word;
    }

    table th {
      background: #105eadff;
      font-weight: 600;
      color: white;
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    @media (max-width: 600px) {
      table {
        font-size: 12px;
      }
      table th, table td {
        padding: 4px 6px;
      }
    }
  }
`;
