// ProductPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/so1.jpeg";
import picture2 from "../../../assets/images/about-us/so2.jpeg";
import picture3 from "../../../assets/images/about-us/so3.jpeg";
import picture4 from "../../../assets/images/about-us/so4.jpeg";
import { useNavigate } from "react-router-dom"; // ✅ for navigation


const ProductPage9 = () => {
  const images = [picture4, picture2, picture3, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const navigate = useNavigate(); // ✅ hook for navigation


  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Softwall Cleanroom" />
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Cleanroom ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Special Features */}
            <div className="features-section">
              <h2>Special Features</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" /> Flexible Installation: Quick setup with minimal site preparation.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" /> Scalable Design: Expand or reconfigure easily as process needs evolve.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" /> ISO Compliance: Achieves ISO 6–8 classification with HEPA-filtered airflow.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" /> Material Options: Available with transparent, translucent, or antistatic curtains.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" /> Cost-Effective: Lower investment compared to permanent modular cleanrooms.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" /> Easy Maintenance: Softwall curtains can be replaced without structural modifications.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Softwall Cleanrooms & Clean Air Tents </h1>
            <p>
              Clean Air Tents, also known internationally as <strong>Softwall Cleanrooms</strong>, are flexible and cost-effective cleanroom solutions. They are designed for applications where a fully modular or permanent cleanroom installation is not feasible, but a controlled environment is still essential.
            </p>

            <p>
              Using clear or antistatic softwall curtains suspended from a rigid frame with integrated HEPA filtration, these enclosures provide a quick-to-install, scalable, and reliable way to achieve required ISO cleanroom classifications.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical and biotechnology research</li>
              <li>Medical device assembly</li>
              <li>Electronics and semiconductor production</li>
              <li>Food and beverage quality testing</li>
              <li>Temporary or pilot-scale cleanroom setups</li>
              <li>Controlled work zones inside larger non-classified areas</li>
            </ul>

            <h2>Technical Specifications</h2>
            <ul>
              <li><strong>Cleanroom Class:</strong> ISO 6, ISO 7, ISO 8 (as per ISO 14644-1)</li>
              <li><strong>Airflow:</strong> Vertical or horizontal laminar airflow</li>
              <li><strong>Filtration:</strong> Pre-filter + HEPA filter (99.97% @ 0.3 μm)</li>
              <li><strong>Frame Construction:</strong> Powder-coated GI or Stainless Steel</li>
              <li><strong>Curtain Material:</strong> PVC (transparent/antistatic), PU-coated fabric</li>
              <li><strong>Lighting:</strong> Flush-mounted LED cleanroom lighting</li>
              <li><strong>Power Supply:</strong> 230V, single-phase, 50 Hz</li>
            </ul>

            <h2>Why Choose Cleanair® Softwall Cleanrooms?</h2>
            <p>
              Our Clean Air Tents are engineered to deliver reliable contamination control while providing the mobility and flexibility that traditional cleanroom setups lack. With rapid deployment, adaptability, and low operational cost, they are the preferred choice for industries looking for temporary or semi-permanent controlled environments.
            </p>
             {/* ✅ BUTTON at the end */}
            <div className="interest-btn-wrap">
              <button
                className="interest-btn"
                onClick={() => navigate("/contact-us")}
              >
                Yes I'm Interested
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProductSection>
  );
};

export default ProductPage9;

// Styled Components
const ProductSection = styled.section`
  padding: 80px 0;

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }

  /* LEFT SIDE: Product Images + Features */
  .product-images {
    flex: 1;
    max-width: 50%;

    .main-image {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;

      img {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }

    .thumbnail-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 25px;

      img {
        width: 80px;
        height: 80px;
        border: 2px solid transparent;
        border-radius: 8px;
        cursor: pointer;
        object-fit: cover;
        transition: border-color 0.3s;

        &:hover {
          border-color: #007bff;
        }

        &.active {
          border-color: #007bff;
        }
      }
    }

    .features-section {
      margin-top: 20px;

      h2 {
        font-size: 20px;
        margin-bottom: 12px;
        color: #0061a6;
      }

      ul {
        list-style: none;
        padding-left: 0;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          color: ${({ theme }) => theme.colors.textColor || "#555"};
          font-size: 15px;

          .tick-icon {
            color: #28a745;
            margin-right: 8px;
            flex-shrink: 0;
          }
        }
      }
    }
  }

  /* RIGHT SIDE: Product Details */
  .product-details {
    flex: 1;
    max-width: 50%;

    h1 {
      font-size: 42px;
      margin-bottom: 15px;
      color: black;
    }

    h2 {
      font-size: 20px;
      margin: 20px 0 10px;
      color: #0061a6;
    }

    p {
      line-height: 1.6;
      margin-bottom: 15px;
      color: ${({ theme }) => theme.colors.textColor || "#555"};
      text-align: justify;
    }

    ul {
      padding-left: 20px;
      margin-bottom: 15px;

      li {
        margin-bottom: 8px;
        color: ${({ theme }) => theme.colors.textColor || "#555"};
      }
    }
      /* ✅ Button style */
    .interest-btn-wrap {
      margin-top: 30px;
    }

    .interest-btn {
      background-color: #007bff;
      color: #fff;
      padding: 12px 25px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #0056b3;
      }
    }
  }

  /* Responsive */
  @media screen and (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .product-images,
    .product-details {
      max-width: 100%;
    }

    .thumbnail-list {
      justify-content: center;
    }
  }
`;
