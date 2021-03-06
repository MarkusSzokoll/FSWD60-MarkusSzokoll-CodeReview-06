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
    function ClassLocation(name, city, zip_code, address, image, created_date, created_time) {
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.image = image;
        this.created_date = created_date;
        this.created_time = created_time;
        this.group = "ClassLocation";
    }
    ClassLocation.prototype.render = function () {
        var retText = "";
        if (this instanceof ClassLocation) {
            retText = "<h4>General Location</h4>";
        }
        if (this instanceof ClassPlace) {
            retText = "<h4>A nice Place</h4>";
        }
        if (this instanceof ClassRestaurant) {
            retText = "<h4>Meal in a Restaurant</h4>";
        }
        if (this instanceof ClassEvent) {
            retText = "<h4>A special Event</h4>";
        }
        return retText + "<h4><b>" + this.name + "</b></h4>" + "<br/><b>Address:</b> " + this.address + ", " + this.zip_code + " " + this.city + "<br/><img src='img/" + this.image + "'></img>" + "<br/><b>Entry Created:</b> " + this.created_date + " " + this.created_time;
    };
    return ClassLocation;
}());
var ClassPlace = /** @class */ (function (_super) {
    __extends(ClassPlace, _super);
    function ClassPlace(name, city, zip_code, address, image, created_date, created_time) {
        var _this = _super.call(this, name, city, zip_code, address, image, created_date, created_time) || this;
        _this.group = "ClassPlace";
        return _this;
    }
    ClassPlace.prototype.render = function () {
        return _super.prototype.render.call(this);
    };
    return ClassPlace;
}(ClassLocation));
var ClassRestaurant = /** @class */ (function (_super) {
    __extends(ClassRestaurant, _super);
    function ClassRestaurant(name, city, zip_code, address, image, created_date, created_time, telephone, type, web_address) {
        var _this = _super.call(this, name, city, zip_code, address, image, created_date, created_time) || this;
        _this.telephone = telephone;
        _this.type = type;
        _this.web_address = web_address;
        _this.group = "ClassRestaurant";
        return _this;
    }
    ClassRestaurant.prototype.render = function () {
        return _super.prototype.render.call(this) + "<br/><br/><b>Phone-Number:</b> " + this.telephone + "<br/><b>Restaurant-Type:</b> " + this.type + "<br/><b>Homepage:</b> <a href='" + this.web_address + "' target='_blank'>" + this.web_address + "</a>";
    };
    return ClassRestaurant;
}(ClassLocation));
var ClassEvent = /** @class */ (function (_super) {
    __extends(ClassEvent, _super);
    function ClassEvent(name, city, zip_code, address, image, created_date, created_time, event_date, event_time, ticket_price_euro, web_address) {
        var _this = _super.call(this, name, city, zip_code, address, image, created_date, created_time) || this;
        _this.event_date = event_date;
        _this.event_time = event_time;
        _this.ticket_price_euro = ticket_price_euro;
        _this.web_address = web_address;
        _this.group = "ClassEvent";
        return _this;
    }
    ClassEvent.prototype.render = function () {
        return _super.prototype.render.call(this) + "<br/><br/><b>Event-Date:</b> " + this.event_date + "<br/><b>Event-Time:</b> " + this.event_time + "<br/><b>Ticket-Price:</b> € " + this.ticket_price_euro.toFixed(2) + "<br/><b>Homepage:</b> <a href='" + this.web_address + "' target='_blank'>" + this.web_address + "</a>";
    };
    return ClassEvent;
}(ClassLocation));
function sort(what) {
    sortType = !sortType;
    if (!sortType) {
        document.getElementById("sortType").style.background = "white";
        document.getElementById("sortType").innerHTML = "DATE-SORT ASCENDING";
    }
    else {
        document.getElementById("sortType").style.background = "yellow";
        document.getElementById("sortType").innerHTML = "DATE-SORT DESCENDING";
    }
    createContent();
}
function dogroup(what) {
    groupType = !groupType;
    if (!groupType) {
        document.getElementById("groupType").style.background = "white";
        document.getElementById("groupType").innerHTML = "DO NOT Group Entries";
    }
    else {
        document.getElementById("groupType").style.background = "yellow";
        document.getElementById("groupType").innerHTML = "Group Location-Entries";
    }
    createContent();
}
function createContent() {
    var LocationArray = new Array();
    if (groupType) {
        for (var j = 0; j < groups.length; j++) {
            var groupArrayBuffer = new Array();
            for (var i = 0; i < locationData.length; i++) {
                if (groups[j] == locationData[i].group) {
                    var val2push = new Array();
                    val2push[0] = i;
                    val2push[1] = parseInt((locationData[i].created_date.substring(6) +
                        locationData[i].created_date.substring(3, 5) +
                        locationData[i].created_date.substring(0, 2) +
                        locationData[i].created_time.substring(0, 2) +
                        locationData[i].created_time.substring(3)));
                    groupArrayBuffer.push(val2push);
                }
            }
            groupArrayBuffer.sort(function (a, b) {
                return a[1] - b[1];
            });
            for (var i = 0; i < groupArrayBuffer.length; i++) {
                LocationArray.push(groupArrayBuffer[i]);
            }
        }
    }
    else {
        for (var i = 0; i < locationData.length; i++) {
            var val2push = new Array();
            val2push[0] = i;
            val2push[1] = parseInt((locationData[i].created_date.substring(6) +
                locationData[i].created_date.substring(3, 5) +
                locationData[i].created_date.substring(0, 2) +
                locationData[i].created_time.substring(0, 2) +
                locationData[i].created_time.substring(3)));
            LocationArray.push(val2push);
        }
        LocationArray.sort(function (a, b) {
            return a[1] - b[1];
        });
    }
    if (sortType) {
        LocationArray.reverse();
    }
    ;
    var newContent = "<div class='container'>";
    for (var index in LocationArray) {
        newContent += "<div class='col-lg-3 col-md-6 col-sm-12 col-xs-12 bootheight'>";
        newContent += locationData[LocationArray[index][0]].render() + "<br/>" + "<hr>" + "<br/>";
        newContent += "</div>";
    }
    newContent += "</div>";
    document.getElementById("locations").innerHTML = newContent;
}
var sortType = false;
var groupType = false;
var locationData = new Array();
locationData[0] = new ClassLocation("Kahlenberg", "Wien", "1190", "Josefsdorf 38", "kahlenberg.jpg", "02.01.1999", "08:00");
locationData[1] = new ClassLocation("Wiener Prater", "Wien", "1020", "Praterallee", "prater.jpg", "02.01.1988", "08:30");
locationData[2] = new ClassPlace("St. Charles Church", "Wien", "1010", "Karlsplatz 1", "karlsplatz.jpg", "02.01.1999", "08:00");
locationData[3] = new ClassPlace("Zoo Vienna", "Wien", "1130", "Maxingstraße 13b", "zoo.jpg", "02.01.1995", "09:00");
locationData[4] = new ClassRestaurant("Lemon Leaf Thai Restaurant", "Wien", "1050", "Kettenbrückengasse 19", "lemonleaf.png", "02.01.1993", "10:00", "+43(1)5812308", "Thai", "http://www.lemonleaf.at/");
locationData[5] = new ClassRestaurant("SIXTA", "Wien", "1050", "Schönbrunner Straße 21", "sixta.png", "02.01.1999", "11:00", "+43 1 58 528 56 | +43 1 58 528 56", "Standard", "http://www.sixta-restaurant.at/");
locationData[6] = new ClassRestaurant("VEGETASIA", "Wien", "1030", "Ungargasse 57", "vegetasia.jpg", "02.05.1999", "15:00", "+43 1 71 38 332", "Vegetarian", "https://vegetasia.at/");
locationData[7] = new ClassEvent("Kris Kristofferson", "Wien", "1150 ", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "kriskristofferson.jpg", "02.01.1990", "12:01", "15.11.2019", "20:00", 58.5, "http://kriskristofferson.com/");
locationData[8] = new ClassEvent("Lenny Kravitz", "Wien", "1150 ", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "lenny_kravitz.jpg", "02.01.1992", "11:11", "09.12.2019", "19:30", 47.8, "http://www.lennykravitz.com/");
locationData[9] = new ClassLocation("Moon", "Not on Earth", "0000", "Space", "moon.jpg", "22.01.1999", "08:00");
locationData[10] = new ClassPlace("Codefactory", "Wien", "1050", "Wien", "codefactory.jpg", "22.01.1999", "08:59");
locationData[11] = new ClassLocation("Mars", "Next Planet", "9999", "Outer Space", "mars.jpg", "22.01.2028", "08:59");
var groups = new Array();
groups[0] = "ClassLocation";
groups[1] = "ClassPlace";
groups[2] = "ClassRestaurant";
groups[3] = "ClassEvent";
document.getElementById("sortType").addEventListener("click", function () { sort("type"); }, false);
document.getElementById("groupType").addEventListener("click", function () { dogroup("type"); }, false);
createContent();
