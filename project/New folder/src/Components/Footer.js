import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
      <footer  style={{ backgroundColor: '#093637', padding: '20px 0' }}>
        <Grid container justifyContent="space-around" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Grid item xs={12} sm={6} md={3}>
            <div  style={{ padding: '0 20px' }}>
              <Typography  sx={{ marginTop: '10px', color:'white' }}>
              Pustaka Digital Media publishes Indian regional language eBooks, audio books in Tamil, Telugu, Kannada, Malayalam and English.            </Typography>
            </div>
          </Grid>
          <Grid >
            <div style={{ padding: '0 20px' }}>
              <Typography variant="h6" sx={{color:'white'}}>Community</Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="#">How it works</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Press</Link></li>
                <li><Link href="#">Blogs</Link></li>
              </ul>
            </div>
          </Grid>
          <Grid >
            <div  style={{ padding: '0 20px' }}>
              <Typography variant="h6"sx={{color:'white'}}>EBook</Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="#">Plans</Link></li>
                <li><Link href="#">Android App</Link></li>
                <li><Link href="#">iOS App</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">SiteMap</Link></li>
              </ul>
            </div>
          </Grid>
          <Grid >
            <div  style={{ padding: '0 20px' }}>
              <Typography variant="h6" sx={{color:'white'}}>Policy</Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="#">Copyright and Disclaimer</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms and Conditions</Link></li>
                <li><Link href="#">Refund and Cancellation Policy</Link></li>
              </ul>
            </div>
          </Grid>
          <Grid >
            <InstagramIcon sx={{color:'white',gap:'10px'}}/>
            <TwitterIcon sx={{color:'white'}}/>
            <WhatsAppIcon sx={{color:'white'}}/>
          </Grid>
        </Grid>
      </footer>
    );
  };
export default Footer;
