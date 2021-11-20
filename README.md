# Find Lunch
Find Lunch is a web page written using javascript, html, and css that accesses Yelp's Data using the Yelp Fusion API and renders elements based off of the users location and a variety of optional filters in order to find restaurants surrounding the user.  

Find Lunch is intented to be used within a city and allows users to filter by distance in blocks.  For the purposes of Find Lunch a "block" is defined using the distance of a New York city block which is 264 feet, however the length of blocks can vary from city to city.

## Usage
The Yelp Fusion API does not allow requests directly from the browser, so to get around that a proxy server must be used.  To set up the proxy server to run Find Lunch, go to [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and click "Request Temporary Access to the Server"

## Notices
Find Lunch uses the following resources
- Yelp Fusion API: to access Yelp's data
- Cors-Anywhere: to run the proxy server (https://github.com/Rob--W/cors-anywhere)
- Movable Type Scripts: to calculate the distance between two points of latitude and longitude (https://www.movable-type.co.uk/scripts/latlong.html)

## Contributors
- Andrew Busel
- David Venegas


