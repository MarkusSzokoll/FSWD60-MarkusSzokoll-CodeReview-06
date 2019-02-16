var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassLocation = /** @class */ (function () {
    function ClassLocation(name, city, zip_code, adress, image) {
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.adress = adress;
        this.image = image;
    }
    ClassLocation.prototype.render = function () {
        return this.name + "<br/>" + this.city + "<br/>" + this.zip_code + "<br/>" + this.adress + "<br/><img width='200px' src='img/" + this.image + "'></img>";
    };
    return ClassLocation;
}());
var ClassRestaurant = /** @class */ (function (_super) {
    __extends(ClassRestaurant, _super);
    function ClassRestaurant(name, city, zip_code, adress, image, telephone, type, web_adress) {
        var _this = _super.call(this, name, city, zip_code, adress, image) || this;
        _this.telephone = telephone;
        _this.type = type;
        _this.web_adress = web_adress;
        return _this;
    }
    ClassRestaurant.prototype.render = function () {
        return _super.prototype.render.call(this) + "<br/>" + this.telephone + "<br/>" + this.type + "<br/>" + this.web_adress;
    };
    return ClassRestaurant;
}(ClassLocation));
var ClassEvent = /** @class */ (function (_super) {
    __extends(ClassEvent, _super);
    function ClassEvent(name, city, zip_code, adress, image, event_date, event_time, ticket_price_euro, web_adress) {
        var _this = _super.call(this, name, city, zip_code, adress, image) || this;
        _this.event_date = event_date;
        _this.event_time = event_time;
        _this.ticket_price_euro = ticket_price_euro;
        _this.web_adress = web_adress;
        return _this;
    }
    ClassEvent.prototype.render = function () {
        return _super.prototype.render.call(this) + "<br/>" + this.event_date + "<br/>" + this.event_time + "<br/>" + this.ticket_price_euro + "<br/>" + this.web_adress;
    };
    return ClassEvent;
}(ClassLocation));
var locationData = new Array();
locationData[0] = new ClassLocation("St. Charles Church", "Wien", "1010", "Karlsplatz 1", "karlsplatz.jpg");
locationData[1] = new ClassLocation("Zoo Vienna", "Wien", "1130", "Maxingstraße 13b", "zoo.jpg");
locationData[2] = new ClassRestaurant("Lemon Leaf Thai Restaurant", "Wien", "1050", "Kettenbrückengasse 19", "lemonleaf.png", "+43(1)5812308", "Thai", "http://www.lemonleaf.at/");
locationData[3] = new ClassRestaurant("SIXTA", "Wien", "1050", "Schönbrunner Straße 21", "sixta.png", "+43 1 58 528 56 | +43 1 58 528 56", "Standard", "http://www.sixta-restaurant.at/");
locationData[4] = new ClassEvent("Kris Kristofferson", "Wien", "1150 ", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "kriskristofferson.jpg", "15.11.2019", "20:00", 58.5, "http://kriskristofferson.com/");
locationData[5] = new ClassEvent("Lenny Kravitz", "Wien", "1150 ", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "lenny_kravitz.jpg", "09.12.2019", "19:30", 47.8, "http://www.lennykravitz.com/");
for (var index in locationData) {
    document.getElementById("locations").innerHTML += locationData[index].render() + "<br/>" + "<br/>";
}
