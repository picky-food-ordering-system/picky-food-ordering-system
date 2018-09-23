function BestResto(){
	var url = "https://www.google.com/maps/search/Best Restaurants";
	window.location.replace(url);
}
function Nearby(){
	var url = "https://www.google.com/maps/search/Nearby Restaurants";
	window.location.replace(url);
}
function MapLoad(){
	var query = document.getElementById('search').value;
	var url = "https://www.google.com/maps/search/" + query + " Restaurants";
	window.location.replace(url);
}
