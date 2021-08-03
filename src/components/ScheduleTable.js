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
                    <td>Paul</td>
                    <td>Murana</td>
                    <td>Power Automate Developer</td>
                    <td>No</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Micheal</td>
                    <td>Knight</td>
                    <td>Lone Ranger</td>
                    <td>Yes</td>
                    <td>1986-04-04</td>
                  </tr>
                  <tr>
                    <td>Peter</td>
                    <td>Venkman</td>
                    <td>Ghost Hunter</td>
                    <td>No</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>Rambo</td>
                    <td>Mercenary</td>
                    <td>No</td>
                    <td></td>
                  </tr>
                  <tr>
                      <td> Bob</td>
                      <td> McBob</td>
                      <td>Fighter</td>
                      <td> Yes</td>
                      <td> </td>
                  </tr>
              </tbody>
            </table>

        );
    }
}

export default ScheduleTable;