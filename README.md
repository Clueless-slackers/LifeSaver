# LifeSaver

## Elevator Pitch: May the Safe Zone be with you
      -Built With: CSS, Javascripts, HTML, Json

## The Team: Ifte Ahmed, Darren Zhang, Eduardo Escemilla, Claudia Figueroa

## Here’s the Whole Story: 
Upon hearing our Hackathon’s challenges, we knew we wanted to focus on our community. We decided to center around the safety of our fellow New Yorkers, and created an app to do just that. Using Google Maps, the extension tells you whether the streets you are currently walking on are as safe or not. Walking around the streets in our boroughs has its dangers both in day and night. Given that Google Maps is a very popular tool used to find your way around, we decided to create an extension that would import the data from Google Maps, as well as data from the Borough and Precinct Crime Statistics gathered by the New York City Police Department. This data was then used to give the user a report of how “safe” an area may be. Once the user inputs a zip code onto Google Maps, this extension will link this zip code to an area assigned by our set of data, and output using a push notification declaring if it is “safe” or not, according to our records. The way we gathered the data was through the Borough and Precinct Crime Statistics (BPC Stats). From the more than a hundred precincts located in New York, we gathered a representative sample of 30 precincts. We collected representative data for every region as stated by the BPC Statistics (i.e. “Manhattan North”, “Queens South”), and calculated an estimated average for each region. From those averages, we created a final citywide average of number of crimes for the past year. Due to our time limitations and such, we are not accounting for error in this estimate. Since this number is stating the “average” number of crimes across NYC, anything above that number we are considering as an “unsafe zone,” and anything below as a “safe zone”. Moreover, we decided to focus on Queens are our test area.

## If we had more technological experience, as well as more time, our future steps would definitely be:
 -Add more [representative] data to our extension (from the other boroughs)
 -Divide the “safe” zones into intervals rather than a binary choice (ex. “Very dangerous zone”, “mildly dangerous zone”, etc.)
 -Account for the error in this sample (and likely place this interval containing the average and mean error in a ‘neutral’ or ‘neither     safe nor unsafe’ medium)

### Disclaimer:
The information, graphics, and advice presented in this extension are for general educational and entertainment purposes only. We claim no rights on the graphics presented, nor the data used in this extension. Moreover, the information and advice contained in this extension does not and should not be seen as professional advice. It is up to the user to consult with an appropriate professional, and we will not claim responsibility for any actions taken the user. This organization at no point will be liable for any theft, injury, or otherwise risk that may be caused as a result - whether directly or indirectly - by the user. We disclaim all warranties. 
