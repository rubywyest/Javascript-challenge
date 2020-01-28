// Assign data from data.js to variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);


function fillDataAll() {
    // Loop Through `data` and console.log each object
    data.forEach(sighting => {
        console.log(sighting);

    // Use d3 to append one table row `tr` for each sighting object
        var row = tbody.append('tr');

    // Use `Object.entries` to console.log each sighting value
        Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value);

    // Use d3 to append 1 cell per sighting value
        var cell = row.append("td");

    // Use d3 to update each cell's text with values
        cell.text(value);
    });
    });

}

fillDataAll();

var clearbutton = d3.select("#clear-btn");
clearbutton.on("click", function()  {
    tbody.selectAll('tr').remove()
    fillDataAll();
    });
// Select the button
var button = d3.select("#filter-btn");
    button.on("click", function()  {
    //   Select the input element and get the raw HTML node
    var dateTimeFilter = d3.select("#datetime");
    var cityFilter = d3.select("#city");
    var stateFilter = d3.select("#state");
    var countryFilter = d3.select("#country");
    var shapeFilter = d3.select("#shape");
    
    //tbody.remove();
    tbody.selectAll('tr').remove()
    //   Get the value property of the input element
    var dateTime = dateTimeFilter.property("value");
    var city = cityFilter.property("value");
    var state = stateFilter.property("value");
    var country = countryFilter.property("value");
    var shape = shapeFilter.property("value");
  
    console.log("Here are the values")   
    console.log("datetime:" + dateTime)   
    console.log("city:" + city)   
    console.log("state:" + state)   
    console.log("country:" + country)   
    console.log("shape:" + shape)   
    //alert("hello event called" + inputValue)
  // Then, select the table
//   var summary = d3.select("sightings>tbody>tr")

//   // remove any data from the table
//     summary.html("");

    data.forEach(sighting => {
        // console.log(sighting.datetime);
        // console.log(inputValue);
        
        if (sighting.datetime === dateTime) {
            // Use d3 to append one table row `tr` for each sighting object
            var row = tbody.append('tr');

            // Use `Object.entries` to console.log each sighting value
                Object.entries(sighting).forEach(([key, value]) => {
                // console.log(key, value);

            // Use d3 to append 1 cell per sighting value
                var cell = row.append("td");

            // Use d3 to update each cell's text with values
                cell.text(value);
            });
        }
        if (sighting.city === city) {
            // Use d3 to append one table row `tr` for each sighting object
            var row = tbody.append('tr');

            // Use `Object.entries` to console.log each sighting value
                Object.entries(sighting).forEach(([key, value]) => {
                // console.log(key, value);

            // Use d3 to append 1 cell per sighting value
                var cell = row.append("td");

            // Use d3 to update each cell's text with values
                cell.text(value);
            });
        }
       if (sighting.state === state) {
            // Use d3 to append one table row `tr` for each sighting object
            var row = tbody.append('tr');

            // Use `Object.entries` to console.log each sighting value
                Object.entries(sighting).forEach(([key, value]) => {
                // console.log(key, value);

            // Use d3 to append 1 cell per sighting value
                var cell = row.append("td");

            // Use d3 to update each cell's text with values
                cell.text(value);
            });
        }       
        if (sighting.country === country) {
            // Use d3 to append one table row `tr` for each sighting object
            var row = tbody.append('tr');

            // Use `Object.entries` to console.log each sighting value
                Object.entries(sighting).forEach(([key, value]) => {
                // console.log(key, value);

            // Use d3 to append 1 cell per sighting value
                var cell = row.append("td");

            // Use d3 to update each cell's text with values
                cell.text(value);
            });
        }       
        if (sighting.shape === shape) {
            // Use d3 to append one table row `tr` for each sighting object
            var row = tbody.append('tr');

            // Use `Object.entries` to console.log each sighting value
                Object.entries(sighting).forEach(([key, value]) => {
                // console.log(key, value);

            // Use d3 to append 1 cell per sighting value
                var cell = row.append("td");

            // Use d3 to update each cell's text with values
                cell.text(value);
            });
        }
    });

    console.log(inputValue);
    console.log(data);
});