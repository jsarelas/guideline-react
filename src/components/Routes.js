import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const LoadingComponent = ({ isLoading, error }) => {
    return (<div className="display-none"></div>)
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

const Routes = () => (
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
)

export default Routes