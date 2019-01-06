import React from 'react';
import withRoot from '../modules/withRoot';
import AppAppBar from '../modules/views/AppAppBar';
import SearchWindow from '../modules/views/SearchWindow';
//import Background from '../img/background_image.jpg';

const styles = {
    paperContainer: {
        width: "100%",
        height: "1400px",
        //backgroundImage: "url(" + Background  + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
};

class App extends React.Component {
    render(){
        return (
            <React.Fragment >
                <div style={styles.paperContainer}>
                <AppAppBar />
                <SearchWindow />
                </div>
            </React.Fragment>
        );
    }
}

export default withRoot(App);