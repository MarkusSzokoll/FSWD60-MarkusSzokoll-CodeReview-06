class ClassLocation{
	name: string;
   	city: string;
   	zip_code: string;
	adress: string;
	image: string;
	constructor(name, city, zip_code, adress, image){
		this.name = name;
		this.city =  city;
		this.zip_code = zip_code;
		this.adress = adress;
		this.image = image;
	}

	render(){
			return this.name +"<br/>"+ this.city +"<br/>"+ this.zip_code +"<br/>"+ this.adress +"<br/><img width='200px' src='img/"+this.image+"'></img>";
		}
}

class ClassRestaurant extends ClassLocation{
	telephone: string;
	type: string;
	web_adress: string;

	constructor(name, city, zip_code, adress, image, telephone, type, web_adress){
		super(name, city, zip_code, adress, image);
		this.telephone = telephone;
		this.type = type;
		this.web_adress = web_adress;
	}
	render(){
		return super.render() +"<br/>"+ this.telephone +"<br/>"+ this.type +"<br/>"+ this.web_adress;
	}
}


class ClassEvent extends ClassLocation{
	event_date: string;
	event_time: string;
	ticket_price_euro: number;
	web_adress: string;

	constructor(name, city, zip_code, adress, image, event_date, event_time, ticket_price_euro, web_adress){
		super(name, city, zip_code, adress, image);
		this.event_date = event_date;
		this.event_time = event_time;
		this.ticket_price_euro = ticket_price_euro;
		this.web_adress = web_adress;
	}
		render(){
		return super.render() +"<br/>"+ this.event_date +"<br/>"+ this.event_time +"<br/>"+ this.ticket_price_euro +"<br/>"+ this.web_adress;
	}
}


var locationData = new Array();

locationData[0] = new ClassLocation("St. Charles Church","Wien", "1010", "Karlsplatz 1", "karlsplatz.jpg");
locationData[1] = new ClassLocation("Zoo Vienna","Wien", "1130", "Maxingstraße 13b", "zoo.jpg");
locationData[2] = new ClassRestaurant("Lemon Leaf Thai Restaurant","Wien", "1050", "Kettenbrückengasse 19", "lemonleaf.png","+43(1)5812308","Thai","http://www.lemonleaf.at/");
locationData[3] = new ClassRestaurant("SIXTA","Wien", "1050", "Schönbrunner Straße 21", "sixta.png","+43 1 58 528 56 | +43 1 58 528 56","Standard","http://www.sixta-restaurant.at/");
locationData[4] = new ClassEvent("Kris Kristofferson","Wien", "1150 ", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "kriskristofferson.jpg","15.11.2019","20:00",58.5,"http://kriskristofferson.com/");
locationData[5] = new ClassEvent("Lenny Kravitz","Wien", "1150 ", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "lenny_kravitz.jpg","09.12.2019","19:30",47.8,"http://www.lennykravitz.com/");


for (let index in locationData) {
	document.getElementById("locations").innerHTML += locationData[index].render()+"<br/>"+"<br/>";
}