import React from 'react';

class ScheduleTable extends React.Component {
    render() {
        return (
            <table>
              <thead>
                  <tr>
                    <th>Workshop #</th>
                    <th>Date</th>
                    <th>Topic</th>
                    <th>Link to Workshop Notebook + Recording</th>
                    <th>Milestone Deadline + Link to Deliverable</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><text style={{ color: 'red' }}>1</text></td>
                    <td><text style={{ color: 'red' }}>September 13th 2021 6pm - 7pm EDT</text></td>
                    <td><text style={{ color: 'red' }}>Introduction to Python + Intro to Bootcamp Project</text></td>
                    <td><text style={{ color: 'red' }}>Stay Tuned!</text></td>
                    <td><text style={{ color: 'red' }}>Stay Tuned!</text></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>TBD</td>
                    <td>Introduction to Pandas + Exploratory Data Analysis</td>
                    <td>Stay Tuned!</td>
                    <td>Stay Tuned!</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>TBD</td>
                    <td>Introductory Data Preprocessing</td>
                    <td>Stay Tuned!</td>
                    <td>Stay Tuned!</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>TBD</td>
                    <td>Introduction to Machine Learning</td>
                    <td>Stay Tuned</td>
                    <td>Stay Tuned</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>TBD</td>
                      <td>TBD</td>
                      <td>Stay Tuned!</td>
                      <td>Stay Tuned!</td>
                  </tr>
              </tbody>
            </table>

        );
    }
}

export default ScheduleTable;