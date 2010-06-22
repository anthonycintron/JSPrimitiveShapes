/**
 * Square
 * Simple primitive Shape object which can draw a Box.
 * 
 * Created by Anthony Cintron - anthony.cintron@gmail.com
 */
function Box(objID, width, height, fillColor, strokeColor, strokeWeight)
{
    // properties
		this.canvas = document.getElementById(objID);
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.strokeWeight = (strokeWeight == undefined) ? 5: strokeWeight;
		
	 /**
	 	* PRIVATE METHODS
	 	*/
		var privateMethods = 
		{
			init: function (parent)
			{
				parent.canvas.style.position = "absolute";
				parent.canvas.setAttribute('width', width);
		    parent.canvas.setAttribute('height', height);
			}
		}
		
		privateMethods.init(this);
		
    // init
    //canvas.style.position = "absolute";
    

    /**
	 * PUBLIC METHODS
	 */
    this.draw = function()
    {
        if (this.canvas.getContext)
        {
            var ctx = this.canvas.getContext('2d');
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.save();
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = this.strokeWeight;
            ctx.strokeRect(0, 0, this.width, this.height);
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
        return this.canvas.style.left;
    }

    this.setX = function(value)
    {
        this.canvas.style.left = value + 'px';
    }

    this.getY = function()
    {
        return this.canvas.style.top;
    }

    this.setY = function(value)
    {
        this.canvas.style.top = value + 'px';
    }

}



