import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../blog-list/components/PageHeader';  // Adjust path
import Pagination from '../blog-list/components/Pagination';  // Adjust path
import ConfirmationModal from '../blog-list/components/ConfirmationModal';  // Adjust path
import AdminTable from './AdminTable';  // Assume new component similar to BlogTable
import Header from '../../components copy/ui/Header';
import SidebarNavigation from '../../components copy/ui/SidebarNavigation';
// import './AdminList.css';  // Create if needed

const AdminList = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const [admins, setAdmins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, adminId: null, isBulk: false, adminIds: [] });

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`http://46.202.166.103:5000/api/users`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/admin');
        }
        throw new Error('Failed to fetch admins');
      }

      const data = await response.json();
      // console.log("admlist",data)
      
      setAdmins(data);
      setTotalItems(data.length);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching admins:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleDelete = async (adminId) => {
    // Implement delete if needed, message doesn't specify actions, so optional
  };

  const handleBulkDelete = async (adminIds) => {
    // Implement if needed
  };

  const confirmDelete = () => {
    // Call handleDelete or bulk
  };

  const formattedAdmins = admins.map((admin, index) => ({
    id: admin._id,
    serialNumber: index + 1,
    name: `${admin.firstName} ${admin.lastName}`,
    createdDate: new Date(admin.createdAt).toLocaleDateString(),
    published: admin.publishedCount,
    drafts: admin.draftCount,
    role:admin.role
  }));

  return (
    <div className="app-container">
      <SidebarNavigation collapsed={sidebarCollapsed} onToggle={handleSidebarToggle} />
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header onSidebarToggle={handleSidebarToggle} sidebarCollapsed={sidebarCollapsed} />
        <div className="admin-list-content">
          {/* <PageHeader totalBlogs={totalItems} publishedCount={0} draftCount={0} />       */}

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading admins...</p>
            </div>
          ) : (
            <>
              <AdminTable
                admins={formattedAdmins}
                onDelete={(adminId) => setDeleteModal({ isOpen: true, adminId, isBulk: false, adminIds: [] })}
                onBulkDelete={(adminIds) => setDeleteModal({ isOpen: true, adminId: null, isBulk: true, adminIds })}
              />

              {totalPages > 1 && (
                <div className="pagination-container">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                  />
                </div>
              )}
            </>
          )}

          <ConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={() => setDeleteModal({ isOpen: false, adminId: null, isBulk: false, adminIds: [] })}
            onConfirm={confirmDelete}
            title={deleteModal.isBulk ? "Delete Multiple Admins" : "Delete Admin"}
            message={deleteModal.isBulk ? `Are you sure you want to delete ${deleteModal.adminIds.length} selected admins?` : "Are you sure you want to delete this admin?"}
            confirmText="Delete"
            confirmVariant="destructive"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminList;