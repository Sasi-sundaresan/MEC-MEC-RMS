import './style.css';
import '../sty.css'

// const Addmenu=()=>{
//     return(
//         <>
//         <div class="button-iv">
//         <a href="/ivproposal">
//             <button class="menu-buttons" data-category="iv_proposal">+ADD</button></a>
//         </div>
//         <Infos/>

//         </>
//     )
// }


export const Infos=()=>{
    return(
        <>
         <div class="overallcontent">
         <div class="report-header">
         <h1 class="recent-Articles">Your Reports</h1>
         <a href="/ivproposal">
            <button class="menu-buttons" data-category="iv_proposal">+ADD</button>
            </a>

            <a href="/iv_report">
            
            <button class="menu-buttons" data-category="iv_report">Create </button></a>
         </div>
         <table className='table table-striped '>
          <thead>
          <tr>
          <th>Academic Year</th>
                            <th>Semester</th>
                            <th>Department</th>
                            <th>Name of the Student</th>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Section</th>
                            <th>Online Certification</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Details of the Organisation</th>
                            <th>Awards and Recognitions</th>
                            <th>Outcome of the Activity</th>
                            <th>Attachements</th>
                          
          </tr>
          </thead>
         </table>
         </div>

                      
        </>
    )
}

// export default Addmenu
