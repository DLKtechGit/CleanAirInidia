import styled from "styled-components";

const SayHelloStyle = styled.section`
  padding: 130px 0 65px 0;

  .contact-img {
    margin-right: 50px;
    position: relative;
    > img {
      width: 100%;
    }
    .overlay-item {
      position: absolute;

      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &.shape-1 {
        bottom: 130px;
        right: 0;
        .icon {
          img {
            width: 42px;
            height: 36px;
          }
        }
      }
      &.shape-2 {
        bottom: 0;
        left: 186px;
        .icon {
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .contact-content {
    &-title {
      margin-bottom: 35px;
    }
    h3 {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.title};
    }
    input,
    textarea {
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-radius: 10px;
      padding: 10px 15px;
      font-weight: 500;
      font-size: 15px;
      line-height: 28px;
      color: ${({ theme }) => theme.colors.title};
      transition: 0.3s;
    }
    textarea {
      resize: none;
    }
  }

  .form-input-between {
    display: flex;
    align-items: center;
    gap: 30px;
    .form-input {
      width: 100%;
    }
  }

  .checkbox-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 10px;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 8px;
    
    input[type="checkbox"] {
      width: auto;
      margin: 0;
    }
    
    label {
      text-transform: none;
      font-weight: 400;
      margin: 0;
    }
  }

  .recaptcha-container {
    display: flex;
    justify-content: center;
    
    > div {
      transform: scale(0.9);
      transform-origin: 0 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0 30px 0;

    .contact-content {
      &-title {
        margin-bottom: 20px;
      }

      h3 {
        margin-bottom: 8px;
        font-size: 16px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }

    .checkbox-group {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 575px) {
    .form-input-between {
      gap: 0px;
      flex-direction: column;
    }
    
    .recaptcha-container > div {
      transform: scale(0.8);
    }
  }

  @media screen and (max-width: 480px) {
    .contact-img {
      .overlay-item {
        &.shape-1 {
          bottom: 60px;
          right: 0;

          img {
            width: 100px;
          }

          .icon {
            img {
              width: 30px;
              height: auto;
            }
          }
        }

        &.shape-2 {
          bottom: 0;
          left: 80px;

          img {
            width: 60px;
          }

          .icon {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
    
    .recaptcha-container > div {
      transform: scale(0.7);
    }
  }

  .submit-message {
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  text-align: center;
}

.submit-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

  @media screen and (max-width: 374px) {
    .contact-content h2 {
      font-size: 30px;
      line-height: 42px;
    }
    
    .recaptcha-container > div {
      transform: scale(0.6);
    }
  }
`;

export default SayHelloStyle;