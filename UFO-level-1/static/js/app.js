// Assign data from data.js to variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);

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


// Select the button
var button = d3.select("#filter-btn");
    button.on("click", function()  {
    //   Select the input element and get the raw HTML node
    var dateTimeFilter = d3.select("#datetime");
        
    //tbody.remove();
    tbody.selectAll('tr').remove()
    //   Get the value property of the input element
    var dateTime = dateTimeFilter.property("value");
        

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
        
    });

    console.log(inputValue);
    console.log(data);
});