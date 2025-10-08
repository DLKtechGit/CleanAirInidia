import React, { useState } from 'react';
import Icon from '../../components copy/AppIcon';
import ActionButtons from '../blog-list/components/ActionButtons'; // Adjust path as needed
import BulkActions from '../blog-list/components/BulkActions'; // Adjust path as needed
import './AdminTable.css'; // Create this CSS file

const AdminTable = ({ 
  admins, 
  onDelete, 
  onBulkDelete, 
  // Add other props like onSort if sorting is needed later
}) => {
  const [selectedAdmins, setSelectedAdmins] = useState([]);
console.log("Suriya",admins)
  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedAdmins(admins?.map(admin => admin?.id));
    } else {
      setSelectedAdmins([]);
    }
  };

  const handleSelectAdmin = (adminId, checked) => {
    if (checked) {
      setSelectedAdmins(prev => [...prev, adminId]);
    } else {
      setSelectedAdmins(prev => prev?.filter(id => id !== adminId));
    }
  };

  const handleBulkAction = (action) => {
    if (action === 'delete') {
      onBulkDelete(selectedAdmins);
    }
    setSelectedAdmins([]);
  };

  return (
    <div className="admin-table-container">
      {/* Bulk Actions */}
      {selectedAdmins?.length > 0 && (
        <BulkActions
          selectedCount={selectedAdmins?.length}
          onBulkAction={handleBulkAction}
          onClearSelection={() => setSelectedAdmins([])}
          // Optionally limit actions to delete only
          actions={[{ value: 'delete', label: 'Delete' }]}
        />
      )}
      {/* Desktop Table */}
      <div className="admin-table-desktop">
        <table className="admin-table">
          <thead className="admin-table-head">
            <tr className="admin-table-head-row">
              {/* <th className="admin-table-head-cell admin-table-checkbox-cell">
                <input
                  type="checkbox"
                  checked={selectedAdmins?.length === admins?.length && admins?.length > 0}
                  onChange={(e) => handleSelectAll(e?.target?.checked)}
                  className="admin-table-checkbox"
                />
              </th> */}
              <th className="admin-table-head-cell">
                <span>S.No</span>
              </th>
              <th className="admin-table-head-cell">
                <span>Name</span>
              </th>
              <th className="admin-table-head-cell">
                <span>Created Date</span>
              </th>
              <th className="admin-table-head-cell">
                <span>Published Blogs</span>
              </th>
              <th className="admin-table-head-cell">
                <span>Draft Blogs</span>
              </th>
              <th className="admin-table-head-cell">
                <span>Role</span>
              </th>
              {/* <th className="admin-table-head-cell admin-table-actions-cell">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody className="admin-table-body">
            {admins?.map((admin) => (
              <tr key={admin?.id} className="admin-table-row">
                {/* <td className="admin-table-cell admin-table-checkbox-cell">
                  <input
                    type="checkbox"
                    checked={selectedAdmins?.includes(admin?.id)}
                    onChange={(e) => handleSelectAdmin(admin?.id, e?.target?.checked)}
                    className="admin-table-checkbox"
                  />
                </td> */}
                <td className="admin-table-cell admin-table-serial">
                  {admin?.serialNumber}
                </td>
                <td className="admin-table-cell">
                  <span className="admin-table-name">
                    {admin?.name}
                  </span>
                </td>
                <td className="admin-table-cell admin-table-date">
                  {admin?.createdDate}
                </td>
                <td className="admin-table-cell">
                  <span className="admin-table-published">
                    {admin?.published}
                  </span>
                </td>
                <td className="admin-table-cell">
                  <span className="admin-table-drafts">
                    {admin?.drafts}
                  </span>
                </td>
                <td className="admin-table-cell">
                  <span className="admin-table-role">
                    {admin?.role ? admin.role.charAt(0).toUpperCase() + admin.role.slice(1) : 'Unknown'}
                  </span>
                </td>
                {/* <td className="admin-table-cell admin-table-actions-cell">
                  <ActionButtons
                    onDelete={() => onDelete(admin?.id)}
                    // No edit action as not specified
                    hideEdit
                  />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Cards */}
      <div className="admin-table-mobile">
        {admins?.map((admin) => (
          <div key={admin?.id} className="admin-table-mobile-card">
            <div className="admin-table-mobile-header">
              <div className="admin-table-mobile-checkbox">
                <input
                  type="checkbox"
                  checked={selectedAdmins?.includes(admin?.id)}
                  onChange={(e) => handleSelectAdmin(admin?.id, e?.target?.checked)}
                  className="admin-table-checkbox"
                />
                <span className="admin-table-mobile-serial">
                  #{admin?.serialNumber}
                </span>
              </div>
            </div>
            
            <div className="admin-table-mobile-content">
              <h3 className="admin-table-mobile-name">{admin?.name}</h3>
            </div>
            
            <div className="admin-table-mobile-footer">
              <div className="admin-table-mobile-info">
                <div className="admin-table-mobile-info-item">
                  <Icon name="Calendar" size={14} className="admin-table-mobile-icon" />
                  <span>{admin?.createdDate}</span>
                </div>
                <div className="admin-table-mobile-info-item">
                  <Icon name="FileCheck" size={14} className="admin-table-mobile-icon" />
                  <span>Published: {admin?.published}</span>
                </div>
                <div className="admin-table-mobile-info-item">
                  <Icon name="FileEdit" size={14} className="admin-table-mobile-icon" />
                  <span>Drafts: {admin?.drafts}</span>
                </div>
                <div className="admin-table-mobile-info-item">
                  <Icon name="UserCheck" size={14} className="admin-table-mobile-icon" />
                  <span>Role: {admin?.role ? admin.role.charAt(0).toUpperCase() + admin.role.slice(1) : 'Unknown'}</span>
                </div>
              </div>
              <ActionButtons
                onDelete={() => onDelete(admin?.id)}
                mobile
                hideEdit
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTable;