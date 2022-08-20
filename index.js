

var a = document.getElementById("aa");
function playMusicx(){
	a.play();
}

 


var b = document.getElementById("bb");
function playMusicb(){
	b.play();
}
 
var c = document.getElementById("cc");
function playMusicc(){
	c.play();
}
var d = document.getElementById("d");
function playMusicd(){
	d.play();
}

var e = document.getElementById("e");
function playMusice(){
	e.play();
}

var f = document.getElementById("f");
function playMusicf(){
	f.play();
}

var g = document.getElementById("g");
function playMusicg(){
	g.play();
}
        pause = document.getElementById('pause'),


document.addEventListener("keypress",test )




function test (event ){
    if(event.key =="w"){
		playMusicx()
 	b.pause()
    c.pause()
	d.pause()
	e.pause()
	f.pause()
	g.pause()
  
}
else if(event.key =="a"){
	playMusicb()
	a.pause()
     c.pause()
	d.pause()
	f.pause()
	g.pause()
	e.pause()
	
	
}

	else if(event.key =="s"){
		playMusicc()
		a.pause()
		b.pause()
 		d.pause()
		f.pause()
		g.pause()
		e.pause()}
		else if(event.key =="d"){
			playMusicd()
			a.pause()
			b.pause()
			c.pause()
 			f.pause()
			g.pause()
			e.pause()}
			else if(event.key =="f"){
				playMusice()
				a.pause()
				b.pause()
				c.pause()
				d.pause()
 				g.pause()
				f.pause()}
				else if(event.key =="g"){
					playMusicf()
					a.pause()
					b.pause()
					c.pause()
					d.pause()
					e.pause()
 				    g.pause()}
					else if(event.key =="h"){
						playMusicg()
						a.pause()
						b.pause()
						c.pause()
						d.pause()
						e.pause()
						f.pause()
						}

}
