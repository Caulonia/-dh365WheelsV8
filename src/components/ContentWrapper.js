import React from 'react';
import ContentRowTop from './ContentRowTop';
import CarsSold from './CarsSold';

function ContentWrapper(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <ContentRowTop />
                    <CarsSold />   
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;