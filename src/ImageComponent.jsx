import React, { Component } from 'react'

export class ImageComponent extends Component {
	render() {
		const { src, alt } = this.props
		return <img src={src} alt={alt} />
	}
}

export default ImageComponent
