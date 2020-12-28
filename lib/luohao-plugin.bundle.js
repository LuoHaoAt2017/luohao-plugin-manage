import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.function.name.js';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';

var Animal = /*#__PURE__*/function () {
  function Animal(theName) {
    _classCallCheck(this, Animal);

    this.name = theName;
  }

  _createClass(Animal, [{
    key: "move",
    value: function move() {
      var distanceInMeters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    }
  }]);

  return Animal;
}();

var tom = new Animal("Tommy the Palomino");
tom.move(34);
