import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

//CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-icon/icon.min.css';
import '../assets/css/app.css';

import Header from '../components/Header/header_index';
import Menu from '../components/Header/menu';
import Footer from '../components/Footer/footer_index';
import Home from '../components/Home/home_index';
import About from '../components/About/about_index';
import Contact from '../components/Contact/contact_index';
//import NotFound from '../components/NotFound';
import BlogIndex from '../components/Blog/blog_index';
import AddPost from '../components/Blog/add_post';
import DisplayPost from '../components/Blog/display_post';
import YouTube from '../components/YouTube/youtube_index';

class App extends Component {
    menuClick = () => {
        this.menu.toggleMenu();
    }
    render() {
        return (
            <div>
                <Helmet
                    titleTemplate="%s · Guideline Solutions"
                    defaultTitle="Guideline Solutions"
                >
                    <meta name="description" content="Guideline Solutions is a full service consulting firm." />
                </Helmet>
                <Menu onRef={ref => (this.menu = ref)}/>
                <div id="main">
                    <Header onSelectMenu={this.menuClick} />
                    <div>
                        <Switch>
                            <Route exact path="/youtube" component={YouTube} />
                            <Route exact path="/blog/add" component={AddPost} />
                            <Route exact path="/blog/:id" component={DisplayPost} />
                            <Route exact path="/blog" component={BlogIndex} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
