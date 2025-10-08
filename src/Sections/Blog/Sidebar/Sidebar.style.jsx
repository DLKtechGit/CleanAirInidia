import styled from "styled-components";

const SidebarStyleWrapper = styled.aside`

.sidebar-loading {
  text-align: center;
  padding: 20px;
}

.sidebar-loading .loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

.no-data {
  color: #6c757d;
  font-style: italic;
  text-align: center;
  padding: 10px;
}

.sidebar-link {
  cursor: pointer;
  transition: color 0.3s ease;
}

.sidebar-link:hover {
  color: #007bff;
}

.filter-header {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.filter-info h3 {
  margin-bottom: 10px;
}

.active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.filter-tag {
  background: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
}

.clear-filters-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.clear-filters-btn:hover {
  background: #545b62;
}

.no-blogs-found {
  text-align: center;
  padding: 60px 20px;
}

.no-blogs-found h3 {
  margin-bottom: 10px;
}

.category-link, .tag-link {
  cursor: pointer;
  transition: color 0.3s ease;
}

.category-link:hover, .tag-link:hover {
  color: #007bff;
}

.author-name {
  color: #495057;
  font-weight: 500;
}

.share-btn {
  cursor: pointer;
  transition: background 0.3s ease;
}

.share-btn:hover {
  background: #e9ecef;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  .latest-blog-section {
    padding: 140px 0px;
    .latest-blog-content {
      padding-right: 20px;
    }
  }
  .letest-blog-card {
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .letest-blog-search-section {
    padding: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    & form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 10px 15px;
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-radius: 10px;
      & input {
        border: none;
        outline: none;
        width: 80%;
      }
    }
  }
  .categories-list {
    padding: 22px 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    ul {
      padding: 0;
      list-style: none;
      li {
        a {
          font-size: 16px;
          line-height: 36px;
          color: ${({ theme }) => theme.colors.textColor};
          transition: 0.3s;
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }
  .recent-post-section {
    padding: 22px 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    ul {
      padding: 0;
      list-style: none;
      margin-top: 16px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;
      flex-direction: column;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 19px;
        .recent-post-img {
          min-height: 80px;
          min-width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 15px;
          img {
            height: 100%;
            width: 100%;
            border-radius: 15px;
            overflow: hidden;
            object-fit: cover;
          }
        }
        .recent-post-text {
          .blog-date {
            font-size: 14px;
            line-height: 20px;
            opacity: 0.8;
            margin-bottom: 8px;
          }
          h5 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 700;
            a {
              transition: 0.4s;
              &:hover {
                color: ${({ theme }) => theme.colors.primary};
              }
            }
          }
        }
      }
    }
  }
  .post-tags-section {
    padding: 22px 30px 30px 30px;
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      & li {
        border-radius: 25px;
        transition: 0.3s;
        display: inline-block;
        & a {
          font-size: 14px;
          font-style: italic;
          transition: 0.3s;
          height: 45px;
          line-height: 45px;
          background: ${({ theme }) => theme.colors.whiteColor}1a;
          border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
          border-radius: 25px;
          display: block;
          padding: 0 20px;
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
            border: 1px solid ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .latest-blog-section .latest-blog-content {
      padding-right: 0px;
    }
  }
  @media screen and (max-width: 767px) {
    .latest-blog-section {
      padding: 80px 0px 70px;
    }
    .post-tags-section ul li {
      padding: 11px 15px;
    }
  }
`;

export default SidebarStyleWrapper;
