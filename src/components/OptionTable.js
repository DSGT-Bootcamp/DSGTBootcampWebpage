import React from 'react';

class OptionTable extends React.Component {
    render() {
        return (
            <div style={{width: "80%", marginTop: "40px", marginLeft: "auto", marginRight: "auto"}}>
            <table>
              <thead>
                  <tr>
                    <th>In-Person Bootcamp</th>
                    <th>Udemy</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><text style={{ color: 'black' }}>Biweekly workshops in-person (times and location TBA) and weekly mentor meetings. <b>Attendance of workshops and mentor meetings required.</b>
</text></td>
                    <td><text style={{ color: 'black' }}>Self-Paced</text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>Project component guided by team mentor</text></td>
                    <td><text style={{ color: 'black' }}>No guided project component (you’re welcome to meet other students through our Udemy Slack and start a project of your own!)</text></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>Covers introductory data science skills</text></td>
                    <td><text style={{ color: 'black' }}>Covers introductory data science skills</text></td>
                    
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>Member of DSGT in-person bootcamp community via Discord </text></td>
                    <td><text style={{ color: 'black' }}>Member of DSGT bootcamp Udemy community via Udemy Slack workspace </text></td>
                      
                  </tr>
              </tbody>
            </table>
            </div>
        );
    }
}

export default OptionTable;
