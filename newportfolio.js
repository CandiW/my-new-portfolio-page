//This is my new portfolio page using react.js.
let portfolioProjects = [
    {
        id: "",
        title: "",
        imgSrc: "",
        link: ""
    }
];
//auto fill my projects from projects array with this component
class Projects extends React.Component {
    render () {
        <div className="project">
            <a id={this.props.id} href={this.props.link}>{this.props.title}</a>
            <img id="project-img" src={this.props.imgSrc}/>
            </div>
    }
}

class ButtonHeader extends React.Component {
    render(){
        return(
        <div>
            <i className="fab fa-free-code-camp" href="https://www.freecodecamp.org/candiw"></i>
            <i className="fab fa-twitter" href="https://twitter.com/devsinthestudio"></i>
            <i className="fab fa-github" href="https://github.com/CandiW"></i>
            <i className="fab fa-codepen" href="http://codepen.io/CandiW/"></i>
        </div>
            )
    }
}

class NavBar extends React.Component {
    render(){
       
    }
}
//render the whole app to page
class App extends React.Component {
    render () {
        return (
        <div>
            <div id="About" className="page-section">
            <NavBar />
            <h1>Studio 27 Designs</h1>
            <ButtonHeader />
            </div>
            <div id="Projects" className="page-section"></div>
            <div id="Contact" className="page-section"></div>
        </div>
            )
    }
}


ReactDOM.render(<App />, document.getElementById('page'));