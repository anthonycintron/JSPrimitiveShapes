/**
 * Square
 * Simple primitive Shape object which can draw a Box.
 * 
 * Created by Anthony Cintron - anthony.cintron@gmail.com
 */
function Box(objID, width, height, fillColor, strokeColor, strokeWeight) 
{
	var canvas = document.getElementById(objID);
	
	// properties
	this.width = width;
	this.height = height;
	this.fillColor = fillColor;
	this.strokeColor = strokeColor;
	this.strokeWeight = (strokeWeight == undefined ) ? 5 : strokeWeight;
	
	
	// init
	canvas.style.position = "absolute";
	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);
	
	/**
	 * PUBLIC METHODS
	 */
	this.draw = function()
	{
		if (canvas.getContext)
		{
	    var ctx = canvas.getContext('2d');
			ctx.fillStyle = fillColor;
			ctx.fillRect (0, 0, this.width, this.height);
			ctx.save();
			ctx.strokeStyle = strokeColor;
			ctx.lineWidth = this.strokeWeight;
			ctx.strokeRect(0,0, this.width, this.height);
	  }
		else
		{
			return null;
		}
	}
	
	/**
	 * GETTERS/SETTERS
	 */
	this.getX = function()
	{
		return canvas.style.left;
	}
	
	this.setX = function(value) 
	{
		canvas.style.left = value + 'px';
	}
	
	this.getY = function()
	{
		return canvas.style.top;
	}
	
	this.setY = function(value)
	{
		canvas.style.top = value + 'px';
	}
	
	/**
	 * PRIVATE METHODS
	 */
	
}



