import React from 'react';
import { NavLink } from 'react-router-dom';

class ScheduleTable extends React.Component {
    render() {
        return (
            <div style={{width: "80%", marginTop: "40px", marginLeft: "auto", marginRight: "auto"}}>
            <table>
              <thead>
                  <tr>
                    <th>Workshop #</th>
                    <th>Date + Location</th>
                    <th>Topic</th>
                    <th>Link to Workshop Notebook + Recording + Drill</th>
                    <th>Milestone Deadline + Link to Deliverable</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><text style={{ color: 'black' }}>1</text></td>
                    <td><text style={{ color: 'black' }}>February 7th, 2022 at College of Computing 017</text></td>
                    <td><text style={{ color: 'black' }}>Introduction to Bootcamp</text></td>
                    <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Workshop 1 </NavLink> 
                    <td><text style={{ color: 'black' }}>February 21st, <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Milestone 1</NavLink></text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>2</text></td>
                      <td><text style={{ color: 'black' }}>February 21st, 2022 at College of Computing 017</text></td>
                      <td><text style={{ color: 'black' }}>Exploratory Data Analysis</text></td>
                      <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Workshop 2 </NavLink> 
                      <td><text style={{ color: 'black' }}>March 7th, <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Milestone 2</NavLink></text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>3</text></td>
                    <td><text style={{ color: 'black' }}>March 7th, 2022 at College of Computing 017</text></td>
                    <td><text style={{ color: 'black' }}>Introductory Data Preprocessing</text></td>
                    <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Workshop 3 </NavLink> 
                    <td><text style={{ color: 'black' }}>March 28th, <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Milestone 3</NavLink></text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>4</text></td>
                      <td><text style={{ color: 'black' }}>March 28th, 2022 at College of Computing 017</text></td>
                      <td><text style={{ color: 'black' }}>Modeling with Machine Learning</text></td>
                      <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Workshop 4 </NavLink> 
                      <td><text style={{ color: 'black' }}>April 11th, <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Milestone 4</NavLink></text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>5</text></td>
                      <td><text style={{ color: 'black' }}>April 11th, 2022 at College of Computing 017</text></td>
                      <td><text style={{ color: 'black' }}>Introduction to Deep Learning</text></td>
                      <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Workshop 5 </NavLink> 
                      <td><text style={{ color: 'black' }}>April 25th, <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Milestone 5</NavLink></text></td>
                  </tr>
              </tbody>
            </table>
            </div>
        );
    }
}

export default ScheduleTable;
