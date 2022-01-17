import React from 'react';

class ResourceTable extends React.Component {
    render() {
        return (
            <table style={{marginTop: "0px"}}>
                <thead>
                <tr>
                    <th>Resource Topic/Link</th>
                    <th>Prerequisite Knowledge</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> <a href = "https://mml-book.github.io/book/mml-book.pdf">Mathematics for Machine Learning</a></td>
                    <td><text style={{ color: 'red' }}>None</text></td>
                </tr>
                <tr>
                    <td><a href="https://www.youtube.com/watch?v=LHBE6Q9XlzI">Python for Data Science (Beginner)</a></td>
                    <td><text style={{ color: 'red' }}>None</text></td>
                </tr>
                <tr>
                    <td><a href = "https://www.youtube.com/watch?v=HGOBQPFzWKo&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=6">Advanced Python</a></td>
                    <td><text style={{ color: 'red' }}>Beginner knowledge of Python</text></td>
                </tr>
                <tr>
                    <td><a href="https://towardsdatascience.com/machine-learning-basics-part-1-a36d38c7916">Fundamentals of Machine Learning</a></td>
                    <td><text style={{ color: 'red' }}>None</text></td>
                </tr>
                <tr>
                    <td><a href="https://neuralnetworksanddeeplearning.com/index.html">Neural Networks and Deep Learning</a></td>
                    <td><text style={{ color: 'red' }}>Familiarity with Linear Algebra, Calculus, and Python</text></td>
                </tr>
                <tr>
                        <td><a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">Linear Algebra 3 Blue 1 Brown</a></td>
                        <td><text style={{color: 'red'}}>None</text></td>
                </tr>
                
                </tbody>
            </table>

        );
    }
}
export default ResourceTable;
