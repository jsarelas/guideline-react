import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

//CSS
import 'semantic-ui-icon/icon.min.css';
import '../assets/css/index.css';
import '../assets/css/app.css';

import Header from '../components/Header/header_index';
import Menu from '../components/Header/menu';
import Footer from '../components/Footer/footer_index';
//import NotFound from '../components/NotFound';
//import Home from '../components/Home/home_index';
//import About from '../components/About/about_index';
//import Contact from '../components/Contact/contact_index';
//import ContactList from '../components/Contact/contactlist_index';
//import NASA from '../components/NASA/nasa_index';
//import BlogIndex from '../components/Blog/blog_index';
//import AddPost from '../components/Blog/add_post';
//import DisplayPost from '../components/Blog/display_post';
//import YouTube from '../components/YouTube/youtube_index';


const LoadingComponent = ({ isLoading, error }) => {
    return (<div className="display-none"></div>);
    //if (isLoading) {
    //    return (<div>Loading...</div>);
    //}
    //else if (error) {
    //    return (<div>Sorry, unable to load the page...</div>);
    //}
    //else {
    //    return null;
    //}
}

const Home = Loadable({
    loader: () => import('../components/Home/home_index'),
    loading: LoadingComponent
})

const About = Loadable({
    loader: () => import('../components/About/about_index'),
    loading: LoadingComponent
})

const Contact = Loadable({
    loader: () => import('../components/Contact/contact_index'),
    loading: LoadingComponent
})

const ContactList = Loadable({
    loader: () => import('../components/Contact/contactlist_index'),
    loading: LoadingComponent
})

const NASA = Loadable({
    loader: () => import('../components/NASA/nasa_index'),
    loading: LoadingComponent
})

const BlogIndex = Loadable({
    loader: () => import('../components/Blog/blog_index'),
    loading: LoadingComponent
})

const AddPost= Loadable({
    loader: () => import('../components/Blog/add_post'),
    loading: LoadingComponent
})

const DisplayPost = Loadable({
    loader: () => import('../components/Blog/display_post'),
    loading: LoadingComponent
})

const YouTube = Loadable({
    loader: () => import('../components/YouTube/youtube_index'),
    loading: LoadingComponent
})

const ToDo = Loadable({
    loader: () => import('../components/ToDo/todo_index'),
    loading: LoadingComponent
})

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
                    <meta name="description" content="Guideline Solutions is a full service consulting firm. Guideline Solutions. Building applications that make businesses successful. Jason Sarelas. Austin, TX. UI/UX design. Web. Mobile. Architecture." />
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
                            <Route exact path="/contactlist" component={ContactList} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/nasa" component={NASA} />
                            <Route exact path="/todo" component={ToDo} />
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
