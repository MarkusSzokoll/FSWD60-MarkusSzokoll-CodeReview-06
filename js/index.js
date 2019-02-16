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
    function ClassLocation(city, zip_code, adress, image) {
        this.city = city;
        this.zip_code = zip_code;
        this.adress = adress;
        this.image = image;
    }
    ClassLocation.prototype.render = function () {
        return this.city + this.zip_code + this.adress + this.image;
    };
    return ClassLocation;
}());
var ClassRestaurant = /** @class */ (function (_super) {
    __extends(ClassRestaurant, _super);
    function ClassRestaurant(city, zip_code, adress, image, telephone, type, web_adress) {
        var _this = _super.call(this, city, zip_code, adress, image) || this;
        _this.telephone = telephone;
        _this.type = type;
        _this.web_adress = web_adress;
        return _this;
    }
    return ClassRestaurant;
}(ClassLocation));
var ClassEvent = /** @class */ (function (_super) {
    __extends(ClassEvent, _super);
    function ClassEvent(city, zip_code, adress, image, event_date, event_time, ticket_price_euro) {
        var _this = _super.call(this, city, zip_code, adress, image) || this;
        _this.event_date = event_date;
        _this.event_time = event_time;
        _this.ticket_price_euro = ticket_price_euro;
        return _this;
    }
    return ClassEvent;
}(ClassLocation));
