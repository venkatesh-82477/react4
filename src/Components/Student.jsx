import React from 'react'

export default function Student() {
  return (
    <>
    <div id='flex'>
      <h2 style={{paddingLeft:'10px'}}>Students Details</h2>
      <button id='btn1'>Add new student</button>
    </div>
    <br>
    </br>
    <center>
    <table>
      <tr>
      <td style={{padding: '10px 10px'}}>Name</td>
      <td style={{padding: '10px 150px'}}>Age</td>
      <td>Course</td>
      <td>Batch</td>
      <td style={{padding: '10px 100px'}}>Change</td>
      </tr>
      <tr>
      <td style={{padding: '10px 10px'}}>John</td>
      <td style={{padding: '10px 150px'}}>23</td>
      <td>MERN</td>
      <td>June</td>
      <td style={{padding: '10px 100px'}}><a href="/">Edit</a></td>
      </tr>
      <tr>
      <td style={{padding: '10px 10px'}}>Doe</td>
      <td style={{padding: '10px 150px'}}>25</td>
      <td>MERN</td>
      <td>July</td>
      <td style={{padding: '10px 100px'}}><a href="/">Edit</a></td>
      </tr>
      <tr>
      <td style={{padding: '10px 10px'}}>Biden</td>
      <td style={{padding: '10px 150px'}}>24</td>
      <td>MERN</td>
      <td>October</td>
      <td style={{padding: '10px 100px'}}><a href="/">Edit</a></td>
      </tr>
      <tr>
      <td style={{padding: '10px 10px'}}>Barar</td>
      <td style={{padding: '10px 150px'}}>24</td>
      <td>MERN</td>
      <td>October</td>
      <td style={{padding: '10px 100px'}}><a href="/">Edit</a></td>
      </tr>
    </table>
    </center>
    </>
  )
}
