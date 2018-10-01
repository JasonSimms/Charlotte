# Project Market Aware
### Installation:
visit the live version on Heroku @ [Market Aware](https://marketaware.herokuapp.com "Live on Heroku")

or clone this repository , cd/charlotte npm install , npm run dev will initiate the parcel bundler and a local running MongoDB is also required.

## Mission:
Mobile friendly delivery of only the most popular financial indicators you need to be in the know concerning a specific stock ticker.

### How to Use:
Visitors can type any valid Stock Symbol into the search bar and brought instantly to the price performance for the last 30 days and a view of some key stats relating to this company.

![alt text](
    https://github.com/JasonSimms/Charlotte/blob/production/src/server/public/appimages/chart1.png
    )

In the "News" tab, visitors can see a few of the latest articles relating to their stock of interest as well as any community messages by visitors to the page.

![alt text](https://github.com/JasonSimms/Charlotte/blob/production/src/server/public/appimages/News1.png)


In the "Advisor" tab, an AI will evaluate several performance charactertics of a stock and return an outlook.
Also included are current options prices and open interest.

![alt text](https://github.com/JasonSimms/Charlotte/blob/production/src/server/public/appimages/Advisor.png)





### How it's done:

Big Thanks to IEX for providing market API access.

When a user creates a search, market data is retrieved from IEX and stored in the React APPs state.  If it is the first time this symbol has been searched, the server will create a Mongo Ticker instance including relavant information about this stock and prepare a platform for users to leave comments.

The users last query is stored in local storage to be used in the case of any page refreshes, therefore offering us fresh data every time the page is renewed.

When the "Advisor" tab is selected, further Financial data concerning options and earnings is retrieved and add to a client side calculator returning an evalutation on price momentum of this stock."

Serverside events: 
..* All search history is tracked by users and added to each stock symbol for use in displaying visitor interests.
..* Comments are appended to each 'Ticker' Model as well and available only when logged in.
..* Earnings Data is stored on each query server side for later analysis.


![alt text](https://github.com/JasonSimms/Charlotte/blob/production/src/server/public/appimages/Package.png)
![alt text](https://github.com/JasonSimms/Charlotte/blob/production/src/server/public/appimages/dependencies.png)

