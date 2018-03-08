import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNav: 'nav-close'
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this);
        document.getElementById("gl-overlay").addEventListener('mousedown', this.toggleMenu, {passive:true});
        document.getElementById("gl-overlay").addEventListener('touchstart', this.toggleMenu, {passive:true});
    }

    toggleMenu() {
        if (this.state.sideNav !== 'nav-close') {
            document.body.classList.remove('nav-open')
            document.body.classList.add('nav-close');
            document.getElementById("gl-overlay").style.display = "none";
            this.setState({ sideNav: 'nav-close' });
        }
        else {
            document.body.classList.remove('nav-close')
            document.body.classList.add('nav-open');
            document.getElementById("gl-overlay").style.display = "block";
            document.getElementById("sidenav").scrollTop = 0;
            this.setState({ sideNav: 'nav-open' });
        }
    }

    itemSelected() {
        this.toggleMenu();
        window.scrollTo(0, 0);
    }

    //<li><span>JobTracker (coming soon)</span></li>
      //<li className="sidenav-divider"></li>

    //<li><div>Off-canvas nav test 1</div></li>
    //<li><div>Off-canvas nav test 2</div></li>
    //<li><div>Off-canvas nav test 3</div></li>
    //<li><div>Off-canvas nav test 4</div></li>
    //<li><div>Off-canvas nav test 5</div></li>
    //<li><div>Off-canvas nav test 6</div></li>
    //<li><div>Off-canvas nav test 7</div></li>
    //<li><div>Off-canvas nav test 8</div></li>
    //<li><div>Off-canvas nav test 9</div></li>
    //<li><div>Off-canvas nav test 10</div></li>
    //<li><div>Off-canvas nav test 11</div></li>
    //<li><div>Off-canvas nav test 12</div></li>
    //<li><div>Off-canvas nav test 13</div></li>
    //<li><div>Off-canvas nav test 14</div></li>
    //<li><div>Off-canvas nav test 15</div></li>
    //<li><div>Off-canvas nav test 16</div></li>
    //<li><div>Off-canvas nav test 17</div></li>
    //<li><div>Off-canvas nav test 18</div></li>
    //<li><div>Off-canvas nav test 19</div></li>
    //<li><div>Off-canvas nav test 20</div></li>

    render() {
        return (
                <div id="sidenav" className={(this.state.sideNav)}>
                    <span onClick={this.toggleMenu} className="closebtn"><i className="remove icon"></i><span className="close-sideNav">Close</span></span>
                    <ul className="first-level-ul">
                    <li><Link to="/" onClick={this.itemSelected}><i className="home icon nav-icon" alt="Home"></i>Home</Link></li>
                    <li><Link to="/about" onClick={this.itemSelected}><i className="info icon nav-icon"></i>About</Link></li>
                    <li><Link to="/contact" onClick={this.itemSelected}><i className="user icon nav-icon"></i>Contact</Link></li>
                        <li className="sidenav-divider"></li>
                        <li><div>React Samples</div>
                        <ul className="second-level-ul">
                            <li><Link to="/nasa" onClick={this.itemSelected}>NASA</Link></li> 
                            <li><Link to="/youtube" onClick={this.itemSelected}>YouTube Search</Link></li>
                            <li><Link to="/blog" onClick={this.itemSelected}>Blog - Redux and ReduxForms</Link></li>
                            <li><Link to="/todo" onClick={this.itemSelected}>ToDo Redux</Link></li>
                            </ul>
                        </li>
                        <li className="sidenav-divider"></li>
                        <li><div>Vue Samples</div><div>(coming soon)</div></li>
                        <li className="sidenav-divider"></li>
                        <li><div>Angular Samples</div><div>(coming soon)</div></li>
                    </ul>
                </div>   
        );
    }
}

export default Menu;