# README
Hello welcome to GreenHood github :).

## ABOUT
GreenHood, a Robinhood clone, is an online platform that allows an individual to invest in cryptocurrency without paying fees or commissions.

## APIS 
### Coin Graphs
https://min-api.cryptocompare.com/
http://recharts.org/en-US/

### Cryptocurrency News
google news

###Bugs
Issue: Page was rendering errors from prev page.
Solution: Wrote a action creator clearError to clear the error when it renders to a new page.

Issue: Couldn't upload to heroku because of jpg.
Solution: had named my logo logo.jpeg instead of logo.jpg

Issue: Navbar was not being 100% width of parent width.
Solution: changed 100% to inherit.

Issue: Navbar was not lining up with contents.
Solution: Created 2 div containers. main container is 100% of screen. And then set the 2nd container to be 1200px that way it will be identical to robinhood.

Issue: Navbar mid-nav when put flex-start it would cover my logo.
Solution: To fix this issue I gave my logo class a margin-right of 70px to get the right positions.

Issue: Couldn't allow user to log in as user or email. It would only take email or only accept username.
Solution: Created a find_by_credentials_email. Then in sessions_controller i allowed the variable to = username or email

Issue: I wanted the database to store the username and email as the way they typed it.
Solution: Added a sql command ".where('lower(email) = ?', email.downcase).first". This avoided making 2 columns in the database

Issue: When Account is clicked,focus, active. Modal box is shown by swapping out css.
Solution: Created a state that had showAcc point to false. If the state of showAcc is false the class will display none otherwise it will just be an empty string. Then added a div nested within the tenary which had a class Modal. 

Issue: Could not render my crypto page for a specific cryptocurrency.
Solution: The reason I couldn't get there is because i didn't have /crypto/:sym, instead I had crypto/:sym

