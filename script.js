'use strict'

function Select()
{
	this.btn = document.querySelector('._btn');
	this.list = document.querySelector('._selbtns');
	this.selTap = document.querySelectorAll('._item');
	this.Tapbtn = function()
	{
		this.btn.addEventListener('click', ()=>
		{
			this.ShowSel()
			this.SelectTap()
		})
	}
	this.ShowSel = function()
	{
		if(this.btn.classList.contains('active'))
		{
			this.btn.classList.remove('active')
			this.list.classList.remove('active')
		}
		else
		{
			this.btn.classList.add('active');
			this.list.classList.add('active');
		}
	}
	this.SelectTap = function(){
		this.selTap.forEach((el)=>
		{
			el.addEventListener('click', ()=>
			{
				this.btn.innerText = el.innerText
			})
		})
	}
}

let sel = new Select()
sel.Tapbtn()





