import React from 'react';
import './App.css';

class App extends React.Component {
	render (){
		return (
			<div className="App">
				<div className="limited-width">
					<div className="text-first-container row">
						<div className="col-md-6 what-xbank">
							<div className="digital-text">
								<div className="first-line color-nb">Virtusa's</div>
								<div className="first-line color-nb">Resume Engine</div><br/>
								<div className="second-line">Our focus is to automate the search of</div>
								<div className="second-line">resumes matching the job description and</div>
								<div className="second-line">other features of that requirement</div>
							</div><br/>
							<div className="digital-text">
								<div className="second-line color-nb">Please enter user name to start the chat</div>
									<form name="contactDetails" id="contactDetails">
										<div className="form-group">
											<label for="firstName"></label>
											<input type="text" className="form-control1" placeholder="Enter the user name" id="firstName" name="firstName" />
										</div>
										<button type="submit" className="btn btn-primary" id="startChat">Start Chat</button>
									</form>
								</div>
							</div>
						<div className="col-md-6 why-xbank">
							<div className="digital-text" style={{right:'40%', left:'0'}}>
							  <div className="first-line color-nb">Chat Window</div>
							</div>
							<section className="section-chat" id="section-chat" style={{paddingLeft:'20%', paddingRight:'20%'}}>
								<div id="root1"></div>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
  
	}
}

export default App;

