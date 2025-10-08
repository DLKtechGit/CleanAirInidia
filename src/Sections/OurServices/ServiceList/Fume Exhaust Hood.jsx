// ProductPage3.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import picture1 from "../../../assets/images/about-us/fume1.jpg";
import picture2 from "../../../assets/images/about-us/fume2.jpg";
import picture3 from "../../../assets/images/about-us/fume3.png";
import picture4 from "../../../assets/images/about-us/fume4.jpg";
import picture5 from "../../../assets/images/about-us/fume5.jpeg";
import picture6 from "../../../assets/images/about-us/fume6.jpeg";
import picture7 from "../../../assets/images/about-us/fume7.jpeg";
import picture8 from "../../../assets/images/about-us/fume8.jpeg";
import picture9 from "../../../assets/images/about-us/fume9.jpeg";
import picture10 from "../../../assets/images/about-us/fume10.jpeg";
import picture11 from "../../../assets/images/about-us/fume11.jpeg";
import picture12 from "../../../assets/images/about-us/fume12.jpeg";
import picture13 from "../../../assets/images/about-us/fume13.jpeg";
import cataloguePdf from "../../../assets/images/about-us/Fume Hood Product Catalogue.pdf";

const ProductPage3 = () => {
  const images = [picture4,picture6,picture7,picture8,picture9,picture10,picture11,picture12,picture13,picture5, picture2, picture3, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    city: "",
    country: "",
    product: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleOptionClick = (product) => {
    setSelectedProduct(product);
    setFormData({...formData, product});
    setShowOptions(false);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // First, send the email
      const response = await fetch('http://46.202.166.103:5000/api/product-catalogue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage(data.message);
        
        // Then download the PDF
        let pdfFile;
        if (selectedProduct === "Fume Hood Product Catalogue") {
          pdfFile = cataloguePdf;
        }

        if (pdfFile) {
          const link = document.createElement("a");
          link.href = pdfFile;
          link.download = `${selectedProduct.replace(/\s+/g, "_")}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        // Close modal after a delay
        setTimeout(() => {
          setShowModal(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            city: "",
            country: "",
            product: ""
          });
        }, 3000);
      } else {
        setSubmitMessage(data.message || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Fume Exhaust Hood" />
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Fume Hood ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Available Models and Sizes */}
            <div className="models-section">
              <h2>Available Models and Sizes</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>CAFH 900:</strong> 3 x 2 x 2 ft
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>CAFH 1200:</strong> 4 x 2 x 2 ft
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>CAFH 1503:</strong> 5 x 3 x 3 ft
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>CAFH 1803:</strong> 6 x 3 x 3 ft
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Custom sizes available on request
                </li>
              </ul>
            </div>

            {/* Special Features */}
            <div className="features-section">
              <h2>Special Features</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Work surface options: Polished granite or glazed ceramic tiles
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Counter-balanced front sash with toughened glass viewing panel
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Sink with water inlet & outlet
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Gas/air/vacuum petcocks
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Electrical power points & optional FLP fittings
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Under-bench cupboard for storage
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Material options: GI (Powder-coated), Polypropylene (PP), SS
                  304 & SS 316
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Laboratory Fume Exhaust Hood</h1>
            <p>
              At <strong>Clean Air Systems</strong>, we manufacture
              high-quality Fume Exhaust Laboratory Hoods designed to protect
              laboratory personnel from hazardous fumes, vapors, and gases
              generated during chemical processes. Our fume hoods ensure a safe
              working environment by effectively driving out harmful
              contaminants, making them an essential part of modern
              laboratories.
            </p>

            <h2>Types of Fume Exhaust Hoods</h2>
            <ul>
              <li>
                Ducted Fume Hoods – Direct exhaust to the outside environment
                for maximum safety
              </li>
              <li>
                Ductless Fume Hoods – Equipped with specialized filters for labs
                where ducting is not feasible
              </li>
              <li>
                Walk-in Fume Hoods – Designed for handling large equipment or
                high-volume experiments
              </li>
            </ul>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical R&D labs</li>
              <li>Chemical and analytical laboratories</li>
              <li>Biotechnology research facilities</li>
              <li>Food and beverage testing labs</li>
              <li>Academic and industrial research centers</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              With over 35+ years of experience, Clean Air Systems is a trusted
              fume hood manufacturer in India. Each fume exhaust system is
              rigorously tested for airflow performance, durability, and safety
              before installation. Backed by our strong after-sales support, we
              ensure that laboratories across India can rely on our equipment
              for uninterrupted and safe operations.
            </p>
            
            {/* Hover Button with Options */}
            <div className="interest-btn-wrap">
              <button
                className="interest-btn"
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
              >
                Yes I'm Interested
              </button>
              
              {showOptions && (
                <div 
                  className="options-dropdown"
                  onMouseEnter={() => setShowOptions(true)}
                  onMouseLeave={() => setShowOptions(false)}
                >
                  <div 
                    className="option-item"
                    onClick={() => handleOptionClick("Fume Hood Product Catalogue")}
                  >
                    Fume Hood Product Catalogue
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            <h3>Request Information for {selectedProduct}</h3>
            
            {submitMessage && (
              <Message className={submitMessage.includes('Thank you') ? 'success' : 'error'}>
                {submitMessage}
              </Message>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="product">Selected Product</label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  readOnly
                  className="read-only"
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Submit & Download PDF'}
              </SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProductSection>
  );
};

export default ProductPage3;

// Styled Components
const ProductSection = styled.section`
  padding: 80px 0;
  position: relative;

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

    .models-section,
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

    /* Button with dropdown */
    .interest-btn-wrap {
      margin-top: 30px;
      position: relative;
      display: inline-block;
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

    .options-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      border-radius: 5px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10;
      margin-top: 5px;
    }

    .option-item {
      padding: 12px 15px;
      cursor: pointer;
      transition: background-color 0.2s;
      
      &:hover {
        background-color: #f0f0f0;
      }
      
      &:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      
      &:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
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

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;

  h3 {
    margin-bottom: 20px;
    color: #0061a6;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    
    &.read-only {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
    
    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;