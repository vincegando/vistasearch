/*
 *
 *
 * Unit testing class for frontend javascript
 *
 *
 */
var Unit = Unit || {

  /*
   * Display passing text to screen
   * @param {string} name Name of the test 
   */
  pass: function(name) {
    $("#test-list").append("<li class='pass'>"+name+" passed</li>");
  }, 

  /*
   * Display failing text to screen
   * @param {string} name Name of the test 
   * @param {string} explanation Explanation of why test failed
   */
  fail: function(name, explanation) {
    $("#test-list").append("<li class='fail'>" + name + " failed because " + explanation + "</li>");
  },

  /*
   * Run all tests
   * @param {array} tests Array of test anon functions to run
   */
  runTests: function(tests) {
    for (var i = tests.length - 1; i >= 0; i--) {
      tests[i]();
    }
  },

  /*
   * Test to see if two values are equal
   * @param {string} name Name of test
   * @param expected Expected value to equal
   * @param testVal Value you are testing
   */
  equals: function(name, expected, testVal) {
    if (expected == testVal) {
      Unit.pass(name);
    } else {
      Unit.fail(name,"Expected: "+expected+" Got: "+testVal);
    }
  },

  /*
   * Test to see if value is in array
   * @param {string} name Name of the test
   * @param {array} array Array you are testing
   * @param val Value you want to see if in array
   */
  isInArray: function(name, array, val) {
    if(array.indexOf(val > -1)) {
      Unit.pass(name);
    } else {
      Unit.fail(name, val + " is not in array: " + array);
    }
  }
};

function testFilter() {
  var old = SocialMediaManager.currentFilter;
  SearchBar.filter(SocialMediaType.Twitter);
  Unit.equals("Social media filter test", SocialMediaType.Twitter, SocialMediaManager.currentFilter);
  SearchBar.filter(old);
}

function testDataCreation() {
  var data = createData([{"type": "Twitter", "id": "10234390320", "user": "test_user"}]);
  console.log(data);
  Unit.equals("createData test user", "test_user", data[0].username);
  Unit.equals("createData test id", "10234390320", data[0].id);
}

function testShuffle() {
  var shuffleData = shuffle([1,2,4,6,3,8,4]);
  Unit.equals("Shuffle function test array length", 7, shuffleData.length);
  for (var i = 0; i < shuffleData.length; i++) {
    Unit.isInArray("Shuffle function test number " + i, shuffleData, shuffleData[i]);
  };
}

function testParserForOneWord() {
  var parser = new Parser();
  Unit.equals("Parser with one word test", "surfing", parser.parseArray("surfing"));
}

function testParserForOneMultipleWords() {
  var parser = new Parser();
  Unit.equals("Parser with multiple words test", "ucsb,school,major", parser.parseArray("ucsb school major"));
}

function runAllTests() {

  Unit.runTests([testFilter, testDataCreation, testShuffle, testParserForOneWord, testParserForOneMultipleWords]);
}