
import './style.css';
import '../sty.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Iv_report=()=>{
   const [report,setreport]=useState({

      "year_sem": "",
      "Total_class_strength":0,
      "Name_of_the_industry": "",
      "Industry_address": "" ,
      "Contact_person_industry": "",
      "Contact_number_industry": 0 ,
      "Name_of_the_industry2": "",
      "Industry_address2": "" ,
      "Contact_person_industry2": "",
      "Contact_number_industry2": 0,
      // "Faculty_Name": "",
      "Mode_of_transport":  "",
      "Name_of_the_travel": "" ,
      "Address":"" ,
      "Contact_no":0,
      "Name_of_the_travel2": "" ,
      "Address2":"" ,
      "Contact_no2":0,
      "Name_of_the_faculty_coordinator":"",
      "place_of_visit":"",
      "Date_of_leaving":"",
      "Leaving_time":"",
      "Day_1_Reaching_time":"",
      "Day_1_FN_time":"",
      "Day_1_FN_place":"",
      "Day_1_AN_time":"",
      "Day_1_AN_place":"",
      "Day_1_night_time":"",
      "Day_1_night_place":"",
      "Day_2_FN_time":"",
      "Day_2_FN_place":"",
      "Day_2_AN_time":"",
      "Day_2_AN_place":"",
      "Day_2_night_time":"",
      "Day_2_night_place":"",
      "Date_of_Arriving":"",
      "Time_of_Arriving":""
})

   const navigate=useNavigate()
   const handlechange=(e)=>{
      setreport((prev)=>({...prev,[e.target.name]:e.target.value}))
   }
   console.log(report)
const handleClick = async (e)=>{
   e.preventDefault()
   try{
      // alert(JSON.stringify(report))
      await axios.put("http://localhost:1234/iv/update/1",report)
      // alert(JSON.stringify(t.data.records))

      navigate("/")
   }catch (err) {
      console.log(err.response);  // Log the response for more details
      console.error(err);
  }
}

return(
   <>
   <div className='report-container' style={{justifyContent:'center',marginTop:"150px"}} >
   <div class="report-header">
    <h1 class="recent-Articles"> IV REPORT</h1>
    </div> 
    <div className="row justify-content-center"style={{justifyContent:'center'}}>
     

     <div className='form-group'>
        <label>Year/Semester</label>
        <input type='text' placeholder='Semester and Year' name='year_sem' onChange={handlechange}/>
        </div>

        <div className='form-group'>
        <label>Total Class Strength</label>
        <input type='number' placeholder=' Strength of the total Class' name='Total_class_strength' onChange={handlechange}/>
       </div>



       <div class="report-header">
    <h1 class="recent-Articles"> Visit Details</h1>
    </div> 

       <div className='form-group'>
        <label>Name of The Industry1</label>
        <input type='text' placeholder='Industry Name'name='Name_of_the_industry' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Address of the Industry1</label>
        <input type='text' placeholder='Industry Address' name='Industry_address' onChange={handlechange}/>
       </div>

        <div className='form-group'>
        <label>Contact Person of the Industry1</label>
        <input type='text' placeholder='Contact Person in the industry' name='Contact_person_industry' onChange={handlechange}/>
       </div>

       
         <div className='form-group'>
        <label>Contact Number of the Industry1</label>
        <input type='number' placeholder='Industry Contact Number' name='Contact_number_industry' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Name of The Industry2</label>
        <input type='text' placeholder='Industry Name_2'name='Name_of_the_industry2' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Address of the Industry2</label>
        <input type='text' placeholder='Industry Address' name='Industry_address2' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Contact Person of the Industry 2</label>
        <input type='text' placeholder='Contact Person in the industry' name='Contact_person_industry2' onChange={handlechange}/>
       </div>

         <div className='form-group'>
        <label>Contact Number of the Industry 2</label>
        <input type='number' placeholder='Industry Contact Number2' name='Contact_number_industry2' onChange={handlechange}/>
       </div>


        <div class="report-header">
    <h1 class="recent-Articles">FacultyAccompanied</h1>
    </div> 
         
         <div>
                <label>Faculty Name</label>
                <select>
                   <option value=""> Name of the Faculty</option>
                   <option value=""> Name of the Faculty</option>
                </select>
             </div>


 
          <div class="report-header">
    <h1 class="recent-Articles">Transport Details</h1>
    </div>

    <div className='form-group'>
        <label>Mode of Transport</label>
        <input type='text' placeholder='Mode of Transport' name='Mode_of_transport' onChange={handlechange}/>
       </div>


       <div className='form-group'>
        <label>Name of the Travels 1</label>
        <input type='text' placeholder='travel Name 1' name=' Name_of_the_travel' onChange={handlechange}/>
       </div>
    
      
       <div className='form-group'>
        <label>Address of the Travel 1</label>
        <input type='text' placeholder='Address of the Travel 1' name='Address' onChange={handlechange}/>
       </div>

          
       <div className='form-group'>
        <label>Contact of the Travel 1</label>
        <input type='number' placeholder='Contact of the travel 1' name='Contact_no' onChange={handlechange}/>
       </div>
       

        <div className='form-group'>
        <label>Name of the Travel 2</label>
        <input type='text' placeholder='travel Name 1' name='Name_of_the_travel2' onChange={handlechange}/>
       </div>
    
      
       <div className='form-group'>
        <label>Address of the Travel 2</label>
        <input type='text' placeholder='Address of the Travel 2' name='Address2' onChange={handlechange}/>
       </div>

          
       <div className='form-group'>
        <label>Contact of the Travel 2</label>
        <input type='number' placeholder='Contact of the travel 2' name='Contact_no2' onChange={handlechange}/>
       </div>
{/*        
       
        <div className='form-group'>
        <label>Name of the Travel 3</label>
        <input type='text' placeholder='travel Name 1'/>
       </div>
    
      
       <div className='form-group'>
        <label>Address of the Travel 3</label>
        <input type='text' placeholder='Address of the Travel 1'/>
       </div>

          
       <div className='form-group'>
        <label>Contact of the Travel 3</label>
        <input type='number' placeholder='Contact of the travel 2'/>
       </div> */}
              
             <div className='form-group'>
                <label>No of Students Visited (List)</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Visit/Tour Approval Form</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Letter to the Company For Permission</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Permission Letter from The Company</label>
                <input type='file' onCanPlay={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Bus Permit Copy</label>
                <input type='file' onChange={handlechange}/>
             </div>
  
             
             <div className='form-group'>
                <label>Undertaking by Parents</label>
                <input type='file' onChange={handlechange}/>
             </div>
             <div className='form-group'>
                <label>Undertaking by Students (Sample 1)</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Undertaking by Students (Sample 2)</label>
                <input type='file' onChange={handlechange}/>
             </div>
               

               <div className='form-group'>
                <label>Boarding and Lodging Arrangement Details</label>
                <input type='file' onChange={handlechange}/>
             </div>


           
             <div className='form-group'>
                <label>About Industry</label>
                <input type='file' onChange={handlechange}/>
             </div>
     
              <div className='form-group'>
                <label>Feedback from Students</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 1</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 2</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 3</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 4</label>
                <input type='file' onChange={handlechange}/>
             </div>
            
            <div className='form-group'>
                <label>photo 5</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div class="report-header">
    <h1 class="recent-Articles">whereabouts</h1>
    </div> 

    

       <div className='form-group'>
        <label>Name of the Faculty Coordinator</label>
        <input type='text' placeholder='Faculty Coordinator Name' name='Name_of_the_faculty_coordinator' onChange={handlechange}/>
       </div>
     
       


       <div className='form-group'>
        <label>Place of Visit</label>
        <input type='text' placeholder='Visited Place' name='place_of_visit' onChange={handlechange}/>
       </div>

   


       <div className='form-group'>
        <label>Date of Leaving from College</label>
        <input type='date' placeholder='Leaving Date' name='Date_of_leaving' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Time of Leaving from College</label>
        <input type='time' placeholder='Leaving Time' name='Leaving_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Reaching Time</label>
        <input type='time' placeholder='Reaching Time' name='Day_1_Reaching_time' onChange={handlechange}/>
       </div>

       

       <div class="report-header">
    <h1 class="recent-Articles">Day 1</h1>
    </div>

    <h2>FN</h2>
      
       <div className='form-group'>
        <label>Time</label>
        <input type='time' placeholder='FN Time' name='Day_1_FN_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='FN Whereabout' name='Day_1_FN_place' onChange={handlechange}/>
       </div>
 
       <h2>AN</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='AN Time' name='Day_1_AN_time' onChange={handlechange}/>
        <label >whereabouts</label>
        <input type='text' placeholder='AN Whereabout' name='Day_1_AN_place' onChange={handlechange} />
       </div>    
   
       <h2>Night</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='Night Time' name='Day_1_night_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='Night Whereabout' name=' Day_1_night_place' onChange={handlechange}/>
       </div>

       <div class="report-header">
    <h1 class="recent-Articles">Day 2</h1>
    </div>

    <h2>FN</h2>
      
       <div className='form-group'>
        <label>Time</label>
        <input type='time' placeholder='FN Time' name='Day_2_FN_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='FN Whereabout' name='Day_2_FN_place' onChange={handlechange}/>
       </div>
 
       <h2>AN</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='AN Time' name='Day_2_AN_time' onChange={handlechange}/>
        <label >whereabouts</label>
        <input type='text' placeholder='AN Whereabout' name='Day_2_AN_place' onChange={handlechange} />
       </div>


       <h2>Night</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='Night Time' name='Day_2_Night_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='Night Whereabout'name='Day_2_Night_place' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Time of Arriving</label>
        <input type='Time' placeholder='Arriving Time' name='Time_of_Arriving' onChange={handlechange}/>
       </div>
      
       <div className='form-group'>
        <label>Date of Arriving  College</label>
        <input type='date' placeholder='date of arriving' name='Date_of_Arriving' onChange={handlechange}/>
       </div>
       
    </div>

    <h1 style={{color:'red',}}></h1>
      <div className='row mt-5 justify-content-around'>
      <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
        <button onClick={handleClick} value="" className='col-3 btn btn-primary' >Submit</button>
      </div> 
</div>
   </>
)
}

export default Iv_report;