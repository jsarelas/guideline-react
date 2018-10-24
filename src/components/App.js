import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

//CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-icon/icon.min.css'
import '../assets/css/index.css'
import '../assets/css/app.css'

import Header from '../components/Header/header_index'
import Menu from '../components/Header/menu'
import Routes from '../components/Routes'
import Footer from '../components/Footer/footer_index'

class App extends Component {
    menuClick = () => {
        this.menu.toggleMenu()
    }
    render() {
        return (
            <div>
                <Helmet
                    titleTemplate="%s � Guideline Solutions"
                    defaultTitle="Guideline Solutions"
                >
                    <meta name="description" content="Guideline Solutions is a full service consulting firm. Guideline Solutions. Building applications that make businesses successful. Jason Sarelas. Austin, TX. UI/UX design. Web. Mobile. Architecture." />
                </Helmet>
                <Menu onRef={ref => (this.menu = ref)}/>
                <div id="main">
                    <Header onSelectMenu={this.menuClick} />
                    <Routes/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
