// mvp-frontend/src/Components/Testimonials.jsx

import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]); // Initialize with empty array

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/testimonials`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTestimonials(data); // Set the fetched testimonials to state
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Fallback testimonials can be set here if needed
      }
    };
    fetchTestimonials();
  }, []); // Empty dependency array means this runs once on mount

  const scroll = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      direction === 'right' &&
      currentIndex < testimonials.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        position: 'relative',
        zIndex: 0,
      }}
    >
      <Button
        onClick={() => scroll('left')}
        variant='text'
        disabled={currentIndex === 0}
        sx={{
          marginRight: 2,
          minWidth: 'auto',
          color: 'black',
          position: 'absolute',
          left: '10%', // Adjust position as needed
          zIndex: 1,
          '&:hover': { backgroundColor: 'transparent' },
        }}
      >
        &lt;
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px', // Full width for centering
          overflow: 'hidden', // Hide overflow
          position: 'relative',
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            transition: 'transform 0.3s ease',
            transform: `translateX(-${currentIndex * 100}%)`, // Center the current testimonial
            width: '100%', // Full width for centering
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                flex: '0 0 100%',
                maxWidth: '80%',
                margin: '0 7%',
                padding: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant='h5'
                  component='div'
                  sx={{ whiteSpace: 'normal' }}
                >
                  {testimonial.category_name} {/* Display category name */}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ whiteSpace: 'normal' }}
                >
                  Mentor ID: {testimonial.mentor_id} {/* Display mentor ID */}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ whiteSpace: 'normal' }}
                >
                  Mentee ID: {testimonial.mentee_id} {/* Display mentee ID */}
                </Typography>
                <Typography
                  variant='h6'
                  component='div'
                  sx={{ marginTop: 1, whiteSpace: 'normal' }}
                >
                  Review Title {/* You can replace this with the actual review title if available */}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ marginTop: 1, whiteSpace: 'normal' }}
                >
                  {testimonial.body}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ marginTop: 1, whiteSpace: 'normal' }}
                >
                  Reviewer ID: {testimonial.reviewer_id} {/* Display reviewer ID */}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <Button
        onClick={() => scroll('right')}
        variant='text'
        disabled={currentIndex === testimonials.length - 1}
        sx={{
          marginLeft: 2,
          minWidth: 'auto',
          color: 'black',
          position: 'absolute',
          right: '10%', // Adjust position as needed
          zIndex: 1,
          '&:hover': { backgroundColor: 'transparent' },
        }}
      >
        &gt;
      </Button>
    </Box>
  );
};

export default Testimonials;