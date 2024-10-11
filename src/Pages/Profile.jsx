// Pages/Profile.jsx

import React, { useState, useEffect } from 'react';
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
import { useParams } from 'react-router-dom'; // Import useParams

const Profile = () => {
  const { user_id } = useParams(); // Get user_id from URL parameters

  const [editing, setEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
    jobTitle: false,
    bio: false,
    goals: false,
    selectedCategory: '', // Remove this
    selectedSubcategory: '', // Remove this
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
    links: ['LinkedIn.com/', 'X.com/', ''], 
  });

  const [isEditing, setIsEditing] = useState(true); // Keep this as true to allow editing

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

  const handleSave = async () => {
    const API = import.meta.env.VITE_BASE_URL; // Get the base URL from environment variables
    console.log('Form Data:', formData); // Log the form data to check the email format
    console.log('User ID:', user_id);
    try {
      const response = await fetch(`${API}/users/${user_id}`, { // Use user_id to target the correct user
        method: 'PUT', // Use PUT method to update user data
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user_id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          job_title: formData.jobTitle,
          bio: formData.bio,
          goals: formData.goals,
          email: formData.email, // Ensure email is included in the request
          password_hash: formData.password_hash || '', // Add password_hash if required
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('User data updated successfully:', data);
        // Do not set isEditing to false to keep fields editable
      } else {
        console.error('Error updating user data:', data.error);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancel = () => {
    // Logic to reset form data if needed
    setIsEditing(false); // Disable editing on cancel
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const API = import.meta.env.VITE_BASE_URL;

      try {
        const response = await fetch(`${API}/users/${user_id}`); // Use user_id here
        const data = await response.json();
        if (response.ok) {
          // Prepopulate formData with fetched user data
          setFormData((prevData) => ({
            ...prevData,
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email,
            jobTitle: data.job_title,
            bio: data.bio || '', 
            goals: data.goals || '',
            memberSince: formatDate(data.signup_date), 
            links: data.links || prevData.links, 
          }));
        } else {
          console.error('Error fetching user data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user_id]); // Add user_id as a dependency

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
            disabled={!isEditing} // Allow editing based on overall state
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='Last Name'
            variant='outlined'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing} // Allow editing based on overall state
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            name='email'
            value={formData.email}
            onChange={handleChange}
            disabled // Make email field non-editable
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Job Title'
            variant='outlined'
            name='jobTitle'
            value={formData.jobTitle}
            onChange={handleChange}
            disabled={!isEditing}
          />
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
            disabled={!isEditing}
          />
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
            disabled={!isEditing}
          />
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
                  disabled={!isEditing} // Allow editing for all links based on overall state
                />
              </Grid>
              <Grid item xs={2}>
                {index >= 2 && (
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
            value={formData.memberSince}
            placeholder='dd/mm/yyyy'
            disabled
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