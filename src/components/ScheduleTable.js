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
                    <td>1</td>
                    <td>TBD</td>
                    <td>Introduction to Python + Intro to Bootcamp Project</td>
                    <td>Stay Tuned!</td>
                    <td>Stay Tuned!</td>
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