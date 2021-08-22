import React from 'react';
import ScheduleTable from "./ScheduleTable";

class ResourceTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Resource #</th>
                    <th>Topic</th>
                    <th>Prerequisite Knowledge</th>
                    <th>Link to Resource</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>TBD</td>
                    <td>Introduction to Python + Intro to Bootcamp Project</td>
                    <td>Stay Tuned!</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>TBD</td>
                    <td>Introduction to Pandas + Exploratory Data Analysis</td>
                    <td>Stay Tuned!</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>TBD</td>
                    <td>Introductory Data Preprocessing</td>
                    <td>Stay Tuned!</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>TBD</td>
                    <td>Introduction to Machine Learning</td>
                    <td>Stay Tuned</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>TBD</td>
                    <td>TBD</td>
                    <td>Stay Tuned!</td>
                </tr>
                </tbody>
            </table>

        );
    }
}
export default ResourceTable;
