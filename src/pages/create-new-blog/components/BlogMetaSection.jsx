import React, { useState } from 'react';
import Select from '../../../components copy/ui/Select';
import Input from '../../../components copy/ui/Input';
import Button from '../../../components copy/ui/Button';
import Icon from '../../../components copy/AppIcon';
import './BlogMetaSection.css';

const BlogMetaSection = ({ 
  categories,
  tags,
  selectedCategory, 
  onCategoryChange, 
  selectedTags, 
  onTagsChange, 
  featuredImage, 
  onFeaturedImageChange,
  errors,
  onCategoryCreated,
  onTagCreated
}) => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newTagName, setNewTagName] = useState('');

  const handleCreateCategory = async () => {
    if (newCategoryName?.trim()) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://192.168.1.77:5000/api/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name: newCategoryName })
        });
        
        if (response.ok) {
          const data = await response.json();
          onCategoryChange(data._id);
          setNewCategoryName('');
          setIsCategoryModalOpen(false);
          
          // Notify parent component to refresh categories
          if (onCategoryCreated) {
            onCategoryCreated();
          }
        } else {
          throw new Error('Failed to create category');
        }
      } catch (error) {
        console.error('Error creating category:', error);
        alert('Error creating category. Please try again.');
      }
    }
  };

  const handleCreateTag = async () => {
    if (newTagName?.trim()) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://192.168.1.77:5000/api/tags', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name: newTagName })
        });
        
        if (response.ok) {
          const data = await response.json();
          onTagsChange([...selectedTags, data._id]);
          setNewTagName('');
          setIsTagModalOpen(false);
          
          // Notify parent component to refresh tags
          if (onTagCreated) {
            onTagCreated();
          }
        } else {
          throw new Error('Failed to create tag');
        }
      } catch (error) {
        console.error('Error creating tag:', error);
        alert('Error creating tag. Please try again.');
      }
    }
  };

  return (
    <div className="blog-meta-section">
      <h3 className="blog-meta-title">Blog Settings</h3>
      <div className="blog-meta-content">
        {/* Category Selection */}
        <div className="blog-meta-field">
          <div className="blog-meta-field-header">
            <label className="blog-meta-label">Category</label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCategoryModalOpen(true)}
              iconName="Plus"
              iconPosition="left"
              iconSize={16}
            >
              New Category
            </Button>
          </div>
          <Select
            options={categories.map(cat => ({ value: cat._id, label: cat.name }))}
            value={selectedCategory}
            onChange={onCategoryChange}
            placeholder="Select a category..."
            error={errors?.category}
            searchable
          />
        </div>

        {/* Tag Selection */}
        <div className="blog-meta-field">
          <div className="blog-meta-field-header">
            <label className="blog-meta-label">Tags</label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsTagModalOpen(true)}
              iconName="Plus"
              iconPosition="left"
              iconSize={16}
            >
              New Tag
            </Button>
          </div>
          <Select
            options={tags.map(tag => ({ value: tag._id, label: tag.name }))}
            value={selectedTags}
            onChange={onTagsChange}
            placeholder="Select tags..."
            multiple
            searchable
            clearable
            error={errors?.tags}
          />
        </div>

        {/* Featured Image Upload */}
        <div className="blog-meta-field">
          <label className="blog-meta-label">Featured Image URL</label>
          <Input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={featuredImage}
            onChange={(e) => onFeaturedImageChange(e.target.value)}
            error={errors?.featuredImage}
          />
          <p className="image-upload-text">
            Enter the URL of your featured image
          </p>
        </div>
      </div>
      {/* Category Creation Modal */}
      {isCategoryModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Create New Category</h3>
            <Input
              label="Category Name"
              type="text"
              placeholder="Enter category name..."
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="modal-input"
              required
            />
            <div className="modal-actions">
              <Button
                variant="outline"
                onClick={() => setIsCategoryModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateCategory}>
                Create Category
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Tag Creation Modal */}
      {isTagModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Create New Tag</h3>
            <Input
              label="Tag Name"
              type="text"
              placeholder="Enter tag name..."
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="modal-input"
              required
            />
            <div className="modal-actions">
              <Button
                variant="outline"
                onClick={() => setIsTagModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateTag}>
                Create Tag
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogMetaSection;