// Pages/Profile.jsx

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';

const Profile = () => {
  // Hardcoded categories and subcategories
  const categoriesList = {
    Development: [
      'Web Development',
      'Mobile Development',
      'Programming Languages',
      'Game Development',
      'Database Design & Development',
      'Software Testing',
    ],
    Business: [
      'Entrepreneurship',
      'Communication',
      'Management',
      'Sales',
      'Business Strategy',
    ],
    'Finance & Accounting': [
      'Accounting & Bookkeping',
      'Cryptocurrency & Blockchain',
      'Finance',
      'Financial Modeling & Analysis',
      'Investing & Trading',
    ],
    'IT & Software': [
      'IT Certifications',
      'Network & Security',
      'Hardware',
      'Operating Systems & Servers',
      'Other IT & Software',
    ],
    'Office Productivity': [
      'Microsoft',
      'Apple',
      'Google',
      'SAP',
      'Oracle',
      'Other Office Productivity',
    ],
    'Personal Development': [
      'Personal Transformation',
      'Personal Productivity',
      'Leadership',
      'Career Development',
      'Parenting & Relationships',
    ],
    Design: [
      'Web Design',
      'Graphic Design & Illustration',
      'Design Tools',
      'User Experience Design',
      'Game Design',
      '3D & Animation',
    ],
    Marketing: [
      'Digital Marketing',
      'Search Engine Optimization',
      'Social Media Marketing',
      'Branding',
      'Marketing Fundamentals',
      'Marketing Analytics & Animation',
    ],
    'Health & Fitness': [
      'Fitness',
      'General Health',
      'Sports',
      'Nutrition & Diet',
      'Yoga',
      'Mental Health',
    ],
    Music: [
      'Instruments',
      'Music Production',
      'Music Fundamentals',
      'Vocal',
      'Music Techniques',
      'Music Software',
    ],
  };

  const hardcodedCategories = Object.keys(categoriesList).map(
    (key, index) => ({
      id: index + 1,
      name: key,
      subcategories: categoriesList[key],
    })
  );

  const [categories] = useState(hardcodedCategories);
  const [editing, setEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
    jobTitle: false,
    bio: false,
    goals: false,
    selectedCategory: '',
    selectedSubcategory: '',
    links: [false, false, false], // Track editing state for links
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    bio: '',
    goals: '',
    memberSince: '',
    links: ['LinkedIn', 'Twitter', ''], // Initial links with LinkedIn and Twitter
  });

  const handleEditToggle = (field) => {
    setEditing({ ...editing, [field]: !editing[field] });
  };

  const handleLinkEditToggle = (index) => {
    const newLinksEditing = [...editing.links];
    newLinksEditing[index] = !newLinksEditing[index];
    setEditing({ ...editing, links: newLinksEditing });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...formData.links];
    newLinks[index] = value;
    setFormData({ ...formData, links: newLinks });
  };

  const handleDeleteLink = (index) => {
    if (index > 1) {
      // Only allow deletion for links beyond the first two
      const newLinks = formData.links.filter((_, i) => i !== index); // Remove the link entry
      setFormData({ ...formData, links: newLinks });
    }
  };

  const handleAddLink = () => {
    setFormData({ ...formData, links: [...formData.links, ''] }); // Add a new empty link
  };

  const handleSave = () => {
    // Save logic here
    setEditing({
      firstName: false,
      lastName: false,
      email: false,
      jobTitle: false,
      bio: false,
      goals: false,
      selectedCategory: '',
      selectedSubcategory: '',
      links: [false, false, false], // Reset link editing states
    });
  };

  const handleCancel = () => {
    setEditing({
      firstName: false,
      lastName: false,
      email: false,
      jobTitle: false,
      bio: false,
      goals: false,
      selectedCategory: '',
      selectedSubcategory: '',
      links: [false, false, false], // Reset link editing states
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ebfcff',
        padding: 3,
        overflowY: 'auto',
        height: '100vh',
        marginTop: '3em',
      }}
    >
      <Typography
        variant='h4'
        sx={{ color: '#222e50', marginBottom: 2 }}
      >
        Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='First Name'
            variant='outlined'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            disabled={!editing.firstName}
          />
          <IconButton onClick={() => handleEditToggle('firstName')}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='Last Name'
            variant='outlined'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            disabled={!editing.lastName}
          />
          <IconButton onClick={() => handleEditToggle('lastName')}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            name='email'
            value={formData.email}
            onChange={handleChange}
            disabled={!editing.email}
          />
          <IconButton onClick={() => handleEditToggle('email')}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Job Title'
            variant='outlined'
            name='jobTitle'
            value={formData.jobTitle}
            onChange={handleChange}
            disabled={!editing.jobTitle}
          />
          <IconButton onClick={() => handleEditToggle('jobTitle')}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Bio'
            variant='outlined'
            name='bio'
            value={formData.bio}
            onChange={handleChange}
            multiline
            rows={4}
            disabled={!editing.bio}
          />
          <IconButton onClick={() => handleEditToggle('bio')}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h6'
            sx={{ color: '#DFC853', marginBottom: 1 }}
          >
            Goals
          </Typography>
          <TextField
            fullWidth
            variant='outlined'
            name='goals'
            value={formData.goals}
            onChange={handleChange}
            multiline
            rows={4}
            disabled={!editing.goals}
          />
          <IconButton onClick={() => handleEditToggle('goals')}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h6'
            sx={{ color: '#DFC853', marginBottom: 1 }}
          >
            Categories
          </Typography>
          <Select
            fullWidth
            value={editing.selectedCategory}
            onChange={(e) =>
              setEditing({
                ...editing,
                selectedCategory: e.target.value,
              })
            }
            displayEmpty
          >
            <MenuItem value='' disabled>
              Select Category
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            fullWidth
            value={editing.selectedSubcategory}
            onChange={(e) =>
              setEditing({
                ...editing,
                selectedSubcategory: e.target.value,
              })
            }
            displayEmpty
          >
            <MenuItem value='' disabled>
              Select Subcategory
            </MenuItem>
            {editing.selectedCategory &&
              categories
                .find((cat) => cat.name === editing.selectedCategory)
                ?.subcategories.map((sub) => (
                  <MenuItem key={sub} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
          </Select>
          <Button
            variant='contained'
            sx={{ backgroundColor: '#002366', color: '#fff' }}
            onClick={() => {
              /* Add logic to add category/subcategory */
            }}
          >
            Add Category/Subcategory
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h6'
            sx={{ color: '#DFC853', marginBottom: 1 }}
          >
            Links
          </Typography>
          {formData.links.map((link, index) => (
            <Grid container spacing={1} key={index}>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  label={
                    index === 0
                      ? 'LinkedIn'
                      : index === 1
                      ? 'Twitter'
                      : `Link ${index + 1}`
                  }
                  variant='outlined'
                  value={link}
                  onChange={(e) =>
                    handleLinkChange(index, e.target.value)
                  }
                  disabled={index < 2 ? !editing.links[index] : false} // Allow editing for LinkedIn and Twitter
                />
              </Grid>
              <Grid item xs={2}>
                {index < 2 && ( // Only show edit icon for LinkedIn and Twitter
                  <IconButton
                    onClick={() => handleLinkEditToggle(index)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
                {index >= 2 && ( // Only show delete icon for links beyond the first two
                  <IconButton onClick={() => handleDeleteLink(index)}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          <Button
            variant='contained'
            sx={{ backgroundColor: '#002366', color: '#fff' }}
            onClick={handleAddLink}
          >
            Add Another Link
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Member Since'
            variant='outlined'
            placeholder='dd/mm/yyyy'
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            sx={{ backgroundColor: '#002366', color: '#fff' }}
            onClick={handleSave}
          >
            Save Changes
          </Button>
          <Button
            variant='outlined'
            sx={{ marginLeft: 2 }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
