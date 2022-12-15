# NFT-MINTER (Project4 for Class CS5610)
This website/app is designed for people who want to Mint NFT.
By clicking the mint button In home page, you can choose to mint 1 to 3 NFTs. Its value is initially set to 0.001 ETH.
After you have selected it, you can click the "mint for 0.001 ETH" button to connect to your mint Coinbase wallet,
Ledger ect... Then you can confirm the purchase and put it in your wallet. If you don't have these wallets, pressing
the mint button will also display your unique fakeUsername on the page, as well as your own unique id, and the time
you minted the nft. This result will then be added to the history below, and you can modify or delete the history by
clicking UpdateName button and Delete button. Communication page is designed for people who want to leave comments
You can input your comments in the input box below, after type your name and comments, Click "add comment" button will add your comments
into our databasem, and render in the history area below.

## Project Objective
A NFT app built with React, Node.js, Express.js, MongoDB, HTML, CSS, Javascript.

## Deployment URL
If the history section does not show any information, wait few minites and refresh the website.(server may need sometime to wake up)
- [FrontEnd](https://bucolic-profiterole-0c295a.netlify.app/)

## Screenshots
### Over 1000 datas in both Mongo Atlas database collection!
<img width="1102" alt="image" src="https://user-images.githubusercontent.com/89007851/203237216-77015858-1e2d-4af9-9ef7-a98bb13b260d.png">
<img width="1102" alt="image" src="https://user-images.githubusercontent.com/89007851/203237270-d98119af-6a00-4811-81c4-4de665525264.png">


### Home Page
<img width="1333" alt="image" src="https://user-images.githubusercontent.com/105685880/207425419-10a959f2-a7bf-4a4c-92c3-506c22418860.png">


### Communcation Page
<img width="1350" alt="image" src="https://user-images.githubusercontent.com/105685880/207425858-f07960f0-44c1-486d-9987-ab4aa0cb57da.png">


### Rubric Page
<img width="1329" alt="image" src="https://user-images.githubusercontent.com/105685880/207425318-0e610468-f51a-42b4-917b-5fc0b571d9e3.png">


## Instructions to build
1. Git clone or zip download
2. Run ```cd Project3/server/``` enter the server folder
3. Run ```npm install``` install moduals
4. Run ```node app.js``` to run server
5. Open a new terminal window
6. Run ```cd Project3/client/``` enter the client folder
7. Run ```npm install``` install moduals
8. Run ```npm start``` to run client
9. If the history section does not show any information, wait few minites and refresh the website.(server may need some time to wakeup)

## Usebility study report
- [Usebility study report](https://docs.google.com/document/d/1avBPzf1-DpNkAKBpkrBQVxmLXN0LzPzV/edit#)
## Google Slides
- [Google Slides](https://docs.google.com/presentation/d/1t6gbXV_PBqIE8VexRVqpFbyhdeIf_644TrK2JaYOXWI/edit#slide=id.g1b7950a4759_0_195)

## Design Document
- [Design Document](https://docs.google.com/document/d/1uNK3ECWk8xoj4BodiImZQQQlueagjTNy96eOCNDeHBw/edit)

## Video
- [GaoxiangZhang&MinghsiuLee](https://youtu.be/gbM_RVxbr8g](https://youtu.be/hNJ-1twfiPQ)

## Authors
- Minghshu Lee
- Gaoxiang Zhang


## Class Link
https://johnguerra.co/classes/webDevelopment_fall_2022/

Code Review by Xingjian Bi
For your website:
In general, I like your website design especially your title had header font, it matches the NFT topic so much.
For the functionalities, it’s good to have a login feature where users can only delete NFT that they created. I don’t want others delete my NFT. 
It’s great that I can see my NFT after installing some browser extensions, but it’s better to have a redirected link and see the NFT directly. 
Also the update function for NFT and comment is a little bugged, even I click cancel the content will be null. 
When I trying to click something on rubric page, it will redirect me to a 404 page.

For your code: 
Your code did a great job separating the frontend and backend, but it’s kind of confusing why there’s a frontend folder in your back end and have an another index.html there. 
For your each component’s css files, it’s better to put into a style folder. GitHub sort files by name, and it’s kind of hard to find css files among other js files. 
I like the way you using props to pass functions in your newCommu components. 

