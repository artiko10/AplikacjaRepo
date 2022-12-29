import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Slider.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';



function Sliders() {

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  
 
return (
    <>

<section class="slider-section">
  <div class="container">
    <div class="row">
      <div class="col-sm-8 offset-sm-2 my-5 p-2">
      <h1 class="font-weight-bold text-uppercase text-light title text-center">Slider</h1>
      </div>
    
    
   
      
    <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks text-light">
      <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>

      <h5 class="text-light my-5">1. Change range to 20</h5>
        
      <Box width={300}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      
    </Box>

    <h5 class="text-light my-5">2. Set volume to 80%</h5>
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      
    </Box>
            <h5 class="text-light my-5">3. Check if this slider is disabled</h5>
            <label for="disabledRange" class="form-label">Disabled range</label> 
            <br></br>
            <input type="range" class="form-range" id="disabledRange" disabled></input>
        
    </div></div>
    
    </div>
</div>   
</section>
</>
);
}
export default Sliders