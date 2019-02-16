class ClassLocation{
   	city: string;
   	zip_code: string;
	adress: string;
	image: string;
	constructor(city, zip_code, adress, image){
		this.city =  city;
		this.zip_code = zip_code;
		this.adress = adress;
		this.image = image;
	}

	render(){
			return this.city + this.zip_code + this.adress + this.image;
		}
}

class ClassRestaurant extends ClassLocation{
	telephone: string;
	type: string;
	web_adress: string;

	constructor(city, zip_code, adress, image, telephone, type, web_adress){
		super(city, zip_code, adress, image);
		this.telephone = telephone;
		this.type = type;
		this.web_adress = web_adress;
	}
}


class ClassEvent extends ClassLocation{
	event_date: string;
	event_time: string;
	ticket_price_euro: string;

	constructor(city, zip_code, adress, image, event_date, event_time, ticket_price_euro){
		super(city, zip_code, adress, image);
		this.event_date = event_date;
		this.event_time = event_time;
		this.ticket_price_euro = ticket_price_euro;
	}
}


