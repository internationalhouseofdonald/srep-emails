import { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="container-fluid bg-secondary pb-5 px-0">
        <div className="mx-auto mb-5 p-1 p-sm-4 p-lg-5 bg-white" style={{ maxWidth: '600px' }}>
          <img className="mx-auto pb-4 w-100" src="https://placehold.it/500x150" />
          <img style={{ float: 'right' }} src='https://maps.googleapis.com/maps/api/staticmap?center=34.02324310,-84.36155550&zoom=10&size=500x250&key=AIzaSyAjBiamsjWb2Tt1V7tUzdDTHJMmS1Pp-TI' />
          <p style={{ textIndent: '20px' }}>
            <small className="text-muted">You are receiving this email because you are subscribed to a search on https://signaturerep.com/. For more information, contact an agent at <a href="tel:+14042344167">(404) 234-4167</a>.</small>
          </p>
          <h1 style={{fontWeight: '300'}}>Name of Search</h1>
          <h2 style={{fontWeight: '300'}}>Search Value</h2>
          <ul className="list-inline" style={{ fontSize: '1.2rem' }}>
            <li className="list-inline-item">Search</li>
            <li className="list-inline-item">Filters</li>
          </ul>
          <p>The following is a market report based on homes found within this Search.</p>
          
          <ul>
            <li className="d-flex justify-content-between align-items-center" style={{fontSize: '1.5rem'}}>
              <span><b># of Results:</b> XX</span>
              <span><span className="fas fa-arrow-up text-success ml-auto"></span> XX</span>
            </li>
            <li className="d-flex justify-content-between align-items-center" style={{fontSize: '1.5rem'}}>
              <span><b>Price:</b> $240,000</span>
              <span><span className="fas fa-arrow-down text-danger ml-auto"></span> $1,000</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Beds:</b> 3</span>
              <span><span className="fas fa-arrow-down text-danger ml-auto"></span> 1</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Baths:</b> 2</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Building Area Total:</b> 40,000 sq ft.</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Lot Size:</b> X acres</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Association Fee:</b> $100/mth</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Property Type:</b> Residential Detached</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Style:</b> Traditional</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Year Built:</b> 2016</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Property Condition:</b> Resale</span>
            </li>
          </ul>
          <p>
            <a style={{fontSize: '1rem'}} href="https://signaturerep.com/search/{$City},%20{$StateOrProvince}/{$SMLSID}">View it on signaturerep.com</a>
          </p>
          <p>
            Would you like to save $2,000 on the purchase of your next home? Interested in a free Comparative Market Analysis? Repond directly to this email. An agent will be with you shortly.
          </p>
          <small>If you would like more specific details about listings found within this search, please subscribe to those listings as well.</small>
          <div className="footer pt-5">
            <div className="py-2">
              Ellen Moore<br />
              ellen@signaturerep.com<br />
              (404) 234-4167
            </div>
            <div className="w-100">
              <p className="text-right">
                <small><a href="#">Unsubscribe</a></small>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-5 p-1 p-sm-4 p-lg-5  bg-white" style={{ maxWidth: '600px' }}>
          <img className="mx-auto pb-4 w-100" src="https://placehold.it/500x150" />
          <img className="mx-auto pb-4 w-100" src="https://placehold.it/500x250" />
          <p style={{textIndent: '20px'}}>
            <small className="text-muted pb-4">You are receiving this email because you are subscribed to a listing on https://signaturerep.com/. For more information, contact an agent at <a href="tel:+14042344167">(404) 234-4167</a>.</small>
          </p>
          <h1 style={{fontWeight: '300'}}>Listing Address</h1>
          <h2 style={{ fontWeight: '300' }}>Line 2</h2>
          <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '1.5rem' }}>
            <span><b>Price:</b> $240,000</span>
            <span>
              <span className="fas fa-arrow-up text-success ml-auto">
            </span> $1,000</span>
          </div>
          <ul className="list-inline" style={{fontSize: '1.2rem'}}>
            <li className="list-inline-item">Beds</li>
            <li className="list-inline-item">Baths</li>
          </ul>
          <div className="pb-3" style={{fontSize: '1.5rem'}}>
            <span className="mr-4"><span className="fas fa-thumbs-up fa-lg text-primary"></span> 50</span><span><span className="fas fa-arrow-up text-success ml-auto"></span> 3</span>
          </div>
          <div className="pb-3" style={{fontSize: '1.5rem'}}>
            <span className="mr-4">Days on Market:</span><span> 3</span>
          </div>
          <ul>
            <li className="d-flex justify-content-between">
              <span><b>Status:</b> <span className="text-success">Active</span></span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Building Area Total:</b> 40,000</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Lot Size:</b> X acres</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Association Fee:</b> $100/mth</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Property Type:</b> Residential Detached</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Photo Count:</b> 40 <a href={'https://signaturerep.com/City,St/SMLSID/carousel'}>NEW photos!</a></span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Walkthrough:</b> <a href={'https://signaturerep.com/City,St/SMLSID/virtual_tour'}>NEW walkthrough!</a></span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Style:</b> Traditional</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Year Built:</b> 2016</span>
            </li>
            <li className="d-flex justify-content-between">
              <span><b>Property Condition:</b> Resale</span>
            </li>
          </ul>
          <p>
            <a style={{ fontSize: '1rem' }} href="https://signaturerep.com/search/{$City},%20{$StateOrProvince}/{$SMLSID}">View it on signaturerep.com</a>
          </p>
          <p>
            Would you like to save $2,000 on the purchase of your next home? Interested in a free Comparative Market Analysis? Repond directly to this email. An agent will be with you shortly.
          </p>
          <div className="footer pt-5">
            <div className="py-2">
              Ellen Moore<br />
              ellen@signaturerep.com<br />
              (404) 234-4167
            </div>
            <div className="w-100">
              <p className="text-right">
                <small><a href="#">Unsubscribe</a></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}