const express = require("express")
const route = express.Router()
const base = require("./db")
// const cors=require('cors')



//get mapping
//async - multiple interactions
route.get('/listAll',async(req,res)=>{
    const sql = "select * from iv_report"
    base.query(sql,(err,records)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        if(records.length==0){
            res.status(201).json({"error":"No records found"})  
        }
        res.status(200).json({records})
    })
})

//post mapping
route.post('/insert',async(req,res)=>{
    const {Details_of_the_industry_with_address,Date_of_visit,Name,Designation_for_industryperson,Mobile_No, Mail_id,Name_of_the_Inn,Address_lodging_planned,  Phone_no ,No_of_students_visited,No_of_Faculty_visited,Name_of_travels, Registration_no_1,Registration_no_2, Registration_no_3, Name_of_the_operator_1 , Name_of_the_operator_2 ,  Name_of_the_operator_3 ,  Operator_contact_no_1 ,  Operator_contact_no_2 ,Operator_contact_no_3 ,Faculty_name,designation ,Faculty_Mobile_no , undertaking_parents_collected_for_students} = req.body
    const sql = "insert into iv_report (Details_of_the_industry_with_address,Date_of_visit,Name,Designation_for_industryperson,Mobile_No, Mail_id,Name_of_the_Inn,Address_lodging_planned,  Phone_no ,No_of_Students_visited,No_of_Faculty_visited,  Name_of_travels, Registration_no_1,Registration_no_2,Registration_no_3,Name_of_the_operator_1 , Name_of_the_operator_2 ,Name_of_the_operator_3 , Operator_contact_no_1 , Operator_contact_no_2 ,Operator_contact_no_3 ,Faculty_name,designation ,Faculty_Mobile_no , undertaking_parents_collected_for_students )values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    //update mec_students set DOB=?, Age=? where id=?
    base.query(sql,[Details_of_the_industry_with_address,
    Date_of_visit,
     Name ,
    Designation_for_industryperson  ,
    Mobile_No ,
    Mail_id  ,
    Name_of_the_Inn ,
    Address_lodging_planned,
    Phone_no ,
    No_of_students_visited,
    No_of_Faculty_visited  ,
    Name_of_travels,
    Registration_no_1,
    Registration_no_2,
    Registration_no_3,
    Name_of_the_operator_1 ,
    Name_of_the_operator_2 ,
    Name_of_the_operator_3 ,
    Operator_contact_no_1 ,
    Operator_contact_no_2 ,
    Operator_contact_no_3 ,
    Faculty_name ,
    designation ,
    Faculty_Mobile_no  ,
    undertaking_parents_collected_for_students],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).json({"error":err.message})
            return
        }
        res.status(200).json({"message":result.affectedRows})
    })
})




//get mapping
//async - multiple interactions
route.get('/ivtour',async(req,res)=>{
    const sql = "select * from iv_report"
    base.query(sql,(err,records)=>{
        if(err){
            res.status(500).json({"error":err.message})
            return
        }
        else if(records.length==0){
            res.status(201).json({"error":"No records found"})
            return
        }
        res.status(200).json({records})
    })
})


// route.post('/report',async(req,res)=>{
//     const {date_of_visit,year,Total_class_strength,No_of_students_visited,s_no_industry_details,Name_of_the_industry,Industry_address,Contact_person_industry,Contact_number_industry,Name_of_the_industry2,Industry_address2,Contact_person_industry2,Contact_number_industry2,Mode_of_transport,Name_of_the_travel,Address,Contact_no, Name_of_the_travel2 ,Address2,Contact_no2,iv_students_year,Name_of_the_faculty_coordinator,Date_of_visit_IV,place_of_visit,No_of_students_visited_in_Iv,No_of_accompanying_faculty,Date_of_leaving,Leaving_time,Day_1_Reaching_time,Day_1_FN_time,Day_1_FN_place,Day_1_AN_time,Day_1_AN_place,Day_1_night_time,Day_1_night_place,Day_2_FN_time,Day_2_FN_place,Day_2_AN_time,Day_2_AN_place,Day_2_night_time,Day_2_night_place,Date_of_Arriving,Time_of_Arriving} = req.body
//     const sql = "insert into iv_report (date_of_visit,year,Total_class_strength,No_of_students_visited,s_no_industry_details,Name_of_the_industry,Industry_address,Contact_person_industry,Contact_number_industry,Name_of_the_industry2,Industry_address2,Contact_person_industry2,Contact_number_industry2,Mode_of_transport,Name_of_the_travel,Address,Contact_no,Name_of_the_travel2 ,Address2,Contact_no2,iv_students_year,Name_of_the_faculty_coordinator,Date_of_visit_IV,place_of_visit,No_of_students_visited_in_Iv,No_of_accompanying_faculty,Date_of_leaving,Leaving_time,Day_1_Reaching_time,Day_1_FN_time,Day_1_FN_place,Day_1_AN_time,Day_1_AN_place,Day_1_night_time,Day_1_night_place,Day_2_FN_time,Day_2_FN_place,Day_2_AN_time,Day_2_AN_place,Day_2_night_time,Day_2_night_place,Date_of_Arriving,Time_of_Arriving) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
   
//     base.query(sql,[
//         date_of_visit,
//         year,
//         Total_class_strength,
//         No_of_students_visited,
//         s_no_industry_details,
//         Name_of_the_industry,
//         Industry_address,
//         Contact_person_industry,
//         Contact_number_industry,
//         Name_of_the_industry2 ,
//         Industry_address2,
//         Contact_person_industry2 ,
//         Contact_number_industry2 ,
//         Mode_of_transport,
//         Name_of_the_travel,
//         Address,
//         Contact_no,
//         Name_of_the_travel2 ,
//         Address2,
//         Contact_no2,
//         iv_students_year,
//         Name_of_the_faculty_coordinator,
//         Date_of_visit_IV,
//         place_of_visit,
//         No_of_students_visited_in_Iv,
//         No_of_accompanying_faculty,
//         Date_of_leaving,
//         Leaving_time,
//         Day_1_Reaching_time,
//         Day_1_FN_time,
//         Day_1_FN_place,
//         Day_1_AN_time,
//         Day_1_AN_place,
//         Day_1_night_time,
//         Day_1_night_place,
//         Day_2_FN_time,
//         Day_2_FN_place,
//         Day_2_AN_time,
//         Day_2_AN_place,
//         Day_2_night_time,
//         Day_2_night_place,
//         Date_of_Arriving,
//         Time_of_Arriving],(err,result)=>{
//         if(err){
//             res.status(500).json({"error":err.message})
//             console.log(err.message)
//             return
//         }
//         res.status(200).json({"message":result.affectedRows})
//     })
// })





//put mapping
route.put('/update/:s_no',async(req,res)=>{
    // const sno = req.params.s_no
    const {
         year_sem,Total_class_strength,Name_of_the_industry,Industry_address,Contact_person_industry,Contact_number_industry,Name_of_the_industry2 ,Industry_address2,Contact_person_industry2 ,Contact_number_industry2 ,Mode_of_transport,Name_of_the_travel,Address,Contact_no,Name_of_the_travel2 ,Address2,Contact_no2,Name_of_the_faculty_coordinator,
        place_of_visit,
        Date_of_leaving,
        Leaving_time,
        Day_1_Reaching_time,
        Day_1_FN_time,
        Day_1_FN_place,
        Day_1_AN_time,
        Day_1_AN_place,
        Day_1_night_time,
        Day_1_night_place,
        Day_2_FN_time,
        Day_2_FN_place,
        Day_2_AN_time,
        Day_2_AN_place,
        Day_2_night_time,
        Day_2_night_place,
        Date_of_Arriving,
        Time_of_Arriving} = req.body
    const sql = "update iv_report set year_sem=?,Total_class_strength=?,Name_of_the_industry=?,Industry_address=?,Contact_person_industry=?,Contact_number_industry=?,Name_of_the_industry2=?,Industry_address2=?,Contact_person_industry2=?,Contact_number_industry2=?,Mode_of_transport=?,Name_of_the_travel=?,Address=?,Contact_no=?,Name_of_the_travel2=? ,Address2=?,Contact_no2=?,Name_of_the_faculty_coordinator=?,place_of_visit=?,Date_of_leaving=?,Leaving_time=?,Day_1_Reaching_time=?,Day_1_FN_time=?,Day_1_FN_place=?,Day_1_AN_time=?,Day_1_AN_place=?,Day_1_night_time=?,Day_1_night_place=?,Day_2_FN_time=?,Day_2_FN_place=?,Day_2_AN_time=?,Day_2_AN_place=?,Day_2_night_time=?,Day_2_night_place=?,Date_of_Arriving=?,Time_of_Arriving=?  where s_no=?"
    base.query(sql,[
        year_sem,
        Total_class_strength,
        Name_of_the_industry,
        Industry_address,
        Contact_person_industry,
        Contact_number_industry,
        Name_of_the_industry2 ,
        Industry_address2,
        Contact_person_industry2 ,
        Contact_number_industry2 ,
        Mode_of_transport,
        Name_of_the_travel,
        Address,
        Contact_no,
        Name_of_the_travel2 ,
        Address2,
        Contact_no2,
        Name_of_the_faculty_coordinator,
        place_of_visit,
        Date_of_leaving,
        Leaving_time,
        Day_1_Reaching_time,
        Day_1_FN_time,
        Day_1_FN_place,
        Day_1_AN_time,
        Day_1_AN_place,
        Day_1_night_time,
        Day_1_night_place,
        Day_2_FN_time,
        Day_2_FN_place,
        Day_2_AN_time,
        Day_2_AN_place,
        Day_2_night_time,
        Day_2_night_place,
        Date_of_Arriving,
        Time_of_Arriving,req.params.s_no],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
            return
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

//delete mapping



module.exports=route
/*-------------------------------------------------------------------------*/