import React from 'react';

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
                    <td><text style={{ color: 'black' }}></text></td>
                    <td><text style={{ color: 'black' }}></text></td>
                    <td><text style={{ color: 'black' }}></text></td>
                    <td><text style={{ color: 'black' }}></text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>2</text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>3</text></td>
                    <td><text style={{ color: 'black' }}></text></td>
                    <td><text style={{ color: 'black' }}></text></td>
                    <td><text style={{ color: 'black' }}></text></td>
                    <td><text style={{ color: 'black' }}></text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>4</text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>5</text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                      <td><text style={{ color: 'black' }}></text></td>
                  </tr>
              </tbody>
            </table>
            </div>
        );
    }
}

export default ScheduleTable;
