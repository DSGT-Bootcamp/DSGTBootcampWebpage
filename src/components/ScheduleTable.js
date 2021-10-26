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
                    <th>Link to Workshop Notebook + Recording + Drill</th>
                    <th>Milestone Deadline + Link to Deliverable</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><text style={{ color: 'red' }}>1</text></td>
                    <td><text style={{ color: 'red' }}>September 13th 2021 6:30 pm - 7:30 pm EDT @ COC 017</text></td>
                    <td><text style={{ color: 'red' }}>Introduction to Python + Intro to Bootcamp Project</text></td>
                    <td><a href = "https://colab.research.google.com/drive/1KGBoGInffse24QAsq-tkeomokL1tfgdS"><text style={{ color: 'red' }}>Colab Notebook</text></a><a href = " https://drive.google.com/file/d/1ELdCTK0sXlFpAITf8TqSfLpC-jl9v8cv/view"><text style={{ color: 'red' }}>, Recording</text></a>
                    <a href = "https://colab.research.google.com/drive/1ZSALyFdGv0izBhUc53hlHmC757PqWxCI"><text style={{ color: 'red' }}>, Drill</text></a></td>
                    <td><text style={{ color: 'red' }}>September 26th, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'red' }}>2</text></td>
                      <td><text style={{ color: 'red' }}>September 27th 2021 6:30 pm - 7:30 pm EDT</text></td>
                      <td><text style={{ color: 'red' }}>Introduction to Pandas + Exploratory Data Analysis</text></td>
                      <td><a href = "https://colab.research.google.com/drive/1EJwP03qsA2nFroKm8w2e3ddNrMYhI0qV"><text style={{ color: 'red' }}>Colab Notebook</text></a><a href = " https://drive.google.com/file/d/1tAmCUWcy_MwSPHiIgCffCdHCbEwGLvnF/view?usp=sharing"><text style={{ color: 'red' }}>, Recording</text></a>
                      <a href = "https://colab.research.google.com/drive/17hH8jnZ4T4VvFBQfQXfLnF7pvLguAXcP"><text style={{ color: 'red' }}>, Drill</text></a></td>
                      <td><text style={{ color: 'red' }}>October 17th, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>3</text></td>
                    <td><text style={{ color: 'black' }}>October 18th, 2021 6:30 pm - 7:30 pm EDT</text></td>
                    <td><text style={{ color: 'black' }}>Introductory Data Preprocessing</text></td>
                    <td><a href = "https://colab.research.google.com/drive/1staY1X8os3M0FJ-ydvP-eCJyqiKV4Q9n?usp=sharing"><text style={{ color: 'red' }}>Colab Notebook</text></a><a href = " https://drive.google.com/file/d/1mUgFVub0ZdEDHpkVZMDJqS8eloY_nm3f/view?usp=sharing"><text style={{ color: 'red' }}>, Recording</text></a>
                    <a href = "https://colab.research.google.com/drive/1A1s-uMPjym1Ybwg994ot1uxDcT6dnd-Y?usp=sharing"><text style={{ color: 'red' }}>, Drill</text></a></td>
                    <td><text style={{ color: 'black' }}>October 31st, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>4</text></td>
                      <td><text style={{ color: 'black' }}>November 1st, 2021 6:30 pm - 7:30 pm EDT</text></td>
                      <td><text style={{ color: 'black' }}>Introduction to Machine Learning</text></td>
                      <td><text style={{ color: 'black' }}>Stay Tuned!</text></td>
                      <td><text style={{ color: 'black' }}>November 14th, 2021 11:59pm EDT</text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>5</text></td>
                      <td><text style={{ color: 'black' }}>November 15th, 2021 6:30 pm - 7:30 pm EDT</text></td>
                      <td><text style={{ color: 'black' }}>TBD</text></td>
                      <td><text style={{ color: 'black' }}>Stay Tuned!</text></td>
                      <td><text style={{ color: 'black' }}>November 28th, 2021 11:59pm EDT</text></td>
                  </tr>
              </tbody>
            </table>
        );
    }
}

export default ScheduleTable;
