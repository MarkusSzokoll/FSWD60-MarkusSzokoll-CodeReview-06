class ClassLocation{
	name: string;
   	city: string;
   	zip_code: string;
	address: string;
	image: string;
	created_date: string;
	created_time: string;

	constructor(name, city, zip_code, address, image, created_date, created_time){
		this.name = name;
		this.city =  city;
		this.zip_code = zip_code;
		this.address = address;
		this.image = image;
		this.created_date = created_date;
		this.created_time = created_time;
	}

	render(){
			return "<h4><b>" + this.name + "</b></h4>" +"<br/><b>Address:</b> "+  this.address + ", " + this.zip_code +" "+ this.city + "<br/><img src='img/"+this.image+"'></img>" + "<br/><b>Entry Created:</b> "+this.created_date + " " + this.created_time;
		}
		

}

class ClassPlace extends ClassLocation{
	
	constructor(name, city, zip_code, address, image, created_date, created_time){
		super(name, city, zip_code, address, image, created_date, created_time);
	}
	render(){
		return super.render();
	}
}

class ClassRestaurant extends ClassLocation{
	telephone: string;
	type: string;
	web_address: string;

	constructor(name, city, zip_code, address, image, created_date, created_time, telephone, type, web_address){
		super(name, city, zip_code, address, image, created_date, created_time);
		this.telephone = telephone;
		this.type = type;
		this.web_address = web_address;
	}
	render(){
		return super.render() +"<br/><br/><b>Phone-Number:</b> "+ this.telephone +"<br/><b>Restaurant-Type:</b> "+ this.type +"<br/><b>Homepage:</b> <a href='"+this.web_address+"' target='_blank'>"+ this.web_address + "</a>";
	}
}


class ClassEvent extends ClassLocation{
	event_date: string;
	event_time: string;
	ticket_price_euro: number;
	web_address: string;

	constructor(name, city, zip_code, address, image, created_date, created_time, event_date, event_time, ticket_price_euro, web_address){
		super(name, city, zip_code, address, image, created_date, created_time);
		this.event_date = event_date;
		this.event_time = event_time;
		this.ticket_price_euro = ticket_price_euro;
		this.web_address = web_address;
	}
		render(){
		return super.render() +"<br/><br/><b>Event-Date:</b> "+ this.event_date +"<br/><b>Event-Time:</b> "+ this.event_time +"<br/><b>Ticket-Price:</b> € "+ this.ticket_price_euro.toFixed(2) +"<br/><b>Homepage:</b> <a href='"+this.web_address+"' target='_blank'>"+ this.web_address + "</a>";
	}
}


function sort(what){
	sortType = !sortType;
	if(!sortType){
		document.getElementById("sortType").style.background = "white";
		document.getElementById("sortType").innerHTML = "DATE-SORT ASCENDING";
	}
	else{
		document.getElementById("sortType").style.background = "yellow";
		document.getElementById("sortType").innerHTML = "DATE-SORT DESCENDING";
	}
	createContent();
}




function createContent(){
	var LocationArray = new Array();
	for (var i = 0; i < locationData.length; i++){
		var val2push = new Array();
		val2push[0]	= i;
		val2push[1]	= 	parseInt((locationData[i].created_date.substring(6) + 
						locationData[i].created_date.substring(3,5) + 
						locationData[i].created_date.substring(0,2) + 
						locationData[i].created_time.substring(0,2) + 
						locationData[i].created_time.substring(3)));
	   	LocationArray.push(val2push);
	}
   
 
	LocationArray.sort(function(a,b) {
				return a[1]-b[1]
	});
   	if(sortType){LocationArray.reverse()}

   	var newContent = "<div class='container'>";

	for (let index in LocationArray) {
		newContent += "<div class='col-lg-3 col-md-6 col-sm-12 col-xs-12 bootheight'>";
		newContent += locationData[LocationArray[index][0]].render()+"<br/>"+"<hr>"+"<br/>";
		newContent += "</div>";
	}
	newContent +=  "</div>";
	document.getElementById("locations").innerHTML = newContent;
}



var sortType = false;
var locationData = new Array();

locationData[0] = new ClassLocation("St. Charles Church","Wien", "1010", "Karlsplatz 1", "karlsplatz.jpg", "02.01.1999","08:00");
locationData[1] = new ClassPlace("Zoo Vienna","Wien", "1130", "Maxingstraße 13b", "zoo.jpg", "02.01.1995", "09:00");
locationData[2] = new ClassRestaurant("Lemon Leaf Thai Restaurant","Wien", "1050", "Kettenbrückengasse 19", "lemonleaf.png", "02.01.1993","10:00", "+43(1)5812308","Thai","http://www.lemonleaf.at/");
locationData[3] = new ClassRestaurant("SIXTA","Wien", "1050", "Schönbrunner Straße 21", "sixta.png", "02.01.1999","11:00","+43 1 58 528 56 | +43 1 58 528 56","Standard","http://www.sixta-restaurant.at/");
locationData[4] = new ClassRestaurant("VEGETASIA","Wien", "1030", "Ungargasse 57", "vegetasia.jpg", "02.05.1999","15:00","+43 1 71 38 332","Vegetarian","https://vegetasia.at/");
locationData[5] = new ClassEvent("Kris Kristofferson","Wien", "1150 ", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "kriskristofferson.jpg", "02.01.1990","12:01","15.11.2019","20:00",58.5,"http://kriskristofferson.com/");
locationData[6] = new ClassEvent("Lenny Kravitz","Wien", "1150 ", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "lenny_kravitz.jpg", "02.01.1992","11:11","09.12.2019","19:30",47.8,"http://www.lennykravitz.com/");

document.getElementById("sortType").addEventListener("click", function(){sort("type");},false);

createContent();

