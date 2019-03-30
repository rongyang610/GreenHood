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

### Logo
Use green arrow logos
Considering:
https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwigweHxu6LhAhXsct8KHacCC50QjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F417286721711738709%2F&psig=AOvVaw3f-1igpPhTizrhFE-V-j1V&ust=1553781008607302

http://www.polleverywhere.co/green-arrow-logo/green-arrow-logo-green-arrow-art-emblem-arrow-t-shirt-teepublic/


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