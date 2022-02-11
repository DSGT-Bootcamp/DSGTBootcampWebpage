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
                    <td><text style={{ color: 'black' }}>February 7th, 2022 at Ford ES&T L1175</text></td>
                    <td><text style={{ color: 'black' }}>Introduction and Environment Setup</text></td>
                    <td><a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1iRbUkeACk5AxodY29TQQBfZMlzBC19Zq?usp=sharing">Notebook&emsp;&emsp;&emsp;</a>
                        <a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1JQWC-m1OGS9C0sEcbLnf7ARvMjMZ7RbD?usp=sharing">&emsp;&emsp;&emsp;Drill</a></td>
                    <td><a target="_blank" rel = "noreferrer" href="https://docs.google.com/document/d/1uJEqO3ddFWRS80BvmvzrODvJYsiYPiHOQgYF5IjVs_M/">February 20th, 2022</a></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>2</text></td>
                      <td><text style={{ color: 'black' }}>February 21st, 2022 at TBA</text></td>
                      <td><text style={{ color: 'black' }}>Exploratory Data Analysis</text></td>
                      <td><a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/13oP0lzMM4IiiDIDb7RHHXonTdJFAsS0u?usp=sharing">Notebook&emsp;&emsp;&emsp;</a>
                        <a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1qes9nv_Gn2TTvqtN78cZYklj04-NM9bS?usp=sharing">&emsp;&emsp;&emsp;Drill</a></td>
                      <td><a target="_blank" rel = "noreferrer" href="https://docs.google.com/document/d/1J0M8ZEgrgHk467SmtCTAzW6x2HHLRnkB8lWV3H-gFNQ/">March 6th, 2022</a></td>
                  </tr>
                  <tr>
                    <td><text style={{ color: 'black' }}>3</text></td>
                    <td><text style={{ color: 'black' }}>March 7th, 2022 at TBA</text></td>
                    <td><text style={{ color: 'black' }}>Introductory Data Preprocessing</text></td>
                    <td><a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1vXISdy85yHo6rkmrHZ1rCZOnmiHwzpuo?usp=sharing">Notebook&emsp;&emsp;&emsp;</a>
                        <a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1klCIN9cx_9ggdY3NYPokISfuh7DO9tts?usp=sharing">&emsp;&emsp;&emsp;Drill</a></td>
                    <td><a target="_blank" rel = "noreferrer" href="https://docs.google.com/document/d/16EYHqj5g1PR5YS_fleeXmg4acHPtDLGI7j3vv7ifec8/">March 27th, 2022</a></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>4</text></td>
                      <td><text style={{ color: 'black' }}>March 28th, 2022 at TBA</text></td>
                      <td><text style={{ color: 'black' }}>Modeling with Machine Learning</text></td>
                      <td><a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1CCYdhAOUxzeB63fR9lz8ZbeoVS6_R4Ic?usp=sharing">Notebook&emsp;&emsp;&emsp;</a>
                        <a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1MSh93SV_JyqSl2G6c24a0p1PN4kEimbx?usp=sharing">&emsp;&emsp;&emsp;Drill</a></td>
                      <td><a target="_blank" rel = "noreferrer" href="https://docs.google.com/document/d/1jnCDKxo1qrYtyxxFE50RRgRmzzuPf5EoHy3TkC3T09U/">April 10th, 2022</a></td>
                  </tr>
                  <tr>
                      <td><text style={{ color: 'black' }}>5</text></td>
                      <td><text style={{ color: 'black' }}>April 11th, 2022 at TBA</text></td>
                      <td><text style={{ color: 'black' }}>Introduction to Deep Learning</text></td>
                      <td><a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1SfizHip9Cj_i5VWB9H6ITgX-nNwvXtTX?usp=sharing">Notebook&emsp;&emsp;&emsp;</a>
                        <a target="_blank" rel = "noreferrer" href="https://colab.research.google.com/drive/1qes9nv_Gn2TTvqtN78cZYklj04-NM9bS?usp=sharing">&emsp;&emsp;&emsp;Drill</a></td>
                      <td><a target="_blank" rel = "noreferrer" href="https://docs.google.com/document/d/18JjKsCAcYqN2BdVx7dRWLa2wdw_fQiz7JIfrPW6SYLU/">April 24th, 2022</a></td>
                  </tr>
              </tbody>
            </table>
            </div>
        );
    }
}

export default ScheduleTable;
