import React from 'react';

class ScheduleTable extends React.Component {
    render() {
        return (
            <table>
              <thead>
                  <tr>
                    <th>Workshop #</th>
                    <th>Date + Location</th>
                    <th>Topic</th>
                    <th>Link to Workshop Notebook + Recording</th>
                    <th>Milestone Deadline + Link to Deliverable</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><text style={{ color: 'red' }}>1</text></td>
                    <td><text style={{ color: 'red' }}>September 13th 2021 6:30 pm - 7:30 pm EDT @ COC 017</text></td>
                    <td><text style={{ color: 'red' }}>Introduction to Python + Intro to Bootcamp Project</text></td>
                    <td><text style={{ color: 'red' }}>See Discord!</text></td>
                    <td><text style={{ color: 'red' }}>September 26th, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>2</text></td>
                      <td><text style={{ color: 'black' }}>September 27th 2021 6:30 pm - 7:30 pm EDT @ COC 017</text></td>
                      <td><text style={{ color: 'black' }}>Introduction to Pandas + Exploratory Data Analysis</text></td>
                      <td><text style={{ color: 'black' }}>Stay Tuned!</text></td>
                      <td><text style={{ color: 'black' }}>October 10th, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>3</text></td>
                    <td><text style={{ color: 'black' }}>October 11th, 2021 6:30 pm - 7:30 pm EDT @ COC 017</text></td>
                    <td><text style={{ color: 'black' }}>Introductory Data Preprocessing</text></td>
                      <td><text style={{color: 'black' }}>Stay Tuned!</text></td>
                    <td><text style={{ color: 'black' }}>October 24th, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>4</text></td>
                      <td><text style={{ color: 'black' }}>October 25th, 2021 6:30 pm - 7:30 pm EDT @ COC 017</text></td>
                      <td><text style={{ color: 'black' }}>Introduction to Machine Learning</text></td>
                      <td><text style={{ color: 'black' }}>Stay Tuned!</text></td>
                      <td><text style={{ color: 'black' }}>November 7th, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>5</text></td>
                      <td><text style={{ color: 'black' }}>November 8th, 2021 6:30 pm - 7:30 pm EDT @ COC 017</text></td>
                      <td><text style={{ color: 'black' }}>TBD</text></td>
                      <td><text style={{ color: 'black' }}>Stay Tuned!</text></td>
                      <td><text style={{ color: 'black' }}>November 21st, 2021 11:59pm EDT</text></td>
                  </tr>
              </tbody>
            </table>
        );
    }
}

export default ScheduleTable;
