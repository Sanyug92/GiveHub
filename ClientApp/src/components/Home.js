import React, { Component } from 'react';
//import Input from '../uielements/input';
import { Icon, Input } from 'antd';

export class Home extends Component {
	displayName = Home.name

	state = {
		value: this.props.value,
		editable: false
	};
	handleChange = event => {
		const value = event.target.value;
		this.setState({ value });
	};
	check = () => {
		this.setState({ editable: false });
		if (this.props.onChange) {
			this.props.onChange(
				this.state.value,
				this.props.columnsKey,
				this.props.index
			);
		}
	};
	edit = () => {
		this.setState({ editable: true });
	};

	render() {
		const { value, editable } = this.state;
    return (
      <div>
			<h1>GiveHub</h1>
			<div className="isoEditData">
				{editable ? (
					<div className="isoEditDataWrapper">
						<Input
							value={value}
							onChange={this.handleChange}
							onPressEnter={this.check}
						/>
						<Icon type="check" className="isoEditIcon" onClick={this.check} />
					</div>
				) : (
						<p className="isoDataWrapper">
							{value || ' '}
							<Icon type="edit" className="isoEditIcon" onClick={this.edit} />
						</p>
					)}
			</div>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we've also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
