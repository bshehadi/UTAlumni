$(document).ready(function() {
  $("#drop-down-search").on("change", function() {
    var dropFilter;
    dropFilter = $("#drop-down-search").val().trim();
    console.log(dropFilter);
    if (dropFilter === "cohort") {
      console.log("caught chenge to cohort");
      $(".searchBarDiv").html(`<select id="userFilter" class="form-control selectpicker" data-style="btn-primary"><option value="Fall Full Time 2016">Fall Full Time 2016</option><option value="Fall Part Time 2016">Fall Part Time 2016</option><option value="Spring Full Time 2017">Spring Full Time 2017</option><option value="Spring Part Time 2017">Spring Part Time 2017</option><option value="Fall Full Time 2017">Fall Full Time 2017</option></select>`);

    } else if (dropFilter === "state") {
      $('.searchBarDiv').html(`
		<select class="form-control" id="userFilter" name="state">
			<option value="">N/A</option>
			<option value="AK">Alaska</option>
			<option value="AL">Alabama</option>
			<option value="AR">Arkansas</option>
			<option value="AZ">Arizona</option>
			<option value="CA">California</option>
			<option value="CO">Colorado</option>
			<option value="CT">Connecticut</option>
			<option value="DC">District of Columbia</option>
			<option value="DE">Delaware</option>
			<option value="FL">Florida</option>
			<option value="GA">Georgia</option>
			<option value="HI">Hawaii</option>
			<option value="IA">Iowa</option>
			<option value="ID">Idaho</option>
			<option value="IL">Illinois</option>
			<option value="IN">Indiana</option>
			<option value="KS">Kansas</option>
			<option value="KY">Kentucky</option>
			<option value="LA">Louisiana</option>
			<option value="MA">Massachusetts</option>
			<option value="MD">Maryland</option>
			<option value="ME">Maine</option>
			<option value="MI">Michigan</option>
			<option value="MN">Minnesota</option>
			<option value="MO">Missouri</option>
			<option value="MS">Mississippi</option>
			<option value="MT">Montana</option>
			<option value="NC">North Carolina</option>
			<option value="ND">North Dakota</option>
			<option value="NE">Nebraska</option>
			<option value="NH">New Hampshire</option>
			<option value="NJ">New Jersey</option>
			<option value="NM">New Mexico</option>
			<option value="NV">Nevada</option>
			<option value="NY">New York</option>
			<option value="OH">Ohio</option>
			<option value="OK">Oklahoma</option>
			<option value="OR">Oregon</option>
			<option value="PA">Pennsylvania</option>
			<option value="PR">Puerto Rico</option>
			<option value="RI">Rhode Island</option>
			<option value="SC">South Carolina</option>
			<option value="SD">South Dakota</option>
			<option value="TN">Tennessee</option>
			<option value="TX">Texas</option>
			<option value="UT">Utah</option>
			<option value="VA">Virginia</option>
			<option value="VT">Vermont</option>
			<option value="WA">Washington</option>
			<option value="WI">Wisconsin</option>
			<option value="WV">West Virginia</option>
			<option value="WY">Wyoming</option>
		</select>`);
    } else {
      console.log("hit the else");
      $(".searchBarDiv").html(`
		<input id="userFilter" type="text" class="search-input form-control" placeholder="Search">`);
    }
  });
  $("#reset-button").on("click", function() {
    $(".individual-result").each(function(index) {
      $(this).show();
    });
  });
  $("#searchBtn").on("click", function() {
    var dropFilter;
    var userFilter;
    dropFilter = $("#drop-down-search").val().trim();
    userFilter = $("#userFilter").val().trim();
    console.log(dropFilter + " " + userFilter);
    if (dropFilter === "") {} else {
      $(".individual-result").each(function(index) {
        var divResult;
        console.log(this);
        // THIS IS THE QUESTION- how can we targe the h3 w/i a div and get the value
        if (dropFilter === "city" || dropFilter === "state") {
          divResult = $(this).children("#searchDiv").children('#location').children('#' + dropFilter).html().trim();
        } else {
          divResult = $(this).children("#searchDiv").children('#' + dropFilter).html().trim();
        }
        if (divResult.toLowerCase() !== userFilter.toLowerCase()) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    }
  });
});
